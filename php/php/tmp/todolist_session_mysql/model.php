<?php declare(strict_types=1);

function connect()
{
    $config = require 'db.conf.php';

    $db = mysqli_connect(
        $config['server'],
        $config['username'],
        $config['password'],
        $config['database'],
        $config['port']
    );

    if (!$db) {
        throw new Exception('DB Error: ' . mysqli_error($db));
    }

    mysqli_set_charset($db, 'utf8');

    return $db;
}

function get_todos($db)
{
    $sql = "SELECT id, title, description FROM todos";

    $result = mysqli_query($db, $sql);

    $todos = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $todos[] = $row;
    }

    return $todos;
}

function store_todo($db, string $title, string $description) : bool
{
    $title = mysqli_escape_string($db, $title);
    $description = mysqli_escape_string($db, $description);    

    $sql = <<<QUERY
INSERT INTO `todos`
       (`id`, `title`, `description`)
VALUES (NULL, '$title', '$description');
QUERY;

    return mysqli_query($db, $sql);
}


db.conf.php


