<?php
declare(strict_types=1); 

/*
Point
  float x
  float y
  distanceToOrigin()

Shape
  abstract getArea()

Circle extends Shape:
  Point p
  float radius
  getArea()
  getCircumference()

Rectangle extends Shape:
  Point a, b
  getArea()

Triangle extends Shape:
  Point a, b, c
  getArea()


$p1 = new Point(3, 4);
$p2 = new Point(7, 5);
$p3 = new Point(-1, 6);

$circ = new Circle($p1, 5);
$rect = new Rectangle($a, $b);
*/
echo "<pre>";

class Point {
    private $x;
    private $y;

    public function __construct(float $x, float $y) {
        $this->x = $x;
        $this->y = $y;
    }

    public function distance($b) {
         return sqrt(
             pow(($this->x - $b->x), 2) +
             pow(($this->y - $b->y), 2)
         );
    }
}

class Line {
    private $a;
    private $b;

    public function __construct(Point $a, Point $b) {
        $this->a = $a;
        $this->b = $b;
    }

    public function length() {
        return $this->a->distance($this->b);
    }
}

$a = new Point(3, 4);
$b = new Point(8, 5);
print_r($a);
print_r($b);
print_r($a->distance($b));

$l = new Line($a, $b);
print_r($l);
print_r($l->length());


/*
Person
  - private ID
  - Name
  - Geburtsdatum
  - Adresse

Angestellter extends Person
  - Abteilung
  - Aufgabenbereich
  - Brutto-Gehalt
  getNetto()

Abteilungsleiter extends Person
  - Abteilung
  - Brutto-Gehalt

Kunde extends Person
  - Bonitaet

Auftrag
  - Auftragsnummer
  - Kunden
  - Summe



- OOP (Object Oriented Programming)
  - Kapselung / encapsulation
  - Aufgabenteilung / speparation of concerns

- Klasse / class (hat nichts mit CSS klassen zu tun!)
  - Bauplan
  - Konstruktor / Destruktor

- Eigenschaft / property == Variable, die zu einer Klasse/Objekt gehört
- Methode     / method   == Funktion, die zu einer Klasse/Objekt gehört

- Zugriffsrechte / access specifier: public, protected, private


- Objekt / object
  - Vertreter einer Klasse: Instanz / instance

- Vererbung / inheritance

- Deklaration




/*
// class DoseCola {
//     public static $preis = 2;
//     public $inhalt = 0.33;
// }

// function cola_automat($geld) {
//     if (DoseCola::$preis < $geld) {
//         $ausgabe['produkt'] = new DoseCola();
//         $ausgabe['geld'] = $geld - 2;
//     }
//     else {
//         $ausgabe['geld'] = $geld;
//     }
//     return $ausgabe;
// }

// function geld_im_geldbeutel() { return 4; }

// function trinken(DoseCola $cola) { $cola->inhalt -= 0.13; }

// $meins = geld_im_geldbeutel();
// // $meins ist 4

// $meins = cola_automat($meins);
// // $meins ist array( 'produkt' => Object DoseCola, 'geld' => 2)

// trinken($meins['produkt']);

// print_r($meins);




// function add($a, $b, $c) {
//     return $a + $b - $c;
// }

// echo add(4, 3, 7);   //=> 64


// class Test {
//     public $a = 1;
//     private $b = 2;
//     public static $c = 3;

//     public static function s() {
//         echo "I am static: " . self::$c;
//     }

//     public function n() {
//         echo "Non-static value: " . $this->a;
//     }
// }

// class ChildTest extends Test {
//     public static $c = 13;

//     public static function parentVar() {
//         echo parent::$c;
//     }
// }

// $obj1 = new Test();
// $obj1->n();
// echo "<br>";
// $obj2 = new Test();
// $obj2->a = 12;
// $obj2->n();

// echo Test::$c;
// echo ChildTest::$c;
// echo Test::n();
// ChildTest::parentVar();
// $c = new ChildTest();
// $c->n();

*/