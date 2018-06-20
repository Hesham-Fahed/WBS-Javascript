<?php declare(strict_types=1);

return
[
    'ALL::' => [
        'controller' => 'StaticPage',
        'action' => 'index',
        'login' => true,
    ],

    'GET::wall' => [
        'controller' => 'Post',
        'action' => 'wall',
        'login' => true,
    ],

    'GET::posts' => [
        'controller' => 'Post',
        'action' => 'index',
        'login' => true,
    ],

    'POST::posts' => [
        'controller' => 'Post',
        'action' => 'store',
        'login' => true,
    ],

    'DELETE::posts/:id' => [
        'controller' => 'Post',
        'action' => 'destroy',
        'params' => [ 'id' => 'number' ],
        'login' => true,
    ],

    'GET::moo' => [
        'controller' => 'Moo',
        'action' => 'index',
        'login' => true,
    ],

    'POST::moo' => [
        'controller' => 'Moo',
        'action' => 'store',
        'login' => true,
    ],

    'GET::friends' => [
        'controller' => 'Friend',
        'action' => 'index',
        'login' => true,
    ],

    'POST::friends' => [
        'controller' => 'Friend',
        'action' => 'store',
        'login' => true,
    ],

    'GET::profile/:id' => [
        'controller' => 'Profile',
        'action' => 'index',
        'params' => [ 'id' => 'number' ],
        'login' => true,
    ],

    'GET::profile' => [
        'controller' => 'Profile',
        'action' => 'index',
        'login' => true,
    ],

    'POST::profile' => [
        'controller' => 'Profile',
        'action' => 'update',
        'login' => true,
    ],

    // Authentication
    'GET::login'     => [ 'controller' => 'Login', 'action' => 'index' ],
    'POST::login'    => [ 'controller' => 'Login', 'action' => 'create' ],
    'GET::logout'    => [ 'controller' => 'Login', 'action' => 'destroy' ],
    'GET::register'  => [ 'controller' => 'Registration', 'action' => 'index' ],
    'POST::register' => [ 'controller' => 'Registration', 'action' => 'store' ],
];
