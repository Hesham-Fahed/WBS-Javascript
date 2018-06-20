<?php

$page = $_GET['page'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

include "parts/header.php";
include "parts/nav.php";
include "parts/message.php";

echo '<div class="container">';

    switch ($page):
        case 'gallery':
            include "parts/gallery.php";
            break;

        case 'contact':
            include "parts/contact.php";
            break;

        default:
            include "parts/home.php";
    endswitch;

echo '</div>';

include "parts/footer.php";