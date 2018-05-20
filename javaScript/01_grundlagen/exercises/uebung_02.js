"use strict";

document.write("<h2>Berechnung von Temperaturen</h2>");

// var c = Number(prompt("Wieviel Grad haben wir?"));

// var F = c * 9/5 + 32;
// var K = c + 273.15;

// document.write(
//     "</p><b>" + c + "° Celsius</b> sind <b>" 
//     + F + "° Fahrenheit</b> und <b>" 
//     + K + " Kelvin. </b></p>"
// );


///////////////////////////////////////////////////
// Berechnung des Netteogehalts                    //
///////////////////////////////////////////////////
document.write("<h2>Der Nettolohn</h2>");

var brutto = Number(prompt("Brutto: "));
var kinderAnzahl = Number(prompt("Kinderanzahl: "));
var lohnSteuer = (brutto * 0.05);
var krankenVersicherung = brutto * ((11 - kinderAnzahl ) / 100);
var kirchenSteuer = (lohnSteuer * 0.03);
var soli = (lohnSteuer * 0.01);
var pflegeVersicherung = krankenVersicherung * 0.2;

var abzuege = lohnSteuer + krankenVersicherung + kirchenSteuer + soli + pflegeVersicherung;

var netto = brutto - abzuege;


document.write(
    "<p>Dein Nettogehalt beträgt bei einem Bruttoeinkommen von " 
    + brutto 
    + " Euro, "
    + "<b>"
    + netto
    + " Euro netto.</b></p>"
);

document.write(
    "<h2>Lohnzettel:</h2>"
    +   "<ul>" 
    +   "<li>Ihr Bruttolohn: " + brutto +  " €</li>"
    +   "<li>Anzahl Kinder: " + kinderAnzahl +  "</li>"
    +   "<li>Lohnsteuer: " + lohnSteuer +  " €</li>"
    +   "<li>Krankenversicherung: " + krankenVersicherung +  " €</li>"
    +   "<li>Kirchensteuer: " + kirchenSteuer +  " €</li>"
    +   "<li>Soli: " + soli +  " €</li>"
    +   "<li>Pflegeversicherung: " + pflegeVersicherung +  " €</li>"
    +   "<li>Abzüge: " + abzuege +  " €</li>"
    +   "<li>Nettolohn: " + netto +  " €</li>"
    +   "</ul>"
);



/* 
Vereinfachtes Steuerrecht
Ein Steuerberechnungsprogramm erwartet die Eingabe des Bruttolohnes und die Eingabe der Kinderanzahl.
Der Ihnen auszuzahlende Nettobetrag ermittelt sich, indem Sie folgende Beträge vom Bruttobetrag abziehen:
1. Lohnsteuer: 5% vom Bruttolohn
2. Krankenversicherung: (11% - Anzahl der Kinder * 1 %) vom Bruttolohn (z.B. eine Familie mit 3 Kindern hat 8% zu zahlen)
3. Kirchensteuer: 3% der Lohnsteuer vom Bruttolohn
4. Solidaritätsabgabe: 1% der Lohnsteuer vom Bruttolohn
5. Pflegeversicherung: 20 % des Betrags der Krankenversicherung vom Bruttolohn
Das Programm soll alle Abzüge vom Bruttolohn ausdrucken.
*/

var brutto2,
    kinder2,
    lohnsteuer2,
    krankenversicherung2,
    kirchensteuer2,
    soli2,
    pflege2,
    abzuege2,
    netto2;

brutto2 = Number(prompt("Bitte Bruttolohn eingeben", "3000")),
kinder2 = Number(prompt("Bitte Anzahl Kinder eingeben", "3")), 
lohnsteuer2 = brutto2 / 100 * 5,
krankenversicherung2 = brutto2 / 100 * (11 - kinder2),
kirchensteuer2 = lohnsteuer2 / 100 * 3,
soli2 = lohnsteuer2 / 100,
pflege2 = krankenversicherung2 / 100 * 20,
abzuege2 = lohnsteuer2 + krankenversicherung2 + kirchensteuer2 + soli2 + pflege2,
netto2 = brutto2 - abzuege2;

document.write(
    "<h2>Lohnzettel:</h2>"
    +   "<ul>" 
    +   "<li>Ihr Bruttolohn: " + brutto2 +  " €</li>"
    +   "<li>Anzahl Kinder: " + kinder2 +  "</li>"
    +   "<li>Lohnsteuer: " + lohnsteuer2 +  " €</li>"
    +   "<li>Krankenversicherung: " + krankenversicherung2 +  " €</li>"
    +   "<li>Kirchensteuer: " + kirchensteuer2 +  " €</li>"
    +   "<li>Soli: " + soli2 +  " €</li>"
    +   "<li>Pflegeversicherung: " + pflege2 +  " €</li>"
    +   "<li>Abzüge: " + abzuege2 +  " €</li>"
    +   "<li>Nettolohn: " + netto2 +  " €</li>"
    +   "</ul>"
);


/////////////////////////////////////////////////////
// Berechnung des Spritverbrauchs                  //
/////////////////////////////////////////////////////
// document.write("<h2>Der Spritverbrauch</h2>");

// var km = parseFloat(prompt("Wieviele Kilometer sind sie gefahren?"));
// var liter = parseFloat(prompt("Wieviel Liter Treibstroff haben Sie dabei verbraucht"));

// var verbrauch = ( liter / km ) * 100;
// verbrauch = verbrauch.toFixed(2);
// document.write("<p>Ihr Spritverbrauch liegt bei <b>" + verbrauch + " Liter pro 100km</b></p>");
