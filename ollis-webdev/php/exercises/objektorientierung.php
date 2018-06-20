<?php
declare(strict_types=1);

/***********************************
 * EXERCISES - CLASSES AND OBJECTS *
 ***********************************/
?>
<html>
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übungen zu Klassen und Objekten</h1>
<p>In dieser Übung erstellen wir eine Klassenhierarchie für Fahrzeuge, die zum Verkauf stehen.<p>
<ul>
    <li>Ein zum Verkauf stehendes Fahrzeug, ein sogenanntes "Exposé", repräsentieren wir mit der Klasse "Expose"</li>
    <li>Ein solches Expose hat einen Preis, ein Baujahr, eine Farbe und einen bestimmten Fahrzeugtyp</li>
    <li>Der Fahrzeugtyp ist ein Objekt der Klasse "Vehicle".</li>
    <li>Ein Vehicle hat einen Hersteller, eine Modellbezeichnung und einen Benzin- oder Elektromotor, der durch ein Objekt der Klasse "Engine" dargestellt wird.</li>
    <li>Außerdem gibt es zwei Klassen von Fahrzeugen:
        <ol>
            <li>Autos (Klasse Car), die Carbiolets sein können, oder eben nicht.</li>
            <li>Transporter (Klasse Van), die ein Ladevolumen und eine Höchstzuladung haben.</li>
        </ol>
    </li>
    <li>Wir beginnen mit der Klassenhierarchie von Motoren,
    erstellen dann die Hierarche für Fahrzeuge,
    programmieren anschließend eine Factory-Klasse, welche die Erstellung von Fahrzeugen kapselt,
    und zuletzt schreiben wir eine Klasse für Exposées, die man in einer Verkaufs-App verwenden könnte.
    </li>
</ul>

<h3>Allgemeines</h3>
<ul>
    <li>Welche Zugriffsrechte (public, protected, private) bekommen die Methoden und Eigenschaften?</li>
    <li>Welche Klassen können instanziiert werden, welche sind nur abstrakte Klassen oder Interfaces?</li>
    <li>Werden außer den vorgegebenen Eigenschaften und Methoden noch weitere benötigt oder wären diese hilfreich?</li>
    <li>Arbeite, wie immer, mit strict typing und gib, soweit möglich, die Typen von Argumenten und Rückgabewerten an.</li>
</ul>


<!-- TODO example for protected -->

<h2>Übung 1 - Defining Engines</h2>
<ol>
    <li>Erstelle die Klasse Engine.</li>
    <li>Engine hat die Eigenschaft:
        <ul>
            <li>Pferdestärken (hp)</li>
        </ul>
    </li>
    <li>Leite von Engine die Klassen Electric und Petrol ab.</li>
    <li>Petrol hat die Eigenschaften:
        <ul>
            <li>Kraftstoffart (fuel)</li>
            <li>Kraftstoffverbrauch (consumption)</li>
        </ul>
    </li>
    <li>Electric hat die Eigenschaft:
        <ul>
            <li>Reichweite (range)</li>
        </ul>
    </li>
    <li>Erstelle je einen Benzin- und einen Elektromotor und gib einige ihrer Eigenschaften aus.</li>
</ol>


<h2>Übung 2 - Defining Vehicles ... with Engines</h2>
<ol>
    <li>Erstelle eine Klasse Vehicle.</li>
    <li>Vehicle hat die Eigenschaften:
        <ul>
            <li>Hersteller (manufacturer)</li>
            <li>Modell (model)</li>
            <li>Motor (engine)</li>
            <li>Beschleunigung (acceleration)</li>
        </ul>
    </li>
    <li>Leite von Vehicle die beiden Klassen Car und Van ab.</li>
    <li>Car hat die Eigenschaften:
        <ul>
            <li>Cabriolet (convertible)</li>
        </ul>
        <li>Van hat die Eigenschaften:
        <ul>
            <li>Laderaum (cargo)</li>
            <li>Zuladung (payload)</li>
        </ul>
    </li>
    <li>Erstelle zwei Autos, eines mit Benzin- und eines mit Elektromotor, und gib einige ihrer Eigenschaften aus.</li>
</ol>


<h2>Übung 3 - Building Vehicles ... with a Factory</h2>
<ol>
    <li>Erstelle eine Klasse VehicleFactory.</li>
    <li>VehicleFactory hat die Funktionen:
        <ul>
            <li>Car car(array $data)</li>
            <li>Van van(array $data)</li>
        </ul>
    </li>

    Eine Factory ist ein Konstrukt, das Objekte eines bestimmten Typs erstellt.
    Es ist somit ähnlich wie ein Konstruktor. Eine Factory bietet dann einen
    Vorteil, wenn man die Erstellung des Objektes unabhängig vom Konstruktor
    kontrollieren möchte. Ändert sich zB der Konstruktor des zu erstellenden
    Objekts, so muss oft "nur" die Factory angepasst werden, nicht aber sämtliche
    Klassen, die diese Factory benutzen.

    <li>Lege unter Verwendung der VehicleFactory Fahrzeuge an.</li>
    <li>Die Konfiguration des Fahrzeugs, sozusagen das Datenblatt, soll der Factory
    in einem assoziativen Array übergeben werden.</li>
    <li>Ein Array von solchen "Config-Arrays", könnte zB so aussehen.</li>

<?php
    // Two example vehicles
    $datastring = <<<'VEHICLES'
$vehicles = [
    [
        'id'           => 1,
	'type'         => 'car',
        'manufacturer' => 'Tesla',
        'model'        => 'Model 3',
        'engine' => [
            'type'     => 'electric',
            'hp'       => 170,
            'range'    => 290
        ],
        'acceleration' => 7.1,
        'convertible'  => false
    ],
    [
        'id'              => 2,
	'type'            => 'car',
        'manufacturer'    => 'VW',
        'model'           => 'Beetle',
        'engine' => [
            'type'        => 'petrol',
            'hp'          => 49,
            'fuel'        => 'petrol',
            'consumption' => 14.7    
        ],
        'acceleration'    => 21.4,
        'convertible'     => true
    ]
];
VEHICLES;

eval($datastring);
echo "<pre>$datastring</pre>";
?>


<h2>Übung 4 - Making sales ... with colored, expensive vehicles</h2>
<ol>
    <li>Erstelle eine Klasse Expose.</li>
    <li>Expose hat die Eigenschaften:
        <ul>
            <li>Fahrzeug (Vehicle vehicle)</li>
            <li>Preis (int price)</li>
            <li>Baujahr (year)</li>
            <li>Farbe (color)</li>
        </ul>
    </li>
    <li>Lege unter Verwendung der folgenden Datenstruktur Exposées an.</li>
</ol>

<?php

$datastring = <<<'COURTYARD'
$courtyard = [
    [
        'vehicle_id' => 1,
        'year'       => 2016,
        'price'      => 139000,
        'color'      => 'black'
    ],
    [
        'vehicle_id' => 1,
        'year'       => 2014,
        'price'      => 91000,
        'color'      => 'red'
    ],
    [
        'vehicle_id' => 2,
        'year'       => 1973,
        'price'      => 1900,
        'color'      => 'green'
    ]
];
COURTYARD;

    eval($datastring);
    echo "<pre>$datastring</pre>";
?>

</body></html>
