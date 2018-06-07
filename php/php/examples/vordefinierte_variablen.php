<?php
declare(strict_types=1);

ob_start();

/***************************
 * VORDEFINIERTE VARIABLEN *
 ***************************/
echo "To see PATH_INFO and \$_GET parameters, open an URL like:<br>";
echo "<a href=\"{$_SERVER['SCRIPT_NAME']}/my/path?param=test&value=12\">vordefinierte_variablen.php/my/path?param=test&value=12</a>";
echo "<hr>";

echo "<pre>";
?>
$_SERVER['REQUEST_METHOD'] : <?= $_SERVER['REQUEST_METHOD'] ?> 
print_r($_GET);
<?php
    print_r($_GET);
    echo "<hr>";

?>
setcookie("cookietype", "GimmeChocolate", time()+3600);
print_r($_COOKIE);
<?php
    setcookie("cookietype", "GimmeChocolate", time()+3600);
    print_r($_COOKIE);
    echo "<hr>";

?>
session_start();
$_SESSION['user'] = 'btkid';
$_SESSION['active'] = '1';
print_r($_SESSION);
<?php
    session_start();
    $_SESSION['user'] = 'btkid';
    $_SESSION['active'] = '1';
    print_r($_SESSION);

?>
unset($_SESSION['active']);
print_r($_SESSION);
<?php
    unset($_SESSION['active']);
    print_r($_SESSION);

?>
session_unset();
session_destroy();
print_r($_SESSION);
<?php
    session_unset();
    session_destroy();
    print_r($_SESSION);

?>
File: 09_vordefinierte_variablen.php
PHP_SELF: <?= $_SERVER['PHP_SELF'] ?> 
DOCUMENT_ROOT: <?= $_SERVER['DOCUMENT_ROOT'] ?> 
SCRIPT_FILENAME: <?= $_SERVER['SCRIPT_FILENAME'] ?> 
SCRIPT_NAME: <?= $_SERVER['SCRIPT_NAME'] ?> 
PATH_INFO: <?= $_SERVER['PATH_INFO'] ?> 
__FILE__: <?= __FILE__ ?> 
__DIR__: <?= __DIR__ ?> 

<hr>

In 09_vordefinierte_variablen.php: include "subfolder/predefvars.php";
<?php
    include "subfolder/predefvars.php";
?>

<hr>

In 09_vordefinierte_variablen.php: include __DIR__ . "/subfolder/predefvars.php";
<?php
    include __DIR__ . "/subfolder/predefvars.php";
?>

</pre>
