<?php
declare(strict_types=1);

    $minMax = [1, 2, 3, 4];
    echo max( $minMax );

    echo "<hr>Stringlength<br>";
    $stringlength = "Der Sack hat nicht tschüss gesagt";
    echo strlen($stringlength);
    echo "<br>";
    echo mb_strlen($stringlength);

    //test();
    // function test()
    // {
    //     static $count = 0;

    //     $count++;
    //     echo $count;
    //     if ($count < 10) {
    //         test();
    //     }
    //     $count--;
    //     echo $count;
    // }


/*************************
 * EXERCISES - FUNCTIONS *
 *************************/

    // Aufgabe 1 /////////////////////////

    echo "<hr>";
    $firstname = "Peter";
    $lastname = "Pan";

    echo "$firstname";

    function get_full_name($first, $last) : string {
        // return "<p><b>Aufgabe 1: </b>" . $first . " " . $last . "</p>";
        return "<p><b>Aufgabe 1: </b>$first $last</p>";
    }

    echo get_full_name($firstname, $lastname);


    // Aufgabe 2 /////////////////////////
    echo "<hr>Aufgabe 2<br>";
    echo times_called();
    echo times_called();
    echo times_called();
    
    function times_called() {
        static $counter = 0;
        $counter++;
        return $counter;
    }
    
    
    // Aufgabe 3 /////////////////////////
    function has_umlauts($string)  
    {
        $umlauts = ['ä', 'ö', 'ü'];
        $umlauts_length = count($umlauts);

        for ($i = 0; $i < $umlauts_length; $i++) {
            if (mb_stripos($string, $umlauts[$i]) !== false) {
                return true;
        }

        return true;
    }

//=> Umlaute gefunden

    // Aufgabe 3b //////////////////////
    echo "<hr>Aufgabe3b<br>";

    $urString = "Haus Katze Baum Boot Katze Baum Baum Haus 37 Brote Haus";
    $urStringEinzel = mb_split(' ', $urString);
    $urStringEinzelLength = count($urStringEinzel);
    $singleWords = [];

    ///////////////////////////////////////
    // kurs und knackig
    ///////////////////////////////////////
    // $word_frequencies = [];
    // foreach ($urStringEinzel as $word) {
    //     if (isset($word_frequencies[$word])) {
    //         $word_frequencies[$word]++;
    //     }
    //     else {
    //         $word_frequencies[$word] = 1;
    //     }
    // }
    ///////////////////////////////////////
    
    // herrausfiltern der doppelten Worte, 
    // damit jedes Wort durchgezählt werden kann, ohne doppelt gezählt zu werden.
    for ($i=0; $i < $urStringEinzelLength ; $i++) { 
        if(!(in_array($urStringEinzel[$i], $singleWords))) {
            array_push($singleWords, $urStringEinzel[$i]);
        }
    }

    $countword = [];
    foreach($singleWords as $index => $word) {
        $counter = 0;
        for($i = 0; $i < $urStringEinzelLength; $i++) {
            if($urStringEinzel[$i] === $word) {
                $counter++; 
            }
            $countword[$word] = $counter;
        }
    }
    var_dump($countword);

    // $wordFrequencies = count_words($urString);
    // var_dump($wordFrequencies);
    
    // Aufgabe 4 easy ////////////////////////////////
    echo "<hr>Aufgabe 4 easy<br>";

    /* 
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
    */


    $testText = "Der Kitsch ist wie der gute Hirte, selbst wenn er sich avantgardistisch gibt, sieht er zu, dass jeder mitkommt.";
    $wishedLength = 2;


    // $trunc_str = mb_substr($text, 0, ($max_length <= 3) ? $max_length : ($max_length - 3));

    echo truncate_string($testText, $wishedLength);

    function truncate_string(string $text, int $max_length) : string {
        $strLength = mb_strlen($text);
        
        if ($max_length > 3) {
            if ($strLength > $max_length) {
                $shortText = mb_substr($text, 0, $max_length-3) . "...";
            } else {
                $shortText = $text;
            }
        } else {
            $shortText = mb_substr($text, 0, 2) . "...";
        }
        
        return $shortText;
    }


    echo "<hr>";
    echo "<hr>";
    echo "<hr>";
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <?php include 'helpers/head.php'; ?>
</head>

<body>

<h1>Übungen zu Funktionen</h1>

<h2>Folgendes gilt für alle Aufgaben</h2>
<ul>
    <li>Verwende für alle Funktionen sinnvolle, nach Möglichkeit englische, Namen.</li>
    <li>Verwende strikte Typisierung (strict typing).</li>
    <li>Gib, wenn möglich, immer Type-Hints für Parameter und Rückgabewerte an.</li>
    <li>Teste deine Funktionen immer mit verschiedenen Eingaben.</li>
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
<h2>Übung 3 - easy</h2>
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
<h2>Übung 3</h2>
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
<h2>Übung 4 - easy</h2>
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
<h2>Übung 4</h2>
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
<h2>Übung 5</h2>
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
<h2>Übung 5 - hard</h2>
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
