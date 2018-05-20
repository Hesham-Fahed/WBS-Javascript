"use strict";

// Variablen Hoisting
console.log(blub);

var a = 42;

var string = "Was machst du hier?";
var text = "Naja, komm rein";

// Ausgabe 
document.write("<p>Erster Text: " + string + "<br></p>");

// Variable ohne Wert 
var nochEine;
document.write("<p>Ohne Wert: " + nochEine + "</p>"); 

var blub ="Inhalt von Blub";
console.log(blub);

var cite = "<p>\"Binde zwei Vögel zusammen, sie werden nicht fliegen können, obwohl Sie nun vier Flügel haben.\" - Rumi"; 
document.write(cite);

cite = '<p>"Jenseits der Vorstellung von Richtig und Falsch liegt ein Ort. Dort werde ich dich treffen" - Rumi </p>';
document.write(cite);


document.write("<h2>promt</h2>");
var ihrName = prompt("Verrätst du mir deinen Namen?", "Bitte hier eingeben");
document.write("<hr><p>Hallo " + ihrName + "!<br> Süßer Name</p>");

/*
promt ist eine Funktion (Bezeichner in dem Funktion liegt)
() sind der Funktionsaufrufoperator
promt()

In den runden Klammern werden Werte durch Komme getrennt an die Funktion überbeben. Die Werte in den Klammern nennt man auch Parameter. Bei promt ist vordefiniert das mindestens 0 aber maximal 2 Parameter übergeben werden können, Wobei der erste Parameter als Beschriftung für die Box nicht entfallen sollte.

function (parameter1, parameter2, parameter3);
*/

document.write("<h2>Speichern von Zahlen</h2>");

var grafZahl, bettlerZahl;
bettlerZahl = 3.8;
grafZahl = 42 + bettlerZahl;


var zahl1, zahl2;
zahl1 = 42;
zahl2 = zahl1 + 30.8;

var klZahl = -3.7e-3; // mal 10 hoch -3 (= 0.0037)
var grZahl = 5.2e6; // mal 10 hoch 6 (= 5.2 Millionen oder 5200000)

document.write("<p>Erste Zahl " + zahl1 + "<br>");
document.write("Zweite Zahl " + zahl2 + "<br>");
document.write("Unerwartet " + zahl2 + 25 + "<br>");
document.write("Dritte Zahl " + (zahl2 + 25) + "<br>");
document.write("kleine Zahl " + klZahl + "<br>");
document.write("große Zahl " + grZahl + "</p>");

document.write("<h2>Konstanten const</h2>");
// ECMA 5 und funktioiert nur in ganzn nuen Brwosern Stad. Aprill 2018
const MWST = 19;
const PI = 3.1415926;

// Konvention Name in Großbuchstaben
// var MWST = 19;
// var PI = 3.1415926;


