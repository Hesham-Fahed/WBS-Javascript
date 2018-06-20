<?php declare(strict_types=1); ?>
<!DOCTYPE html> 
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Todo List</title>
    <meta name="description" content="Todo List Beispiel">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>

<body>
<div class="container">

<ul class="nav nav-pills">
    <li>
        <a class="nav-link" href="<?= $_SERVER["SCRIPT_NAME"]; ?>">Todo List</a>
    </li>
    <li>
        <a class="nav-link" href="<?= $_SERVER["SCRIPT_NAME"] . "?action=add_todo"; ?>">Add Todo</a>
    </li>
</ul>

<?php
    require_once 'TodoList.php';
    require_once 'views.php';

    $action = $_GET['action'] ?? '';
    $method = $_SERVER['REQUEST_METHOD'];

    $tl = new TodoList();

    switch ($action):

        case 'add_todo':
            if($method === 'POST' ) {
                $success = $tl->addTodo($_POST['title'], $_POST['description']);
                $message = ($success) ? 'Todo Added' : 'There was a problem!';
                render_message($message);
                $todos = $tl->getAllTodos();
                render_todo_list($todos);
            }
            else {
                render_add_todo();
            }
            break;

        case 'delete_todo':
            $success = $tl->deleteTodo($_GET['id']);
            $message = ($success) ? 'Todo Deleted' : 'There was a problem!';
            render_message($message);
            $todos = $tl->getAllTodos();
            render_todo_list($todos);
            break;

        default:
            $todos = $tl->getAllTodos();
            render_todo_list($todos);
    endswitch;
?>

</div> <!-- .container -->

</body>
</html>