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
    'GET::login'     => [ 'controller' => 'Login', 'action' => 'index' ],
    'POST::login'    => [ 'controller' => 'Login', 'action' => 'create' ],
    'GET::logout'    => [ 'controller' => 'Login', 'action' => 'destroy' ],
    'GET::register'  => [ 'controller' => 'Registration', 'action' => 'index' ],
    'POST::register' => [ 'controller' => 'Registration', 'action' => 'store' ],
];
