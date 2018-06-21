<?php declare(strict_types=1);

return
[
    'ALL::' => [
        'controller' => 'Main',
        'action' => 'index',
        'login' => true,
    ],

    'GET::main' => [
        'controller' => 'Main',
        'action' => 'index',
        'login' => true,
    ],

    'POST::main' => [
        'controller' => 'Main',
        'action' => 'store',
        'login' => true,
    ],

    'POST::destroy' => [
        'controller' => 'Main',
        'action' => 'index',
        'login' => true,
    ],

    'POST::move' => [
        'controller' => 'Main',
        'action' => 'index',
        'login' => true,
    ],

    'POST::create' => [
        'controller' => 'Main',
        'action' => 'index',
        'login' => true,
    ],
    
    'POST::addStandort' => [
        'controller' => 'Main',
        'action' => 'index',
        'login' => true,
    ],
    
    'GET::posts' => [
        'controller' => 'Post',
        'action' => 'index',
        'login' => true
    ],

    'POST::posts' => [
        'controller' => 'Post',
        'action' => 'store',
        'login' => true
    ],

    'GET::profile' => [
        'controller' => 'Profile',
        'action' => 'index',
        'login' => true
    ],

    // Authentication & Registration
    'GET::login'     => [ 'controller' => 'Login', 'action' => 'create' ],
    'POST::login'    => [ 'controller' => 'Login', 'action' => 'store' ],
    'GET::logout'    => [ 'controller' => 'Login', 'action' => 'destroy' ],
    'GET::register'  => [ 'controller' => 'Registration', 'action' => 'create' ],
    'POST::register' => [ 'controller' => 'Registration', 'action' => 'store' ],
];
