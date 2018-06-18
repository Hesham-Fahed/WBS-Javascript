<?php declare(strict_types=1);

require_once __DIR__.'/../../../vendor/autoload.php';
require_once __DIR__.'/../config/bootstrap.php';

// require stuff
require_once PATH . 'Core/Request.php';
require_once PATH . 'Core/Router.php';

$routes = require_once __DIR__.'/../config/routes.php';
// echo "<hr>PATH: " . PATH . "<hr>";
// echo "<hr>DIR: " . __DIR__ . "<hr>";

$router = new Router($routes);
$response = $router->handle(new Request);

echo $response;



/* 
  Datenfluss durch das Framework
  1) Router leitet den Request an den passenden Controller (routing-conf)
  2) Controller kommuniziert mit DB und sagt der View, sie soll die Daten rendern

  Büro Metapher:
  1) Der neue Mitarbeiter (Request) kommt an der Rezeption (Router) an.
  2) Rezeptionist schaut ins schlaue Buch (route.php) und sieht nach
       in welcher Abteilung (Controller) und in welchem Büro (Methode)
       der neue Mitarbeiter arbeitet und schickt ihn dort hin
  3) Der neue Mitarbeiter setzt sich in sein Büro und ruft im
       Archiv (Model) an und fragt nach den Akten, die er benötigt.
  4) Der neue Mitarbeiter bereitet die Akten auf und schickt sie
       dann zur Druckerei (View, Twig).
  5) Die Druckerei layoutet die Daten und schickt das Ergebnis zurück
       zum Mitarbeiter. Dieser schickts zur Reqzeption. Der Rezeptionist
       legt das Druckerzeugnis im Foyer aus.



  N: Login System bauen ... LoginController, RegistrationController, UserModel
  N: Gewinnspiel-Formular aus der Klausur mit Framework umsetzen
  N: Eine einfache Webseite bauen
  N: Mit OOP Queue umsetzen, oder Geometry Library

  Neue Unterseite anlegen:
  1) Route anlegen -> die bestimmt Controller und Methode
  2) Controller Methode anlegen -> die bestimmt:
    2a) DB Zugriff übel Model -> ggf Model Methode anlegen, zB getUsers() getUser(2)
    2b) Daten vom Model an die View schicken    $this->render('template.twig)
  3) Template schreiben

*/