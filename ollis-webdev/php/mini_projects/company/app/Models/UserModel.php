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

            $sql = "SELECT * FROM `users` WHERE `id`='$id'";
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
     * @param $auth_token
     * @return bool
     */
    public function createUser(
        string $email,
        string $password
    ) : bool
    {
        $email = $this->db->escape_string($email);
        $password = $this->db->escape_string($password);

        $sql = "INSERT INTO `users` "
            . "(`email`,  `password`) VALUES "
            . "('$email', '$password')";
        
        return $this->db->query($sql);
    }
}
