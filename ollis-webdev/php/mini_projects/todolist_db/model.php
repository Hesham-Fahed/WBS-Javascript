<?php declare(strict_types=1);

function get_db()
{
    $db = mysqli_connect("127.0.0.1", "dev",  "dev",   "wbs",  3306);

    if (mysqli_connect_errno()) {
        die('<div>Could not connect to database.</div>' . mysqli_connect_error());
    }

    mysqli_set_charset($db, 'utf8');

    return $db;
}

function get_todos($db) : array
{
    $sql = "SELECT `id`, `title`, `description` FROM `todos`";
    $result = mysqli_query($db, $sql);
    $data = [];

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        mysqli_free_result($result);
    }

    return $data;
}

function add_todo($db, string $title, string $description) : bool
{
    $title = mysqli_real_escape_string($db, $title);
    $description = mysqli_real_escape_string($db, $description);

    $sql = "INSERT INTO todos (`title`, `description`) VALUES ('$title', '$description');";
    
    return mysqli_query($db, $sql);
}

function delete_todo($db, string $id) : bool
{
    $id = mysqli_real_escape_string($db, $id);
    
    $sql = "DELETE FROM todos WHERE id=$id";

    return mysqli_query($db, $sql);
}
