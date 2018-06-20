---
layout: techdoc
title: Variablen und Konstanten
order: 200
examples: true
exercises: true
---
* TOC
{:toc}

## Grundlagen
Eine [Variable](https://de.wikipedia.org/wiki/Variable_(Programmierung)) ist ein symbolischer Name, ein abstrakter Behälter für ein Datum, einen Datenwert. Im Gegensatz zu einer Konstanten, kann der Wert einer Variablen zur Laufzeit verändert werden.

Eine Variable besteht immer aus zwei Teilen:
1. Einem Bezeichner (Identifier) und
1. Einem Wert.

Eine Variable verknüpft also einen Namen mit einem Wert. Man kann sich eine Variable vorstellen, wie eine Kiste, auf der ein Zettel mit einem Namen klebt. PHP speichert all diese Namen und die Werte, auf die sie sich Beziehen, in der sogenannten Symboltabelle (symbol table).

Man unterscheidet in PHP zwischen zwei Arten von Variablen.
1. Eine Wertevariablen speichert einen Wert direkt. Die Variable ist sozusagen der Wert. Der Wert liegt selbst in der Kiste. Dies ist bei allen skalaren Datentypen der Fall.
2. Eine referenzielle Variable speichert nur die Speicheradresse des eigentlichen Wertes, sozusagen eine Referenz auf den eigentlichen Wert. In der Kiste liegt also nicht der Wert selbst, sondern ein Zettel, auf dem Steht, wo im Lager die gesuchten Daten zu finden sind. Dies ist in PHP zB bei Objekten der Fall.

### Bezeichner
Der Bezeichner einer Variable setzt sich aus einem Dollarzeichen (`$`) und dem Namen der Variablen zusammen. Dieser Name ist case-sensitive, es wird also zwischen Groß- und Kleinschreibung unterschieden.

Variablennamen folgen den gleichen Regeln, wie alle anderen Labels in PHP. Er beginnt mit einem Buchstaben oder einem Unterstrich (`_` underscore), gefolgt von einer beliebigen Anzahl Buchstaben, Ziffern und Unterstrichen. Die Buchstaben sollten ausschließlich dem [ASCII-Zeichensatz](https://en.wikipedia.org/wiki/ASCII#Character_set) entnommen werden.

Der Bezeichner `$this` hat in PHP eine besondere Bedeutung und kann deshalb nicht verwendet werden.

```php?start_inline=true
$var = 'Roy';
$Var = 'Black';
echo "$var, $Var";      // outputs "Roy Black"

$4site = 'kabutt';      // ungültig: beginnt mit einer Zahl
$_4site = 'not yet';    // gültig: beginnt mit einem Unterstrich
$täyte = 'mansikka';    // gültig: 'ä' ist ASCII Code 228
```

Variablen werden immer "by value" zugewisen. Das bedeutet, dass der Wert des Ausdrucks, der zugewiesen werden soll, kopiert wird. Nachdem der Wert einer Variable einer anderen Variable zugewiesen wurde, haben Veränderungen an einer der Variable keinerlei Auswirkungen auf den Wert der anderen.
```php?start_inline=true
$one = 1;
$two = $one;
$two =+ 10;
echo $one;      //=> 1
```

**Achtung**: Bei Objekten wird nur die Speicheradresse per Value kopiert. Diese Kopie der Adresse zeigt allerdings immer noch auf das selbe Objekt, nicht auf eine Kopie davon.

Will man "by reference" statt "by value" zuweisen, sprich, will man den Wert nicht kopieren, sondern lediglich einen weiteren Namen (alias) für eine Variable einführen, stellt man der Variablen, die zugewiesen werden soll, ein Kaufmanns-Und (&) voran.
```php?start_inline=true
$dog = 'Lassie';
$pal = &$dog;         // $pal und $dog zeigen beide auf den String 'Lassie'
$pal = 'Benji';
echo $dog;            //=> Benji
```

Beide Variablen zeigen hier auf den selben Wert, die selbe Speicheradresse, den selben Platz im Lager. Verändert man den Wert von einer, verändert sich auch der Wert der Anderen. Gerade beim Arbeiten mit PHP-eigenen Array-Funktionen sollte man hier vorsichtig sein, da manche das hinein gegebene Array direkt modifizieren, während andere eine Kopie erstellen, diese modifizieren und dann zurückgeben.

Werden Variablen nicht initialisiert, so nehmen sie unter bestimmten Umständen Standardwerte an.
* Boolean: false
* Integer/Float: 0
* String: "" (empty string)
* Array: [  ] (empty array)

```php?start_inline=true
echo($unset_bool ? "true\n" : "false\n");    //=> false
echo $unset_int += 25;                       //=> 25 (0 + 25)
```
Auf die Standardwerte von nicht initialisierten Variablen sollte man sich auf keinen Fall verlassen. Will man wissen, ob eine Variable bereits initialisiert wurde, kann man hierzu das [isset()](http://php.net/manual/en/function.isset.php) Sprachkonstrukt verwenden.

## Vordefinierte Variablen
PHP stellt viele vordefinierte Variablen zur Verfügung. Die meisten davon sind vom verwendeten Webserver, der PHP-Version, der Konfiguration und anderen Faktoren abhängig.

Auf die Wichtigsten wird in einem [eigenen Kapitel](vordefinitierte-variablen.html) eingegangen.

Eine Übersicht aller verdefinierten oder reservierten Variablen findet man in der [PHP-Dokumentation](http://php.net/manual/en/reserved.variables.php).

**Vorsicht:** Seit PHP 4.2 ist der Standardwert für die Konfigurationseinstellung `register_globals: off`. So kann auf Server-Variablen nur mit zB  `$_SERVER['DOCUMENT_ROOT']` zugegriffen werden, nicht aber mit `$DOCUMENT_ROOT`. GET-Parameter können nicht mehr direkt über zB `$myParam` angesprochen werden, sondern müssen über `$_GET['myParam']` zugegriffen werden.

Die oben erwähnten Variablen `$_SERVER` und `$_GET`, genau wie `$_POST, $_SESSION, $_COOKIE` und `$_FILES`, sind sogenannte "superglobale" Variablen. Sie stehen in allen Scopes (Gültigkeitsbereichen) zur Verfügung.

## Gültigkeitsbereich von Variablen (scope)
In PHP haben Variablen nur einen einzigen Gültigkeitsbereich. Dieser kann sich auch über Dateigrenzen hinweg erstrecken.

Variablen, die außerhalb aller Funktionen und Klassendefinitionen deklariert werden, sind im globalen Gültigkeitsbereich (global scope).

Benutzerdefinierte Funktionen erzeugen einen eignen, lokalen Gültigkeitsbereich (local scope). Jede Variable, die innerhalb einer Funktion benutzt wird, ist auf den lokalen Scope dieser Funktion beschränkt.
```php?start_inline=true
$a = 1;              // global
function test()
{ 
    echo $a;         // local
}
test();              //=> gibt nichts aus
```

Um auf von Funktionen aus auf globale Variablen zugreifen zu können, müssen diese innerhalb der Funktion als global deklariert werden.
```php?start_inline=true
$a = 1; $b = 2;

function sum()
{
    global $a, $b;
    $b = $a + $b;
}

sum();
echo $b;             //=> 3
```

Eine weitere Möglichkeit, auf globale Variablen zuzugreifen, ist das verdefinierte $GLOBALS array. Es ist assoziatives Array, in dem der Key der Name der globalen Variable ist und der Value der Inhalt diese Variablen. $GLOBALS ist eine Superglobale.

Die meisten vordefinierten Variablen sind keine Superglobalen und müssen deshalb in Funktionen mit global deklariert werden.
```php?start_inline=true
global $HTTP_POST_VARS;
echo $HTTP_POST_VARS['name'];
```

### Statische Variablen
Eine statische Variable ist eine Variable, der "statisch" Speicher zugewiesen wurde. Das bedeutet, dass sie während des gesamten Programmlaufs existiert. Sie verliert ihren Wert nie. Sie steht damit im Gegensatz zu automatischen Variablen, die auf dem Stack gespeichert werden, und zu Objekten, die auf dem Heap gespeichert werden.

Die "Lebensdauer" einer Variablen darf nicht mit deren Gültigkeitsbereich verwechselt werden. Eine Variable kann an einer bestimmten Stelle des Programms nicht zugänglich sein, aber trotzdem noch existieren.

Auf statische Variablen kann nur innerhalb des lokalen Gültigkeitsbereichen der Funktion zugegriffen werden, in der sie deklariert wurden. Sie verlieren allerdings nicht ihren Wert, wenn das Programm den Scope der Funktion verlässt.
```php?start_inline=true
function test1()
{
    $a = 0;
    echo $a++;
}

function test2()
{
    static $a = 0;
    echo $a++;
}
test1();         //=> 0, 0, 0
test2();         //=> 0, 1, 2
```

Statischen Variablen können nur Literale zugewiesen werden, seit PHP 5.6 auch Ergebnisse von Ausdrücken. Rückgabewerte von Funktionen können jedoch nicht zugewiesen werden, da statischen Variablen wird bereits beim Kompilieren angelegt werden, und nicht erst zur Laufzeit des Programms, während welcher Funktionen ausgeführt werden können..

```php?start_inline=true
function foo()
{
    static $int = 0;
    static $int = 1+2;        // seit PHP5.6
    static $int = sqrt(121);  // Fehler!
}
```

<!-- TODO Variable Variablen
http://php.net/manual/en/language.variables.variable.php
-->

<!-- TODO Variablen aus externen Quellen
http://php.net/manual/en/language.variables.external.php
-->

## Konstanten (constants)
Konstanten sind Namen bzw. Bezeichner für einfache Werte. Diese Werte können während das Programm ausgeführt wird nicht verändert werden.

Konstanten sind case-sensitive und werden nach Konvention ganz mit Großbuchstaben geschrieben. Der Name von Konstanten folgt den gleichen Regeln wie jedes andere Label in PHP.

Konstanten befinden sich im "global scope".
```php?start_inline=true
define("FOO",     "something");
define("FOO2",    "something else");
define("FOO_BAR", "something more");
```

### Syntax
Konstanten werden mit Hilfe der `define()`-Funktion oder, außerhalb von Klassendefinitionen, auch mit dem `const` Schlüsselwort (keyword) deklariert.

Mit `define()` können Konstanten mit einem beliebigen Ausdruck definiert werden.

Mit dem `const` Keyword können nur Skalare zugewiesen werden (boolean, integer, float und string). Seit PHP 5.6 können auch skalare Ausrücke und Array-Konstanten verwendet werden. Außerdem müssen mit `const` definierte Konstanten im äußersten Gültigkeitsbereichen (Top-Level Scope) erstellt werden, da sie beim Kompilieren angelegt werden.

Den Wert einer Konstanten erhält man, indem man ihren Namen angbit (kein `$`).

Mit `get_defined_constants()` erhält man eine Liste aller definierten Konstanten.

```php?start_inline=true
const CONSTANT = 'Hello World';                     // seit PHP 5.3
const ANOTHER_CONST = CONSTANT.'; Goodbye World';   // seit PHP 5.6
const ANIMALS = array('dog', 'cat', 'bird');        // seit PHP 5.6
define('ANIMALS', array('dog', 'cat', 'bird'));     // seit PHP 7
```

## Magische Konstanten
In PHP stehen in jedem Skript eine große Anzahl vordefinierter Konstanten zur Verfügung.

Es gibt neun magische Konstanten, die abhängig davon, wo sie verwendet werden, verschiedene Werte haben. Sie werden alle beim Kompilieren aufgelöst.

Eine Liste aller magischen Konstanten findet sich [hier](http://php.net/manual/en/language.constants.predefined.php), eine Liste aller vordefinierten Konstanten [hier](http://php.net/manual/en/reserved.constants.php).