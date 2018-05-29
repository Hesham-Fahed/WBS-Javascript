<?php
Kontrollstrukturen
$a = 5;
$b = 3;

while ($a > 10) {
    echo $a . ",. ";
    $a++;
}

do {
    echo $a . ",........ ";
    $a++;
} while ($a > 10);


for ($i = 0; $i <= 10; $i += 2) {
    echo $i . ", ";
}

echo "<hr>";

$arr = ['one', 'two', 'three', 'four', 'five', 'six'];

$length = count($arr);
for ($i = 0; $i < $length; $i++) {
    echo $arr[$i] . "<br>";
}

foreach ($arr as $index => $item) {
    echo $index . ": " . $item . "<br>";
}

$aarr = [
    'one' => 'bir',
    'two' => 'iki',
    'three' => 'üç'
];

foreach ($aarr as $key => $value) {
    echo $key . ": " . $value . "<br>";
}

echo "<hr>";

$length = count($arr);
for ($i = 0; $i < $length; $i++) {
    echo "before continue<br>";
    if ($i % 2 === 0) continue;
    echo "after continue<br>";
    echo $arr[$i] . "<br>";
}

echo "<hr>";

$length = count($arr);
for ($i = 0; $i < $length; $i++) {
    echo "before break<br>";
    if ($i > 3) break;
    echo "after break<br>";
    echo $arr[$i] . "<br>";
}
echo "after loop<br>";

?>