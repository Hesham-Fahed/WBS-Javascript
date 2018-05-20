"use strict";
//Globale Variable könnte in jeder Funktion zugegriffen werden
//Kein guter Stil.
/* var haustiere = [
    "Hund",
    "Katze",
    "Adler",
    "Meerschweinchen",
    "Hamster",
    "Amsel",
    "Maus",
    "Ratte",
    "Fink",
    "Kaninchen"
]; */

function erzeugeArray() {
    return ["Hund", "Katze", "Adler", "Meerschweinchen", "Hamster", "Amsel", "Maus", "Ratte", "Fink", "Kaninchen"];
}

function aufgabe1a() {
    var haustiere = erzeugeArray();
    var out = document.getElementById("ausgabe1");
    var s = ""; //=> ""
    //a) Meerschweinchen, Hamster, Maus, Ratte
    // [x] - computed member access (x ist der Index)

    /* s = s + haustiere[3] + ", "; //=> "Meerschweinchen,"
    s = s + haustiere[4] + ", "; //=> "Meerschweinchen, Hamster, "
    s = s + haustiere[6] + ", "; //=> "Meerschweinchen, Hamster, Maus, "
    s = s + haustiere[7] + "<br>"; //=> "Meerschweinchen, Hamster, Maus, Ratte<br>" */

    /* var temp = []; //=> var temp = [haustiere[3],haustiere[4],haustiere[6],haustiere[7]]
    temp.push( haustiere[3],haustiere[4],haustiere[6],haustiere[7] ); */

    /* var temp = haustiere.slice(3,5).concat(haustiere.slice(6,8));
    s += temp.join(", "); */

    s += haustiere[3] + ", " + haustiere[4] + ", " + haustiere[6] + ", " + haustiere[7] + "<br>";

    out.innerHTML = s;
}


function aufgabe1b() {
    var haustiere = erzeugeArray();
    var out = document.getElementById("ausgabe1");
    var s = "";
    // Adler, Amsel, Fink
    // 2,5,8 -> beginnend mit index 2 auf jedem dritten index
    /* var i = 2, save = 0, laenge = haustiere.length;
    while(i < laenge && save++ < 100) {
        if(i > 2) {
            s += ", ";
        }
        s += haustiere[i];
        i+=3;
    } */

    //Anzahl der Durchläufe ist bekannt -> for-Schleife
    //Vorteil durch Eigenschaft .length ist das, das Array 
    //flexibel bleibt. Es können Werte hinzugefügt oder entfernt werden.
    var laenge = haustiere.length;
    for (var i = 2; i < laenge; i += 3) {
        if (i > 2) {
            s += ", ";
        }
        s += haustiere[i];
    }
    out.innerHTML = s;

    for (var j = 0; j < laenge; j++) {
        console.log("j: ", j, "-> haustiere[j]-> haustiere[" + j + "] //=> " + haustiere[j]);
    }
    console.log("j: ", j, " nach der Schleife. Um 1 größer als der letzte Index");
}

function aufgabe1c() {
    var haustiere = erzeugeArray();
    var out = document.getElementById("ausgabe1");
    var laenge = haustiere.length;
    //Der letzte Index ist immer 1 kleiner als die Anzahl der Elemente
    // lenght-1 ist der letzte Index:
    out.innerHTML = "Zufälliges Haustier: " + haustiere[rand(0, laenge - 1)];
}

function aufgabe2() {
    var out = document.getElementById("ausgabe2");
    var s = "";

    //var pferdeboxen = new Array(10);
    //var pferdeboxen = [,,,,,,,,,,];

    var pferdeboxen = [];
    pferdeboxen.length = 10

    pferdeboxen[0] = "Peggy";
    pferdeboxen[3] = "Moritz";
    pferdeboxen[9] = "Dangerous";

    var laenge = pferdeboxen.length;
    s += "<ul>";
    for (var i = 0; i < laenge; i++) {
        // (i+1) keine Zuweisung, der Wert wird nur für die Ausgabe
        //temp. um 1 erhöht.
        s += "<li>In Pferdebox Nr." + (i + 1) + " steht das Pferd namens ";
        if (pferdeboxen[i] !== undefined) {
            s += pferdeboxen[i];
        } else {
            s += "X";
        }
        s += "</li>";

        /* s += "<li>In Pferdebox Nr." + (i + 1) + " steht das Pferd namens " + (pferdeboxen[i] || "X") + "</li>"; */
    }
    s += "</ul>";
    console.log(pferdeboxen, pferdeboxen.length);
    out.innerHTML = s;
}

function aufgabe3() {
    var out = document.getElementById("ausgabe3");
    var s = "";
    var namen = [
        1,
        "Bernd",
        2,
        "Anna",
        3,
        "Michael",
        4,
        "Katharina",
        5,
        "Frank",
        6,
        "Susanne"
    ];
    console.log("namen: ", namen);
    var laenge = namen.length;
    // Die Struktur verändert sich nicht und ist bekannt:
    s += "<ul>";
    for (var i = 1; i < laenge; i += 2) {
        s += "<li>" + namen[i] + "</li>";
        console.log("namen[i] === namen[" + i + "] //=> ", namen[i]);
    }
    s += "</ul><hr>";

    //Prüft den Wert im Index und gibt nur aus wenn es keine Zahl ist
    s += "<ul>";
    for (var j = 0; j < laenge; j++) {
        if (isNaN(namen[j])) {
            s += "<li>" + namen[j] + "</li>";
        }
    }
    s += "</ul>";
    out.innerHTML = s;
}

function aufgabe4() {
    //var zahlen = [rand(1,100),rand(1,100),rand(1,100),rand(1,100),rand(1,100)];
    var out = document.getElementById("ausgabe4");
    var zahlen = [];
    var s = "";
    var summe = 0;
    var mittel = 0;
    var max = 0;
    var min = 0;
    /* for(var i = 0; i < 5; i++) {
        zahlen[i] = rand(-100,100);
    } */

    //Anzahl Durchläufe ist zwar bekannt aber while-Schleife ist kürzer
    while (zahlen.length < 5) {
        zahlen.push(rand(-100, 100));
    }

    console.log(zahlen);
    var laenge = zahlen.length;
    for (var i = 0; i < laenge; i++) {
        summe += zahlen[i];
    }

    //Mittelwert finden
    mittel = summe / laenge;

    //Maximum/Minimum
    /* max = Math.max(zahlen[0],zahlen[1],zahlen[2],zahlen[3],zahlen[4]);
    min = Math.min(zahlen[0],zahlen[1],zahlen[2],zahlen[3],zahlen[4]); */

    //apply(thisArg,argArray)
    //Verwende die Math-Methode max auf alle Elemente im Array an
    /* max = Math.max.apply(null,zahlen);
    min = Math.min.apply(null,zahlen); */

    // Spread-Operator
    //Verwende die Math-Methode max auf alle Elemente im Array an
    //Funktioniert in MS-Browsern erst ab EDGE
    /* console.log(Math.max(...zahlen));
    console.log(Math.min(...zahlen)); */

    //Maximum finden
    max = zahlen[0];
    for (var j = 1; j < laenge; j++) {
        if (zahlen[j] > max) {
            max = zahlen[j];
        }
    }

    //Minimum finden
    min = zahlen[0];
    for (var k = 1; k < laenge; k++) {
        if (zahlen[k] < min) {
            min = zahlen[k];
        }
    }

    s += "Summe: " + summe + "<br>";
    s += "Mittelwert: " + mittel + "<br>";
    s += "Größte Zahl: " + max + "<br>";
    s += "Kleinste Zahl: " + min + "<br>";

    out.innerHTML = s;
}

function aufgabe5() {
    var out = document.getElementById("ausgabe5");
    var s = "";
    //Zahl         1 2 3 4 5 6
    //Index        0 1 2 3 4 5
    var zaehler = [0, 0, 0, 0, 0, 0];
    var zahlen = [];
    var max = 0;
    var min = 0;
    //Erzeugen der Zahlen
    while (zahlen.length < 100) {
        zahlen.push(rand(1, 6));
    }
    //Auswerten der Zahlen 
    var laenge = zahlen.length;
    for (var i = 0; i < laenge; i++) {
        switch (zahlen[i]) {
            case 1:
                zaehler[0]++;
                break;
            case 2:
                zaehler[1]++;
                break;
            case 3:
                zaehler[2]++;
                break;
            case 4:
                zaehler[3]++;
                break;
            case 5:
                zaehler[4]++;
                break;
            case 6:
                zaehler[5]++;
                break;
        }
        /* zaehler[zahlen[i]-1]++; */
    }
    console.log("zahlen: ", zahlen);
    console.log("zaehler: ", zaehler);

    //Häufigkeit max finden
    max = zaehler[0]; // Größter Zahlenwert 
    var maxIndex = 0; // Index in dem sich die größe Anzahl befindet
    min = zaehler[0];
    var minIndex = 0;
    for (var k = 1; k < laenge; k++) {
        if (zaehler[k] > max) {
            max = zaehler[k];
            maxIndex = k;
            //Index ist 1 kleiner als die Zahl deren Häufigkeit
            //auf diesem Index erfasst wird. Später +1 um Zahl zu erhalten
        }

        if (zaehler[k] < min) {
            min = zaehler[k];
            minIndex = k;
        }

    }
    console.log("max: ", max);
    console.log("maxIndex: ", maxIndex);
    console.log("min: ", min);
    console.log("minIndex: ", minIndex);

    s += "Zahlen: " + zahlen.join(", ") + "<br>";
    s += "Die Zahlen 1-6 traten in 100 Würfen in der folgenden Häufigkeit auf:<br>";
    /* s+= "1:" + zaehler[0] + "x<br>";
    s+= "2:" + zaehler[1] + "x<br>";
    s+= "3:" + zaehler[2] + "x<br>";
    s+= "4:" + zaehler[3] + "x<br>";
    s+= "5:" + zaehler[4] + "x<br>";
    s+= "6:" + zaehler[5] + "x<br>"; */
    for (var j = 0; j < zaehler.length; j++) {
        s += [j + 1] + ": " + zaehler[j] + "x<br> ";
    }
    //Kommen mehrere Zahlen gleich häufig oder selten vor, wird hier
    //immer nur einer der Werte angezeigt
    s += "Die Zahl " + (maxIndex + 1) + " kam am häufigsten vor<br>";
    s += "Die Zahl " + (minIndex + 1) + " kam am wenigsten vor<br>";

    out.innerHTML = s;
}

// function aufgabe6() {
//  var out = document.getElementById("ausgabe6");
//  var s = "";
//  var lottozahlen = [];
//  var zz, save = 0;
//  //Index 0,1,2,3,4,5 => length < 6
//  while(lottozahlen.length < 6 && save++ < 1000) {
//      zz = rand(1,49);
//      //array.indexOf(arg) sucht nach dem Wert arg im Array
//      //Wird arg in array gefunden gibt indexOf die Indexposition
//      //des ersten auftrettens von arg zurück.
//      //Wird arg nicht gefunden ist der Rückgabewert -1
//      if(lottozahlen.indexOf(zz) === -1) {
//          lottozahlen.push(zz);
//      } else {
//          console.log(zz + " doppelt ermittelt");
//      }
//  }

//  s += "Lottozahlen: " + lottozahlen.join(", ") + "<br>";
//  out.innerHTML = s;
// }

function aufgabe6() {
    var out = document.getElementById("ausgabe6");
    var s = "";
    var lottozahlen = [];
    var kugeltrommel = [];
    for (var i = 1; i < 50; i++) {
        kugeltrommel.push(i);
    }

    var save = 0;
    var kugel, kugelPosition;
    //SOLANGE Anzahl Element in lottozahlen kleiner 6
    //Solange bis 6 Kugeln gezogen wurden
    while (lottozahlen.length < 6 && save++ < 1000) {
        //Bestimmt einen zufälligen Index in der Kugeltrommel
        kugelPosition = rand(0, kugeltrommel.length - 1);
        //Die Kugel(zahl) aus dem vorher zufällig ermittelten Index
        //auszuschneiden und in der Variable kugel zu speichern.
        //Der Wert ist nach dieser Zeile in kugeltrommel nicht mehr vorhanden
        //[0] um den Wert aus dem Array das splice zurück gibt auszulesen
        //ohne sieht lottozahlen so aus: [[9], [30], [14], [48], [49], [42]]
        kugel = kugeltrommel.splice(kugelPosition, 1)[0];
        //array.splice(startposition,anzahl,neu1,neu2...)
        //startposition (Der Index ab dem hinzugefügt oder entfernt) wird
        //anzahl Wieviele Elemente sollen gelöscht werden
        //neux, Element die hinzugefügt werden (OPTIONALE PARAMETER)
        lottozahlen.push(kugel);
        //VORSICHT: splice schneidet aus, slice macht eine Kopie
    }
    
    console.log(kugeltrommel);
    console.log(lottozahlen);

    s += "Lottozahlen: " + lottozahlen.join(", ") + "<br>";
    out.innerHTML = s;
}

/*
Erzeugen Sie für jede Aufgabe eine Funktion die über einen Button im 
Dokument gestartet werden kann. Sind Ausgaben für die Aufgabe erforderlich
legen Sie unter dem Button einen div#ausgabeX an, in den Sie
die Ergebnisse/Ausgaben mit innerHTML schreiben.
----------------------------------------------------------------------

Aufgabe 1: Array Einstieg
var haustiere = ["Hund", "Katze", "Adler", "Meerschweinchen", "Hamster", "Amsel", "Maus", "Ratte", "Fink", "Kaninchen" ];

a) Geben Sie aus dem obigen Array - ohne Verwendung einer Schleife - die Nagetiere aus.
    Kaninchen sind keine Nagetiere!
-   Wie soll die Ausgabe Ihres Programms lauten?
-   Welche Funktion (Befehl, Kommando) verwenden Sie für die Ausgabe?
-   Wie greift man auf die Elemente eines Arrays zu?

b) Geben Sie aus dem obigen Array die Vögel mit einer Schleife aus.
    -   Wie soll die Ausgabe lauten?
    -   Das wievielte Element ist jeweils ein Vogel?
    -   Welche Schleife sollten Sie verwenden?
    -   Wie greift man auf jedes X-te Element eines Arrays zu?

c) Wählen Sie aus dem obigen Array zufällig ein Haustier aus!
    -   Wie viele Elemente hat das Array?
    -   Wie adressiert man das letzte Element?
    -   Was muss man tun, um eine ganze Zufallszahl zu ermitteln, welche zwischen 0 inkl. und dem letzten Element des Arrays liegt?

----------------------------------------------------------------------

Aufgabe 2: Pferdeboxen
Im Reitstall gibt es zehn Boxen zum Einstellen von Pferden. Diese sind gekennzeichnet mit Schildern von 1-10.

Sie sollen in einem Array zwischenspeichern, welches Pferd gerade in welcher Box steht.
Folgendes ist zu tun:

-   Legen Sie ein Array namens "Pferdeboxen" mit 10 unbelegten      
    Speicherplätzen an.
-   Stellen Sie das Pferd mit dem Namen "Peggy" in die erste Box.
-   Stellen Sie das Pferd mit dem Namen "Moritz" in die vierte Box.
-   Stellen Sie das Pferd mit dem Namen "Dangerous" in die zehnte Box.
-   Geben Sie zur Kontrolle in einer Schleife die Belegung der Boxen aus.
-   Der Ausgabetext soll jeweils wie folgt lauten: "In Pferdebox Nr.X steht     das Pferd namens Y",wobei X die Nummer der Box ist entsprechend Schild      und Y der Name des Pferds.
-   Die 10 Ausgaben sollen untereinander stehen.
-   Ist eine Box nicht belegt (undefined) Geben Sie ein "X" aus

----------------------------------------------------------------------

Aufgabe 3: Namen

var namen = [ 1, "Bernd", 2, "Anna", 3, "Michael", 4, "Katharina", 5, "Frank", 6, "Susanne" ];

Geben Sie aus dem obigen Array nur die Namen unter Verwendung einer for-Schleife aus!
Tipp: Nutzen Sie das Attribut length des Arrays zur Längenermittlung für die Bedingung der Schleife!
-   Wie soll die Ausgabe Ihres Programms lauten?
-   Welche Schleife sollten Sie verwenden?
-   Was bedeutet length?
-   Zu welchem Zweck soll length hier benutzt werden?

----------------------------------------------------------------------

Aufgabe 4: Zahlenspiele

a) Erzeugen Sie ein Array und speichern Sie 5 zufällige Zahlen die Sie in       einer Schleife erzeugen in diesem Array ab.
b) Ermitteln Sie! 
    -   die Summe der Zahlen
    -   den Mittelwert
    -   die größte Zahl
    -   die kleinste Zahl

    -   Testen Sie Ihr Programm mit positiven und negativen Zahlen!
c) Geben Sie Ihre Ergebnisse aus.

----------------------------------------------------------------------

Aufgabe 5: Würfeln – Häufigkeit ermitteln

a) Füllen Sie ein 100-Felder-Array mit Zufallszahlen von 1-6!
b) Zählen Sie das Auftreten der Zahlen in folgendem Array

var zaehler = [0, 0, 0, 0, 0, 0];

c) Werten Sie die Zählerstände aus und geben Sie z.B. die folgende Ausgabe aus:

Die Zahlen 1-6 traten in 100 Würfen in der folgenden Häufigkeit auf:
1:16x 2:17x 3:16x 4:14x, 5:19x, 6:18x
Die Zahl 5 trat am häufigsten auf.
Die Zahl 4 trat am wenigsten auf.

d) Ausgabe mit einer for-Schleife erzeugen
----------------------------------------------------------------------

Aufgabe 6: Lottozahlen
Programmieren Sie die Ziehung der Lottozahlen "6 aus 49"!
Es dürfen keine doppelten Zahlen in der Ziehung vorkommen,wurde eine Zahl bereits gezogen, so wird eine neue Zahl erzeugt!
Geben Sie die Ziehung wie folgt aus: 17,10,13,8,6,1

*/