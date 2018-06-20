---
layout: techdoc
title: Funktionen
order: 500
examples: true
exercises: true
solutions: true
---
* TOC
{:toc}

## Benutzerdefinierte Funktionen
Funktionen werden mit folgender (Pseudo)-Syntax definiert:
```php?start_inline=true
function foo($arg_1, $arg_2, /* ..., */ $arg_n)
{
    echo "Example function.\n";
    ...
    return $retval;
}
$val = foo(1, 2, ..., 3);
```

Eine Funktion kann beliebigen PHP-Code beinhalten. Es können sogar neue Funktionen und Klassen innerhalb einer Funktion definiert werden. Die Bezeichner von Funktionen folgen den gleichen Regeln wie alle anderen Labels in PHP.

```php?start_inline=true
function add(int $a, int $b) : int {
    return $a + $b;
}
echo add(46, 2);     //=> 48
```

Funktionen müssen nicht definiert werden, bevor man sie referenziert (zB. aufruft), außer wenn sie in einem Konditional (zB "if") definiert wurden.

```php?start_inline=true
function foo()
{
  function bar()
  {
    echo "I don't exist until foo() is called.\n";
  }
}

bar();   //=> Error: Call to undefined function
foo();
bar();   //=> OK
```

Alle Funktionen und Klassen befinden sich im globalen Scope (Gültigkeitsbereich). Sie können von außerhalb einer Funktion aufgerufen werden, auch wenn sie innerhalb einer Funktion definiert wurden, und umgekehrt.


## Funktionsargumente
Die Argumentliste einer Funktion ist eine durch Kommas getrennte Folge von Ausdrücken. Die Argumente werden von links nach rechts ausgewertet.

Um ein Argument per Referenz zu übergeben, muss bei der Funktionsdefinition vor den Namen des Arguments ein & gesetzt werden. Beim Aufruf der Funktion ist es nicht mehr explizit sichtbar, ob ein Parameter per Wert oder Referenz übergeben wird. Dies kann zu unerwartetem Verhalten führen.

Skalaren Argumenten können Standardwerte zugewiesen werden:
```php?start_inline=true
function getBeer(string $type = "Pilsner Urquell") : string
{
    return "Getting a mug of $type.\n";
}
echo getBeer();          //=> Getting a mug of Pilsner Urquell.
echo getBeer(null);      //=> Getting a mug of .
echo getBeer("Becks");   //=> Getting a mug of Becks.
```
Arrays und null können ebenfalls als Standardwerte verwendet werden. Es muss sich allerdings um einen konstanten Ausruck handeln.

Alle nicht-Standardwerte müssen vor allen Standardwerten übergeben werden.


Mit Typ-Deklarationen (type hints, hint = Hinweis) kann man zur Laufzeit sicherstellen, dass einem Parameter als Argument ein bestimmter Datentyp übergeben wird. Wird ein ungültiger Datentyp übergeben, quittiert dies PHP5 mit einem _fatal error_ während PHP 7 eine _TypeError_ Exception (Ausnahme) wirft.

Die Typ-Deklaration (type hint) wird dabei vor den Namen des Arguments gesetzt. Dabei existieren die Typen _bool, int, float, und string_ erst seit PHP 7.0, _callable_ seit PHP 5.4, _array_ seit PHP 5.1, _self_ oder der Name einer Klasse oder eines Interfaces seit PHP 5.0. 


## Rückgabewerte von Funktionen
Es können beliebige Typen aus Funktionen zurückgegeben werden, auch Arrays und Objekte. Da immer nur ein einziger Wert zurückgegeben werden kann, kann es deshalb sinnvoll sein, das Ergebnis in ein Array zu packen.
```php?start_inline=true
function small_numbers() : array
{
    return array(0, 1, 2);
}
list($zero, $one, $two) = small_numbers();
```

Ein `return` beendet sofort die Funktion und springt zum aufrufenden Konstrukt (meist eine Funktion oder ein `include`) zurück.

Wird kein `return` angegeben, gibt PHP aus der Funktion automatisch `null` zurück.

Es können auch Referenzen zurückgegeben werden. Dabei muss auch bei der Zuweisung des Rückgabewertes ein `&` verwendet werden.
```php?start_inline=true
function &returns_reference($someref)    // & markiert die Referenz
{
        return $someref;
}
$newref =& returns_reference();          // auch hier muss & verwendet werden
```

Seit PHP 7 können auch für Rückgabewerte Type-Hints, also Typhinweise, angegeben werden. Diese funktionieren genauso wie die Type-Hints für Funktionsparameter.

Wird in abgeleiteten Klassen eine Methode einer Elternklasse überschrieben, so muss die Methode der Kindklasse die selbe Typ-Deklaration für den Rückgabewert angeben, wie die Elternklasse.


## Rekursion
Eine rekursive Funktion ist eine Funktion, die sich selbst aufruft. Damit eine solche Funktion irgendwann damit aufhört, sich selbst aufzurufen, muss sie eine Abbruchbedingung enthalten und bei jedem Aufruf ihre Parameter ändern. Jede rekursive Funktion lässt sich auch mit einer Schleife darstellen. Oft ist die rekursive Schreibweise aber besser lesbar.
```php?start_inline=true
function multiply(int $a, int $b) : int
{
    if ($a === 0 || $b === 0){
        return 0;
    }
    elseif ($a == 1 || $b == 1) {
        return max($a, $b);
    }
    else {
        return $a + multiply ($a, $b - 1);
    }
}
echo multiply(3, 12);          //=> 36
```
Rekursive Funktionen mit einer Rekursionstiefe von über 100 oder 200 können unter umständen den [Stack](https://de.wikipedia.org/wiki/Stapelspeicher#Programmiersprachen) sprengen. 


## Strikte Typisierung (strict typing)
Strict mode, strict typing oder strikte Typisierung bedeutet, dass eine Funktion nur den in der Typ-Deklaration der Signatur angegebene Datentyp akzeptiert. Für falsche Typen wird eine Type-Error Exception geworfen. Die einzige Ausnahme ist, dass man einer Funktion, die Floats akzeptiert, auch ein Integer übergeben kann.

Strict typing gilt immer nur für Funktionsaufrufe in der Datei, in der es deklariert wurde und betrifft nur skalare Datentypen. Es steht ab PHP 7.0 zur Verfügung.

```php?start_inline=true
declare(strict_types=1);

function sum(int $a, int $b) : int
{
    return $a + $b;
}

var_dump(sum(1, 2));       //=> 3
var_dump(sum(1.5, 2.5));   //=> FatalError: Argument 1 passed to sum() must be
                           //   of the type integer, float given
```

## Variable Anzahl von Parametern
Seit PHP 5.6 kann mit `...$name` eine beliebige Anzahl an Funktionsparametern übergeben werden. Diese stehen dann innerhalb der Funktion als Array zur Verfügung.

In älteren Versionen von PHP kann der gleiche Effekt mit Hilfe folgender Funktionen erreicht werden:
func_num_args(), func_get_arg(), func_get_args().

```php?start_inline=true
function sum(int ...$numbers) : int     // PHP5.6+
{
    $acc = 0;
    foreach ($numbers as $n) {
        $acc += $n;
    }
    return $acc;
}
echo sum(1, 2, 3, 4);        //=>  10

function sum_old()                  // pre PHP5.6
{
    $acc = 0;
    foreach (func_get_args() as $n) {
        $acc += $n;
    }
    return $acc;
}

echo sum_old(1, 2, 3, 4);    //=>  10

```

Mit `...` kann auch ein Array "entpackt" werden. Dabei wird es in seine einzelnen Elemente zerlegt und diese werden der Funktion als einzelne Argumente übergeben.
```php?start_inline=true
function add(int $a, int $b) : int
{
    return $a + $b;
}
echo add(...[1, 2])."\n";     //=> 3
$a = [2, 3];
echo add(...$a);              //=> 5
```

Gemeinsam mit `...` können auch normale positionierte Argumente angegeben werden. Diese müssen jedoch vor dem `...` stehen. Die Argumente am Ende der Argumentliste, die zu keinem der positionierte Argumente passen, werden mit ins `...`-Array aufgenommen.

Vor dem `...` kann auch ein Type-Hint, eine Typ-Angabe, gemacht werden. In diesem Fall müssen alle Elemente des `...`-Arrays diesen Typ haben.

```php?start_inline=true
function total_intervals($unit, DateInterval ...$intervals)
{
    $time = 0;
    foreach ($intervals as $interval) {
        $time += $interval->$unit;
    }
    return $time;
}

$a = new DateInterval('P1D');                // 1 Tag
$b = new DateInterval('P2D');                // 2 Tage
echo total_intervals('d', $a, $b) . ' days'; // => 3 days
echo total_intervals('d', null);             // => TypeError: Argument 2 passed to total_intervals()
                                             //    must be an instance of DateInterval, null given
```


<!--
## TODO Variable Functions
http://php.net/manual/en/functions.variable-functions.php
-->


## Eingebaute Funktionen
PHP bringt von Haus aus bereits unzählige "eingebaute Funktionen" (built-in functions) und andere vordefinierte Konstrukte mit. Für manche dieser Funktionen muss PHP mit der entsprechenden Erweiterung kompiliert werden, sonst wird die Funktion nicht gefunden und es gibt es die berüchtigten "undefined function" Fehlermeldungen. Dies ist zB bei mysql_connect() der Fall, wenn PHP ohne MySQL-Unterstützung kompiliert wurde. Viele der Kern-Funktionen, wie zB String-Funktionen, sind jedoch Teil jeder PHP installation. 

Mit `phpinfo()` lässt sich herausfinden, mit welchen Erweiterungen PHP kompiliert wurde, und welche Erwiterungen als Module geladen sind.


## Funktionsdefinitionen lesen
Funktionsdefinitionen, Funktionsprototypen bzw. Funktionssignaturen helfen dabei, sich einen schnellen Überblick über eine Funktion zu verschaffen. Nehmen wir als Beispiel die Funktion [strlen()](http://php.net/manual/en/function.strlen.php)

```php?start_inline=true
strlen                                // der Name der Funktion

(PHP 4, PHP 5, PHP 7)                 // PHP-Versionen, in denen es die Funktion gibt
strlen -- Get string length           // Kurzbeschreibung der Funktion

Description
int strlen ( string $string )         // Datentypen der Argumente und des Rückgabewertes
                                      // Als Parameter akzeptiert die Funktion nur Strings
                                      // Die Funktion gibt ein Integer zurück

Returns the length of given string.   // Ausführliche Beschreibung der Funktion
```

Ein etwas komplexeres Beispiel:
```php?start_inline=true
bool in_array ( mixed $needle, array $haystack [, bool $strict = false ] )
```
Die Funktion in_array gibt einen Boolschen Wert zurück.

Der erste Parameter ($needle, Nadel) kann verschiedene Datentypen (mixed) haben. Die Dokumentation der Funktion erklärt, dass $needle vom Typ String, Integer, Float oder Array sein kann.

Der zweite Parameter ($haystack, Heuhaufen) ist das Array, in dem wir $needle suchen.

Der dritte Parameter ist optional (gekennzeichnet durch eckige Klammern []). Er heißt $strict und hat den Datentyp Boolean. Er ist standardmäßig false.


Ein Beispiel mit einer Referenz:
```php?start_inline=true
int preg_match ( string $pattern , string $subject [, array &$matches [, int $flags = 0 [, int $offset = 0 ]]] )
```
Hier bedeutet das & vor $matches, dass der Parameter als Referenz übergeben wird.

Verwendet man vordefinierte Funktionen, sollte man immer zwei Dinge berücksichtigen:
1. Was und welchen Datentyp gibt die Funktion zurück?
1. Gibt die Funktion eine Kopie des hineingegebenen Parameters zurück, oder modifiziert sie diesen direkt.

`str_replace()` "returns a string or an array with the replaced values", sprich, es wird eine Kopie des hineingegebenen Strings oder Arrays zurückgegeben, in der die entsprechenden Werte ersetzt wurden.

`sort()` "returns true on success or false on failure", sprich, es wird nur zurückgegeben, ob die Operation gelungen ist oder nicht. Der Parameter (Array) wird direkt verändert, was bedeutet, dass der Parameter per Referenz übergeben wird.

Beispiel einer Funktion, die ein Array "in place" sortiert, also keine Kopie erstellt. Als Sortierkriterium wird der Funktion eine Vergleichsfunktion (hier `cmp` genannt) übergeben:
```php?start_inline=true
function cmp($a, $b) {            // Die Callback-Sortier-Funktion
    if ($a == $b) {
        return 0;
    }
    return ($a < $b) ? -1 : 1;
}
$a = array(6, 3, 2, 5);           // $a ist unsortiert

usort($a, "cmp");                 // sortiert $a mit der Callback-Funktion
                                  // modifiziert $a direkt!
foreach ($a as $key => $value) {
    echo "$key:$value  ";         //=> 0:2  1:3  2:5  3:6
}
```


## Anonyme Funktionen
Anonyme Funktionen, auch Lambda Funktionen oder, im PHP-Jargon, Closures genannt, sind Funktionen ohne explizit zugewiesenen Namen. Sie sind die PHP-Entsprechung zu anonymen Funktionen in JavaScript, die dort häufig als Callback-Funktionen verwendet werden.

In PHP sind anonyme Funktionen mit Hilfe der Closure-Klasse implementiert. Gut zu wissen, für unsere Einsatzzwecke jedoch vollkommen irrelevant.

So könnten hätten wir im vorangegangenen Beispiel statt der `cmp` Funktion auch eine anonyme Funktion übergeben können:
```php?start_inline=true
$a = [6, 3, 2, 5];                         // Neue Schreibweise für Arrays
usort($a, function(int $a, $int b) : int { // Anonyme Callback-Sortier-Funktion
    if ($a == $b) {
        return 0;
    }
    return ($a < $b) ? -1 : 1;
});

foreach ($a as $key => $value) {
    echo "$key:$value  ";         //=> 0:2  1:3  2:5  3:6
}
```

Wie in JavaScript, können anonyme Funktionen in einer Variablen gespeichert werden und, wie im letzten Beispiel bereits gesehen, als Paramter an andere Funktionen übergeben werden.
```php?start_inline=true
$greet = function(string $name) {
    printf("Hello %s\r\n", $name);
};
echo $greet("Noam Chomsky");
```

Es können auch Variablen des umgebenden Scopes innerhalb einer anonymen Funktion verwendet werden. Diese müssen jedoch mit `use` angegeben werden. Der Wert der Variablen ist der Wert, den diese bei der Deklaration der Funktion hatte, und nicht der Wert, den sie hat, wenn die Funktion aufgerufen wird. Dies ist analog zu Closures in JavaScript zu sehen.
```php?start_inline=true
$message = 'Hurtz!';

$example = function () {
    var_dump($message);
};
$example();                              //=> PHP Notice:  Undefined variable

$example = function () use ($message) {  //   use-ing $message
    var_dump($message);
};
$example();                              //=> Hurtz!

$message = 'Der Wolf, das Lamm!';
$example();                              //=> Hurtz!
```

Eine detailliertere Beschreibung von anonymen Funktionen und deren Verwendung innerhalb von Klassen findet sich [hier](http://php.net/manual/en/functions.anonymous.php).