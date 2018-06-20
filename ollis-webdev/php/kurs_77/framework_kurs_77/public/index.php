<?php declare(strict_types=1);

require_once __DIR__.'/../../../vendor/autoload.php';
require_once __DIR__.'/../config/bootstrap.php';

require_once PATH . 'Core/Request.php';
require_once PATH . 'Core/Router.php';

$routes = require_once __DIR__.'/../config/routes.php';

$router = new Router($routes);
$response = $router->handle(new Request);

echo $response;
