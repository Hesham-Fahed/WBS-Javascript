"use strict";

/* function numSequence(){
    var out = document.getElementById("ausgabe1");
    var s = "";
    for (var i = 0; i < 12; i++) {
        s += rand(0,9);
    }
    console.log("Kontrolle: ", s.length);
    out.innerHTML = s;
} */

function numSequence() {
    var out = document.getElementById("ausgabe1");
    var s = [];
    while (s.length < 12) {
        s.push(rand(0, 9));
    }
    console.log("Kontrolle: ", s.length);
    out.innerHTML = s.join("");
}

/* function numSequence() {
    var out = document.getElementById("ausgabe1");
    var zz = Math.floor(Math.random() * 100000000000);
    zz = String(zz);
    while(zz.length < 12) {
        // zz = "0" + zz;
        zz = rand(0,9) + zz;
    }
    console.log("Kontrolle: ", zz.length);
    out.innerHTML = zz;
}
 */

function printLinks() {
    var out = document.getElementById("ausgabe1");
    var s = "";
    var browser = [
        "Google Chrome",                                            // Index 0 -> Inhalt für hyperlink 1
        "https://www.google.de/chrome/browser/desktop/index.html",  // Index 1 -> Inhalt für href von hyperlink 1
        "Mozilla Firefox",                                          // Index 2 -> Inhalt für hyperlink 2
        "https://www.mozilla.org/de/firefox/",                      // Index 3 -> Inhalt für href von hyperlink 2
        "Microsoft EDGE",                                           // Index 4 -> Inhalt für hyperlink 3
        "https://www.microsoft.com/de-de/windows/microsoft-edge"    // Index 5 -> Inhalt für href von hyperlink 3
    ];
    
    var count = browser.length; //Anzahl Elemente
    var link;
    s += "<ul id='liste'>";
    for (var index = 0; index < count; index += 2) {
        //link = '<a href="' + browser[index + 1] + '">' + browser[index] + '</a>';
         link = '<a href="' + browser[index+1] + '" title="Downloaden Sie hier '+browser[index]+'">' + browser[index] + '</a>';
        s += "<li>" + link + "</li>";
    }
    s += "</ul>";

    //Wenn nicht modular/erweiterbar gefordert ist, vollkommen ausreichend!
    /* s+= "<ul id='liste'>";
    s+= '<li><a href="' + browser[1] + '">' + browser[0] + '</a></li>';
    s+= '<li><a href="' + browser[3] + '">' + browser[2] + '</a></li>';
    s+= '<li><a href="' + browser[5] + '">' + browser[4] + '</a></li>';
    s+= "</ul>"; */
    out.innerHTML = s;
}

function validateForm() {
    var out = document.getElementById("ausgabe3");
    var s = ""; //Sammelt Fehlermeldungen
    var vorname = document.getElementById("vorname");
    var nachname = document.getElementById("nachname");

    if (vorname.value.trim() === "") {
        s += "<p>Vorname darf nicht leer sein</p>";
    }

    if (nachname.value.trim() === "") {
        s += "<p>Nachname darf nicht leer sein</p>";
    }

    //WENN: s ungleich Leerstring (mindestens eine Fehlermeldung wurde in s geschrieben) ...
    if (s !== "") {
        // ... dann schreiben wir den Inhalt von s ins innerHTML des div#ausgabe3
        out.innerHTML = s;
    } else { //ANDERENFALLS..
        //... leeren wir den div#ausgabe3
        out.innerHTML = "";
        //... und öffnen das alert mit der Meldung 
        alert("Formular wird versendet!");
    }
}

/* function validateForm(){ 
    var out = document.getElementById("ausgabe3");
    var s = ""; 
    var vorname = document.getElementById("vorname");
    var nachname = document.getElementById("nachname");
    var fehler = false; // Zu beginn gibt es keinen Fehler, also false

    if(vorname.value.trim() === "") {
        s += "<p>Vorname darf nicht leer sein</p>";
        fehler = true; //Ein Fehler bei vorname setzt fehler auf true
    }
    
    if(nachname.value.trim() === "") {
        s += "<p>Nachname darf nicht leer sein</p>";
        fehler = true; //Ein Fehler bei nachname setzt fehler auf true
    }

    //WENN: Inhalt die Variable fehler ein true enthält...
    if(fehler) {
        // ... dann schreiben wir den Inhalt von s ins innerHTML des div#ausgabe3
        out.innerHTML = s;
    } else { //ANDERENFALLS..
        //... leeren wir den div#ausgabe3
        out.innerHTML = "";
        //... und öffnen das alert mit der Meldung 
        alert("Formular wird versendet!");
    }
} */

/* function validateForm(){ 
    var out = document.getElementById("ausgabe3");
    var s = ""; 
    var vorname = document.getElementById("vorname");
    var nachname = document.getElementById("nachname");

    if(vorname.value.trim() === "") {
        s += "<p>Vorname darf nicht leer sein</p>";
    }

    if(nachname.value.trim() === "") {
        s += "<p>Nachname darf nicht leer sein</p>";
    }

    //WENN: Value von input#vorname UND input#nachname nicht leer sind, also UNGLEICH ("") Leerstring
    if(vorname.value.trim() !== "" && nachname.value.trim() !== "") {
        out.innerHTML = "";
        alert("Formular wird versendet!");
    } else {
        out.innerHTML = s;
    }
} */





/* 
1. Wenn der Button "Erzeuge zufällige 12 Stellige Ziffernfolge" gedrückt wird, soll eine Funktion aufgerufen werden in der:
Mit Hilfe der Funktion "rand" eine 12 Stellen lange Ziffernfolge aus
zufälligen Ziffern zwischen 0-9 erzeugt werden.
Geben Sie die zufällig erzeugte Ziffernfolge im div#ausgabe aus.

Ausgabe: 58963017015
Ausgabe: 25783483173



2.Wenn der Knopf "Gebe Linkliste aus" gedrückt wird , soll eine Funktion aufgerufen werden in der:

Aus dem folgenden Array eine ul#liste erzeugt werden. In der die 
Browser als Hyperlinks angezeigt werden:

<div id="ausgabe2">

    <ul id="liste">
        <li><a href="https://www.google.de/chrome/browser/desktop/index.html">Google Chrome</a></li>
        ...
    </ul>
</div>

Array:

var browser = [
    "Google Chrome",
    "https://www.google.de/chrome/browser/desktop/index.html",
    "Mozilla Firefox",
    "https://www.mozilla.org/de/firefox/",
    "Microsoft EDGE",
    "https://www.microsoft.com/de-de/windows/microsoft-edge"
];


3.Wenn der Knopf "Eingabe verarbeiten" gedrückt wird , soll eine Funktion aufgerufen werden in der: 

Prüfen Sie ob input#vorname und input#nachname ausgefüllt wurden.
Die Felder dürfen nicht leer sein.

Wenn eines der Felder nicht ausgefüllt wurde geben Sie eine Fehlermeldung für dieses Feld in den div#ausgabe3 aus.


Beispiel: vorname und nachname sind leer

div#ausgabe: 
<p>Vorname darf nicht leer sein</p>
<p>Nachname darf nicht leer sein</p>


Beispiel: vorname ist leer

div#ausgabe: 
<p>Vorname darf nicht leer sein</p>


Wurden beide Felder ausgefüllt geben Sie mit einem alert folgende Meldung aus:
Formular wird versendet! Denken Sie daran das jetzt keine Fehlermeldung mehr zu sehen sein darf.


*/