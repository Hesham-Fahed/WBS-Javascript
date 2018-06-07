<?php

// GET_TODOs /////////////////////////////////////
function get_todos()
{
    return $_SESSION['todos'];
}

// STORE_TODO /////////////////////////////////////
function store_todo(string $title, string $description)
{
    // $length = count($_SESSION['todos']);
    // $next_id = $_SESSION['todos'][$length - 1]['id'] + 1;

    $_SESSION['todos'][] = [
        'id' => uniqid(microtime(), true),
        'title' => $title,
        'description' => $description
    ];
}

// GET_INDEX /////////////////////////////////////
// Sucht den Index eines Arrays in einem mehrdimensionalen Array, anhand eines Elements
function get_index_by($key) {
    // übergibt den Wert des gesuchten Elements
    $value = $_GET[$key];
    var_dump($_SESSION['todos']);
    echo "<hr>";
    foreach($_SESSION['todos'] as $index => $todo) {
        var_dump($todo[$key]);
        // vergleicht den Wert der Arrays mit dem Suchwert
        if($todo[$key] === $value) {
            // Gibt den IndexWert des Übergeordneten Arrays zurück
            return $index;
        }
    }
}

// DELETE /////////////////////////////////////
function delete_todo($delete_index) {
    // var_dump($_SESSION['todos'], $delete_index, 1);
    array_splice($_SESSION['todos'], $delete_index, 1);
}

// CHANGE /////////////////////////////////////
function change_todo($title, $description, $change_index) {
    // über $change_index wird das Array gefunden, 
    // das geändert werden soll,
    // in diesem Array werden die Einzelnen Elemente, 
    // die im render_change_todo_form geändert wurdne, angepasst.
    $_SESSION['todos'][$change_index]['title'] = $title;
    $_SESSION['todos'][$change_index]['description'] = $description;
}
