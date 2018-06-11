<?php declare(strict_types=1);

    // GET['page'] kommt über das Klicken der Links in der NAV
    $page = $_GET['page'] ?? '';
 
    include_once '_lib/form_helpers.php';
    include_once 'parts/head.php';
    include_once 'parts/nav.php';

    switch ($page):
        case 'gallery':
            include 'parts/gallery.php';
            break;
        case 'game':
            include 'parts/game.php';
            break;
        default: 
            include 'parts/home.php';
    endswitch;

    include_once 'parts/foot.php';