"use strict";
var summe = 0;

document.write("summe vor dem if: " + summe + "<br>");

//WENN (einmalig)
if(summe < 4) {
    summe = summe + Math.random();
}

document.write("summe nach dem if: " + summe + "<br><br>");


summe = 0;
var counter = 0;
document.write("summe vor dem while: " + summe + "<br>");
//SOLANGE (unbekannt Anzahl an durchläufen)
while(summe < 4) {
    summe = summe + Math.random();
    console.log(summe);
    counter++; // counter = counter +1; oder counter += 1
}

document.write("summe nach dem while: " + summe + "<br>Anzahl benötiger Durchläufe: " + counter + "<br>Bitte mit F12 die Konsole öffnen für Zwischenergebnisse aus der Schleife<br>");


//Alternativ ohne Bedingung im Schleifenkopf mit if-Anweisung und break im Anweisungsblock. Von hinten durch die Brust ins Auge - Überflüssig!
// summe = 0;
// while(1) {
//     summe = summe + Math.random();
//     if(summe > 4) {break;}
// }


/* 
Buch Kapitel 2.4 ohne 2.4.5
Dann PDF-Dateien while-, for- Schleife

Übungen zu Schleifen bearbeiten

Übung gedaechtnistraining.html

- Bitte 2.4.5 erstmal überspringen. 
Zu diesem Kapitel gibt es eine Übungsaufgabe 
gedaechtnistraining.html

*/

// WHILE-SCHLEIFE /////////////////////////
var i = 1;
while( i <= 10 ) {
    document.write(i + " ");
    i++;
}

// FOR-SCHLEIFE //////////////////////////////
document.write("<hr>");

for (var j = 1; j <= 10; j++) {
    document.write(j + " ");
}

// FOR-SCHLEIFE DIE ZUR WHILE-SCHLEIFE UMGEBAUT WURDE //////
var k = 1; 
for(;k <= 10;) {
    document.write(k + " ");
    k++;  
}

// DO-WHILE-SCHLEIFE ////////////////////////////////

document.write("<hr>");

var x = 100;
do {
    document.write(x + " ");
    x++;
} while(x <= 10);

/* var pw = "wbs";
var eingabe;

while(pw !== eingabe) {
    eingabe = prompt("Bittte Passwort eingeben");
} */

var pw = "wbs";
var eingabe;

do {
    eingabe = prompt("Bittte Passwort eingeben");
}while(pw !== eingabe);
