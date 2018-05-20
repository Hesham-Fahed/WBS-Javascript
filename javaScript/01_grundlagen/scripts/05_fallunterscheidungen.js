"use strict";

// var anzahlAuflagen = 11;
// var anzahl = ++anzahlAuflagen;
// var anzahl2 = anzahlAuflagen++;

var vorne = "Michel"
var hinten = "Holzky"
var zusammen = vorne + " " + hinten;

var wahrheitswert = true;
wahrheitswert += ""; // Wahrheitswert in Zeichenkette

var anzahlAuflagen = "11";
anzahlAuflagen *=2; // Zeichenkette in Zahl

var anzahl = 11;
anzahl += ""; // Zahl in Zeichenkette

// Zufallswert und Eingabe
var zufall = Math.random();
var eingabe = prompt("Geben Sie eine Zahl von 0 bis 1 ein, ohne 1");
var zahl = parseFloat(eingabe);

// Auswertung
if(eingabe == null)
    alert("Sie haben die Schaltfläche Abbrechen betätigt");
else if(eingabe == "")
    alert("Sie haben nichts eingegeben");
else if(isNaN(eingabe))
    alert("Sie haben keine gültige Zahl eingegeben");
else if(zahl < 0 || zahl >= 1)
    alert("Sie haben keine Zahl im gültigen Bereich eingegeben");
else if(Math.abs(zufall - zahl) < 0.1)
    alert("Sie sind nah dran");
else
    alert("Sie sind weit weg");

    // Kontrolle
alert("Zufall: " + zufall + "\nEingabe: " + eingabe
+ "\nisNaN(): " + isNaN(eingabe) + "\nZahl: " + zahl
+ "\nDifferenz: " + (zufall-zahl)
+ "\nBetrag: " + Math.abs(zufall-zahl));