"use strict";
var out = "";
//////////////////////////////////////////////
// 1a)

var haustiere = ["Hund", "Katze", "Adler", "Meerschweinchen", "Hamster", "Amsel", "Maus", "Ratte", "Fink", "Kaninchen"];

out += "<h2>Aufgabe 1a</h2><p>Alle Nager: " + haustiere[3] + ", " + haustiere[4] + ", " + haustiere[6] + ", " + haustiere[7] + "</p>";


//////////////////////////////////////////////
// 1b)
function voegel() {
    var voegelKaefig = "";

    for (var i = 2; i < haustiere.length; i += 3) {
        voegelKaefig += "<br>Position " + (i + 1) + ": " + haustiere[i];
    }
    return voegelKaefig;
}

out += "<h2>Aufgabe 1b</h2>Die Vögel sitzen auf den Positionen: " + voegel() + "<br><br>";

//////////////////////////////////////////////
// 1c)
function rand() {

    var zufall = Math.floor(Math.random() * haustiere.length);
    return haustiere[zufall];
}

out += "<h2>Aufgabe 1c</h2>Zufallsfreund: " + rand() + "<br>";
out += "Das array hat: <b>" + haustiere.length + "</b> Elemente.<br>";
out += "Das letzte Element adressiert man durch <b>haustiere[haustiere.length-1]</b>. Und das letzte Element ist: <b>" + haustiere[haustiere.length - 1] + "</b><br>";


//////////////////////////////////////////////
// 2)
//////////////////////////////////////////////

// Im Reitstall gibt es zehn Boxen zum Einstellen von Pferden. Diese sind gekennzeichnet mit Schildern von 1-10. Sie sollen in einem Array zwischenspeichern, welches Pferd gerade in welcher Box steht. Folgendes ist zu tun:
// - Legen Sie ein Array namens "Pferdeboxen" mit 10 unbelegten Speicherplätzen an.
// - Stellen Sie das Pferd mit dem Namen "Peggy" in die erste Box.
// - Stellen Sie das Pferd mit dem Namen "Moritz" in die vierte Box.
// - Stellen Sie das Pferd mit dem Namen "Dangerous" in die zehnte Box.
// - Geben Sie zur Kontrolle in einer Schleife die Belegung der Boxen aus.
// - Der Ausgabetext soll jeweils wie folgt lauten: "In Pferdebox Nr.X steht das Pferd namens Y",
// wobei X die Nummer der Box ist entsprechend Schild und Y der Name des Pferds.
// - Die 10 Ausgaben sollen untereinander stehen.
// - Ist eine Box nicht belegt (undefined) Geben Sie ein "X" aus

out += "<h2>Aufgabe 2: Pfedeboxen</h2>";

var pferdeBoxen = Array(10);
out += "Das neue Array heisst perdeboxen[ ] und ist <b>" + pferdeBoxen.length + "</b> Elemente lang.";

pferdeBoxen[0] = ("Peggy");
out += "Unser erster Gast heisst: <b>" + pferdeBoxen[0] + "</b><br>";

pferdeBoxen[3] = "Moritz"
out += "Jetzt sind wir schon zwei: <b>" + pferdeBoxen.join(". ") + "</b> Aber man sieht, es ist noch viel frei.<br>";

pferdeBoxen.splice(9, 1, "Dangerous");
out += "Und da warens jetzt schon 3: <b>" + pferdeBoxen.join(". ") + "</b><br>";

function auslastung(boxen) {
    var boxenBelegung = "";
    for (var i = 0; i < boxen.length; i++) {
        if (boxen[i] !== undefined) {
            boxenBelegung += "<br><b>" + boxen[i] + "</b> steht in Box: " + [i + 1];
        } else {
            boxenBelegung += "<br>X in Box: " + [i + 1];
        }
    }
    return boxenBelegung;
}
out += auslastung(pferdeBoxen) + "<br>";


//////////////////////////////////////////////
// 3)
//////////////////////////////////////////////
out += "<h2>Aufgabe 3: Namen</h2>"

var namen = [1, "Bernd", 2, "Anna", 3, "Michael", 4, "Katharina", 5, "Frank", 6, "Susanne"];

function auflistung(namensListe) {
    var nurNamen = Array();

    for (var i = 0; i < namensListe.length; i++) {
        if (isNaN(namensListe[i])) {
            nurNamen.push(namensListe[i]);
        }
    }
    return nurNamen;
}

out += "Hier die ganze Bande: " + auflistung(namen).join(" - ") + "<br>";


//////////////////////////////////////////////
// 4)
//////////////////////////////////////////////
out += "<h2>Aufgabe 4: Zahlenspiele</h2>"


function eingabe() {
    var zahlenreihe = Array();

    for (var i = 0; i < 5; i++) {
        var kontrolle = false;

        while (kontrolle === false) {
            zahlenreihe.push(parseInt(prompt("Bitte geben sie die " + i + ". Zahl ein:")));
       
            if (zahlenreihe[i] === null) {
                alert("Abbrechen wurde gedrückt");
                break;
            } else if (zahlenreihe[i] === "") {
                kontrolle = false;
            } else if (!isNaN(zahlenreihe[i])) {
                kontrolle = true;
            }
        }
    }
    return zahlenreihe;
}
var zahlenreihe = eingabe(); // Eingaben aus Funktion in globale Variable schreiben, damit funktion nicht jedes mal aufgerufen wird, wenn eine andere funktion die Zahlen anfordert. 
out += "Sie haben folgende Zahlen eingeben: " + zahlenreihe + "<br>";

function summe(summanden) {
    var summand = 0;

    for (var i = 0; i < summanden.length; i++) {
        summand += summanden[i];
    }
    return summand;
}

out += "Die Summe der Zahlen ist: " + summe(zahlenreihe) + "<br>";

function mittelwert(einzelwerte) {
    var sammeln = 0;
    var durchschnitt = 0;

    for (var i = 0; i < einzelwerte.length; i++) {
        sammeln += einzelwerte[i];
    }
    durchschnitt = sammeln / einzelwerte.length;
    return durchschnitt;
}

out += "Der Mittelwert der Zahlen ist: " + mittelwert(zahlenreihe) + "<br>";

function groesste(gegner) {
    var groessteZahl = 0;

    for (var i = 0; i < gegner.length; i++) {
        if (groessteZahl < gegner[i]) {
            groessteZahl = gegner[i];
        }
    }
    return groessteZahl;
}

out += "Die größte der Zahlen ist: " + groesste(zahlenreihe) + "<br>";

function kleinste(gegner) {
    var kleinsteZahl = Number.POSITIVE_INFINITY;

    for (var i = 0; i < gegner.length; i++) {
        if (kleinsteZahl > gegner[i]) {
            kleinsteZahl = gegner[i];
        }
    }
    return kleinsteZahl;
}

out += "Die kleinste der Zahlen ist: " + kleinste(zahlenreihe) + "<br>";



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
document.write(out);