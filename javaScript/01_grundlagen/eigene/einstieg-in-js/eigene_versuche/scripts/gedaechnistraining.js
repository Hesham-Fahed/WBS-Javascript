"use strict";

var zaehler = 1;
var i = 0;
var endlos = 0;
var stelligkeit = 3;
var zufall = "";

do {
  zufall = "";
  if (i > 2) {stelligkeit++; i = 0;}

  for (var j = 0; j < stelligkeit; j++) {
    zufall += Math.floor(Math.random() * 10);
  }

  alert("Bitte folgende Zahl merken: " + zufall);
  var tipp = Number(prompt("Ihre Eingabe bitte."));
  
  i++;
  zaehler++;
} while (zufall == tipp);


alert("Sie haben " + zaehler + " Runden durchgehalten.");