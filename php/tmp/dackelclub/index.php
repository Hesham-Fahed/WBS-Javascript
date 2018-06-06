<?php

    // Outputbuffering anmachen
    // ob_start();

    $page = $_GET['page'] ?? '';

    // INCLUDE HEAD
    include "parts/head.php";
    // INCLUDE NAV
    include "parts/nav.php";
    switch ($page):
        case "gallery":
            include "parts/gallery.php";
            break;
        case "contact":
            include "parts/contact.php";
            break;
        default:
            include "parts/home.php";
    endswitch;


    // INCLUDE Foot
    include "parts/foot.php";


    // 1. Schreibe eine Galerieansicht, die 3 Bilder pro Zeile ausgibt
    // 2. Schreibe ein sicheres Kontaktformular mit mindestens den Feldern:
    //     Name, Nachricht und versende die Nachricht beim Absenden des Formulars per email
    // 3. Ersetze den Ternäroperator in der nav.php durch eine Funktion


    
// Mailversand Beispiel

// $variable = 12;

// $myText = <<<MEINTEXT
// Dies ist ein Text
//    Er enthält Leerzeichen
//             und Tabstops

// und Leerzeilen
// und eine $variable

// und jeglicher Whitespace bleibt erhalten.
// MEINTEXT;

// echo $myText;

// echo mail(
//     'papst@vatican.de',
//     'hostia',
//     $myText,
//     'From: kaese@moo.de\r\n'
// );