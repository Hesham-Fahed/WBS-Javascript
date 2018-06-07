<?php
declare(strict_types=1);

/*************************
 * EXERCISES - OPERATORS *
 *************************/
?>
<!DOCTYPE html>
<html lang="de">
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übungen zu Operatoren</h1>
<button id="solbutton">Lösungen anzeigen</button>

<h2>Übung 1</h2>
<p>Was ist der Wert der folgenden Ausdrücke? Warum?</p>
<div class="code">
<?php
$questions = array(
    '3 + 5',
    '-3 + 5',
    '3 + -5',
    '3 / 2',
    '7 % 3',
    'intdiv(7, 3)',
    '16 % 4',
    '2 ** 5',
    '3.5 + 3.5',
    '9 ** 2',
    '3 + 4 == 7',
    '!3/4',
    '3 + 4 * 7 - 1 / 4',
    '1 - 1/3 === 2/3',
    '1 - 1/3 <   2/3',
    '1 - 1/3 >   2/3',
    '1 - 1/3 ==  2/3',
    'false !== null',
    '"7 dwarves" + 7',
    '4 . " horsemen"',
    'true and false or !false',
    '3 + 4 and 7 || 0',
    'true and (true or false) === true and true or true and false',
    '(7 < 3) ? "bugger" : PHP_VERSION',
    'null ?? "not null"',
    '(new DateTime) instanceof DateTimeInterface',
    '(true) ? false : true',
    '"Jarmusch" . ", " . "Jim"',
    '8<<1',
    '1|2',
    '15&23'
);

array_walk($questions, function($item) {
    $value = eval("return $item;");
    $type = gettype($value);
    $result = print_r($value, true);

    $slength = strlen($item);
    $item = htmlentities($item);
    $hlength = strlen($item);
    $diff = $hlength - $slength;

    printf('<div class="qna">%' . (62 + $diff) . 's<span class="solution"> : %s</span></div>', $item, $result);
});
?>
</div>

<h2>Übung 2</h2>
<p>Klammere die folgenden Ausdrücke so, dass ihr Wert true wird.</p>
<ol class="code">
    <li>
        11 * 7 - 3 == 44
        <div class="solution">11 * (7 - 3) == 44</div>
    </li>
    <li>
        11 % 3 ** 3 === 8
        <div class="solution">(11 % 3) ** 3 === 8</div>
    </li>
    <li>
        3 + ".14" * 4 === 12.56
        <div class="solution">(3 + ".14") * 4 === 12.56</div>
    </li>
    <li>
        3 * 4 + 8 / 2 === 18
        <div class="solution">3 * (4 + 8) / 2 === 18</div>
    </li>
    <li>
        true and false xor !true and false
        <div class="solution">true and false xor !(true and false)</div>
    </li>
    <li>
        true xor true xor true and false
        <div class="solution">true xor ((true xor true) and false)</div>
    </li>
    <li>
        !(null) ? false : false
        <div class="solution">!((null) ? false : false)</div>
    </li>
</ol>

</body></html>
