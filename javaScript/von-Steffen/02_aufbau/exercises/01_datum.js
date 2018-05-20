"use strict";

function tagesDatum() {
    var day = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    var month = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    var d = new Date();

    return day[d.getDay()] + ", der " + d.getDate() + ". " + month[d.getMonth()] +  " " + d.getFullYear() + " - " + d.getHours() + ":" + d.getMinutes();
}

document.getElementById("ausgabe").innerHTML = tagesDatum();
/* 
1. Funktion tagesDatum().
Schreiben Sie eine Funktion die das aktuelle Tagesdatum wie folgt zurückgibt: 
Dienstag, der 23. Januar 2018 - 10:15

Rufen Sie die Funktion auf um das Datum im div#ausgabe anzuzeigen.
Beispiel: Seite geladen Dienstag, der 23. Januar 2018 - 10:15 

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

http://php.net/manual/de/function.date.php
*/

function dateFormat(d,format) {
    var day = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    var month = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    var s = "";
    for (var i = 0; i < format.length; i++) {
        switch (format.charAt(i)) { //format[i]
            case "w":
                s += day[d.getDay()];
                break;
            case "d":
                s += d.getDate();
                break;
            case "M":
                s += month[d.getMonth()];
                break;
            case "m":
                s += d.getMonth() + 1;
                break;
            case "y":
                s += d.getFullYear();
                break;
            case "H":
                s += ("0" + d.getHours()).slice(-2);
                break;
            case "i":
                s += ("0" + d.getMinutes()).slice(-2);
                break;
            case "s":
                s += ("0" + d.getSeconds()).slice(-2);
                break;
            default:
                s += format.charAt(i);
        }
    }
    return s;
}

document.getElementById("zeit").innerHTML = dateFormat(new Date(), "H:i:s");