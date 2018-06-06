<?php

function render_todo_list(array $todos) {
    echo "<ul>";
    foreach($todos as $todo) : ?>
        <li>
            <h3><?= $todo['title']; ?></h3>
            <p><?= $todo['description']; ?></p>
            <a href="index.php?id=<?= $todo['id'] ?>&change=true&action=change">Ändern</a>
            <a href="index.php?id=<?= $todo['id'] ?>&action=delete">Löschen</a>
        </li>
    <?php
    endforeach;
    echo "</ul>";
}

function render_add_todo_form() { 
    ?>
    <form action="index.php?action=add_todo" method="post">

        <label for="title">Title</label>
        <input type="text" name="title" id="title">
        <br>
        <label for="description">Description</label>
        <input type="text" name="description" id="description">

        <button type="submit">Add Todo</button>
    </form>
    <?php
}

function render_change_todo_form($change_index) { 
    ?>
    <form action="index.php?action=add_change&change_index=<?= $change_index ?>" method="post">

        <label for="title">Title</label>
        <input type="text" name="title" id="title">
        <br>
        <label for="description">Description</label>
        <input type="text" name="description" id="description">

        <button type="submit">Add Todo</button>
    </form>

    <?php
}
