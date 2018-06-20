---
layout: techdoc
title: Kontrollstrukturen
order: 400
examples: true
exercises: true
solutions: true
---
* TOC
{:toc}

## Grundlagen
Kontrollstrukturen dienen dazu, bestimmte Codeblöcke nur unter bestimmten Bedingungen auszuführen (if, switch) oder mehrmals auszuführen (while, do-while, for, foreach).

Bei der bedingten Ausführung spricht man von einer bedingten Anweisung oder _Verzweigung_. wiederholtes Ausführen nennt man _Schleife_.


## if / else / elseif / else if
```
if (expr1)
  statement1
elseif (expr2)
  statement2
else
  statement3
```
* Wertet _expr1_ zu true aus, wird _statement1_ ausgeführt.
* Wertet _expr1_ zu false aus, und _expr2_ zu true, wird _statement2_ ausgeführt.
* Wertet _expr1_ und _expr2_ zu false aus, wird _statement3_ ausgeführt.

Die `elseif` und `else` Blöcke sind optional. Außerdem können so viele `elseif` Blöcke wie nötig verwendet werden.
```php?start_inline=true
if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}
```

## Alternative Syntax
Bei if, while, for, foreach, und switch können die öffnenden geschweiften Klammern (`{`) durch Doppelpunkte (`:`) ersetzt werden, die schließenden Klammern (`}`) durch das entsprenchende endif;, endwhile;, endfor;, endforeach;, oder endswitch;.

Diese Schreibweise ist in Dateien, in denen HTML und PHP stark vermischt werden, oft besser lesbar.

```php?start_inline=true
if ($a < 0):
    return false;
endif;
```

zwischen `switch` und dem ersten `case` darf dabei außer einem Zeilenumbruch kein Whitespace ins HTML ausgegeben werden.
```php?start_inline=true
<?php switch ($foo): ?>
    <?php case 1: ?>        <!-- Whitespace am Zeilenanfang -->
```


## while / do while
```
while (expr)
    statement
```
Eine `while`-Schleife überprüft zuerst _expr_ auf seinen Wahrheitswert. Ist er true, wird _statement_ ausgeführt und man beginnt von vorne. Ist er false, bricht die Schleife ab.

```php?start_inline=true
$i = 1;
while ($i <= 10) {
    echo $i++;         //=> 12345678910
}
```

```
do
    statement
while (expr)
```
Eine `do-while`-Schleife führt zuerst _statement_ aus, und überbrüft dann _expr_ auf seinen Wahrheitswert. Ist er true, beginnt man von vorne. Ist er false, bricht die Schleife ab.
```php?start_inline=true
$i = 0;
do {
    echo $i;
} while ($i > 0);     //=> 0
```

Das _statement_ einer while-Schleife wird also unter Umständen überhaupt nicht ausgeführt, während das einer do-while-Schleife immer mindestens einmal ausgeführt wird.


## for / foreach
```
for (expr1; expr2; expr3)
    statement
```
* Am Anfang der Schleife wird _expr1_ ausgewertet (ausgeführt). Dies geschieht nur ein einziges Mal.
* Anschließend wird _expr2_ ausgewertet. Ist er true, wird zuerst _statement_ ausgeführt, dann _expr3_ ausgewertet. Dann beginnt man diesen Schritt von vorne. Ist er false, bricht die Schleife ab.

Jeder expr1, expr2, und expr3 können leer sein oder mehrere durch Kommas getrennte Ausdrücke enthalten. Das Ergebnis von expr2 ist der Wert des zuletzt ausgewerteten Ausdrucks.
```php?start_inline=true
for($i = 1, $j = 0; $i <= 5; $j += $i, print $i, $i++);  //=> 12345

for($i = 0; $i < count($people); ++$i) {
    echo $people[$i];
}
```

Im obigen Code wird bei jedem Durchlauf (Iteration) der Schleife `count($people)` aufgerufen. Da sich die Größe des Arrays aber nicht verändert, kann man hier optimieren, indem man die Größe des Arrays zwischenspeichert. So wird die Funktion nur einmal aufgerufen:
```php?start_inline=true
for($i = 0, $size = count($people); $i < $size; $i++) {
    echo $people[$i];
}
```

```
foreach (array_expression as $value)
    statement

foreach (array_expression as $key => $value)
    statement
```
Foreach durchläuft alle Elemente eines Arrays oder Objektes. Es kann nur mit diesen beiden Datentypen verwendet werden.

Im ersten Beispiel oben könnte man auf die Werte des Arrays innerhalb von _statement_ nacheinander mit `$value` zugreifen.

Im zweiten Beispiel stünden die Eigenschaften (Key-Value-Paare) des Objekts unter den Namen `$key` und `$value` zur Verfügung.

Will man die Elemente eines Arrays direkt verändern, müssen diese als Referenz übergeben werden, indem man `foreach(array_expression as &$value)` schreibt.

```php?start_inline=true
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}
// $arr ist jetzt [2, 4, 6, 8]
```

Eine ausführlichere Beschreibung von `foreach` befindet sich [hier](http://php.net/manual/en/control-structures.foreach.php).

Seit PHP 5.5 kann man mit `list()` ein Array von Arrays durchlaufen und dabei die Werte des inneren Arrays in eine Schleifenvariable packen.
```php?start_inline=true
$array = [ [1, 2, 3], [4, 5, 6] ];

foreach ($array as list($a, $b, $c)) {
    echo "A:$a B:$b C:$c ";             //=> A:1 B:2 C:3 A:4 B:5 C:6
}
```


## break / continue
Mit `break` beendet man sofort die aktuelle for-, foreach-, while- oder do-while-Schleife oder den switch-Block.

Mit `continue` überspringt man den Rest des aktuellen Schleifendurchlaufs und springt direkt zur nächsten Iteration weiter.


## switch
```
switch (expr):
    case match1:
        statement
    break;
    case match2:
        statement
    break;
    default:
        statement
endswitch;
```
Das `switch`-Statement ist ähnlich wie eine Reihe nacheinander ausgeführter `if`-Statements. Nacheinander werden alle _match*_ Werte mit _expr_ verglichen. Es handelt sich dabei um einen losen Vergleich mit `==`. Wertet ein solcher Vergleich zu `true` aus, werden alle folgenden Statement-Blocke ausgeführt. Deshalb ist es wichtig, dass am Ende jedes Case ein `break` steht.

Werten alle Vergleiche mit _expr_ zu false aus, tritt, soweit vorhanden, der `default`-Fall ein.
```php?start_inline=true
switch ($i) {
    case 0:
        echo "i ist 0";
        break;
    case 1:
    case 2:
        echo "i ist eins oder zwei";
        break;
    default:
        echo "töröööh";
}

// Dies ist äquivalent zu:
if ($i == 0) {
    echo "i ist 0";
} elseif ($i == 1 || $i == 2) {
    echo "i ist eins oder zwei";
} else {
    echo "töröööh";
}
```


## declare
Mit dem `declare` Konstrukt können bestimmte Direktiven für einen Codeblock festgelegt werden. Also bestimmte Regeln, nach denen der Codeblock ausgeführt werden soll.
```php?start_inline=true
declare (directive)
    statement
```

Es gibt derzeit nur drei Direktiven, von denen für uns lediglich die in PHP 7 eingeführte `strict_types`-Direktive interessant ist.

```php?start_inline=true
declare(strict_types=1);
```
Die Direktive muss das erste PHP-Statement in der PHH-Datei sein, in der sie gelten soll. Sie legt fest, dass bei allen Funktions**aufrufen** (nicht Deklarationen) in dieser Datei eine strenge Typisierung angewendet wird. Dies gilt für Funktionsparameter als auch für Rückgabewerte. Übergibt man einer Funktion den falschen Typ oder gibt man den falschen Typ zurück, bricht das Skript mit einem _Fatal Error_ ab.


## return
Ruft man eine Funktion, so wird die Kontrolle über die Ausführung des Skriptes diesem "Modul" übergeben. (Außer Funktionen gibt es noch andere Module). Mit einem `return`-Statement wird die Kontrolle wieder an das aufrufende Modul zurückgegeben. Das Programm nach der Stelle weiter, wo das Modul/die Funktion ausgeführt wurde.

Wird `return` in einer Funktion aufgerufen, wird diese Funktion sofort beendet und das Argument des returns wird zum Wert des Funktionsaufrufs. Der Funktionsaufruf ersetzt sich sozusagen mit dem Rückgabewert der Funktion.

Ruft man `return` aus dem globalen Scope auf, wird die Ausführung dieser Skript-Datei beendet. Wurde die Datei includet oder requiret, geht die Kontrolle wieder an die aufrufende Datei zurück.

Weitere Informationen zum zurückgeben von Werten finden sich [hier](http://php.net/manual/en/functions.returning-values.php).


## require[-once] / include[-once]
Die vier Strukturen include, require, include-once und require-once dienen alle dem selben Zweck: den Inhalt einer bestimmten Datei auszuwerten. Die Datei wird eingelesen und dann vom PHP Interpreter ausgewertet.

Während include lediglich eine Warnung ausgibt, wenn es die Datei nicht finden kann, bricht require das Skript mit einem _fatal error_ namens _E_COMPILE_ERROR_ ab.

Bei den "_once_"-Varianten beider Konstrukte überprüft PHP, ob diese Datei bereits includet oder requiret wurde. Ist dies der Fall, wird sie nicht ein zweites Mal ausgewertet.

PHP sucht folgendermaßen nach einer einzubindenden Datei:
1. Am angegebenen Dateipfad
1. Wurde kein Dateipfad angegeben, dann im _include_path_
1. Im Verzeichnis der aufrufenden Datei

Eine eingebundene Datei erbt den Gültigkeitsbereich für Variablen so, wie er in der Zeile war, von der aus eingebunden wurde. Alle Funktionen und Klassen, die in der eingebundenen Datei definiert wurden, sind hingegen im globalen Scope.

Wird eine Datei von innerhalb einer Funktion eingebunden, so verhält sich der eingebundene Code so, als befände er ebenfall innerhalb dieser Funktion.

```php?start_inline=true
// vars.php
$color = 'green';
$fruit = 'apple';

// test.php
function foo()
{
    global $color;
    include 'vars.php';
    echo "A $color $fruit";
}
foo();                    //=> A green apple
echo "A $color $fruit";   //=> A green
```

Bei einem Fehler gibt include "false" zurück. Wird eine Datei erfolgreich eingebunden, gibt include 1 zurück, es sei denn, aus der Datei selbst wird ein anderer Wert zurückgegeben. Mit einem return-Statement kann man aus einer eingebundenen Datei herausspringen und gegebenenfalls einen Wert zurückgeben.


## goto
![goto is baaaad!](../assets/img/fun_goto_is_bad.png)