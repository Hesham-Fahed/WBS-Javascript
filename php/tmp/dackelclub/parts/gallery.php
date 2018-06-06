<?php


$files = glob('img/gallery/*.jpg');
// var_dump($files);
$files_count = count($files);

echo "<div class='wrapper'>";
for ($i = 0; $i < $files_count; $i++) {
    // saugt sich den Bildnamen aus dem Link/Dateinamen
    $img_alt = substr($files[$i], -11, -4);
    echo "<img src=\"$files[$i]\" alt='$img_alt'>";
}
echo "</div>";


///////////////////////////////////////////////

// <?php

// $files = glob('img/gallery/*.jpg');
// // var_dump($files);

// $files_length = count($files);
// // var_dump($files_length);

// echo "<div class='container'><div class='gallery'>";
// for ($i=0; $i < $files_length; $i++) {
//     echo  "<img src='$files[$i]'>";  
//     // var_dump($files[$i]) ;
// }
// echo "</div></div>";


// 1. Schreibe eine Galerieansicht, die 3 Bilder pro Zeile ausgibt
// 2. Schreibe ein sicheres Kontaktformular mit mindestens den Feldern:
//     Name, Nachricht und versende die Nachricht beim Absenden des Formulars per email
// 3. Ersetze den Ternäroperator in der nav.php durch eine Funktion