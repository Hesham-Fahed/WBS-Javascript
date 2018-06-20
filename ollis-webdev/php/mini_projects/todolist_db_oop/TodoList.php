<?php

class TodoList
{
    private $db;

    public function __construct()
    {
        $db_config = include "./config.php" ;

        $this->db = new mysqli(
            $db_config['host'],
            $db_config['username'],
            $db_config['password'],
            $db_config['database'],
            $db_config['port']
        );
        $this->db->set_charset($db_config['charset']);

        if (!$this->db) {
            throw new Exception('DB Error', $db->errno);
        }
    }

    public function __destruct()
    {
        $this->db->close();
    }

    public function getTodo($id) : array
    {
        $id = intval($id);
        $sql = "SELECT `id`, `title`, `description` FROM `todos` WHERE `id` = $id";
        $result = $this->db->query($sql);

        $todo = [];

        if ($result) {
            while ($ds = $result->fetch_object()) {
                $todo = array(
                    'id' => $ds->id,
                    'title' => $ds->title,
                    'description' => $ds->description
                );
            }
        $result->free();
        }
        else {
            throw new Exception("Select error!");
        }

        return $todo;
    }

    public function getAllTodos() : array
    {
        $sql = "SELECT `id`, `title`, `description` FROM `todos`";
        $result = $this->db->query($sql);
        $todos = [];

        if ($result)
        {
            while ($ds = $result->fetch_object()) {
                $todos[] = array(
                    'id' => $ds->id,
                    'title' => $ds->title,
                    'description' => $ds->description
                );
            }
        $result->free();
        }
        else {
            throw new Exception("Select error!");
        }
        
        return $todos;
    }

    public function addTodo(string $title, string $description) : bool
    {
        $title = $this->db->escape_string($title);
        $description = $this->db->escape_string($description);
        $sql = "INSERT INTO todos (`title`, `description`) VALUES ('$title', '$description');";
        $result = $this->db->query($sql);
        return $result;
    }

    public function deleteTodo(string $id) : bool
    {
        $id = intval($id);
        $sql = "DELETE FROM todos WHERE id='$id'";
        $result = $this->db->query($sql);
        return $result;
    }
}
