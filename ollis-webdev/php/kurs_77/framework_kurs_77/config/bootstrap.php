<?php declare(strict_types=1);

// Bootstrap the framework
$app_path = substr(__DIR__, 0, strrpos(__DIR__, DIRECTORY_SEPARATOR)) . '/app/';
define('PATH', $app_path);

ini_set('session.cookie_httponly', '1');
session_start();
