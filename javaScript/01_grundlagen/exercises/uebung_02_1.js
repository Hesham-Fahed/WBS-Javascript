"use strict";

document.write("<h2>Umrechnung von Sekunden auf Tage</h2>");

// var sekunden = parseFloat(prompt("Wie viele Sekunden sollen umgerechnet werden."));
var sekunden = parseFloat(prompt("Welche Zeitspanne hat der Sattelit in Sekunden übermittelt?"));

var m = Math.floor(sekunden / 60);
var s = sekunden % 60; // Ergebnis Sekunden

var h = Math.floor(m / 60);
m = m % 60;

var d = Math.floor(h / 24);
h = h % 24;

document.write("<p>" + sekunden + " Sekunden sind: " + d + " Tage, " + h + " Stunden, " + m + " Minuten und " + s + " Sekunden.</p>");