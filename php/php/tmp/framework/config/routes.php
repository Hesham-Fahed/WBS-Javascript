<?php

return [

    'GET::test' => [
        'controller' => 'Test',
        'action' => 'index',
        'login' => true
    ],

    'GET::login' => [
        'controller' => 'Login',
        'action' => 'create'
    ],

    'POST::login' => [
        'controller' => 'Login',
        'action' => 'store'
    ],

    'GET::logout' => [
        'controller' => 'Login',
        'action' => 'destroy'
    ],

    'GET::register' => [
        'controller' => 'Registration',
        'action' => 'create'
    ],

    'POST::register' => [
        'controller' => 'Registration',
        'action' => 'store'
    ]

];