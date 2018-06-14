<?php declare(strict_types=1);

require_once __DIR__.'/../../../vendor/autoload.php';
// strrpos findet das letzte Vorkommen eines Teilstrings
$app_path = substr(__DIR__, 0, strrpos(__DIR__, DIRECTORY_SEPARATOR)) . '\app\\';
// echo "<hr>Dir: " . __DIR__ . "<hr>";
define('PATH', $app_path);

// cookie_httponly macht das Cookie nur über HTTP_Protokoll zugänglich. 
// kein zugriff via JS möglich.
ini_set('session.cookie_httponly', '1');
session_start();

// echo "<hr>PATH: " . PATH . "<hr>";
require_once PATH . 'Core/Request.php';
class Router {
    public function handle($r) {
        require PATH . "Controllers/Controller.php";
        $c = new Controller($r);
        return $c->index();
    }
}

$router = new Router;
$response = $router->handle(new Request);

echo $response;