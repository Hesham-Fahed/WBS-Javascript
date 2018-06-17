<?php declare(strict_types=1);

require_once __DIR__.'/../../../vendor/autoload.php';
require_once __DIR__.'/../config/bootstrap.php';

// require stuff
require_once PATH . 'Core/Request.php';
require_once PATH . 'Core/Router.php';

$routes = require_once __DIR__.'/../config/routes.php';
// echo "<hr>PATH: " . PATH . "<hr>";
// echo "<hr>DIR: " . __DIR__ . "<hr>";

$router = new Router($routes);
$response = $router->handle(new Request);

echo $response;
//////////////////////////////////////
// TODO: testing        
// echo $confParams;
// var_dump($response);
//////////////////////////////////////
// TODO: move DB config this to a config file
