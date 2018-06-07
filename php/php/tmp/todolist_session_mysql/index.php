index.php
<?php declare(strict_types=1);

require_once "model.php";
require_once "view.php";
?>

<nav>
    <a href="index.php">Todo List</a>
    <a href="index.php?action=show_add_todo_form">Add Todo</a>
</nav>

<?php

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

$db = connect();

switch($action):
    case 'show_add_todo_form':
        render_add_todo_form();
        break;

    case 'add_todo':
        $title = $_POST['title'] ?? 'empty title';
        $description = $_POST['description'] ?? 'empty description';
        store_todo($db, $title, $description);
        $todos = get_todos($db);
        render_todo_list($todos);
        break;

    default:
        $todos = get_todos($db);
        render_todo_list($todos);    
endswitch;

