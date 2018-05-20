"use strict";
//Seite 37 Bucht 2.2.1 Rechenoperatoren
var z = 2 + 4 - 2.5; 
document.write("<p>" + z + "<br>");

z = 2 + 4 * 3 - 6 / 2; 
document.write(z + "<br>");

z = (2 + 4) * (3 - 6) / 2; 
document.write(z + "<br>");

z = 13 % 5; 
document.write(z + "<br>");

z = 6;
z = -z; 
document.write(z + "<br>");

z = z * 5; 
document.write(z + "</p>");
//////////////////////////////////////////////////////////////////////
document.write("<hr>");
var s = "";

var z = 2 + 4 - 2.5; 
//document.write("<p>" + z + "<br>");
s = s + "<p>" + z + "<br>";

z = 2 + 4 * 3 - 6 / 2; 
//document.write(z + "<br>");
s = s + z + "<br>"

z = (2 + 4) * (3 - 6) / 2; 
// document.write(z + "<br>");
s = s + z + "<br>";

z = 13 % 5; 
// document.write(z + "<br>");
s = s + z + "<br>";

z = 6;
z = -z; 
// document.write(z + "<br>");
s = s + z + "<br>";

z = z * 5; 
// document.write(z + "</p>");
s = s + z + "</p>";

//Nur noch ein document.write!
document.write(s);

var eingabe = prompt("Bitte Zahl eingeben", "42.444");
document.write(
    "<hr>" + eingabe + " Datentyp: <b>" + typeof eingabe + "</b><br>"
    + "parseFloat " + parseFloat(eingabe) + " Datentyp: <b>" + typeof parseFloat(eingabe) + "</b><br>"
    + "Number " + Number(eingabe) + " Datentyp: <b>" + typeof Number(eingabe) + "</b><br>"
    + "parseInt " + parseInt(eingabe) + " Datentyp: <b>" + typeof parseInt(eingabe) + "</b><br>"
);

/*
parseFloat und Numbre konvertieren in den Datentyp number mit Nachkommastellen.
parseIntkonvertiert in Datentyp number und schneidet die Nachkommastelle ab.

Diese Funktionen geben NaN ( Not a Number ) zurück wenn der übergebene Wert nicht in eine Zahl umgewandelt werden kann
*/

document.write(
    "<h2><p>Math-Objekt</h2>"
    + "<b>Math.PI</b> //=>" + Math.PI + "<br>"
    + "<b>Math.pow(2,4)</b> //=>" + Math.pow(2,4) + "<br>"
    + "<b>Math.round(0.4)</b> //=>" + Math.round(0.4) + "<br>"
    + "<b>Math.round(0.5)</b> //=>" + Math.round(0.5) + "<br>"
    + "<b>Math.floor(0.5)</b> //=>" + Math.floor(0.9) + "<br>"
    + "<b>Math.ceil(0.1)</b> //=>" + Math.ceil(0.1) + "</p>"
);

///////////////////////////////////////////////////////////
document.write("<h2>Zuweisungsoperatoren</h2>")

var x = 12;
var y = 2;

///////////////////////////////////////////////////////////
document.write("<h2 style='color: hotpink; font-size: 100px;'>&#10084;</h2>")
document.write("<h2 style='color: lime; font-size: 100px;'>&#9762;</h2>")
document.write("<h2 style='color: anthrazit; font-size: 100px;'>&#9760;</h2>")
document.write("<h2>Zuweisungsoperatoren</h2>")


//Trenner , 
console.log("x = ", x, " y = ", 2);

//Stringverkettung +
console.log("x = " + x + " y = " + 2);