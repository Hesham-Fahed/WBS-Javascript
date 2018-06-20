<?php
declare(strict_types=1);

//                  host    username password datanase port
$db = new mysqli("127.0.0.1", "dev",  "dev",   "wbs",  3306);

if ($db->connect_errno) {
    die('<div>Could not connect to Database.</div>' . $db->connect_error);
}

$db->set_charset('utf8');

// Test Query
$sql = "SELECT `title`, `description` FROM `todos`";
$result = $db->query($sql);

// query() gibt entweder ein mysqli_result Objekt zurück, oder false
if ($result) {
    while ($ds = $result->fetch_object()){
        printf('title: %s | description: %s<br>', $ds->title, $ds->description);
    }
    $result->free();
}
else {
    echo 'Oops. The query did not work.';
}

$db->close();
