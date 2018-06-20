<?php
declare(strict_types=1);

/*********************
 * EXERCISES - TYPES *
 *********************/
?>
<!DOCTYPE html>
<html lang="de">
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übungen zu Typen</h1>
<button id="solbutton">Lösungen anzeigen</button>

<h2>Übung 1</h2>
<ol>
    <li>
        Welche skalaren Datentypen gibt es in PHP?
        <div class="solution">Boolean, Integer, Float und String.</div>
    </li>
    <li>
        Welche zusammengesetzen Datentypen gibt es in PHP?
        <div class="solution">Array, Object, Callable und Iterable </div>
    </li>
    <li>
        Wozu dient der Typ `null` und wie heißt der einzige Wert dieses Typs?
        <div class="solution">Der einzige Wert des Typs `null` ist `null`.
          Eine Variable, der noch kein Wert zugewiesen wurde, hat automatisch
          den Wert `null`. null zeigt die Abwesenheit eines Wertes an.
        </div>
    </li>
    <li>
        Was ist beim Arbeiten mit floats zu beachten?
        <div class="solution">Floats, also Fließkommazahlen, haben durch ihre Implementierung
          immer eine begrenzte Genauigkeit. Dies kann bei Vergleichen von Floats zu
          unerwarteten Ergebnissen führen.
        </div>
    </li>
    <li>
        Was ist der Unterschied zwischen TRUE und true?
        <div class="solution">Beide sind semantisch äquivalent. Es gibt keinen Unterschied.</div>
    </li>
</ol>

<h2>Übung 2</h2>
<ol>
    <li>Welchen Typ und Wert haben die folgenden Ausdrücke?</li>
    <li>Was würde ein "echo" dieser Ausdrücke ausgeben? zB <code>echo true</code>.</li>
</ol>
Versucht die Antwort zuerst ohne den PHP Interpreter herauszufinden.<br>
Überprüft dann euer Ergebnis mit echo und gettype().<br>
Die wichtigste Frage: Versteht ihr alle Ergebnisse?<br>

<div class="code">
<?php
$questions = array(
    '32',
    'true',
    '"integer"',
    '(int)true',
    'false || "Sponge Bob"',
    '"0xA"',
    'array("3")',
    'array(3, 4, 5)[1]',
    '(bool)null',
    '(int)"3e2"',
    '(float)"3cm"',
    'function () { }',
    'new DateTime',
);

array_walk($questions, function($item) {
    $value = eval("return $item;");
    $type = gettype($value);
    $string = print_r($value, true);
    printf('<div class="qna">%-25s<span class="solution">%-10s - %s</span></div>', $item, $type, $string);
});
?>
</div>

</body>
</html>