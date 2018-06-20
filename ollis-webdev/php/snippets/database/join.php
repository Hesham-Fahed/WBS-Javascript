<?php
declare(strict_types=1);

$db_config = include("./config.php");

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


// (LEFT INNER) JOIN = INTERSECTION XXX???
$sql = ";";
$result = $db->query($sql);

if ($result) {
    while ($ds = $result->fetch_object()){
        printf('username: %s | email: %s<br>', $ds->username, $ds->email);
    }
    $result->free();
}
else {
    echo 'Oops. The query didn\' work.';
}


// LEFT OUTER JOIN = UNION XXXXX


// RIGHT INNER JOIN


// RIGHT OUTER JOIN


$db->close();