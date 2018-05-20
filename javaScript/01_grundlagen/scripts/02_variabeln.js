"use strict";

/* Stringliterale
'abc'   // Folge von Zeichen
"abc"  // Folge von Zeichen
"12"  // String mit Ziffern
"a3" // Folge von Zeichen und Ziffern
*/

/* Zahlenliterale
12
42
.12
.825
*/

/* Boolsche Literale 
true
false
*/

console.log("Mümü");

///////////////////////////////////////////////////
//      Variabeln
///////////////////////////////////////////////////

var postfach; // Variabeln deklarieren (erstes Anlegen)
console.log(postfach); //=> undefined

// Der Variabel postfach wird ein Wert zugewiesen
postfach = "Wert in Postfach";
console.log(postfach);

postfach = 12;
console.log(postfach); //=> 12


// Deklaration und Initalisierung in einem Schritt
var zahl = 42;

var         // Schlüsselwort
vorname     // Bezeichner (Variabelname - frei wählbar -> Regeln beachten)
=
"Michel"
;

var hallo = "Herzlich Willkommen";
console.log (hallo);

console.log ("hallo");

////////////////////////////////////////////////
// Datentypen
////////////////////////////////////////////////
console.log(">Hier folgt die Ausgabe von Datentypen<")
var a = 12;
var b = 4.2;
var c = "Hallo";
var d = 'Zeichenkette';
var e = true;

console.log(typeof a); //=> number
console.log(typeof c); //=> string
console.log(typeof e); //=> boolean

// Artimetrische Operatoren
console.log( 12 + 30 );
console.log( 12 - 30 );
console.log( 10 * 30 );
console.log( 10 / 30 );  
console.log( 12 % 5 );   //=>2 Rest wenn man 12 / 5 rechnet
console.log( a + b );  

console.log( "12 + 30 = " + 12 + 30);  //=> "12 + 30 = 1230"
console.log( "12 + 30 = " + (12 + 30));  //=> "42"

console.log( "3" + 3 + 3);  //=> "333"
console.log( 3 + "3" + 3);  //=> "333"
console.log( 3 + 3 + "3");  //=> "63"


document.write("##############################################");
document.write("##############################################");
document.write("<p> über mehrere 'document.write-Zeilen'");
document.write("##############################################");

var hallo = "Hey, Rocker";
var sogehts = "so geht das";

document.write("<p>Erster Text über var hallo: " + hallo + "<br>");
document.write("Zweiter Text: " + sogehts + "</p>");

var deinName = prompt("Bitte\nsagen sie ihren Namen.\nNe Scherz. Tippen wär besser.", "Dein Name");
document.write("Du heißt wirklich:\n"+ deinName +"?\nOhje, es gibt so viel Leid auf der Welt, von dem man gar nichts weiss.</br>");

// Deklaration, Zuweisung
var zahl, nochEineZahl;
zahl = 42;
nochEineZahl = zahl + 30.8;
var kleineZahl = -3.7e-3;
var grosseZahl = 5.2e6;
// Ausgabe
document.write("<p>Erste Zahl: " + zahl + "<br>");
document.write("Zweite Zahl: " + nochEineZahl + "<br>");
document.write("Unerwartet: " + nochEineZahl + 25 + "<br>");
document.write("Dritte Zahl: " + (nochEineZahl + 25) + "<br>");
document.write("Eine kleine Zahl: " + kleineZahl + "<br>");
document.write("Eine große Zahl: " + grosseZahl + "</p>");