"use strict";

var x = 20;
var y = 50;

if (x < y )
    console.log("x: " + x + " ist kleine als b: " + y);

if (x > y )
    console.log("x: " + x + " ist größer als b: " + y);

if (x == y )
    console.log("x: " + x + " ist gleich y: " + y);

if (4 * x > y )
    console.log("4 x x: " + x + " ist größer y: " + y);

if (x >= 50 && x <=75 )
    console.log("x: " + x + " liegt zwischen 50 und 75");

if (x >= -23 && x <= 123 )
    console.log("x: " + x + " liegt zwischen -23 und 123");

if (x * y == 100 || x + y == 100)
    console.log("x: " + x + " y: " + y + " voll auf die Hundert" );

if (!(y >= 3 && x <= 13))
    console.log("y: " + y + " liegt nicht zwischen 3 und 13");



////////////////////////////////////////////////////////////
// Überprüfung deiner Zahl
////////////////////////////////////////////////////////////

var zahl = prompt("Geben Sie eine Zahl ein");
var ausgabe;

if (isNaN(zahl)) {
    ausgabe = "Die eingegebene Zahl ist keine Zahl.";
}
if (zahl % 2 == 0) {
    ausgabe = "Die eingegebene Zahl ist gerade.";
} 

if (zahl % 2 == 1) {
    ausgabe = "Die eingegebene Zahl ist ungerade.";
}

document.write("<p style='color: red;'>" + ausgabe + "</p>");


////////////////////////////////////////////////////////////
////////////////Tests mit Steffen///////////////////////////
////////////////////////////////////////////////////////////

// var eingabe;

// while (true) {
//     var eingabe = prompt("Bitte geben Sie etwas ein");
//     console.log(eingabe);

    //------- if-else ------------------------------------------
    //WENN der Wert in eingabe GLEICH null
    /* if(eingabe === null) {
         alert("ABBRECHEN wurde gedrückt");
         break; //Verlässt eine Schleife oder einen switch
    } else {
        document.write(eingabe + "<br>");
    } */

/*
    //------- Mehere if ------------------------------------------
    if (eingabe === null) {
        alert("ABBRECHEN wurde gedrückt");
        break;
    }
    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if(eingabe.trim() === "") {
        alert("Eingabe darf nicht leer sein");
    }
    
    if(Number(eingabe) === 5) {
        alert("Eingabe war 5");
    } 
    // // Ein else gilt nur für die direkt vorangegangene if-Anweisung
    // else {
    //     document.write(eingabe + " ***<br>");
    // }

    if(eingabe !== null && eingabe.trim() !== "" && Number(eingabe) !== 5) {
        document.write(eingabe + " ***<br>");
    }
*/

// if (eingabe  === null) {
//     alert("Abbrechen wurde gedrückt");
//     break;
// } else if(eingabe.trim() === "") {
//     alert("Die Eingabe darf nicht leer sein.")
// } else if(isNaN(eingabe)) {
//     alert("Die Eingabe muss eine Zahl sein.")
// } else {
//     document.write(eingabe + "<br>");
// }

// }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Geldwechsler
////////////////////////////////////////////////////////////

var einwurf = prompt("Bitte werfen Sie eine Münze ein.");
var einer;
var zweier;
var fuenfer;


if (!(isNaN(einwurf))) {
    
    if (einwurf == 2) {
        einer = 2;
    } else if (einwurf == 5) {
        einer = 1;
        zweier = 2;
    } else if (einwurf == 10) {
        fuenfer = 2;
    } else {
        document.write("Hau ab! Das war Falschgeld!");
    }
} else {
    document.write("Kein Geld, kein Wechselgeld");
}

for (x = 0; x < einer;) {
    document.write("<img src='img/1eu.jpg'>");
    x++;
}

for (x = 0; x < zweier;) {
    document.write("<img src='img/2eu.jpg'>");
    x++;
}

for (x = 0; x < fuenfer;) {
    document.write("<img src='img/5eu.jpg'>");
    x++;
}

////////////////////////////////////////////////////////////
// Die Länge deines Namens
////////////////////////////////////////////////////////////

var name = prompt("Bitte schreib deinen Namen (8 - 16 Zeichen)");

if (isNaN(name)) {

    if (name.length < 8) {
        ausgabe = "Dein Name ist zu kurz."
    } else if (name.length > 16) {
        ausgabe = "Dein Name ist zu lang."
    } else {
        ausgabe = "Dein Name hat " + name.length + " Zeichen."
    }
} else {
    ausgabe = "Du musst mir schon deinen richtigen Namen verraten."
}

document.write("<p>" + ausgabe + "</p>");

////////////////////////////////////////////////////////////
// Schaltjahr berechnen
////////////////////////////////////////////////////////////

var jahr = prompt("Bitte geben sie ein Jahr im Format xxxx ein:");

if ((jahr % 4 == 0 && !(jahr % 100 == 0)) || ((jahr % 4 == 0) && (jahr % 100 == 0) && (jahr % 400 == 0))) {
    document.write("Das Jahr: <b>" + jahr + "</b> ist ein Schaltjahr.")
} else {
    document.write("Das Jahr: <b>" + jahr + "</b> ist <b>Kein</b> Schaltjahr.")
}
