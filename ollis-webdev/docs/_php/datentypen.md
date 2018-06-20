---
layout: techdoc
title: Datentypen
slug: datentypen
order: 100
examples: true
exercises: true
---
* TOC
{:toc}

## Übersicht
Ein Datentyp beschreibt eine Menge von Datenobjekten, die alle die gleiche Struktur haben und mit denen die gleichen Operationen ausgeführt werden können.

Ein Beispiel für einen Datentypen wäre die Menge der ganzen Zahlen, die als Datentyp meist Integer genannt wird. Mit Integern können arithmetische Operationen wie Addition (+) oder Multiplikation (*) durchgeführt werden.

Ein anderes Beispiel wäre die Menge aller Zeichenketten. Dieser Datentyp wird meist als String bezeichnet. Beispiele für Strings wären: "a", "Hallo" und "3.75", aber auch der gesamte Brockhaus könnte als ein einziger String dargestellt werden.

Ein Beispiel für einen String Operator ist der Konkatenierungsoperator, der zwei Strings zu einem eizigen zusammenfügt. In PHP wird er als . (Punkt) geschrieben, anders als in Javascript, wo der + Operator diese Funktion übernimmt.

PHP ist eine schwach typisierte Sprache. Das bedeutet, dass bei Bedarf und nach bestimmten Regeln zwischen Typen hin und her konvertiert wird. Der Ausdruck "3" + 4 wertet zum Beispiel zum Integer 7 aus, da wegen der Addition der String "3" in den Integer 3 konvertiert wird, während "3" . 4 zum String "34" auswertet, da wegen des Konkatenierungsoperators der Integer 4 in den String "4" konvertiert wird. Diese automatischen Konvertierungen können (und werden) zu unerwarteten Ergebnissen führen.

PHP besitzt neun Datentypen.

## Skalare Datentypen
### Boolean (boolean)
Ein Boolean, Boolscher Wert, oder kurz Bool, ist ein Wahrheitswert. Er kann entweder `true` (wahr) oder `false` sein.

Boolsche Literale: `true, false` (case-insensitive)

```php?start_inline=true
$foo = true;
```

Boolsche Werte werden oft in [Kontrollstrukturen](kontrollstrukturen.html) verwendet:

```php?start_inline=true
if (true == $do_it) {
  echo "Doing it.";
}
```
oder kürzer

```php?start_inline=true
if ($do_it) {
  echo "Doing it.";
}
```

Folgende Werte sind false:
* `false` (boolean)
* `0` (integer)
* `0.0` (float)
* `""` (leerer string) und `"0"`
* `[  ]` (array mit null Elementen)
* `null` (spezieller Datentyp)

Alle anderen Werte sind true (auch `NAN` und alle Resourcen)

**Vorsicht:** -1 ist true, genau wie auch jede andere Zahl ungleich 0.

Werte können mit einem Cast nach (bool) explizit in ein Boolean konvertiert werden.

```php?start_inline=true
var_dump((bool) "");        // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -2);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) []);        // bool(false)
var_dump((bool) "false");   // bool(true)
```

### Integer (integer)
Integer-Literale können mit verschiedenen Basen angegeben werden.

Dezimalzahlen werden in der gewohnten Notation ohne Präfix angegeben. Mit einer vorangestellten "0" wird eine Zahl als Oktalzahl interpretiert, mit "0x" als Hexadezimalzahl und mit 0b als Binärzahl:
```php?start_inline=true
$a = 1234; // Dezimal (Basis 10)
$a = -123; // Eine negative Dezimalzahl (Basis 10)

$a = 0124; // Oktal (Basis 8) (entspricht 84 dezimal)
           //   1*8^2 + 2*8^1 + 4*8^0

$a = 0x1A; // Hexadezimal (Basis 16) (entspricht 26 dezimal)
           //   1*16^1 + 10*16^0

$a = 0b10001001; // Binär (Basis 2) (entspricht 137 dezimal)
                 // 1*2^7 + 1*2^3 + 1*2^0
```

Liegt ein Integer-Wert außerhalb des Bereichs, den PHP darstellen kann (`PHP_INT_MAX / PHP_INT_MIN`), wird er automatisch in einen Float-Wert umgewandelt.

Mit `(int)` können Werte explizit gecastet werden.

Eine Ressource konvertiert zu der Zahl, die PHP ihr zur Identifikation zugewiesenen hat.

Die Konvertierungsregeln nach "Integer" lauten wie folgt:
* boolean: false => 0, true => 1
* float: Die Zahl wird zur 0 hin gerundet (NaN und Infinity sind beide 0)
* string: siehe [dort](#konvertierung-in-strings)

### Float (double)
Float-Literale können als Kommazahl oder in Exponentialschreibweise angegeben werden:
```php?start_inline=true
$a = 1.234; 
$b = 1.2e3;    // 1200
$c = 7E-4;     // 0.0007
```

Beim Arbeiten mit Floats, also Fließkommazahlen, ist immer zu berücksichtigen, dass diese nur eine begrenzte Genauigkeit haben. Deshalb sollte man nie zwei Floats auf Gleichheit oder Ungleichheit überprüfen.

```php?start_inline=true
echo (1/3 == 1 - 2/3) ? "True" : "False";    // False!
```
`NAN` sollte nicht mit anderen Werten vergleichen, sondern nur mit `is_nan()` überprüft werden.

Konvertierungsregeln
* Werte werden zuerst in ein Integer-Wert konvertiert (siehe [dort](#integer-integer)) und dieser dann in einen Float-Wert.
* string: siehe [dort](#konvertierung-in-strings)

### String (string)
Ein String ist eine Reihe von einzelnen Zeichen (character) wie zum Beispiel Buchstaben, Zahlen und Symbole. Strings haben immer eine bestimmte ([Zeichencodierung](https://de.wikipedia.org/wiki/Zeichenkodierung)), wie zB [ISO_8859-1](https://de.wikipedia.org/wiki/ISO_8859-1), [UTF-8](https://de.wikipedia.org/wiki/UTF-8) oder [ASCII](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange).

Es gibt vier Möglichkeiten, ein String-Literal anzugeben.

#### Einfache Anführungszeichen (single quote ['])
```php?start_inline=true
echo 'Beispielstring';
echo 'Mehrzeiliger         // Der Zeilenumbruch bleibt erhalten
Beispielstring';           // Also im HTML sichtbar, nicht aber in der Browserdarstellung.
```

Lediglich einfache Anführungszeichen (') und Backslashs (\\) müssen escapet werden. Alle anderen Zeichenketten werden unverändert ausgegeben. Auch Variablen und Escape-Sequenzen (bis auf \\) werden nicht expandiert.
```php?start_inline=true
echo 'Arnold: "I\'ll be back"';
echo 'Dies ist keine \n newline';
echo 'C:\\ erfolgreich formatiert.';
```

#### Doppelte Anführungszeichen (double quote ["])
Innerhalb doppelter Anführungszeichen werden Variablennamen expandiert. Das heißt, dass Variablen in der Ausgabe durch ihren aktuellen Wert ersetzt werden.

Außerdem werden Escape-Sequenzen interpretiert. Hier die Häufigsten:
```
\n	linefeed
\t	horizontal tab
\\	backslash
\$	dollar sign
\"	double-quote
```

Eine Liste aller Escape-Sequenzen findest du in der [PHP Dokumentation](http://php.net/manual/en/language.types.string.php#language.types.string.syntax.double)

#### Heredoc Syntax
Ein Heredoc folgt den selben Ersetzungsregeln wie ein String in doppelten Anführungszeichen.

Die Heredoc-Syntax folgt diesen Regeln:
* Beginn: \<\<\<MYIDENTIFIER
  Der Bezeichner wird per Konvention vollständig groß geschrieben.
* Es folgt der Inhalt des Strings. [Whitespace](Leerzeichen, Zeilenumbrüche, Tabs) bleibt erhalten.
* Ende: MYIDENIFIER
  **Achtung:** Vor und hinter dem Endmarker darf sich keinerlei Whitespace befinden!
```php?start_inline=true
<<<MYIDENTIFIER
This is a text. Variables will
be $replaced by their values and\nescape sequences will be interpreted.
MYIDENTIFIER;
```

#### Nowdoc Syntax
Was das Heredoc für doppelte Anführungszeichen, ist das Nowdoc für einfache Anführungszeichen. Der öffnende Bezeichner muss hier in einfache Anführungszeichen gesetzt werden:
```php?start_inline=true
<<<'MYSECONDIDENTIFIER'
This is a text. Variables will
NOT be $replaced by their values and \n will not be interpreted.
MYSECONDIDENTIFIER;
```

#### Parsen von Variablen
##### Einfache Syntax
Wird ein Dollarzeichen (`$`) gefunden, wird der Parser versuchen, einen möglichst langen (greedy), gültigen Variablennamen zu bilden. Auch die Elemente eines Arrays und Eigenschaften (properties) von Objekten werden in Strings ersetzt.

```php?start_inline=true
echo "Counting to $max";
echo "Second Element: $myArray[1]";
echo "Student Name: $this->name" . PHP_EOL;
```

##### Komplexe Syntax
Diese Syntax heißt komplex, weil sie komplexere Ausdrücke formulieren kann, nicht weil sie komplizierter zu bilden ist.

Der Ausdruck wird genauso verwendet, wie außerhalb eines Strings, muss allerdings so: {$identifier} geschrieben werden.
```php?start_inline=true
$reason = "be";
echo "To { $reason } or not to {$reason}.";   //=> To { be } or not to be.
echo "Item 5: {$arr[5]}";
echo "Mount Everest: {$everest->height}00 centimeters";
echo "This is wrong: {$arr[foo][3]}"; 
echo "This works: {$arr['foo'][3]}";

$wordclass = "adjective";
$adjective = "scary";
echo "This is pretty {${$wordclass}}!"      //=> This is pretty scary!
```

Weitere Beispiele findet ihr in der [PHP-Dokumentation](http://php.net/manual/en/language.types.string.php#language.types.string.parsing.complex)

#### Zugriff auf einzelne Characters
Auf einzelne Zeichen eines Strings kann, wie bei Arrays, mit dem `[ ]` Operator zugegriffen werden. Wie bei einem Array wird über einen nullbasierten Index zugegriffen. Mit den Funktionen substr() und substr_replace() kann mehr als ein Character angesprochen werden.

Seit PHP 7.1 kann man negative Indizes verwenden, um vom Ende des Strings aus zuzugreifen.

Fügt man einen Character hinter dem Ende des Strings an, so werden die dazwischen liegenden Indizes mit Leerzeichen aufgefüllt.
```php?start_inline=true
$str = 'Maschendrahtzaun';
$third = $str[2];                //=> 's'
$last  = $str[strlen($str)-1];   //=> 'n'
$same  = $str[-1];               //=> 'n' // erst ab PHP 7.1
$str[strlen($str)-1] = 's';      //=> 'Maschendrahtzaus'
```

#### String-Funktionen
Eine Liste aller String-Funktionen befindet sich [hier](http://php.net/manual/en/ref.strings.php). URL-Strings können mit [diesen](http://php.net/manual/en/ref.url.php) Funktionen bearbeitet werden. Außerdem gibt es Funktionen zum Verschlüsseln und Entschlüsseln von Strings ([mcrypt](http://php.net/manual/en/ref.mcrypt.php) und [mhash](http://php.net/manual/en/ref.mhash.php)).

Werte können durch einen Cast nach (string) oder der Funktion strval() in Strings konvertiert werden. Wird bei der Auswertung von Ausdrücken und Vergleichen ein String verlangt, so versucht PHP diese Konvertierung automatisch duchzuführen.

#### Konvertierung in Strings
* Booleans: true: "1", false: "" (empty String)
* Arrays konvertieren immer zur Zeichenkette "Array"
* Objekte verwenden die magische Methode __toString
* null: "" (empty String)

#### Konvertierung von Strings
* Strings, die mit einer gültigen Zahl beginnen, werden von PHP bei Bedarf in ein Integer oder Float konvertiert.
* Dabei versucht PHP, beginnend beim ersten Zeichen des Strings, diesen Zeichen für Zeichen als Zahl zu parsen. Stößt PHP auf ein Zeichen, dass in der Zahl an dieser Stelle nicht vorkommen kann, bricht es ab und gibt alles bisher geparste zurück.
* Enthält der String kein ".", "e" oder "E" und passt er in ein Integer, so wird er zu Integer konvertiert. In allen anderen Fällen zu einem Float.
```php?start_inline=true
$foo = 1 + "-1.3e3";             //=> -1299 (float)
$foo = 1 + "schnitzel21";        //=> 1 (integer)
$foo = 1 + "0.21 Gigawatt";      //=> 1.21 (float)
$foo = "10.0 Currywurst " + 1;   //=> 11 (float)
```

Um Arrays und Objekte auszugeben, können die Funktionen [print_r()](http://php.net/manual/en/function.print-r.php) und [var_dump()](http://php.net/manual/en/function.var-dump.php) verwendet werden.


#### Details
Intern speichert PHP einen String als Array von Bytes plus ein Integer, der die Länge des Strings angibt. Es macht keine Annahme über darüber, wie die Strings codiert sind (ISO-8859-1, UTF-8, ASCII). Aus diesem Grund hat PHP keinen Byte-Datentyp. Es werden einfach Strings verwendet. Auch Funktionen, die keinen Text im sprachlichen Sinne zurückgeben, sondern zB. beliebige Daten aus einem Netzwerk-Socket lesen, geben einen String zurück.

Das hat allerdings den Nachteil, dass ein einzelnes Zeichen verschieden viel Speicher einnehmen kann (zB ASCII: 7 bit, UTF-8: 32 bit), es kann sozusagen verschieden breit sein. Deshalb muss bei Funktionen, die Strings manipulieren, darauf geachtet werden, dass sie mit dem verwendeten Encoding zusammenpassen.

Wenn unerwartete Fehler mit Strings auftreten, kann es also helfen einen Blick in die Dokumentation der verwendeten Funktion zu werfen. Manchmal sind Hinweise auf das Verhalten der Funktion auch in den Benutzer-Kommentaren versteckt.


## Zusammengesetzte Datentypen
### Array (array)
Ein Array ist ein Datentyp, der andere Datentypen beinhalten kann. Es dient der besseren Strukturierung von Daten.

Es gibt verschiedene Arten von Arrays:
* Indexbasierte Arrays (oft einfach "Array" genannt): Hier werden die Daten mit einer bestimmten Reihenfolge gespeichert. Über ganzzahlige Indizes, welche ja automatisch eine Sortierung vorgeben, greift man auf einzelne Elemente zu: `$myArray[0], $myArray[1], $myArray[23]`
* Assoziative Arrays (auch Map, Symboltabelle oder Dictionary genannt): Diese speichern einen Wert unter einem bestimmten Namen. Die Daten liegen nicht in einer bestimmten Reihenfolge vor. Der Name, unter dem man zugreift, wird im Allgemeinen Schlüssel (key) genannt und ist immer ein String. Der Wert (value), der unter diesem Namen im Array gespeichert ist, kann einen beliebigen Datentyp haben: `$myDict['toboggan'], $capitals['france']`

PHP unterscheidet intern nicht zwischen diesen beiden Arraytypen. Ein indexbasiertes Array ist nichts anderes, als ein assoziatives Array, bei dem die Indizes Strings sind, welche ganze Zahlen darstellen. So könnte man statt $arr[3] auch $arr["3"] schreiben.

#### Syntax
Keys können entweder vom Typ Integer oder String sein. Values können einen beliebigen Typ haben.

```php?start_inline=true
$chili = array(
    "spicy" => "Tabasco",
    "hot"   => "Habanero",
);

// seit PHP 5.4 auch
$chili = [
    "spicy" => "Tabasco",
    "hot"   => "Habanero",
];

echo $chili['spicy'];                //=> Tabasco - beachte die single quotes ('spicy')
echo "The hottest is $chili[hot].";  //=> The hottest is Habanero. Keine quotes (hot)
```

Das Komma nach dem letzten Element ist optional.

Konvertierungsregeln für Keys:
* Strings, die ein valider Integer sind, werden nach (int) gecastet
* Floats werden nach dem Komma abgeschnitten und dann zu Integer gecastet
* Booleans werden ebenfalls zu Integern: true wird 1 und false wird 0
* null wird zum leeren String, der Key ist also ""
* Arrays und Objekte können nicht als Keys verwendet werden.

Verwenden in einer Array-Deklaration mehrere Elemente den selben Key, so überschreiben diese sich nacheinander und nur der letzte Wert bleibt erhalten. Außerdem können im selben PHP Array sowohl Integers als auch Strings als Key verwendet werden. Dies ist in den allermeisten Fällen jedoch keine gute Idee.

```php?start_inline=true
$array = array(
    1    => "a",
    "1"  => "b",
    "ad" => "hoc",
    1.5  => "c",
    true => "d",
);
var_dump($array);     // das Array enthält nur die Elemente: [1]=>"d" und ["ad"]=>"hoc"
```

Der Key (Schlüssel) ist optional. Lässt man ihn weg, verwendet PHP einfach den Integer, der dem bisher größten Integer-Key folgt.

Der Versuch, auf einen nicht definierten Array-Schlüssel zuzugreifen, wird, genau wie bei nicht definierten Variablen, mit einer Fehlermeldung quittiert.

#### Zuweisung und Modifikation
Um einen bestimmten Wert zu ändern, weist man dem Element über seinen Schlüssel einen neuen Wert zu. Um ein Key-/Value-Paar zu löschen, wird [unset()](http://php.net/manual/en/function.unset.php) verwendet.

```php?start_inline=true
$arr = array(5 => 1, 12 => 2);
$arr[]    = 56;   // $arr[13] = 56;
unset($arr[5]);   // deletes a value from the array
unset($arr);      // deletes the whole array
```

PHP stellt unzählige Funktionen zur Array-Manipulation zur Verfügung. Eine vollständige Liste findet sich in der [PHP-Dokumentation](http://php.net/manual/en/ref.array.php).

Informationen, warum ein String-Literal, das als Array-Index verwendet wird, in Anführungsstrichen stehen muss, finden sich [hier](http://php.net/manual/en/language.types.array.php#language.types.array.foo-bar).

Konvertiert man einen primitiven Datentypen oder eine Ressource in ein Array, so ist das Ergebnis ein Array, das als einziges Element diesen Wert enthält. Wird ein Objekt in ein Array konvertiert, so werden die Properties des Objekts die Elemente des Arrays. In der Praxis wird letzteres selten benutzt.

### Objekt (object)
Objekte sind Instanzen von Klassen. Eine Klasse kann mit Hilfe des `new` Schlüsselwortes instanziiert werden.

```php?start_inline=true
class Foo
{
    function do_foo()
    {
        echo "Doing foo."; 
    }
}

$bar = new Foo;
$bar->do_foo();
```

Konvertierungsregeln:
* Wird in ein Objekt in ein Objekt umgewandelt, bleibt es unverändert.
* Alle anderen Datentypen werden in ein Objekt der Klasse _stdClass_ umgewandelt. Bei null ist diese Instanz leer. Ein Array wird in ein Objekt umgewandelt, dessen Properties den Key-Value-Paaren des Arrays entsprechen. Auf numerische Keys kann allerdings nicht direkt zugegriffen werden, sondern man kann nur darüber iterieren.

```php?start_inline=true
$obj = (object) array('1' => 'foo');
var_dump(isset($obj->{'1'})); // outputs 'bool(false)'
var_dump(key($obj)); // outputs 'int(1)'
```
Alle anderen Datentypen werden zu einem Feld einer Klasse umgewandelt. Der Name des Feldes ist _scalar_.
```php?start_inline=true
$obj = (object) 'ciao';
echo $obj->scalar;        // outputs 'ciao'
```

### Callable
Callables (also "Aufrufbare") oder Callbacks ("Rückrufbare") bezeichnen Funktionen, die als Parameter an andere Funktionen übergeben werden können. Die tatsache, dass Funktionen genau wie alle anderen Datentypen als Parameter übergeben werden können, ist ein wichtiges Konzept der funktionalen Programmierung (functional programming).

Funktionen wie zB. call_user_func() or usort() akzeptieren benutzerdefinierte Callback-Funktionen als Parameter. 

Callback-Funktionen können auch Methoden von Objekten oder statische Klassenmethoden sein.

#### Übergabe (passing)
Wird eine Funktion als Parameter übergeben, so benutzt man einfach ihren Namen als String: `call_user_func('increment', $a);` würde die Funktion `increment()` mit dem Parameter `$a` aufrufen.

PHP-Sprachkonstrukte können nicht als Callbacks dienen ([], echo, empty(), eval(), exit(), isset(), list(), print, unset()).

```php?start_inline=true
// Die Funktion, die als Callback verwendet werden soll
function my_callback()
{
    echo 'I am the callback!';
}

// Aufrufen der Funktion
call_user_func('my_callback_function');
```

Anonyme Funktionen (sog. Lambda Funktionen) können ebenfalls als Callbacks verwendet werden.

Wie man Methoden eines instanziierten Objektes und statische Klassenmethoden übergibt, findet ihr [hier](http://php.net/manual/en/language.types.callable.php).

### Iterable
Iterables wurden in PHP 7.1 eingeführt. Sie abstrahieren das Durchlaufen einer Menge von Elementen. Sie sind im Rahmen dieses Kurses nicht von Interesse. [Iterables in der PHP-Dokumentation](http://php.net/manual/en/language.types.iterable.php).


## Spezielle Datentypen
### Resource
Auf [Ressourcen](http://php.net/manual/en/resource.php) wird im Rahmen dieses Kurses ebenfalls nicht eingegangen.

### null
null ist eine vordefinierte Konstante. Sie ist case-insensitive und sie ist der einzige Wert vom Typ null.

Eine Variable ist `null`:
* Ihr wurde die Konstante `null` zugewiesen.
* Es wurde ihr noch gar kein Wert zugewiesen.
* Sie wurde mit [unset()](http://php.net/manual/de/function.unset.php) gelöscht.

Mit [is_null()](http://php.net/manual/de/function.is-null.php) kann überprüft werden, ob eine Variable ```null``` ist.

Nach `null` zu casten macht wenig Sinn und hat ab PHP 7.2 auch den Status "deprecated" (es wird davon abgeraten).

**Vorsicht:** Bei Vergleichen mit "==" wird ein leeres Array automatisch zu `null` konvertiert.
```php?start_inline=true
$a = [];

$a == null    <== return true
$a === null   <== return false
is_null($a)   <== return false
```

## Pseudo-Typen
Pseudo-Typen werden ausschließlich in der PHP Dokumentation verwendet. Sie sind kein Teil der Programmiersprache PHP.

### mixed
Mixed bedeutet, dass viele (aber nicht alle) Datentypen akzeptiert werden. Hier muss die Dokumentation gelesen werden, um herauszufinden, welche Typen genau akzeptiert werden.

### number
Der Parameter kann ein Integer oder ein Float sein.

### callback (callable)
Eine als Callback verwendbare Funktion.

### array|objekt
Ein Array oder ein Objekt.

### void
Void bedeutet, dass der Rückgabewert nutzlos ist. Dies ist nicht zu verwechseln mit dem in PHP 7.1 eingeführten type hint `void`.

### $...
In einer Funktionssignatur bedeutet `$...`, dass die Funktion eine beliebige Anzahl von Argumenten akzeptiert.
