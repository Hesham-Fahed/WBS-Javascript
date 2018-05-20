"use strict";
function fehlersuche(fehler, datei, zeile)
{
    alert("Fehler: " + fehler + "\Datei: " + datei + "\nZeile: " + zeile);
}


window.onerror = fehlersuche;

// var y = 32;

//     document.write(x + "<br>");
//     document.write(y + "<br>");

var wert = parseFloat(prompt("Bitte eine Zahl > 0 eingeben"));

try {
    if(isNaN(wert))
        throw "Das war keine Nummer";
    if(wert <= 0) {
        throw "Die Zahl war zu klein"
    }
}
catch(fehlermeldung) {
    alert(fehlermeldung);
}
