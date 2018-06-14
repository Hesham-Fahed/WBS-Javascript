<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandbox</title>
</head>
<body>

<?php

abstract class Animal // Bauplan erstellen
{
    // innen
    // Food level in % - between 0 and 100
    protected $foodLevel = 0;
    protected $name = '';

    private static $numberOfAnimals = 0;

    public const NOCHANGE = 42;

    public function __construct(string $name, int $foodLevel = 50)
    {
        // echo "In Animal $this->name Constructor<br>";
        $this->name = $name;
        self::$numberOfAnimals++;

        if ($foodLevel < 0) {
            $this->foodLevel = 0;
        } elseif ($foodLevel > 100) {
            $this->foodLevel = 100;
        } else {
            $this->foodLevel = $foodLevel;
        }
    }

    public function __destruct()
    {
        self::$numberOfAnimals--;
        // echo "In Animal $this->name Destructor<br>";
    }

    public function do(string $activity)
    {
        switch ($activity):
            case "sleep":
                if ($this->foodLevel - 10 < 1)
                    $this->foodLevel = 1;
                else
                    $this->foodLevel -= 10;
            break;

            case "procreate":
                if ($this->foodLevel - 25 < 1)
                    $this->foodLevel = 1;
                else
                    $this->foodLevel -= 25;
            break;

            case "eat":
                if ($this->foodLevel + 33 > 100)
                    $this->foodLevel = 100;
                else
                    $this->foodLevel += 33;
            break;

            default:
                throw new Exception("Action $activity unknown.");
        endswitch;
    }

    public function foodLevel() {
        return $this->foodLevel;
    }

    public static function getNumberOfAnimals() {
        return self::$numberOfAnimals;
    }

    abstract public function makeSound();
    abstract public function hibernate();
}

class Penguin extends Animal
{
    protected $age;

    public function __construct(string $name, int $foodLevel = 50, int $age = 12) {
        parent::__construct($name, $foodLevel);
        $this->age = $age;
        echo "Penguin Constructor";
    }

    public function hibernate()
    {
        if ($this->foodLevel > 50) {
            $this->foodLevel -= 50;
            echo "Yaaawn, what a nice sleep<br>";
        }
        else {
            echo "Your Penguin is dead<br>";
            $this->foodLevel = 0;
        }
    }

    public function makeSound()
    {
        echo "Flap flap<br>";
    }
}

class Cat extends Animal
{
    public function hibernate() {
        echo "Cats don't hibernate you dork!<br>";
    }

    public function makeSound()
    {
        echo "Miaouw<br>";
    }
}

function surviveWinter(Animal $animal)
{
    $animal->hibernate();
}

$animals = [
    new Cat('Tama', 90),
    new Penguin('Tutut', 90),
    new Cat('Jack', 10),
    new Penguin('Tatat', 45),
    new Penguin('Tötöt', 91)
];

surviveWinter($animals[4]);

echo "<hr>";

$penguin1 = new Penguin('Tutut', 90);
$penguin1->hibernate();
$penguin1->do('eat');
$penguin1->makeSound();

$cat1 = new Cat('Tama', 90);
$cat1->makeSound();

var_dump($penguin1);
var_dump($cat1);

echo "<hr><hr><hr>";

echo Animal::getNumberOfAnimals() . "<br>";
echo Animal::NOCHANGE . "<br>";

// aussen
$myAnimal1 = new Animal("Estragon"); // Objekt nach Bauplan bauen / instanziieren
$myAnimal2 = new Animal("Mortimer", 5000);

echo Animal::getNumberOfAnimals() . "<br>";

$myAnimal1->do('eat');
$myAnimal1->do('procreate');
$myAnimal2->do('eat');
$myAnimal2->do('eat');
$myAnimal2->do('eat');
$myAnimal2->do('eat');

var_dump($myAnimal1);
var_dump($myAnimal2);

$myAnimal1 = 12;
echo "After pointing \$myAnimal1 to another thing.<br>";
echo Animal::getNumberOfAnimals() . "<br>";

// is a has a - inheritance vs composition

// Objektorientierung
// ==================

// - Was sind Klassen?
//   - Klassen sind der Bauplan für Objekte
// - Was ist ein Objekt?
//   - Instanziierung ist das Erzeugen eines Objektes nach Bauplan
// - Was ist eine Eigenschaft?
//   - Eine Variable, die im Objekt gespeichert ist
// - Was ist eine Methode?
//   - Methoden sind die Verben, die ein Objekt versteht,
//     also die Dinge, die ein Objekt machen kann
//   - Methoden sind Funktionen, die zu einem Objekt gehören
// - Kapselung / encapsulation
//   - Verstecken von Klassen-internen Prozessen

// - Objekte kommunizieren miteinander ... was heisst das?


// GC = Garbage Collector
// ======================
// - Läuft während der Programmausführung
//   und schaut ob irgendwelche Objekte gelöscht wurden
//   und entfernt die Zeiger darauf

// $a = new Animal(); // $a ist ein Name für / eine Referenz auf das Objekt
// $b =& $a;          // $b ist eine weitere Referenz - refcount 2
// $a = 12;           // $a zeigt woanders hin - refcount 1
// $b = "blabla";     // $b zeigt auch woanders hin - refcount 0
// Ab hier könnte der GC den Speicher des Animal Objekts freigeben

// function moo() {
//     $a = new Animal(); // $a ist ein Name für / eine Referenz auf das Objekt
//     $b =& $a;          // $b ist eine weitere Referenz - refcount 2
//     echo "bla";
// } // Ab hier könnte der GC den Speicher des Animal Objekts freigeben
// moo();


class Request
{
    // kann alles rund um einen HTTP request
}

interface Router {
    public function handle(Request $request) : string;
}

class FrameworkRouter implements Router
{
    public function handle(Request $request) : string { return "Framework Handled<br>"; }
}

class OlloRouter implements Router
{
    public function handle(Request $request) : string { return "Ollo Handled<br>";}
}


// index.php

$router = new OlloRouter;
$response = $router->handle(new Request);
echo $response;

echo "<hr>";

?>

</body>
</html>

