<?php
declare(strict_types=1);

// Bootstrap the Model
// Bootstrappen bedeutet, etwas in einen benutzbaren Zustand zu bringen,
// in diesem Fall also, die Session zu initialisieren und konfigurieren.

// Session-Lifetime setzen
ini_set('session.gc_maxlifetime', '10800');
session_set_cookie_params(10800);

session_start();

if (!isset($_SESSION['todos']) || !is_array($_SESSION['todos'])) {
    $_SESSION['todos'] = [];
}

// todos Array ausgeben
// var_dump($_SESSION['todos']);

// Alle Daten der Session löschen:    
// session_destroy();

// Zwei Test-Todos in die Session einfügen:
// $_SESSION['todos'] = array(
//     array( 'id' => 1, 'title' => 'Buy Cheese', 'description' => 'Cheese is beautiful!'),
//     array( 'id' => 2, 'title' => 'Message Pinkie', 'description' => 'Plan for world domination under way.')
// );

function get_todos() : array
{
    return $_SESSION['todos'];
}

function add_todo(string $title, string $description) : string
{
    $id = microtime();
    $_SESSION['todos'][] = array(
        'id' => $id,
        'title' => $title,
        'description' => $description
    );
    return $id;
}

function delete_todo(string $id) : bool
{
    $length = count($_SESSION['todos']);

    for ($i = 0; $i < $length; $i++) {
        if ($_SESSION['todos'][$i]['id'] == $id) {
            array_splice($_SESSION['todos'], $i, 1);
            return true;
        }
    }

    return false;
}