<?php

$data = [
    'name' => 'Wile E. Coyote',
    'job' => 'Supergenius',
    'perks' => [
        'likes roadrunners',
        'builds weird contraptions',
        'never succeeds'
    ],
    'get_payload' => $_GET['pizza'] ?? null,
    'post_payload' => $_POST['pizza'] ?? null
];

header('Content-type: application/json');
echo json_encode($data);
