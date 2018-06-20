<?php
declare(strict_types=1);

/*************************
 * EXERCISES - VARIABLES *
 *************************/
?>
<!DOCTYPE html>
<html lang="de">
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übungen zu Variablen</h1>
<button id="solbutton">Lösungen anzeigen</button>

<h2>Übung 1</h2>
<ol>
    <li>
        Was ist eine Variable und wie ist die PHP Syntax dafür?
        <div class="solution">Eine Variable ist ein symbolischer Name, der mit
          einem Wert verknüpft ist. Dieser Wert ist zur Laufzeit veränderbar.<br>
          In PHP erstellt man eine Variable mit einem Dollar-Zeichen ($) und einem
          gültigen Label. PHP Labels beginnen mit einem Unterstrich (_) oder einem
          Buchstaben, gefolgt von einer beliebigen Anzahl von Buchstaben, Ziffern und
          Unterstrichen. Es sollten lediglich Zeichen des ASCII Zeichensatzes
          verwendet werden.
        </div>
    </li>
    <li>
        Was ist der Unterschied zwischen einer Variablen und Konstanten?
        <div class="solution">Eine Variable lässt sich zur Laufzeit des Programms
          verändern, eine Konstante nicht.
        </div>
    </li>
    <li>
        Was ist der Unterschied zwischen einer statischen und einer nicht statischen (automatischen) Variablen?
        <div class="solution">Statische Variablen existieren im Unterschied zu automatischen
          Variablen während der gesamten Laufzeit des Programms. Die ist nicht mit dem Scope,
          dem Gültigkeitsbereich einer Variablen zu verwechseln, welcher angibt, wo eine
          Variable verwendet werden kann. Es kann also durchaus passieren, dass eine statischen
          Variable im Speicher existiert, man aber von bestimmten Programmteilen aus nicht
          auf sie zugreifen kann.</div>
    </li>
    <li>
        Was ist der Unterschied zwischen einer Variablen und einer Referenz?
        <div class="solution">Hier werden Äpfel mit Birnen verglichen. Eine Variable ist
          ein Container, ein Behälter für einen Wert. Auf diesen Behälter greift man
          über einen Bezeichner, einen Identifier zu. Der Bezeichner ist ein Name, den
          wir für diesen Container verwenden. PHP speichert in einer sogenannten Symboltabelle
          (symbol table) für jeden Bezeichner die Variable, auf die dieser zeigt.
          Eine Referenz ist lediglich ein weiterer Bezeichner für die selbe Variable. Es
          ist ein weiterer Namenseintrag in der Symboltabelle, der auf diese Variable
          zeigt. Eine Referenz ist sozusagen ein Spitzname für eine Variable.</div>
    </li>
</ol>


<h2>Übung 2</h2>
<ol>
    <li>Welche der folgenden Bezeichner (Identifier) sind ungültig oder können nicht vom Benutzer deklariert werden? Warum?</li>
    <li>Welche bezeichnen Variablen, welche Konstanten (wir schließen Funktionen hier aus.)</li>
    <li>Was wäre die PHP Fehlermeldung für die ungültigen Bezeichner?</li>
</ol>
Versucht die Antwort zuerst ohne den PHP Interpreter herauszufinden.<br>
Überprüft dann euer Ergebnis mit PHP.<br>

<div class="code">
<?php
$questions = array(
    '$identifier'      => ['ok', 'var',   ''],
    '$CONST'           => ['ok', 'var',   ''],
    '$_SERVER'         => ['ok', 'var',   ''],
    '$present_4_you'   => ['ok', 'var',   ''],
    '$font-family'     => ['no', '-',     'Parse error:  syntax error, unexpected \'-\''],
    'HAPPY_HIPPO'      => ['ok', 'const', ''],
    '$this'            => ['no', '-',     'Fatal error: Cannot re-assign $this'],
    'null'             => ['no', '-',     'Fatal error: Cannot redeclare constant \'null\''],
    '7_SAMURAI'        => ['no', '-',     'Parse error: syntax error, unexpected integer number'],
    '_user_count'      => ['ok', 'const', ''],
    'user-count'       => ['no', '-',     'Parse error:  syntax error, unexpected \'-\''],
    'USER-COUNT'       => ['no', '-',     'Parse error:  syntax error, unexpected \'-\''],
    '__super_function' => ['ok', 'const', ''],
    'SERVER'           => ['ok', 'const', ''],
    'PHP_VERSION'      => ['no', '-',     'PHP Notice:  Constant PHP_VERSION already defined'],
    '$smørrebrød'      => ['ok', 'var',   '&lt;- not good! Possible but not recommended'],
);

array_walk($questions, function($value, $key) {
    printf('<div class="qna">%-20s<span class="solution">%-4s %-6s %s</span></div>', $key, $value[0], $value[1], $value[2]);
});
?>
</div>


<h2>Übung 3</h2>
<ol>
    <li>
        Wie kann man von PHP aus das Verzeichnis ausgeben, in dem das aufgerufene Skript liegt?
        <div class="solution">echo __DIR__ => <?= __DIR__ ?></div>
    </li>
    <li>
        Wie kann von PHP aus die Zeilennummer ausgegeben werden, in der das Skript gerade ist?
        <div class="solution">echo __DIR__ => <?= __LINE__ ?></div>
    </li>
</ol>

</body></html>
