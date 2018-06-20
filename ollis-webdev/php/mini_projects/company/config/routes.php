<?php declare(strict_types=1);

return
[
    'ALL::' => [
        'controller' => 'Location',
        'action' => 'index',
    ],

    'GET::locations' => [
        'controller' => 'Location',
        'action' => 'index',
    ],

    'POST::locations' => [
        'controller' => 'Location',
        'action' => 'store',
        'login' => true
    ],

    'GET::locations/:id/delete' => [
        'controller' => 'Location',
        'action' => 'destroy',
        'params' => [ 'id' => 'number' ],
        'login' => true
    ],

    'GET::departments' => [
        'controller' => 'Department',
        'action' => 'index',
    ],

    'POST::departments' => [
        'controller' => 'Department',
        'action' => 'store',
        'login' => true
    ],

    'GET::departments/:id/delete' => [
        'controller' => 'Department',
        'action' => 'destroy',
        'params' => [ 'id' => 'number' ],
        'login' => true
    ],

    'GET::employees' => [
        'controller' => 'Employee',
        'action' => 'index',
    ],

    'POST::employees' => [
        'controller' => 'Employee',
        'action' => 'store',
        'login' => true
    ],

    'GET::employees/:id/delete' => [
        'controller' => 'Employee',
        'action' => 'destroy',
        'params' => [ 'id' => 'number' ],
        'login' => true
    ],

    'POST::employees/move' => [
        'controller' => 'Employee',
        'action' => 'move',
        'params' => [ 'id' => 'number', 'dept' => 'number' ],
        'login' => true
    ],

    // Authentication & Registration
    'GET::login'     => [ 'controller' => 'Login', 'action' => 'index' ],
    'POST::login'    => [ 'controller' => 'Login', 'action' => 'create' ],
    'GET::logout'    => [ 'controller' => 'Login', 'action' => 'destroy' ],
    'GET::register'  => [ 'controller' => 'Registration', 'action' => 'index' ],
    'POST::register' => [ 'controller' => 'Registration', 'action' => 'store' ],
];
