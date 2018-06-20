<?php

require_once "TodoList.php";

$method = $_SERVER['REQUEST_METHOD'] ?? "";

switch ($method):
    case "GET":
        $response = [ "response" => "It's a GET" ];
        break;

    case "POST":
        $response = [ "response" => "It's a POST" ];
        $data = json_decode(file_get_contents('php://input'), true);
        
        $tl = new TodoList();
        $tl->addTodo($data['title'], $data['description']);
        break;
    
    case "DELETE":
        $response = [ "response" => "It's a DELETE" ];
        $data = json_decode(file_get_contents('php://input'), true);

        $tl = new TodoList();
        $tl->deleteTodo($data['id']);
        break;

endswitch;

echo json_encode($response);