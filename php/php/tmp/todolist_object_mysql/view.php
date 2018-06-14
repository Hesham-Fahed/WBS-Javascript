<?php declare(strict_types=1);

class Output {

    function render_todo_list(array $todos)
    {
        echo "<ul>";
        foreach($todos as $todo) : ?>
            <li>
                <h3><?= $todo['title']; ?></h3>
                <p><?= $todo['description']; ?></p>
            </li>
        <?php
        endforeach;
        echo "</ul>";
    }

    function render_add_todo_form()
    { ?>
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

}