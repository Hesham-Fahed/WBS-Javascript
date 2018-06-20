<?php
declare(strict_types=1);

/*************************
 * SOLUTIONS - FUNCTIONS *
 *************************/
?>
<html>

<head>
<style>
    .code {
         color: <?= $_GET['color']; ?>;
         font-family: Courier;
    }
</style>
</head>

<body>

<a href="funktionen.php?color=red">RED</a><br>
<a href="funktionen.php?color=blue">BLUE</a><br>

<h1 class="code">Übungen zu Funktionen</h1>

<strong>Um den Code zu sehen, müsst ihr euch die Quelltextdatei anschauen.</strong>

<!-- =========================================================== -->
<h2>Übung 1</h2>
<ul>
    <li>Es fehlt eine Ausgabe mit echo oder printf :)</li>
    <li>Die Variablen sind von innerhalb der Funktion gar nicht erreichbar</li>
    <li>Die Variablen in der Funktion als global zu deklarieren wäre eine sehr unschöne Lösung.</li>
    <li>Das Beste wäre, der Funktion die Variablen als Parameter zu übergeben.</li>
</ul>

<h3>Result:</h3>
<?php
$firstname = "Peter";
$lastname = "Pan";

function get_full_name($firstname, $lastname) {
    return $firstname . " " . $lastname;
}

echo get_full_name($firstname, $lastname);
?>

<!-- =========================================================== -->
<h2>Übung 2</h2>
<ul>
    <li>Die Zählvariable $counter wird bei jedem Aufruf wieder mit 0 initialisiert
        und "stirbt" am Ende jedes Funktionsdurchlaufs.</li>
    <li>$counter müsste als <em>static</em> deklariert werden. Statische Variablen
        werden vor Beginn des Programmablaufs ein Mal initialisiert und existieren
        während der gesamten Laufzeit des Programms</li>
</ul>

<h3>Result:</h3>
<?php
function times_called() {
    static $counter = 0;
    $counter++;
    return $counter;
}

echo times_called();
echo times_called();
echo times_called();
?>


<!-- =========================================================== -->
<h2>Übung 3</h2>

<h3>Result:</h3>
<?php
function has_umlauts(string $string) : bool {

    $umlauts = ['ä', 'ö', 'ü'];

    foreach ($umlauts as $u) {
        
        if (mb_stripos($string, $u) !== false) {
            return true;
        }
    }
    return false;
}

$string = "ädäöwüwädddeö";

if (has_umlauts($string)) {
    echo "$string: Umlaute gefunden<br>";
}
else {
    echo "$string: Keine Umlaute gefunden<br>";
}

$string = "lkjdgfhuinvz,mw332";

echo $string . (
    has_umlauts($string)
    ? ": Umlaute gefunden<br>"
    : ": Keine Umlaute gefunden<br>"
);
?>


<!-- =========================================================== -->
<h2>Übung 4</h2>

<h3>Result:</h3>
<?php
function count_words(string $string) : array {
    $words = mb_split(" ", $string);

    // Die faule Variante
    // return array_count_values($words);
    
    // Die anstrengende Variante
    $result = [];

    foreach ($words as $word) {
        
        if (isset($result[$word])) {
            $result[$word]++;
        }
        else {
            $result[$word] = 1;
        }
    }

    return $result;
}

$string = "Haus Katze Baum Boot Katze Baum Baum Haus 37 Brote Haus";
$wordFrequencies = count_words($string);
var_dump($wordFrequencies);
?>


<!-- =========================================================== -->
<h2>Übung 5</h2>

<h3>Result:</h3>
<?php
function truncate_string(string $text, int $max_length) : string {
    if (mb_strlen($text) <= $max_length) {
        return $text;
    }
    elseif ($max_length <= 3) {
        return mb_substr($text, 0, $max_length) . "...";
    }
    else {
        return mb_substr($text, 0, $max_length - 3) . "...";
    }
}

// Alternativ:
function truncate_string2(string $text, int $max_length) : string
{
    // Berechne die Länge von $text = $text_length
    $text_length = mb_strlen($text);

    // Wenn $text_length > $max_length // Text ist länger als erlaubt => Kürzen
    if ($text_length > $max_length) {

        // Wenn $max_length <= 3
        // Alternativ: $trunc_str = mb_substr($text, 0, ($max_length <= 3) ? $max_length : ($max_length - 3));
        if ($max_length <= 3) {
            // String kürzen auf max_length plus '...'
            return mb_substr($text, 0, $max_length) . '...';
        }
        // Sonst (also max_length > 3)
        else {
            // Auf max_length-3 kürzen plus '...'
            return mb_substr($text, 0, $max_length - 3) . '...';
        }
    // Sonst
    } else {
        // Text zurückgeben
        return $text;
    }
}

echo truncate_string("This string may get truncated!", 16) . "<br>";
echo truncate_string("Hold the Line", 15) . "<br>";
echo truncate_string("Hi", 2) . "<br>";
echo truncate_string("His", 2) . "<br>";
?>


<!-- =========================================================== -->
<h2>Übung 6</h2>

<h3>Result:</h3>
<?php

function pig_latin(string $word) : string {
    $vowels = array('a', 'e', 'i', 'o', 'u');
    $length = strlen($word);

    if (in_array($word[0], $vowels)) {
        return $word . "way";
    }

    while (!in_array($word[0], $vowels) && $length--) {
        $word = substr($word, 1) . $word[0];
    }

    return $word . "ay";
}

// Alternativ:
function pig_latin2(string $word) : string
{
    // Lege ein Array $vowels mit allen Vokalen an
    $vowels = ['a', 'e', 'i', 'o', 'u'];

    // Berechne die Länge $word_length von $word
    $word_length = mb_strlen($word);

    // Wenn Länge <= 0
    if ($word_length <= 0) {
        return '';
    }

    $letter = mb_substr($word, 0, 1);
    // Nimm den ersten Buchstaben $letter von $word

    // 1. Wenn $letter in vowels
    if (in_array($letter, $vowels)) {
        return $word . "way";
    }
    
    // 2. Laufe solange buchstabenweise durch $word und merke dir den index
    // wie der aktuelle Buchstabe nicht in $vowels ist und index + 1 immer noch < $word_length
    $index = 1;
    while (!in_array(mb_substr($word, $index, 1), $vowels) && $index < $word_length) {
        $index++;
    }
    // Baue einen String aus $word[$index bis ende] . $word[0 bis $index] . "ay"
    return mb_substr($word, $index) . mb_substr($word, 0, $index) . 'ay';
}


$tests = ["paragraphs", "please", "gait", "eight", "algorithm", "lynx"];
foreach ($tests as $test) {
    echo $test . " -> " . pig_latin($test) . "<br>";
}

?>


<!-- =========================================================== -->
<h2>Übung 7</h2>

<h3>Result:</h3>
<?php
function has_all_letters(array $data) : bool
{
    // Wenn der erste String leer ist, der Zweite aber nicht
    if (mb_strlen($data[0]) === 0 && mb_strlen($data[1]) > 0) {
        return false;
    }

    // Wenn der zweite String leer ist
    if (mb_strlen($data[1]) === 0) {
        return true;
    }

    $length = mb_strlen($data[1]);

    $letters = [];
    for ($i = 0; $i < $length; $i++) {
        $letter = mb_substr($data[1], $i, 1);
        if ($letter !== " ") {
            $letters[] = $letter;
        }
    }

    // Laufe durch alle Buchstaben des 2. Strings
    foreach ($letters as $letter) {

        // Wenn der Buchstabe im ersten Wort nicht gefunden wird
        if (mb_stripos($data[0], $letter) === false) {
            return false;
        }
    }
    
    return true;
}

echo (int) has_all_letters(["Lagerregal", "regelart"]) . "<br>";
echo (int) has_all_letters(["Tröte", "rö te"]) . "<br>";
echo (int) has_all_letters(["Antananarivo", "TonVariation"]) . "<br>";
echo (int) has_all_letters(["Bratwurst", "blutdurst"]) . "<br>";
echo (int) has_all_letters(["Bratwurst", ""]) . "<br>";
echo (int) has_all_letters(["", "blutdurst"]) . "<br>";
echo (int) has_all_letters(["", ""]) . "<br>";
?>


<!-- =========================================================== -->
<h2>Übung 8</h2>

<h3>Result:</h3>
<?php
function to_roman(int $number) : string {
    $arabic = [ 1,    4,   5,    9,  10,   40,  50,   90, 100,  400, 500,  900, 1000];
    $roman  = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    $result = '';
    for ($i = count($arabic) - 1; $i >=0; $i--) {
        while ($number >= $arabic[$i]) {
            $result .= $roman[$i];
            $number -= $arabic[$i];
        }
    }
    return $result;
}

$tests = [2, 3, 4, 5, 99, 798, 2017, 3999, 0, -2];
foreach ($tests as $test) {
    echo "$test: " . to_roman($test) . "<br>";
}

?>

</body></html>