"use strict";
var out = "";

var zahl = Math.random(); // [0 1[  oder 0 <= zahl < 1
out += "<b>var zahl = Math.random();</b> //=> " + zahl + "<br>";

zahl = Math.floor(Math.random()*6)+1; // [1 6[  oder 1 <= zahl <= 6
out += "<b>zahl = Math.random()*6;</b> //=> " + zahl + "<br>";

// Ziel: 5,6,7,8,9, ..., 18,19,20
// Insgesamt 16 Mögliche Zahlen von 5 inklusive bis 20 inklusive
zahl = Math.random(); // [0 1[  oder 0 <= zahl < 1
var min = 5;    // Untergrenze
var max = 20;   // Obergrenze
var multi = (max + 1) - min; // 16 
zahl = zahl * multi; // 0 <= zahl < 16
zahl = zahl + min; // 5 <= zahl < 21 (Fließkommzahl)
zahl = Math.floor(zahl); // 5 <= zahl <= 20

document.write(out);
