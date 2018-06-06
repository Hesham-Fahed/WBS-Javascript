<?php declare(strict_types=1);
session_start();

// MVC

// Controller - Reagiert auf Request, nimmt sich Daten und gibt die Daten an das "Modul" zur Ausgabe weiter
// Model - Verwaltet die Daten und liefert sie aus
// View - Bekommt Daten und baut HTML
require_once "model.php";
require_once "view.php";

// $_SESSION['todos'] = [
//     [
//         'id' => microtime(),
//         'title' => 'Get Milk',
//         'description' => 'Milk is good for you'
//     ],
//     [
//         'id' => microtime(),
//         'title' => 'Get Choclate',
//         'description' => 'Choclate is good for you'
//     ]
// ];

// session_unset();
// session_destroy();
?>

<nav>
    <a href="index.php">Todo List</a>
    <a href="index.php?action=show_add_todo_form">Add Todo</a>
</nav>

<?php

// unset($_SESSION['todos'][1]);
// array_splice($_SESSION['todos'], 1, 1);

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

switch($action):
    case 'show_add_todo_form':
        render_add_todo_form();
        break;

    case 'add_todo':
        $title = $_POST['title'] ?? 'empty title';
        $description = $_POST['description'] ?? 'empty description';
        store_todo($title, $description);
        $todos = get_todos();
        render_todo_list($todos);
        break;
    
    case 'delete':
        $delete_index = get_index('id');
        delete_todo($delete_index);
        $todos = get_todos();
        render_todo_list($todos);
        break;

    case 'change':
        $change_index = get_index('id');
        render_change_todo_form($change_index);
        break;

    case 'add_change':
        // Daten aus der GET-... und POST- zur Weiterverarbeitung sammeln
        $change_index = $_GET['change_index'];
        $title = $_POST['title'] ?? 'empty title';
        $description = $_POST['description'] ?? 'empty description';
        
        change_todo($title, $description, $change_index);
        $todos = get_todos();
        render_todo_list($todos);
        break;

    default:
        $todos = get_todos();
        render_todo_list($todos);    
endswitch;


// xCreate
// xRead
// Update
// Delete erst mit PHP: dann evtl mit Ajax

