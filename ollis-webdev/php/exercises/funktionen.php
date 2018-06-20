<?php
declare(strict_types=1);

/*************************
 * EXERCISES - FUNCTIONS *
 *************************/
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <?php include 'helpers/head.php'; ?>
    <style>
    .code {
        color: <?= $_GET['color']; ?>;
        font-family: Courier;
    }
    </style>
</head>

<body>

<h1>Übungen zu Funktionen</h1>

<h2>Folgendes gilt für alle Aufgaben</h2>
<ul>
    <li>Verwende für alle Funktionen sinnvolle, nach Möglichkeit englische, Namen.</li>
    <li>Verwende strikte Typisierung (strict typing).</li>
    <li>Gib, wenn möglich, immer Type-Hints für Parameter und Rückgabewerte an.</li>
    <li>Teste deine Funktionen immer mit verschiedenen Eingaben.</li>
    <li>Im Rahmen der Aufgaben zählen nur a, e, i, o und u als Vokale.</li>
    <li>Stellt PHP die zu implementierende Funktion bereits zur Verfügung,
        darf diese nicht benutzt werden (wäre ja auch albern :)).</li>
</ul>

<h2>Nützliche Funktionen</h2>
<p>Diese Funktionen genügen, um alle Aufgaben zu lösen. Das bedeutet natürlich nicht,
dass ihr NUR diese Funktionen benutzen dürft.</p>
<p>Die <i>mb_</i> Varianten der Funktionen sind zum Arbeiten mit Multibyte-Strings geeignet.
Also UTF-8 fähig.</p>

<ul>
    <li>min() / max()</li>
    <li>strlen() / mb_strlen()</li>
    <li>strpos() / mb_strpos()</li>
    <li>stripos() / mb_stripos()</li>
    <li>explode() / mb_split()</li>
    <li>substr() / mb_substr()</li>
    <li>str_replace()</li>
    <li>preg_match()</li>
    <li>preg_replace()</li>

</ul>


<!-- =========================================================================== -->
<h2>Übung 1</h2>
<p>Gegeben sei folgender Code:</p>
<pre>
$firstname = "Peter";
$lastname = "Pan";

function get_full_name() {
    return $firstname . " " . $lastname;
}
</pre>

<p>Die Funktion soll den vollen Namen zurückgeben, also "Peter Pan".</p>

<ol>
    <li>Warum gibt dieser Code nichts aus?</li>
    <li>Was müsste geändert werden, damit es funktioniert?</li>
    <li>Warum ist diese Funktion problematisch?</li>
</ol>


<!-- =========================================================================== -->
<h2>Übung 2</h2>
<p>Gegeben sei folgender Code:</p>
<pre>
function times_called() {
    $counter = 0;
    $counter++;
    return $counter;
}
</pre>
<p>Die Funktion soll zurückgeben, wie oft sie bereits aufgerufen wurde.</p>
<ol>
    <li>Warum tut die Funktion nicht, was sie soll?</li>
    <li>Was müsste geändert werden, damit es funktioniert?</li>
</ol>


<!-- =========================================================================== -->
<h2>Übung 3</h2>
<div class="solwrapper">
    <p>Definiere eine Funktion, die überprüft, ob ein String Umlaute (öäü) enthält.</p>
    <p>Überlege dir einen sinnvollen Rückgabewert für die Funktion.</p>
    <pre>
$string = "däöwüwädddeö";
if (has_umlauts($string)) {
    echo "Umlaute gefunden";
}
else {
    echo "Keine Umlaute gefunden";
}
//=> Umlaute gefunden
    </pre>
</div>


<!-- =========================================================================== -->
<h2>Übung 4</h2>
<div class="solwrapper">
    <p>Definiere eine Funktion, die prüft, wie oft welches Wort in einem String vorkommt. Die Wörter sind durch Leerzeichen getrennt.</p>
    <p>Die Funktion soll ein assoziatives Array zurückgeben. Die Keys sind die Wörter, die Values, wie oft diese vorkommen.</p>

    <pre>
$string = "Haus Katze Baum Boot Katze Baum Baum Haus 37 Brote Haus";

$wordFrequencies = count_words($string);
var_dump($wordFrequencies);

//=> Array ( [Haus] => 3 [Katze] => 2 [Baum] => 3 [Boot] => 1 [37] => 1 [Brote] => 1 )
    </pre>
</div>


<!-- =========================================================================== -->
<h2>Übung 5</h2>
<div class="solwrapper">
    <p>Definiere eine Funktion mit folgender Signatur:</p>
    <pre>function truncate_string(string $text, int $max_length) : string</pre>
    <ul>
        <li>Die Funktion soll $text kürzen, wenn es länger als $max_length ist</li>
        <li>Der gekürzte String soll mit drei Punkten "..." am Ende zurückgegeben werden.</li>
        <li>Beachte, dass die drei Punkte auch zur Länge des Strings zählen. </li>
        <li>Ist $max_length kleiner gleich 3, dann zählen die drei Punkte "..." nicht zur Länge des Strings. </li>
    </ul>

    <pre>
echo truncate_string("This string may get truncated!", 16);
Ausgabe: This string m...

echo truncate_string("Hallo", 2);
Ausgabe: Ha...

echo truncate_string("Hold the Line", 15);
Ausgabe: Hold the Line
    </pre>
</div>


<!-- =========================================================================== -->
<h2>Übung 6</h2>
<div class="solwrapper">
    <p>Definiere eine Funktion, die ein englisches Wort (immer lower-case) in "pig latin" verwandelt.</p>
    <ul>
        <li>Beginnt ein Wort mit einem oder mehreren Konsonanten, so werden diese am Anfang
            weggeschnitten und am Ende des Wortes eingefügt. Anschließend wird "ay" angehängt.</li>
        <li>Beginnt ein Wort mit einem Vokal, wird am Wortende "way" angehängt.</li>
    </ul>
    <pre>
$word = "please";
echo pig_latin($word);
Ausgabe: easeplay

echo pig_latin("eight");
Ausgabe: eightway
    </pre>
</div>


<!-- =========================================================================== -->
<h2>Übung 7</h2>
<div class="solwrapper">
    <p>Definiere eine Funktion, die als einziges Argument ein Array mit zwei Strings erhält.</p>
    <p>Die Funktion soll überprüfen, ob alle Buchstaben des zweiten Strings auch im Ersten vorkommen.</p>
    <p>Leerzeichen sollen ignoriert werden.</p>
    <p>Es soll nicht zwischen Groß- und Kleinbuchstaben unterschieden werden.</p>
    <pre>
has_all_letters(["Lagerregal", "regelart"]);       => false
has_all_letters(["Tröte", "röte"]);                => true
has_all_letters(["Antananarivo", "TonVariation"]); => true
has_all_letters(["Bratwurst", "blutdurst"]);       => false
    </pre>
</div>


<!-- =========================================================================== -->
<h2>Übung 8</h2>
<div class="solwrapper">
    <p>Schreibe eine Funktion, die ein Integer in eine Römische Zahl umwandelt.</p>
    <p><strong>Wenn es bis 3000 funktioniert, ist das schon OK.</p>
    <p><a href="https://de.wikipedia.org/wiki/R%C3%B6mische_Zahlschrift#Allgemeines">Römische Zahlen</a></p>

    <pre>
echo to_roman(2);    => II
echo to_roman(3);    => III
echo to_roman(4);    => IV
echo to_roman(5);    => V
echo to_roman(99);   => XCIX
echo to_roman(798);  => DCCXCVIII
echo to_roman(2017); => MMXVII
echo to_roman(3999); => MMMCMXCIX
    </pre>
</div>

</body></html>
