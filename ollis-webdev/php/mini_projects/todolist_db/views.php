<?php
declare(strict_types=1);

function render_todo_list($todos)
{
    if ($todos): ?>
        <ul class="list-group" id="todos">
        <?php foreach ($todos as $todo): ?>
            <li class="list-group-item">
            <a class="badge" href="index.php?action=delete_todo&id=<?= $todo['id']; ?>">X</a>
            <h4 class="title list-group-item-heading"><?= htmlentities($todo['title']) ?></h4>
                <div class="description list-group-item-text"><?= nl2br(htmlentities($todo['description'])) ?></div>
            </li>
        <?php endforeach; ?>
        </ul>
    <?php else : ?>
        <div class="error">Yay! Keine Todos.</div>        
    <?php endif;
}

function render_add_todo() 
{ ?>
    <div id="add-todo">
        <h2>Add new todo</h2>
        <form action="index.php?action=add_todo" method="post">
            <div class="form-group">
                <label for="title"> Title</label>
                <input type="text" class="form-control" name="title" id="title" />
            </div>
            <div class="form-group">
                <label for="description"> Description</label>
                <textarea class="form-control" name="description" id="description" rows="5" cols="35"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" name="add_todo" id="add_todo">Add new todo</button>
        </form>
    </div>
<?php
}

function render_message(
    string $message,
    string $formatstring = '<div class="alert alert-info">%s</div>'
) : string
{
    return sprintf($formatstring, htmlentities($message));
}