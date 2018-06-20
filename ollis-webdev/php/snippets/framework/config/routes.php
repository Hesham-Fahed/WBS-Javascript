<?php declare(strict_types=1);

return
[
    'ALL::' => [
        'controller' => 'Test',
        'action' => 'index',
        'login' => true,
    ],

    'GET::test/:id' => [
        'controller' => 'Test',
        'action' => 'index',
        'params' => [ 'id' => 'number' ],
    ],

    // Authentication & Registration
    'GET::login'     => [ 'controller' => 'Login', 'action' => 'create' ],
    'POST::login'    => [ 'controller' => 'Login', 'action' => 'store' ],
    'GET::logout'    => [ 'controller' => 'Login', 'action' => 'destroy' ],
    'GET::register'  => [ 'controller' => 'Registration', 'action' => 'create' ],
    'POST::register' => [ 'controller' => 'Registration', 'action' => 'store' ],
];
