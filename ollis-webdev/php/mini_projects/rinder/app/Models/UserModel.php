<?php declare(strict_types=1);

require_once PATH . 'Core/Model.php';

class UserModel extends Model
{
    /**
     * Get a user by email or id.
     *
     * @param string|int
     * @return array|void
     */
    public function getUser($identifier) {
        if (is_string($identifier)) {
            $email = $this->db->escape_string($identifier);

            $sql = "SELECT * FROM `users` WHERE `email`='$email'";
        }

        else {
            $id = intval($identifier);

            $sql = "SELECT * FROM `users` WHERE `id`=$id";
        }

        if ($this->db->errno) {
            throw new Exception("DB Query error: " . $this->db->error, $this->db->errno);
        }

        $result = $this->db->query($sql);

        if ($result) {
            $user = $result->fetch_assoc();
            $result->free();

            return $user;
        }
    }


    /**
     * Create a new user in the database.
     * 
     * @param $email
     * @param $password
     * @param $screenname,
     * @param $portrait,
     * @param $gender
     * @return bool
     */
    public function createUser(
        string $email,
        string $password,
        string $screenname,
        string $portrait,
        int $gender
    ) : bool
    {
        $email = $this->db->escape_string($email);
        $password = $this->db->escape_string($password);
        $screenname = $this->db->escape_string($screenname);
        $gender = intval($gender);

        $sql = "INSERT INTO `users` "
        . "(`email`,  `password`,  `screenname`,  `portrait`, `gender`, `registered`) VALUES "
        . "('$email', '$password', '$screenname', '$portrait', $gender,  NOW())";

        return $this->db->query($sql);
    }

    // Returns an array of all users from the database
    // who have a pending friend request by another user
    // If there are none, it returns an empty array
    public function getFriendRequests(int $userId) : array
    {
        $userId = intval($userId);

        $sql = <<<QUERY
SELECT U.*
FROM friend_requests FR
INNER JOIN users U ON FR.user1=U.id
WHERE user2=$userId
QUERY;
        $result = $this->db->query($sql);

        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $requests[] = $row;
            }
        $result->free();
        }
        
        return $requests ?? [];
    }

    // Adds a new friend request into the database
    // The function wants user IDs, not User objects
    // Friend requests are "directed", so it's always
    // user $from who requests friendship from user $to
    // Returns true on success, false on failure
    public function addRequest(int $fromId, int $toId) : bool
    {
        $sql = "INSERT INTO `friend_requests` (`user1`,  `user2`) VALUES ($fromId, $toId)";
        return $this->db->query($sql);
    }

    // Deletes a friendship request from the Database
    // $from and $to must be in the same order as the addRequest
    // Returns true on success, false on failure
    public function deleteRequest(int $fromId, int $toId) : bool
    {
        $sql = "DELETE FROM `friend_requests` WHERE `user1`=$fromId AND `user2`=$toId";
        return $this->db->query($sql);
    }

    // Returns all friends of User with given userId
    // as an array of Users
    public function getFriends(int $userId) : array
    {
        $userId = intval($userId);

        $sql = <<<QUERY
SELECT *
FROM (
    	SELECT user1 FROM friends WHERE user2=$userId
    	UNION
    	SELECT user2 FROM friends WHERE user1=$userId
) F JOIN users U ON F.user1=U.id
ORDER BY U.screenname ASC
QUERY;
        $result = $this->db->query($sql);
        
        $friends = [];
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $friends[] = $row;
            }

        $result->free();
        }

        return $friends;
    }


    public function isFriend(int $userId1, int $userId2) : bool
    {

        $sql = <<<QUERY
SELECT * FROM friends WHERE
    user1=$userId1 AND user2=$userId2
    OR
    user1=$userId2 AND user2=$userId1
QUERY;
        $result = $this->db->query($sql);

        return ($result->num_rows) ? true : false;
    }


    // Returns all Users who are not friends of User $userId 
    // as an array of User IDs
    public function getNonFriendIds(int $userId) : array
    {
        $userId = intval($userId);

        $sql = <<<QUERY
SELECT id
FROM (
    	SELECT user1 FROM friends WHERE user2=$userId
    	UNION
        SELECT user2 FROM friends WHERE user1=$userId
        UNION
        SELECT user1 FROM friend_requests WHERE user2=$userId
        UNION
        SELECT user2 FROM friend_requests WHERE user1=$userId
) F
RIGHT JOIN users U ON F.user1=U.id
WHERE F.user1 IS NULL AND U.id!=$userId
ORDER BY U.email ASC
LIMIT 50
QUERY;
        $result = $this->db->query($sql);

        $nonFriends = [];
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $nonFriends[] = (int) $row['id'];
            }
        $result->free();
        }

        return $nonFriends;
    }

    // Adds a friendship into the Database
    // Friendships are bidirectional (unlike friend requests)
    // Returns true on success, false on failure
    public function addFriend(int $userId1, int $userId2) : bool
    {
        $sql = "INSERT INTO `friends` (`user1`,  `user2`) VALUES ($userId1, $userId2)";
        return $this->db->query($sql);       
    }

    // Deletes User $userId from the Database
    // Returns true on success, false on failure
    // This doesn't really work as we might want
    // to delete all the user's Posts first.
    public function delete(int $userId) : bool
    {
        $sql = "DELETE FROM `users` WHERE `id`=$userId";
        return $db->query($sql);
    }

    // Updates a User's data in the Database
    // Takes a User object as Parameter
    // Returns true on success, false on failure
    public function update(User $user) : bool
    {
        $screenname = $this->db->escape_string($user->getScreenname());

        $sql = <<<QUERY
UPDATE `users` SET
    `email`="{$user->getEmail()}",
    `password`="{$user->getPassword()}",
    `screenname`="$screenname",
    `portrait`="{$user->getPortrait()}",
    `gender`={$user->getGenderId()},
    `registered`="{$user->getRegistered()}",
WHERE `id` = {$user->getId()};
QUERY;
        return $this->db->query($sql);
    }
}
