---
layout: techdoc
title: Objektorientierung
order: 1000
examples: true
exercises: true
solutions: true
---
* TOC
{:toc}

Seit PHP5 besitzt PHP ein vollständiges und performantes Objekt-Modell.

## Grundlagen
Allgemein ist immer zu beachten, dass PHP Objekte als Referenzen speichert. Eine Variable, die ein Objekt speichert, enthält also keine Kopie des gesamten Objektes, sondern lediglich eine Referenz auf das Objekt. Dies ist wichtig, wenn Objekte an Funktionen übergeben werden.

Eine Klasse wird mit dem Schlüsselword `class` und dem vollständigen Bezeichner der Klasse definiert, gefolgt vom eigentlichen Inhalt der Klasse, welcher in geschweiften Klammern stehen muss.

Wie immer, kann jedes valide PHP-Label als Klassenname verwendet werden.

_Anmerkung:_ Obwohl Klassennamen (fast) frei wählbar sind, ist es in PHP Konvention, Camel-Case zu verwenden, also den ersten Buchstaben jedes Wortes des Klassennamens groß zu schreiben und nicht durch Unterstriche (underscore) zu trennen. zB BeerTapController, nicht etwa beerTapController oder beer_tap_controller.

Die Variablen einer Klasse nennt man Eigenschaften (properties), die Funktionen einer Klasse Methoden (methods).
```php?start_inline=true
class SimpleClass
{
    public $var = 'a default value';      // property
    public function displayVar()          // method
    {
        echo $this->var;
    }
}
```
_Anmerkung:_ In PHP ist es Konvention, Methodennamen in Studly-Case zu schreiben, also den ersten Buchstaben klein zu schreiben, jeden weiteren ersten Buchstaben eines Wortes jedoch groß. zB: myCrazyFunction oder jump, aber nicht MyCrazyFunction, my_crazy_function, Jump oder JuMp.

Eine Klasse wird mit dem Schlüsselwort `new` instanziiert. Klassen müssen definiert sein, bevor sie instanziiert werden können. Befindet sich die Klasse in einem Namespace, so muss bei der Instanziirung der vollständige Name der Klasse angegeben werden.

Wird eine Methode im Kontext einer Objektinstanz aufgerufen, steht die Pseudo-Variable `$this` zur Verfügung. `$this` bezieht sich immer auf die Objektinstanz, über welche die Methode aufgerufen wurde.

```php?start_inline=true
class A
{
    function foo()
    {
        if (isset($this)) {
            echo '$this is defined.\n';
        } else {
            echo "$this is not defined.\n";
        }
    }
}

$a = new A(); //=> Instanziierung der Klasse A
$a->foo();    //=> $this is defined     (Aufruf über Objekt(instanz))
A::foo();     //=> $this is not defined (Statischer Aufruf über die Klasse)
```


### Eigenschaften und Methoden
Die Eigenschaften und Methoden von Klassen befinden sich in verschiedenen Namespaces. Es ist also möglich eine Eigenschaft und eine Methode mit identischen Bezeichnern zu haben. Ob dies sinnvoll ist, sei dahingestellt. Ob gegebenenfalls die Eigenschaft oder die Methode benutzt wird, hängt allein vom Kontext ab, in dem der Bezeichner steht.
```php?start_inline=true
class Foo
{
    public $bar = 'property';
    public function bar()
    {
        return 'method';
    }
}
$obj = new Foo();
echo $obj->bar, ", ", $obj->bar();     //=> property, method
```

Eine Klasse kann die Methoden und Eigenschaften einer anderen Klasse "erben" (inherit), indem man in der Klassendefinition das Schlüsselwort `extends` verwendet. Eine Klasse kann immer nur von einer einzigen Klasse erben.

Diese vererbten Methoden und Eigenschaften können "überschrieben" werden, indem man ihnen in der Kindklasse den gleichen Namen gibt, wie in der Elternklasse. Wurden Type-Hints angegeben, müssen auch diese übereinstimmen (Ausnahme: Konstruktor). Wurde die Methode in der Elternklasse als "final" definiert, kann sie nicht überschrieben werden. Überschriebene Methoden einer Elternklasse können mit dem Scope-Resolution-Operator (::) angesprochen werden.

Anmerkung: Die deutsche Übersetzung "überschreiben" ist hier nicht ganz richtig. To override bedeutet eigentlich "sich über jdn/etw hinwegsetzen". Die Methode der Elternklasse wird also nicht wirklich überschrieben, sondern lediglich von der Kind-Methodeie "verdeckt".
```php?start_inline=true
class ChildClass extends ParentClass
{
    // Eltern-Methode überschreiben
    function displayVar()
    {
        // Eltern-Methode explizit aufrufen
        parent::displayVar();
    }
}

$extended = new ChildClass();
$extended->displayVar();
```

Seit PHP5.5 können mit dem Schlüsselwort `class` auch Namen aufgelöst werden. `ClassName::class` gibt den vollständigen Namen der Klasse "ClassName" als String zurück. Dies kann bei der Verwendung von Namespaces hilfreich sein.

```php?start_inline=true
namespace NS
{
    class ClassName { }
    echo ClassName::class;     //=> NS\ClassName
}
```
Beachte, dass der Klassennamen beim Kompilieren aufgelöst wird, also bevor der Autoloader die Klassendefinitionen geladen hat. Es wird keine Fehlermeldung ausgegeben.


## Eigenschaften
Variablen, die innerhalb einer Klasse definiert werden, heißen Eigenschaften (Properties, manchmal auch Attribut oder Feld/Field) der Klasse. Sie werden mit einem der Schlüsselwörter "public", "protected", oder "private", gefolgt von einer normalen Variablendefinition angegeben. Eigenschaften können dabei auch initialisiert werden, jedoch nur mit einem konstanten Wert - also mit einem Wert, der beim Kompilier-Schritt bekannt ist.

Anmerkung: Um Rückwärtskompatibel zu bleiben, können in PHP5 Eigenschaften auch mit "var" angegeben werden. Die Eigenschaft wird dann als "public" angesehen.

Auf nicht-statische Eigenschaften kann innerhalb von Klassen-Methoden mit dem Objekt-Operator `->` zugegriffen werden: `$this->property`. Auf statische Eigenschaften greift man mit `::` zu: self::$property (beachte die Position des $-Zeichens).

$this steht in allen Klassen-Methoden zur Verfügung, sofern diese in einem Objekt-Kontext aufgerufen wurden (also nicht statisch). $this bezieht sich (in den meisten Fällen) auf die Objekt-Instanz, über die die Funktion aufgerufen wurde.
```php?start_inline=true
class MyClass
{
   public $var1 = 'hello ' . 'world';
   public $var2 = 1+2;
   public $var6 = myConstant;
   public $var7 = array(true, false);

   // ungültige Deklarationen, beim Kompilieren nicht bekannt
   public $var5 = self::myStaticMethod();
   public $var6 = $myVar;
}
```
Für Klassen und Objekte gibt es einige hilfreiche Funktionen. Eine Liste findet sich [hier](http://php.net/manual/en/ref.classobj.php).


## Klassen-Konstanten
Klassen können auch klasseneigene Konstanten enthalten. Sie sind Bestandteil der Klasse selbst, nicht der einzelnen Instanzen. Konstanten werden ohne vorgestelltes $-Zeichen deklariert und verwendet. Ihre Sichtbarkeit ist standardmäßig "public".
```php?start_inline=true
class MyClass
{
    const CONSTANT = 'constant value';

    function showConstant()
    {
        echo  self::CONSTANT . "\n";     // Konstanten sind statisch, deshalb: self statt $this
    }
}
echo MyClass::CONSTANT;         // Scope-Resolution-Operator

$classname = "MyClass";         // Variabler Klassenname
echo $classname::CONSTANT;

$class = new MyClass();         // Instanziierung der Klasse
$class->showConstant();         // Zugriff über Objektinstanz
```

Ab PHP7.1 kann auch bei Konstanten die Sichtbarkeit angegeben werden:
```php?start_inline=true
class Foo
{
    public const BAR = 'bar';    // In PHP7.0: syntax error, unexpected 'const'
    private const BAZ = 'baz';
}
echo Foo::BAR, PHP_EOL;    //=> bar
echo Foo::BAZ, PHP_EOL;    //=> Fatal error: ... Cannot access private const Foo::BAZ ...
```


## Autoloading
Oft wird für jede Klassendefinition eine eigene PHP-Datei angelegt. Nervig hierbei ist die immer länger werdende Liste an `include` Anweisungen (eine pro Klasse) am Anfang eines Skriptes, dass diese Klassen verwendet.

Seit PHP5 ist dies nicht mehr nötig. Mit der Funktion [spl_autoload_register()](http://php.net/manual/en/function.spl-autoload-register.php) können Autoloader registriert werden, so dass Klassen und Interfaces automatisch geladen werden können, sofern sie noch nicht definiert wurden. (In älteren PHP-Versionen wurde die Funktion "__autoload()" verwendet. Diese sollte aktuell nicht mehr eingesetzt werden.) 

Beachte: Autoloading steht im interaktiven CLI (command line interface, Kommandozeilenmodus) nicht zur Verfügung.
```php?start_inline=true
spl_autoload_register(function ($class_name)
{
    include $class_name . '.php';
});

$obj  = new MyClass1();   // Versucht von MyClass1.php die Klasse MyClass1 zu laden
$obj2 = new MyClass2();   // Das Gleiche für MyClass2.php und MyClass2
```

Beispiel mit Exception:
```php?start_inline=true
spl_autoload_register(function ($name)
{
    echo "Want to load $name.\n";                 //=> Want to load NonLoadableClass.
    throw new Exception("Unable to load $name.");
});

try {
    $obj = new NonLoadableClass();
} catch (Exception $e) {
    echo $e->getMessage(), "\n";       //=> Unable to load NonLoadableClass.
}
```

## Konstruktoren und Destruktoren
### Konstruktor
```php?start_inline=true
void __construct ([ mixed $args = "" [, $... ]] )  // void bedeutet hier: "kein Rückgabewert"
```
Die Konstruktor-Methode einer Klasse wird jedes Mal ausgeführt, wenn ein neues Objekt instanziiert wird. Sie dient der Initialisierung des Objektes, um es in einen Zustand zu bringen, in dem es verwendet werden kann.

Achtung: Die Konstruktoren von Eltern-Klassen werden nicht automatisch aufgerufen. Um diese auszuführen muss im Kind-Konstruktor explizit `parent::__construct()` ausgeführt werden. Definiert die Kind-Klasse keinen Konstruktor, erbt sie diesen gegebenenfalls von der Eltern-Klasse (sofern er nicht private ist).
```php?start_inline=true
class BaseClass
{
   function __construct()
   {
       print "BaseClass constructor\n";
   }
}

class SubClass extends BaseClass
{
   function __construct()
   {
       parent::__construct();
       print "SubClass constructor\n";
   }
}

class OtherSubClass extends BaseClass
{
    // inherits BaseClass's constructor
}

$obj = new BaseClass();     //=> BaseClass constructor
$obj = new SubClass();;     //=> BaseClass constructor SubClass constructor
$obj = new OtherSubClass(); //=> BaseClass constructor
```

### Destruktor
```php?start_inline=true
void __destruct ( void )     // Will kein Argument, gibt nichts zurück
```
Die Destruktor-Methode wird aufgerufen, sobald das Objekt keine Referenzen mehr hat, sprich, sobald kein Bezeichner (Variable oder Referenz) mehr existiert, über den auf das Objekt zugegriffen werden könnte, oder, während des Shutdowns, sprich, am Ende des Skriptes.
```php?start_inline=true
class MyClass
{
   function __construct()
   {
       print "In constructor\n";
       $this->name = "MyClass";
   }

   function __destruct()
   {
       print "Destroying " . $this->name . "\n";
   }
}

$obj = new MyClass();    // erst: In constructor, dann: Destroying MyClass
```

Anmerkung: Im Interaktiven Modus (php -a) ist der Aufruf des Destruktors schön zu beobachten. Wenn die Klasse mit "new" instanziiert wird, erscheint "In constructor" in der Ausgabe. Erst wenn man explizit `unset($obj)` ausführt oder die interaktive Sitzung mit STRG-c beendet, wird "Destroying MyClass" ausgegeben.

Kind- und Eltern-Destruktoren verhalten sich genau so wie ihre Konstruktoren-Gegenstücke.

**Achtung:** Terminiert man das Skript mit `exit()`, werden die Destruktoren nicht mehr ausgeführt. Außerdem können in Destruktoren keine Exceptions geworfen werden.

## Sichtbarkeit
Die Sichtbarkeit eines Properties (Eigenschaft), seit PHP7.1 auch die von Methoden und Konstanten, wird festgelegt, indem man der Deklaration eines der Schlüsselwörter "public, protected oder private" voranstellt.

* public - Zugriff von überall
* protected - Zugriff nur von innerhalb der Klasse selbst oder einer Kind-Klasse
* private - Zugriff nur von innerhalb der Klasse selbst

```php?start_inline=true
class MyClass
{
    public $public = 'Public';
    protected $protected = 'Protected';
    private $private = 'Private';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj = new MyClass();
echo $obj->public;       //=> Public
echo $obj->protected;    //=> Fatal Error
echo $obj->private;      //=> Fatal Error
$obj->printHello();      //=> Public Protected Private

class MyClass2 extends MyClass
{
    public $public = 'Public2';
    protected $protected = 'Protected2';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj2 = new MyClass2();
echo $obj2->public;       //=> Public
echo $obj2->protected;    //=> Fatal Error
echo $obj2->private;      //=> Undefined
$obj2->printHello();      //=> Public2 Protected2 Undefined
```

Seit PHP7.1 können auch Klassen-Konstanten und Klassen-Methoden mit einer Sichbarkeit versehen werden. Der Standardwert ist bei beiden "public". Die Zugriffsrechte sind hier analog zu den oben erklärten Eigenschaften. Einige Beispiele finden sich [hier](http://php.net/manual/en/language.oop5.visibility.php).

## Sichtbarkeit zwischen Objekten
Objekte des gleichen Datentyps können gegenseitig auf ihre "private" und "protected" Eigenschaften zugreifen, obwohl es sich nicht um die selbe Objektinstanz handelt.
```php?start_inline=true
class Test
{
    private $foo;

    public function __construct($foo)
    {
        $this->foo = $foo;
    }

    private function bar()
    {
        echo 'Accessed the private method.';
    }

    public function baz(Test $other)
    {
        $other->foo = 'hello';         // Zugriff auf private-Eigenschaft
        var_dump($other->foo);
        $other->bar();                 // Zugriff auf private-Methode
    }
}

$test = new Test('test');
$test->baz(new Test('other'));   //=> var_dump von foo und "Accessed the private method".
```


## Vererbung
Vererbung ist ein grundlegendes Element der objektorientierten Programmierung.

Wird von einer Klassen mit dem Schlüsselwort `extends` vererbt, so erbt die Kind-Klasse alle "public" und "protected" Eigenschaften und Methoden der Eltern-Klasse. Sofern diese nicht überschrieben (overridden) werden, behalten sie ihren ursprünglichen Wert bzw. ihre ursprüngliche Funktionalität. Klassen müssen deklariert werden, bevor sie verwendet werden.
```php?start_inline=true
class Foo
{
    public function printItem($string)
    {
        echo 'Foo: ' . $string . PHP_EOL;
    }
    
    public function printPHP()
    {
        echo 'Foo-Method' . PHP_EOL;
    }
}

class Bar extends Foo
{
    public function printItem($string)
    {
        echo 'Bar: ' . $string . PHP_EOL;
    }
}

$foo = new Foo();
$bar = new Bar();
$foo->printItem('baz'); //=> 'Foo: baz'
$foo->printPHP();       //=> 'Foo-Method' 
$bar->printItem('baz'); //=> 'Bar: baz'
$bar->printPHP();       //=> 'Foo-Method' !!!!!
```

PHP unterstützt Vererbung über mehrere Stufen (multi-level inheritance), sprich, Klasse D kann von Klasse C erben, diese wiederum von Klasse B, diese von Klasse A, usw. Methoden und Eigenschaften der Eltern-Klassen werden dabei beliebig weit nach unten durchgereicht.

PHP unterstützt jedoch keine Mehrfach-Vererbung (multiple inheritance). Eine Klasse kann also immer nur von höchstens einer einzigen Klasse erben.


## Der Scope-Resolution-Operator (::)
Der Scope-Resolution-Operator oder einfach Double-Colon ist das Token, mit dem man auf statische, konstante und überschriebene (overridden) Eigenschaften und Methoden einer Klasse zugreifen kann.

_Anmerkung:_ Ich empfehle hier (wie fast immer) die englischen Wörter zu verwenden. Das deutsche "Operator zur Auflösung des Gültigkeitsbereichs" oder noch schöner "Gültigkeitsbereichsauflösungsoperator" klingt etwas holprig. Auch das wunderschöne Wort "Doppeldoppelpunkt" gewinnt definitiv keinen Ästhetikpreis. Für "Token" gibt es leider auch keine gute Übersetzung. Vereinfacht gesagt ist ein Token alles, was für den Parser eine Bedeutung hat. +, --, $myVar, public, const, =, == oder === sind alles Token.

_Anmerkung:_ Der Scope-Resolution-Operator wird auch mit dem hebräischen Wort פעמיים נקודתיים (Paamayim Nekudotayim) bezeichnet. Dies bedeutet nichts anderes als "Doppel-Doppelpunkt". Man muss sich dieses Wort nicht merken, aber man sollte es erkennen, da es in Fehlermeldungen auftauchen kann. Mein Dank an die Entwickler aus Israel für diesen Zungenbrecher.
```php?start_inline=true
::;   //=> PHP Parse error:  syntax error, unexpected :: (T_PAAMAYIM_NEKUDOTAYIM)
```

Greift man von außerhalb der Klassendefinition auf diese Eigenschaften und Methoden zu, verwendet man den Namen der Klasse. Seit PHP5.3 kann die Klasse auch durch eine Variable, die den Klassennamen (nicht self, parent oder static) als String enthält, angegeben werden.

Von innerhalb der Klassendefinition kann man die Schlüsselwörter self, parent und static verwenden:

```php?start_inline=true
// Von außerhalb der Klassendefinition
class MyClass
{
    const CONST_VALUE = 'MyClass constant';
}

$classname = 'MyClass';
echo MyClass::CONST_VALUE;     //=> MyClass constant
echo $classname::CONST_VALUE;  //=> MyClass constant

// Von innerhalb der Klassendefinition
class OtherClass extends MyClass
{
    public static $my_static = 'OtherClass static';

    public static function doubleColon()
    {
        echo parent::CONST_VALUE . "\n";
        echo self::$my_static . "\n";
    }
}

$classname = 'OtherClass';
$classname::doubleColon();    //=> MyClass constant, OtherClass static
OtherClass::doubleColon();    //=> MyClass constant, OtherClass static
```

Überschreibt eine Kind-Klasse eine Methode seiner Eltern-Klasse, so ruft PHP nicht automatisch die Methode der Elternklasse auf. Die Kind-Klasse muss diese bei Bedarf explizit aufrufen. Die ist vor allem für Konstruktoren und Destruktoren, aber auch beim Überladen (Overloading) und bei magischen Methoden wichtig.
```php?start_inline=true
class MyClass
{
    protected function myFunc()
    {
        echo "MyClass::myFunc()\n";
    }
}

class OtherClass extends MyClass
{
    // Überschreiben (overriding) der Eltern-Methode
    public function myFunc()
    {
        parent::myFunc();              // Aufrufen der Eltern-Methode
        echo "OtherClass::myFunc()\n";
    }
}

$class = new OtherClass();
$class->myFunc();           // MyClass::myFunc(), OtherClass::myFunc() 
```


## Statische Methoden und Eigenschaften (static)
(Hier wird nur die Verwendung von static mit Klassen-Methoden und -Eigenschaften beschrieben. Für statische Variablen, siehe [dort]({{ site.url }}{{ site.baseurl }}/php/variablen-und-konstanten.html#statische-variablen).

Werden Eigenschaften oder Methoden einer Klasse als "static" deklariert, so kann ohne eine Objekt-Instanz auf diese zugegriffen werden. Auf eine statische Eigenschaft kann sogar überhaupt nicht über eine instanziiertes Objekt zugegriffen werden (auf Methoden seit PHP5.3 schon).

### Statische Methoden (static methods)
Da statische Methoden ohne Objekt-Instanz aufgerufen werden können, steht die Pseudo-Variable $this nicht zur Verfügung.
```php?start_inline=true
class Foo
{
    public static function aStaticMethod()
    {
        echo "Hello static!";
    }
}

Foo::aStaticMethod();          //=> Hello static!
$classname = 'Foo';
$classname::aStaticMethod();   //=> Hello static!
```

### Statische Eigenschaften (static properties)
Wie andere statische Variablen, können auch statische Eigenschaften nur mit einem Literal oder einer Konstanten initialisiert werden, nicht aber mit Ausrücken (expression). Seit PHP5.6 können konstante Ausdrücke zugewiesen werden, sofern sie bei der Kompilierung auswertbar sind.

Auf statische Eigenschaften kann nicht mit dem Pfeil-Operator `->` zugegriffen werden.
```php?start_inline=true
class Foo
{
    public static $my_static = 'foo static';

    public function staticValue()
    {
        return self::$my_static;
    }
}

class Bar extends Foo
{
    public function fooStatic()
    {
        return parent::$my_static;
    }
}

print Foo::$my_static . "\n";        //=> foo static
$foo = new Foo();
print $foo->staticValue() . "\n";    //=> foo static
print $foo->my_static . "\n";        // Undefined "Property" my_static 

print $foo::$my_static . "\n";       //=> foo static
$classname = 'Foo';
print $classname::$my_static . "\n"; //=> foo static (PHP5.3+)

print Bar::$my_static . "\n";        //=> foo static
$bar = new Bar();
print $bar->fooStatic() . "\n";      //=> foo static
```


## TODO Class Abstraction
[Abstrakte Klassen](http://php.net/manual/en/language.oop5.abstract.php)

<!-- 
## TODO Object Interfaces
http://php.net/manual/en/language.oop5.interfaces.php

## TODO Traits
http://php.net/manual/en/language.oop5.traits.php

## TODO Anonymous classes
http://php.net/manual/en/language.oop5.anonymous.php

### TODO Überladen (Overloading)
http://php.net/manual/en/language.oop5.overloading.php

## TODO Object Iteration
http://php.net/manual/en/language.oop5.iterations.php
 -->

## Magic Methods
Die Funktions-Bezeichner __construct(), __destruct(), __call(), __callStatic(), __get(), __set(), __isset(), __unset(), __sleep(), __wakeup(), __toString(), __invoke(), __set_state(), __clone() und __debugInfo() sind innerhalb von PHP-Klassen "magisch". Diese Namen dürfen nicht für eigene Funktionen verwendet werden. Links zu allen Funktionsbeschreibungen finden sich [hier](http://php.net/manual/en/language.oop5.magic.php).

_Achtung:_ In PHP sind alle Funktionsnamen, die mit zwei Unterstrichen "__" beginnen, für "Magie" reserviert (Für Saarländer: Magie, nicht Maggi!). Deshalb sollten selbst-definierte Funktionen nie mit zwei Unterstrichen beginnen, es sei denn, man will genau diese magische Funktionalität nutzen.

<!-- TODO ### __sleep() and __wakeup() ¶
 -->

### __toString()
```php?start_inline=true
public string __toString ( void )
```
Mit der `__toString()` Methode kann eine Klasse festlegen, was sie tut, wenn sie wie ein String behandelt wird, also zB mit `echo $obj;` ausgegeben werden soll. Die Methode muss (wie in der Signatur angegeben) einen String zurückgeben. Andernfalls wird ein "fatal E_RECOVERABLE_ERROR level" Fehler ausgegeben.

Achtung: Von `__toString` aus kann keine Exception geworfen werden.
```php?start_inline=true
class TestClass
{
    public $foo;

    public function __construct($foo)
    {
        $this->foo = $foo;
    }

    public function __toString()
    {
        return "Holidays in " . $this->foo;
    }
}

$class = new TestClass('Cambodia');
echo $class;          //=> Holidays in Cambodia
```
<!--
TODO ### __invoke()
TODO ### __set_state()
TODO ### array __debugInfo ( void )
-->


## Final Keyword
Seit PHP5 gibt es das Schlüsselwort `final`. Es verhinder, dass eine Kind-Klasse eine Methode der Eltern-Klasse überschreiben kann. Wird die Klasse selbst als `final` deklariert, kann von ihr nicht geerbt werden, sie kann also nicht "extended" werden.
```php?start_inline=true
class BaseClass
{
    final public function testing()
    {
        echo "BaseClass::testing() called\n";
    }
}

class ChildClass extends BaseClass
{
    public function testing()          //=> Fatal error:  Cannot override final method BaseClass::testing()
    {
        echo "ChildClass::testing() called\n";
    }
}
```
Beachte: Eigenschaften können nicht als "final" deklariert werden. Nur Klassen und Methoden.


## Klonen von Objekten
Möchte man eine Kopie eines Objektes erstellen, so will man nicht notwendigerweise alle seine Eigenschaften eins-zu-eins kopieren. Angenommen, Objekt $a benutzt ein weiteres Objekt $x und speichert deshalb eine Referenz auf dieses. Wenn wir nun eine exakte Kopie $b von $a erstellen, so besäße $b die selbe Referenz auf das selbe Objekt $x. Was aber, wenn $b seine eigene Kopie von $x haben soll?

Mit dem Schlüsselwort `clone` kann eine Kopie eines Objektes erstellt werden. Im Hintergrund ruft "clone" die `
`__clone()` Methode des zu kopierenden Objektes auf, sofern diese existiert. Die __clone()-Methode kann nicht direkt aufgerufen werden.
```php?start_inline=true
$copy_of_object = clone $object;
```
Wird ein Objekt auf diese Art geklont, so erstellt PHP eine sogenannte _seichte_ oder _flache_ Kopie (shallow copy) aller Eigenschaften des Objektes. Das bedeutet, dass alle Eigenschaften, die Referenzen waren, auch Referenzen bleiben. (Dies wäre der oben beschriebene Fall mit $x.) [Wikipedia](https://de.wikipedia.org/wiki/Objektkopie).

```php?start_inline=true
void __clone ( void )
```
Nachdem diese seichte Kopie erstellt wurde, ruft PHP die __clone()-Methode des gerade neu erzeugten Objektes auf. So können von Hand Eigenschaften verändert werden, um zB eine _tiefe_ Kopie (deep copy) zu erstellen.
```php?start_inline=true
class SubObject
{
    static $instances = 0;                       // Anzahl der Instanzen
    public $instance;                            // Die Instanz-Nummer eines Objekts

    public function __construct()
    {
        $this->instance = ++self::$instances;    // Nummer bei jedem Aufruf hochzählen
    }

    public function __clone()
    {
        $this->instance = ++self::$instances;    // Nummer bei jedem Aufruf hochzählen
    }
}

class MyCloneable
{
    public $object1;
    public $object2;

    function __clone()
    {
        $this->object1 = clone $this->object1;
    }
}

$obj = new MyCloneable();
$obj->object1 = new SubObject();
$obj->object2 = new SubObject();

$obj2 = clone $obj; // Kopiert $obj und ruft __clone() von MyCloneable auf

print("Original:\n");
print_r($obj);      //=> object1 [instance] => 1, object2 [instance] => 2

print("Cloned:\n");
print_r($obj2);     //=> object1 [instance] => 3, object2 [instance] => 2
```
Man sieht, dass _object1_ beider MyCloneable-Objekte auf verschiedene Instanzen von SubObject zeigen, während _object2_ beider MyCloneable-Objekte auf die selbe Instanz von SubObject referenzieren.

Seit PHP7 kann auf eine Eigenschaft eines gerade geklonten Objektes sofort zugegriffen werden:
```php?start_inline=true
$dateTime = new DateTime();
echo (clone $dateTime)->format('Y');   //=> 2017
```


## Objekte Vergleichen
Vergleicht man Objekte mit dem Vergleichsoperator (==), so werden sie als gleich angesehen, wenn sie die gleichen Attribute und Werte haben (Werte werden mit == verglichen) und Instanzen der selben Klasse sind.

Vergleicht man hingegen mit dem Identitätsoperator (===), so sind Objekt-Variablen dann und nur dann identisch, wenn sie die selbe Instanz der selben Klasse referenzieren.

Ein Ausführliches Beispiel hierzu findet sich in der [PHP-Dokumentation](http://php.net/manual/en/language.oop5.object-comparison.php).


## Type Hinting
Type Hinting (auch Typ-Deklarationen genannt) funktioniert innerhalb von Klassen genauso wie außerhalb. Siehe [hier](https://github.com/radwild/webdev/wiki/Funktionen-PHP#strikte-typisierung-strict-typing) und in der [PHP-Dokumentation](http://php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration).

<!--
TODO ## Späte statische Bindung
Seit PHP5.3 gibt es ein Feature namens _late static bindings_ (Späte statische Bindung), mit dessen Hilfe man sich bei statischer Vererbung auf die Aufgerufene Klasse referenzieren kann.


TODO ## Objekte und Referenzen

Es wird oft behauptet, in PHP würden Objekte standardmäßig per Referenz übergeben. Dies ist im normalen Sprachgebrauch ausreichend, entpuppt sich bei näherer Betrachtung jedoch als nicht ganz richtig.

Eine Referenz in PHP ist ein Alias, ein "Spitzname", ein "weiterer Name" für etwas. Mit Hilfe von Referenzen kann man über zwei verschiedene Variablen in den selben Speicher schreiben. Seit PHP5 speichert eine Objekt-Variable nicht das Objekt selbst, sonder einen Objekt-Bezeichner (identifier), mit dessen Hilfe auf das eigentlich Objekt zugegriffen werden kann.

Wird ein Objekt per Argument (an eine Funktion) übergeben, aus einer Funktion zurückgegeben, oder einer anderen Variablen zugewiesen, so sind diese verschiedenen Variablen *keine* Aliase: sie speichern lediglich eine Kopie des Bezeichners, der auf das selbe Objekt zeigt.
```php?start_inline=true
class A {
    public $foo = 1;
}  

$a = new A;
$b = $a;       // $a und $b sind Kopien des selben Bezeichners
               // ($a) = ($b) = <id>
$b->foo = 2;
echo $a->foo;  //=> 2

$c = new A;
$d = &$c;      // $c und $d sind Referenzen
               // ($c,$d) = <id>
$d->foo = 2;
echo $c->foo;  //=> 2

$e = new A;

function foo($obj) {
    $obj->foo = 2;
}

foo($e);       // ($obj) = ($e) = <id>
echo $e->foo;  //=> 2
```
-->


## Serialisierung von Objekten und Objekte in Sessions
Ein Objekt (und auch andere Daten) zu serialisieren, bedeutet, es in einen String umzuwandeln, der auch wieder in das ursprüngliche Objekt _deserialisiert_ werden kann.

Die Funktion [serialize()](http://php.net/manual/en/function.serialize.php) gibt eine String-Darstellung eines Wertes oder Objektes zurück. [unserialize()](http://php.net/manual/en/function.unserialize.php) macht das Gegenteil. Es erzeugt aus einem solchen String wieder den ursprünglichen Wert, das Objekt. Die Methoden eines Objektes werden dabei nicht gespeichert, sondern nur der Name der Klasse und alle Eigenschaften.

*Achtung:* Durch [unserialize()](http://php.net/manual/en/function.unserialize.php) können Sicherheitslücken entstehen. Lest dazu bitte genau die Dokumentation der Funktion.

Um ein Objekt zu deserialisieren muss die Klasse vorher definiert worden sein. Wenn man zB serialisierte Objekte in der Session speichern möchte, ist darauf zu achten, dass die entsprechende Klasse definiert wurde (meistens über ein `include`), bevor man sie wieder aus der Session deserialisiert.
```php?start_inline=true
// class_a.inc:
class A
{
    public $one = 1;
    public function show_one()
    {
        echo $this->one;
    }
}

// page_1.php:
include("class_a.inc");

$a = new A;
$s = serialize($a);
// $s so speichern, dass page_2 es finden kann
file_put_contents('store', $s);

// page_2.php:
include("class_a.inc");    // Ohne dieses include wäre A nicht definiert

$s = file_get_contents('store');
$a = unserialize($s);
$a->show_one();
```
Deserialisiert man ein Objekt, ohne dass dessen Klasse vorher definiert wurde, gibt PHP dem Objekt automatisch die nutzlose Klasse `__PHP_Incomplete_Class_Name`, welche keinerlei Methoden besitzt.

Statische Eigenschaften eines Objektes werden nicht serialisiert.


## Entwiklung von OOP in PHP
Welche OOP Funktionalität in welcher PHP Version hinzu kam oder wegfiel, sieht man in [dieser Tabelle](http://php.net/manual/en/language.oop5.changelog.php).