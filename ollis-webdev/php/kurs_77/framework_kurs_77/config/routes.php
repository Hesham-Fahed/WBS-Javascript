<?php

return [
    // Method :: URL Pfad
    'GET::test' => [
                    // Controllername
        'controller' => 'Test',
                // Methodenname
        'action' => 'index',
        'login' => true
    ],

    // Beispiel für Routen-Parameter
    // id und name werden automatisch in die edit Funktion injiziert
    'GET::test/:id/edit/:name' => [
        'controller' => 'Test',
        'action' => 'edit',
        'params' => [
            'id' => 'number',
            'name' => 'string'
        ]
    ],

    'GET::login' =>  [ 'controller' => 'Login', 'action' => 'create' ],
    'POST::login' => [ 'controller' => 'Login', 'action' => 'store' ],
    'GET::logout' => [ 'controller' => 'Login', 'action' => 'destroy' ],
    'GET::register' =>  [ 'controller' => 'Registration', 'action' => 'create' ],
    'POST::register' => [ 'controller' => 'Registration', 'action' => 'store' ]
];
