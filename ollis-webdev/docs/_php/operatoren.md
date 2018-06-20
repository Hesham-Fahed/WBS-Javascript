---
layout: techdoc
title: Operatoren
order: 300
examples: true
exercises: true
---
* TOC
{:toc}

## Übersicht
Ein Ausdruck (Expression) ist vereinfacht gesagt alles, was einen Wert hat oder zu einem Wert auswertet. PHP ist eine Sprache, in der fast alles ein Ausruck ist.

Einem Operator übergibt man nun einen oder mehrere dieser Ausrücke und erhält einen neuen Ausdruck zurück. Oft benutzt man statt "Ausdruck" den Begriff "Wert". Somit haben Operatoren vieles mit Funktionen gemeinsam. Ihre Syntax (Schreibweise) ist jedoch anders.

Ein Beispiel eines arithmetischen Operators wäre zB das Plus "+". Ein Plus nimmt zwei Operanden und liefert als Ergebnis die Summe der beiden Operanden. Per Konvention schreibt man den Operator zwischen die beiden Operanden, also zB. 3 + 4, was schließlich zu 7 auswertet, also wieder einem Ausruck.

PHP Operatoren können unär, binär oder ternär sein und somit einen, zwei oder drei Operanden verlangen. Die meisten Operatoren sind binär.

Die meisten Operatoren werden in Infixnotation geschrieben. Das beudeutet, dass der Operator zwischen den beiden Operanden steht, wie Zb bei 3 + 4 oder "MC " . "Hammer".

Es gibt aber auch eine Prefixnotation, bei der der Operator vor seinen Operanden steht, wie zB bei `++$a` oder `-3`. Der Ausdruck 3 + 4 wäre in Prefixnotation + 3 4. Die Programmiersprachen Tcl und Lisp verwenden ausschließlich Prefixnotation.

Außerdem gibts es eine Postfixnotation. Hier steht der Operator hinter allen Operanden, wie bei `$a++`. 3 + 4 in Postfixnotation wäre 3 4 +.

Gäbe es für die Addition eine Funktion, würde man sie bestimmt so aufrufen: `add(3, 4)`. Man könnte dies als eine Art Infixnotation ansehen. So gesehen sind viele Operatoren nichts anderes, als eine besondere Art von Funktion.


## Rangfolge (precedence) und Assoziativität
Die Rangfolge der Operatoren gibt an, wie "eng" sie ihre Operanden binden. Eng bindende Operatoren werden vor "lose" bindenden ausgeführt.

Haben zwei Operatoren die gleiche Rangfolge, so gibt die Assoziativität an, wie sie gruppiert werden. Bei linksassoziativen Operatoren wird von links nach rechts ausgeführt, bei rechtsassoziativen von rechts nach links.

Um die Lesbarkeit von komplexeren Ausdrücken zu verbessern, können Klammern gesetzt werden, selbst wenn diese nicht Nötig wären.

Eine Übersicht der Rangfolge und Assoziativität von Operatoren findet man [hier](http://php.net/manual/en/language.operators.precedence.php).


## Arithmetische Operatoren
Arithmetische Operatoren (von griechisch Arithmos: Zahl) sind die normalen Rechenoperatoren.

Addition (plus, +), Subtraktion (minus, -), Multiplikation (mal, *) und Division (durch, /) sollten bekannt sein. 

Modulo (%) ist der Rest einer ganzzahligen Division. (11/4 = 2, Rest 3)
Potenzierung (\*\*) gibt es seit PHP 5.6. `2**3` bedeutet 2 hoch 3, also `2 * 2 * 2`.

Als unärer Operator vorangestellt gibt + und - das Vorzeichen einer Zahl an.

Die Division (/) gibt auch nicht ganzzahlige Werte, also Kommazahlen zurück. Ganzzahlige Division erreicht man mit [intdiv()](http://php.net/manual/en/function.intdiv.php).

Modulo konvertiert seine Operanden vor der Berechnung zu Integer (abgerundet). Sonst veruscht PHP hier immer, beide Operanden in Integers oder Float zu konvertieren.

```php?start_inline=true
echo (2 ** 10);     //=> 1024
echo (5 % 3);       //=> 2
echo (-5 % 3);      //=> -2
```

### Inkrement/Dekrement Operator
Diese Operatoren (`++, --`) können nur mit Zahlen und Strings verwendet werden. 

`++` addiert 1 zur Variable hinzu, `--` subtrahiert 1. 

Vorangestellt wird zuerst der Operator ausgeführt und dann der Wert zurückgegeben, nachgestellt ist es umgekehrt.
```php?start_inline=true
$a = 0;
echo $a++;     //=> 0, $a ist nun 1
echo ++$a;     //=> 2, $a ist nun 2
```


## Zuweisung
Der Zuweisungsoperator (assignment operator) ist das Gleichheitszeichen (`=`). Er weist einer Variable einen Ausdruck zu. Der Wert der Zuweisung ist der zugewiesene Wert.
```php?start_inline=true
echo ($value = 12);  //=> 12
```

Es gibt außerdem für viele Operatoren eine Kurzschreibweise, mit der eine Operation und eine Zuweisung auf einmal ausgeführt werden kann: `$var1 OPERATOR= $var2`.
Dies ist Äquivalent zu: `$var1 = $var1 OPERATOR $var2`.
```php?start_inline=true
$a += $b     $a = $a + $b    Addition
$a .= $b     $a = $a . $b    Konkatenierung (Aneinanderreihung)
```

Alle Werte außer Objekte werden immer "by value", also per Wert zugewiesen. Es wird also immer eine Kopie des Wertes erstellt.

Objekte werden "by reference", also per Referenz übergeben. Die Variable wird also lediglich ein Name für das Objekt. Um ein Objekt zu kopieren, kann das `clone` keyword benutzt werden.

Es kann auch explizit per Referenz zugewiesen werden, indem man der Variablen, die zugewiesen werden soll, ein Kaufmannsund (ampersand, `&`) voranstellt. Nach dem Ausruck `$var = &$othervar` sind $var und $othervar lediglich verschiedene Namen für den selben Speicher. Weist man `$var` einen neuen Wert zu, so spiegelt sich dieser Wert auch in `$othervar` wieder.

```php?start_inline=true
// 
$day = "Monday";
$by_value = $day;
$by_reference = &$day;
echo $by_reference;         //=> Monday
$by_value = "Montag";
echo $day;                  //=> Monday
$by_reference = "Dienstag";
echo $day;                  //=> Dienstag
echo $by_value;             //=> Montag
```

## Bitweise Operatoren
Bitweise Operatoren erlauben die Manipulation der einzelnen Bits eines Integers.

Sie spielen in diesem Kurs keine Rolle und können bei Interesse [hier](http://php.net/manual/en/language.operators.bitwise.php) nachgeschlagen werden.


## Vergleichsoperatoren
Vergleichsoperatoren erlauben es, wie der Name schon sagt, zwei Werte miteinander zu vergleichen. Der Rückgabewert ist immer ein Wahrheitswert, also `true` oder `false`.

Eine Beschreibung aller Vergleichsoperatoren findet sich [hier](http://php.net/manual/en/language.operators.comparison.php), Tabellen zum Vergleich verschiedener Datentypen sind [hier](http://php.net/manual/en/types.comparisons.php).

### Besonderheiten
Ein normaler Vergleich auf Äquivalenz (was in der Mathematik mit einem einfachen `=` ausgedrückt wird), muss in PHP mit zwei oder drei Gleichheitszeichen geschrieben werden.

`==` versucht vor dem Vergleich beide Operanden zum gleichen Typ zu konvertieren, wohingegen bei `===` beide Operatoren vom selben Typ sein müssen.

```php?start_inline=true
$a == $b	// ist gleich, wenn $a und $b nach der Typkonvertierung den gleichen Wert haben
$a === $b	// ist gleich, wenn $a und $b gleich sind und den gleichen Datentyp haben
```
Analog drücken `!=` und `!==` Ungleichheit aus.

**Vorsicht:** Floats sollten nie auf Gleichheit überprüft werden, da ihre Repräsentation a priori ungenau ist und man unerwartete Ergebnisse erhält. So ist zB 1/3 nicht gleich 1 - 2/3.

Der _Spaceship Operator_ (`<=>`, Raumschiff-Operator) ist eine Neuerung von PHP 7. Er vergleicht zwei Zahlen miteinander und gibt eine Zahl kleiner 0, exakt 0, oder größer 0 zurück, wenn der linke Operand kleiner, gleich, oder größer dem Rechten ist.
```php?start_inline=true
echo 3<=>5;     //=> -1
echo 5<=>5;     //=> 0
echo 7<=>5;     //=> 1
```

Ein weiterer Vergleichsoperator ist der ternäre Operator (?:).

Er nimmt als ersten Operanden einen Wahrheitswert und gibt bei true den zweiten Operanden zurück, bei false den dritten.
```php?start_inline=true
$compare = ($a < $b) ? "kleiner" : "größer oder gleich";
$action = (empty($_POST['action'])) ? 'default' : $_POST['action'];
```

Seit PHP 7 gibt es den _null coalescing operator_ `??`. Er gibt seinen ersten Operanden zurück, wenn dieser einen Wert hat (nicht null ist), sonst den zweiten Operanden.
```php?start_inline=true
$action = $_POST['action'] ?? 'default';
```

Hilfreich ist, dass `??` keine Fehlermeldung (Level: notice) ausgibt, wenn es die Variable auf der linken Seite nicht gibt.


## Operatoren zur Fehlerkontrolle
PHP hat nur einen einzigen Operator, der zur Fehlerkontrolle dient: `@`

Er steht vor einem Ausdruck und bewirkt, dass sämtliche Fehlermeldungen, die dieser Ausdruck verursachen würde, unterdrückt werden. Als solcher sollte dieser Operator tunlichst vermieden werden.


## Operator zur Programmausführung (exec)
PHP versucht, mit Backticks umschlossene Strings (`$myString`) als Shell-Befehl auszuführen. Die Ausgabe des Shell-Befehls wird zum Wert des Ausdrucks. Der Backtick-Operator ist identisch zu `shell_exec()`.
```php?start_inline=true
$output = `ls -l`;
echo "<pre>$output</pre>";
```

Im __safe mode__ kann der Backtick-Operator nicht verwendet werden.


## Logische Operatoren
Logische Operatoren arbeiten mit Boolschen Werten, also true und false. Ihr Ergebnis ist immer ein Boolean. Es gibt vier logische Operatoren: and, or, not und xor.

Man kann sich leicht merken, dass logisches __UND__ nur wahr ist, wenn beide Operanden wahr sind, und dass logisches __ODER__ nur falsch ist, wenn beide Operanden falsch sind. __XOR__ ist wahr, wenn beide Operanden verschieden sind. __NICHT__ ist wahr, wenn der Operator falsch ist.

`&&` und `and`, bzw `||` und `or` unterscheiden sich nur in ihrer Rangfolge. `&&` und `||` binden stärker als `and` und `or`.

PHP versucht hier immer, die beiden Operanden in Booleans zu konvertieren.

```php?start_inline=true
echo true  and true;           //=> 1
echo false and true;           //=> 0
echo false  or true;           //=> 1
echo false  or false;          //=> 0
echo true xor true;            //=> 0
echo true xor false;           //=> 1
echo !false;                   //=> 1
echo !true xor false and true  //=> 0
echo !-1;                      //=> 0
```

Wahrheitstabellen finden sich auf [Wikipedia](https://de.wikipedia.org/wiki/Wahrheitstabelle).


## String Operatoren
Es gibt zwei String-Operatoren zur Konkatenierung: `.` und `.=`

Konkatenierung bedeutet lediglich, dass zwei Strings zu einem zusammengefügt werden. PHP versucht dabei, beide Operanden in Strings zu konvertieren.
```php?start_inline=true
$a = "Led";
echo $a .= " Zeppelin";      //=> "Led Zeppelin"
```

## Array Operatoren
Arrays können mit `==`, `===`, `!=` und `!==` darauf überprüft werden, ob sie die gleichen Key-Value-Paare enthalten.

Der `+` Operator gibt die Schnittmenge von zwei Arrays zurück. Haben beide Arrays Elemente mit gleichem Key, so wird der Value des linken Operanden übernommen.


## Typ-Operatoren
Mit `instanceof` kann überprüft werden, ob eine PHP-Variable ein instanziiertes Objekt einer bestimmten Klasse ist.
```php?start_inline=true
class MyClass { }
class NotMyClass { }
$a = new MyClass;
var_dump($a instanceof MyClass);       //=> bool(true)
var_dump($a instanceof NotMyClass);    //=> bool(false)
```

Dies funktioniert auch für Kindklassen.
```php?start_inline=true
class MyChildClass extends MyClass { }
$a = new MyChildClass;
var_dump($a instanceof MyChildClass);  //=> bool(true)
var_dump($a instanceof MyClass);       //=> bool(true)
```