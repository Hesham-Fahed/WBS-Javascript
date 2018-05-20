"use strict";
/* 
1. Wenn der Button "Erzeuge zufällige 12 Stellige Ziffernfolge" gedrückt wird, soll eine Funktion aufgerufen werden in der:
Mit Hilfe der Funktion "rand" eine 12 Stellen lange Ziffernfolge aus
zufälligen Ziffern zwischen 0-9 erzeugt werden.
Geben Sie die zufällig erzeugte Ziffernfolge im div#ausgabe aus.

Ausgabe: 58963017015
Ausgabe: 25783483173
*/

function rand() {
    var zahlenreihe = "";
    for (var i = 0; i < 12; i++) {
        zahlenreihe += Math.floor(Math.random() * 10);
    }
    return zahlenreihe;
}

function write(e) {
    e.preventDefault();
    var paste = document.getElementById("ausgabe1");
    paste.innerHTML = rand();
}

document.forms[0].onclick = write;


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/*
2. Wenn der Knopf "Gebe Linkliste aus"
gedrückt wird, soll eine Funktion aufgerufen werden in der:

    Aus dem folgenden Array eine ul# liste erzeugt werden.In der die
Browser als Hyperlinks angezeigt werden:

    <
    div id = "ausgabe2" >

    <
    ul id = "liste" >
    <
    li > < a href = "https://www.google.de/chrome/browser/desktop/index.html" > Google Chrome < /a></li >
    ...
    <
    /ul> <
    /div>

Array:

    var browser = [
        "Google Chrome",
        "https://www.google.de/chrome/browser/desktop/index.html",
        "Mozilla Firefox",
        "https://www.mozilla.org/de/firefox/",
        "Microsoft EDGE",
        "https://www.microsoft.com/de-de/windows/microsoft-edge"
    ];
*/

var browser = [
    "Google Chrome", // 0
    "https://www.google.de/chrome/browser/desktop/index.html", // 1
    "Mozilla Firefox", // 2
    "https://www.mozilla.org/de/firefox/", // 3
    "Microsoft EDGE", // 4
    "https://www.microsoft.com/de-de/windows/microsoft-edge" // 5
];

function makeLi(e) {
    e.preventDefault();
    var liItems = "";
    for (var i = 0; i < browser.length; i += 2) {
        liItems += "<li><a href ='" + browser[i + 1] + "'>" + browser[i] + "</a></li>";
    }
    document.getElementById("ausgabe2").innerHTML = "<ul id='liste'>" + liItems + "</ul>";
}

document.forms[1].onclick = makeLi;

/*
3. Wenn der Knopf "Eingabe verarbeiten"
gedrückt wird, soll eine Funktion aufgerufen werden in der:

    Prüfen Sie ob input# vorname und input# nachname ausgefüllt wurden.
Die Felder dürfen nicht leer sein.

Wenn eines der Felder nicht ausgefüllt wurde geben Sie eine Fehlermeldung für dieses Feld in den div# ausgabe3 aus.


Beispiel: vorname und nachname sind leer

div# ausgabe:
    <
    p > Vorname darf nicht leer sein < /p> <
    p > Nachname darf nicht leer sein < /p>


Beispiel: vorname ist leer

div# ausgabe:
    <
    p > Vorname darf nicht leer sein < /p>


Wurden beide Felder ausgefüllt geben Sie mit einem alert folgende Meldung aus:
    Formular wird versendet!Denken Sie daran das jetzt keine Fehlermeldung mehr zu sehen sein darf.
    */


function check(e) {
    e.preventDefault();
    var vorname = document.getElementById("vorname");
    var nachname = document.getElementById("nachname");
    var warnung = "";

    if (vorname.value.trim() === "") {
        warnung += "<p>Vorname darf nicht leer sein</p>";
    }
    if (nachname.value.trim() === "") {
        warnung += "<p>Nachname darf nicht leer sein</p>";
    }

    if (warnung !== "") {
        document.getElementById("ausgabe3").innerHTML = warnung;
    }

    if (!(nachname.value.trim() === "") && !(nachname.value.trim() === "")) {
        document.getElementById("ausgabe3").innerHTML = "";
        alert("Formular wird versendet");
    }
}


var button = document.forms[2].getElementsByTagName("input")[2];
button.onclick = check;