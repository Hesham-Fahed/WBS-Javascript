"use strict";
////////////////////////////////////////////////////////////////////
// Aufgabe 1
////////////////////////////////////////////////////////////////////
/* 
1. Funktion tagesDatum().
Schreiben Sie eine Funktion die das aktuelle Tagesdatum wie folgt zurückgibt: Dienstag, der 23. Januar 2018 - 10:15

Rufen Sie die Funktion auf um das Datum im div#ausgabe anzuzeigen.
Beispiel: Seite geladen Dienstag, der 23. Januar 2018 - 10:15 
*/

var out = "";
var aktuell = new Date();

function tagesdatum(jetzt) {

    var tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var wTag = tage[jetzt.getDay()];

    var monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    var monat = monate[jetzt.getMonth()];

    var jahr = jetzt.getFullYear();

    var stunden = jetzt.getMinutes();
    var minuten = jetzt.getMinutes();
    var zeit = stunden + ":" + minuten;

    var jetztUndHier = jetzt.getDate();

    var dieZeit = "";
    dieZeit += "Angepasst: <b>" + wTag + ", der " + jetztUndHier + ". " + monat + " " + jahr + " - " + zeit + "</b>";
    return dieZeit;
}

document.getElementById("ausgabe").innerHTML = aktuell + "<br>";
document.getElementById("ausgabe").innerHTML += tagesdatum(aktuell);

////////////////////////////////////////////////////////////////
// Aufgabe 2
///////////////////////////////////////////////////////////////
/*
2.dateFormat()
Die Funktion soll alle Zeichen im Formatstring für die eine Ausgabe defniert ist mit dem jeweiligen Wert austauschen und alle Zeichen für die es keine vordefinierte Ausgabe eins zu eins übernehmen.
"w" Tag der Woche ausgeschrieben Montag,Dienstag ...
"d" Tag des Monats als Zahl 1-31
"M" Monat Januar, Februar ...
"m" Monat 1-12
"y" Jahr
"H" Stunde
"i" Minute 
"s" Sekunden



Jedes andere Zeichen im Formatstring wird direkt übernommen:
dateFormat(new Date(), "H:i:s");
Ausgabe z.B: 10:58:56

Zusatzaufgabe: Erweitern Sie Lösung dahingehend das Stunden, Minunten, Sekunden und Millisekunden mit führenden Nullen ausgegeben werden.
*/


// http://php.net/manual/de/function.date.php
// w:M:m:d:y:H:i:s:

function dateFormat(official, custom) {
    var day = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var month = ["Dezember", "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    var ausgabeZeit = Array();
    var eingabeZeit = custom;
    eingabeZeit.split(":");
    console.log("Testzeit: " + eingabeZeit + typeof eingabeZeit);

    // zeit.push(custom.replace("w", day[official.getDay()]));
    // zeit.push(custom.replace("M", month[official.getMonth()]));
    // zeit.push(custom.replace("m", official.getMonth()+1));
    // zeit.push(custom.replace("d", official.getDate()));
    // zeit.push(custom.replace("y", official.getFullYear()));
    // zeit.push(custom.replace("H", official.getHours()));
    // zeit.push(custom.replace("i", official.getMinutes()));
    // zeit.push(custom.replace("s", official.getSeconds()));

    // zeit.push(custom.replace("w", day[official.getDay()]));
    // zeit = custom.replace("M", month[official.getMonth()]);
    // zeit = custom.replace("m", official.getMonth()+1);
    // zeit = custom.replace("d", official.getDate());
    // zeit = custom.replace("y", official.getFullYear());
    // zeit = custom.replace("H", official.getHours());
    // zeit = custom.replace("i", official.getMinutes());
    // zeit = custom.replace("s", official.getSeconds());
    console.log("Zeit: " + zeit);
}



dateFormat(new Date(), "H:i:s");

