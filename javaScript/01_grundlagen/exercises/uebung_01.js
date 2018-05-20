"use strict";

var a = 13;
var b = 3;

var sammeln;
var berechnung = "<p>Berechnung: ";

var sum = a + b;
sammeln += berechnung 
        + "a + b = " 
        + sum
        + "<br>" 
        + "sum : " 
        + typeof sum;


var division = a / b;
sammeln += berechnung 
        + "a / b = "  
        + division 
        + "<br>" 
        + "sum : " 
        + typeof division;

var IntDivision = parseInt( a / b);
sammeln += berechnung 
        + "a / b &asymp; "  
        + IntDivision 
        + "<br>" 
        + "sum : " 
        + typeof IntDivision;
// sum = (a - ( a% b)) / b;
// sum = division - division % 1;


var remainder = a % b;
sammeln += berechnung 
        + "a % b = "  
        + remainder 
        + "<br>" 
        + "sum : " 
        + typeof remainder;
document.write();

document.write(sammeln + "</p>");

//////////////////////////////////////////////////////////////////
// Eingabe über Prompt
//////////////////////////////////////////////////////////////////


document.write("<hr>");
var zahl1 = parseFloat(prompt("Bitte geben sie eine Zahl ein: ", "a: "));
var zahl2 = parseFloat(prompt("Bitte geben sie eine zweite Zahl ein: ", "b: "));
document.write("<p>a = " + a + "<br>");
document.write("b = " + b +"</p>");

var summe = zahl1 + zahl2;
document.write("<p>Berechnung: a + b = " + summe + "<br>");
document.write("typeof: " + typeof summe + "</p>");

var differenz = zahl1 - zahl2;
document.write("<p>Berechnung: a - b = " + differenz + "<br>");
document.write("typeof: " + typeof differenz + "</p>");

var produkt = zahl1 * zahl2;
document.write("<p>Berechnung: a * b = " + produkt + "<br>");
document.write("typeof: " + typeof produkt + "</p>");

var quotient = zahl1 / zahl2;
document.write("<p>Berechnung: a / b = " + quotient + "<br>");
document.write("typeof: " + typeof quotient + "</p>");




