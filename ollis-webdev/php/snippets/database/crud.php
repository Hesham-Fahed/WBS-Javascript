<?php
declare(strict_types=1);

/**********************************
* CRUD: Create Read Update Delete *
**********************************/

$db_config = include('./config.php');

$db = new mysqli(
    $db_config['host'],
    $db_config['username'],
    $db_config['password'],
    $db_config['database'],
    $db_config['port']
);

$db->set_charset($db_config['charset']);

if ($db->connect_errno){
    die('<div>Could not connect to Database.</div>' . $db->connect_error);
}

// READ //
//////////
echo '<h2>Initial Content</h2>';

function print_all_todos($db)
{
    $sql = "SELECT `title`, `description` FROM `todos`";
    $result = $db->query($sql);
    if ($result) {
        while ($ds = $result->fetch_object()) {
            echo "<div>$ds->title : $ds->description</div>";
        }
    $result->free();
    }
}

print_all_todos($db);

// CREATE //
////////////
echo "<h2>Create a todo</h2>";

$sql = "INSERT INTO todos (`title`, `description`) VALUES ('New Todo', 'Brand new!!!');";
$result = $db->query($sql);
if (!$result) {
    echo 'Oops. The query didn\' work.';
}
print_all_todos($db);


// UPDATE //
////////////
echo "<h2>Update a Todo</h2>";

$sql = "UPDATE todos SET `description`='Updated!!!' WHERE title='New Todo'";
$result = $db->query($sql);
if (!$result) {
    echo 'Oops. The query didn\' work.';
}
print_all_todos($db);


// DELETE //
////////////
echo "<h2>Delete</h2>";
$sql = "DELETE FROM todos WHERE title='New Todo'";
$result = $db->query($sql);

if (!$result) {
    echo 'Oops. The query didn\' work.';
}
print_all_todos($db);


$db->close();