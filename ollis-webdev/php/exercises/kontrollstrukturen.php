<?php
declare(strict_types=1);

/**********************************
 * EXERCISES - CONTROL STRUCTURES *
 **********************************/
?>
<!DOCTYPE html>
<html lang="de">
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übungen zu Kontrollstrukturen</h1>
<!-- =========================================================================== -->
<h2>Übung 1</h2>
<div class="solwrapper">
    <p>Lege eine Variable <code>$checked</code> vom Typ "boolean" an und weise ihr
        true oder false zu.</p>
    <p>Überprüfe den Wert der Variablen und gib "checked" aus, wenn sie true ist,
       "not checked", wenn sie false ist.</p>
</div>


<!-- =========================================================================== -->
<h2>Übung 2</h2>
In einer URL kann hinter dem Namen der Ressource, in unserem Fall das PHP Script,
ein Pfad angegeben werden. zB:  http://chili.de/hotscript.php/ein/pfad

PHP stellt uns diesen Pfad in der Variablen $_SERVER['PATH_INFO'] zur Verfügung.

Schreibe ein Konstrukt, das abhängig vom Wert von $_SERVER['PATH_INFO'] folgendes ausgibt:
<ul>
    <li>Ist die Variable nicht gesetzt, soll eine entsprechende Nachricht ausgegeben werden</li>
    <li>Ist der Wert "/", so soll "root" ausgegeben werden.</li>
    <li>Sonst soll der volle Pfad ausgegeben werden. zB "/ein/pfad"</li>
</ul>
Teste die Ausgabe des Scriptes mit folgenden Aufrufen ("...pfad..." ist natürlich anzupassen):
<ul class="code">
    <li><a href="<?= $_SERVER['SCRIPT_NAME'] ?>">http://localhost/...pfad.../scriptname.php</a>  &rarr; "nicht gesetzt"</li>
    <li><a href="<?= $_SERVER['SCRIPT_NAME'] . "/" ?>">http://localhost/...pfad.../scriptname.php/</a> &rarr; "root"</li>
    <li><a href="<?= $_SERVER['SCRIPT_NAME'] . "/mein/pfad" ?>">http://localhost/...pfad.../scriptname.php/mein/pfad</a> &rarr; "/mein/pfad"</li>
</ul>


<!-- =========================================================================== -->
<h2>Übung 3</h2>
<div class="solwrapper">
    <p>Schreibe eine Schleife, die die ersten 10 natürlichen Zahlen ausgibt,
    die durch drei teilbar sind.</p>
</div>


<!-- =========================================================================== -->
<h2>Übung 4</h2>
<div class="solwrapper">
    <p>Die Fibonacci-Reihe wird wie folgt gebildet:</p>
    <ol>
        <li>Die erste und zweite Zahl der Reihe sind beide 1</li>
        <li>Jede weitere Fibonacci-Zahl ist die Summe ihrer beiden Vorgänger</li>
    </ol>
    <p>Also: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p>
    <p>Schreibe Code, der die ersten 10 Fibonacci-Zahlen ausgibt.</p>
    <p>Tip: (Zum sehen Zeile markieren) <span style="color: white;">Die ersten beiden Zahlen sollten bereits außerhalb der Schleife ausgegeben werden.</span></p>
    <p>Ändere den Code so ab, dass nur die 5. bis 10. Fibonacci-Zahl ausgegeben werden.</p>
</div>


<!-- =========================================================================== -->
<h2>Übung 5</h2>
<div class="solwrapper">
    <p>Schreibe Code, der folgendes macht:</p>
    <ol>
        <li>Fülle ein Array mit 10 Zufallszahlen zwischen 1 und 100.</li>
        <li>Gib anschließend die Summe all dieser Zahlen aus.</li>
    </ol>
</div>


<!-- =========================================================================== -->
<h2>Übung 6</h2>
<div class="solwrapper">
    <p>Gegeben sei folgendes Array:</p>
    <pre>
    array( 'europe' => array("berlin", "copenhagen", "kent", "sevilla"),
           'asia'   => array("vientiane", "tashkent", "fukuoka", "ende")
    );
    </pre>
    <ol>
        <li>Definiere eine Variable <code>$city</code>, die einen Städtenamen als String enthält.</li>
        <li>Schreibe Code, der ausgibt, auf welchem Kontinent die Stadt $city liegt.</li>
        <li>Gib eine Fehlermeldung aus, wenn die Stadt nicht gefunden wird.</li>
        <li>Teste deinen Code zB mit "kent", "tashkent" und "ushuaia".</li>
    </ol>

    <pre>
    $city = "kent";
    ...
    //=> kent is in europe

    $city = "ushuaia";
    ...
    //=> ushuaia not found.
    </pre>
</div>


<!-- =========================================================================== -->
<h2>Übung 7</h2>
<div class="solwrapper">
    <ol>
        <li>Definiere ein assoziatives Array <code>$fontsizes</code>, das den Keys
            "small", "medium" und "large" respektive die Werte 10, 14 und 20 zuordnet.</li>
        <li>Definiere dann eine Variable <code>$size</code>, deren Wert "small", "medium"
            oder "large" ist.</li>
        <li>Schreibe Code, der abhängig von $size ein <a href="https://de.wikipedia.org/wiki/Lorem_ipsum">Lorem Ipsum</a> in der
            entsprechenden Schriftgröße ausgibt.</li>
    </ol>
    <p>Zusatzübung: Schreibe Übung 4 so um, dass die Schritfgröße nicht aus der Variable $size ausgelesen wird, sondern im URL-String übergeben wird:</p>
    <a href="?size=large#">http://localhost/..../04_control_structures.php?size=large</a>
</div>
<hr>
</body></html>