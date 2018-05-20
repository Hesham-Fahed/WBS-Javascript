"use strict";

/////////////////////////////////////////////////////////
// Aufgabe 1
/////////////////////////////////////////////////////////

var heuhaufen = ["Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Nadel", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Heuhaufen", "Nadel"];

// Index von Nadel bestimmen
var index = 0;
index = heuhaufen.indexOf("Nadel");

// Das Ausgabe-Div addressieren 
var ausgabe = document.getElementById("ausgabe");

// Textcontainer für Ausgabe anlegen
var liste = "";
liste = "<ul>";

for (var i = 0; i < heuhaufen.length; i++) {
    liste += "<li>Index: " + i + " - Wert: " + heuhaufen[i] + "</li>";
}

liste += "</ul><p><b>Die Position der ersten Nadel ist Index: " + index + "</b></p>";
// Ausgabe in Document schreiben. Erst jetzt ins innerHTML schreiben, da sich sonst die ul beim rendern selbst schließt 
ausgabe.innerHTML = liste;



