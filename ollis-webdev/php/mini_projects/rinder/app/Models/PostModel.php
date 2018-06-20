<?php

require_once PATH . 'Core/Db.php';
require_once PATH . 'Core/Model.php';
require_once PATH . 'Domain/Post.php';


class PostModel extends Model
{
    /**
     * Get a single post by id
     *
     * @param int $id
     * @return array
     */
    public function getPost(int $id) : array
    {
        $sql = "SELECT * FROM `posts` WHERE `id`=$id;";

        $result = $this->db->query($sql);

        if ($result) {
            return $result->fetch_assoc();
        }
        $result->free();

        return [];
    }

    /**
     * Get an array of all Posts of a user/several users
     * by a given userId or an array of userIds
     *
     * @param mixed $user
     * @return array
     */
    public function getPosts($user) : array
    {
        $where = (is_array($user))
            ? " IN (" . join(', ', $user) . ")"
            : " = " . intval($user);

$sql = <<<QUERY
SELECT P.*, U.screenname, U.portrait
FROM `posts` P
JOIN `users` U ON U.id=P.user_id
WHERE `user_id` $where
ORDER BY `created` DESC
QUERY;

        $result = $this->db->query($sql);
        $posts = [];

        if ($result) {
            while ($row = $result->fetch_object('Post'))  {
                $posts[] = $row;
            }
            $result->free();
        }
        return $posts;
    }

    // Add a Post to the Database
    // You have to provide a post $title, $content and
    // the $userId of the user who wrote the post
    // created and modified are automatically set to "now()"
    public function save(
        string $title,
        string $content,
        int $userId
    ) : bool
    {
        $title = $this->db->escape_string($title);
        $content = $this->db->escape_string($content);

        $sql = <<<QUERY
INSERT INTO `posts`
(`title`,  `content`, `created`, `modified`, `user_id`) VALUES 
('$title', '$content', NOW(),     NOW(),     $userId)
QUERY;

        return $this->db->query($sql);        
    }

    // Delete the Post with the given postId from the Database
    public function delete(int $postId) : bool
    {
        $postId = intval($postId);

        $sql = "DELETE FROM `posts` WHERE `id`=$postId";

        return $this->db->query($sql);
    }
}
