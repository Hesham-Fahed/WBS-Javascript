<?php declare (strict_types = 1);

/**********************************
 * SOLUTIONS - CONTROL STRUCTURES *
 **********************************/
?>
<html>
<head><style> .code { font-family: Courier; } </style></head>
<body>

<h1>Übungen zu Kontrollstrukturen</h1>

<!-- =========================================================== -->
<h2>Übung 1 - easy</h2>
<?php
$checked = false;

if ($checked) {
    echo "checked";
} else {
    echo "not checked";
}
?>

<!-- =========================================================== -->
<h2>Übung 1 - harder</h2>
<?php
// 1. $_SERVER['PATH_INFO'] nicht gesetzt -> info ausgeben
if (!isset($_SERVER['PATH_INFO'])) {
    echo "nicht gesetzt";
}
// 2. $_SERVER['PATH_INFO'] ist '/' -> root
elseif ($_SERVER['PATH_INFO'] === '/') {
    echo "root";
}
// 3. $_SERVER['PATH_INFO'] ist '/....; -> $_SERVER['PATH_INFO']
else {
    echo $_SERVER['PATH_INFO'];
}

// Alternativ:
// $path_info = $_SERVER['PATH_INFO'] ?? 'nicht gesetzt';
// if ($path_info === '/') {
//     $path_info = 'root';
// }
// echo $path_info;

?>

<!-- =========================================================== -->
<h2>Übung 2 - easy</h2>
<?php

$counter = 0;
$i = 1;

while ($counter < 10) {
    if ($i % 3 == 0) {
        echo $i . ", ";
        $counter++;
    }

    $i++;
}

?>

<!-- =========================================================== -->
<h2>Übung 2 - harder</h2>
<?php

$first = 1;
$second = 1;

echo $first . ', ' . $second . ', ';

for ($i = 3; $i <= 10; $i++) {
    $third = $first + $second;

    echo $third . ', ';

    $first = $second;
    $second = $third;
}
?>

<!-- =========================================================== -->
<h2>Übung 3 - easy</h2>
<?php
for ($i = 1; $i <= 10; $i++) {
    $numbers[] = rand(1, 100);
}

$sum = 0;
foreach ($numbers as $number) {
    $sum += $number;
}

// Die faule Methode:
// echo array_sum($arr);

echo $sum;
?>

<!-- =========================================================== -->
<h2>Übung 3 - harder</h2>
<?php
$cities = array(
    "europe" => array("berlin", "copenhagen", "kent", "sevilla"),
    "asia" => array("vientiane", "tashkent", "fukuoka", "ende"),
);

$search = "kent";
$found = false;
foreach ($cities as $continent => $city_array) {
    if (in_array($search, $city_array)) {
        $found = true;
        echo $search . ' is in ' . $continent . "<br>";
        break;
    }
}

if (!$found) {
    echo "$search nicht gefunden.<br>";
}

$search = "ushuaia";
$found = false;

foreach ($cities as $continent => $city_array) {
    foreach ($city_array as $city) {
        if ($search == $city) {
            $found = true;
            echo $search . ' is in ' . $continent . "<br>";
        }
    }
}

if (!$found) {
    echo "$search not found.<br>";
}
?>

<!-- =========================================================== -->
<h2>Übung 4</h2>
<?php

$size = 'small';
$fontsizes = array(
    'small' => 10,
    'medium' => 14,
    'large' => 20,
);

$urlsize = $_GET['size'] ?? $fontsizes['medium'];
?>

<p style="font-size: <?= $fontsizes[$size] ?>px">Lorem Ipsum<p>
<p style="font-size: <?= $fontsizes[$urlsize] ?>px">Lorem Ipsum<p>
