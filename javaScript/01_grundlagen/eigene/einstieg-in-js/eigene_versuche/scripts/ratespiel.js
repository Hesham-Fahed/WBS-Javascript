"use strict";

function rand(min, max) {
    var zufall = Math.floor(Math.random() * (max - min + 1) + min);
    return zufall;
}

function raten() {
    alert("Test");
    var zufall = rand(0, 100);
    var kommentar = "";
    var i = 1;

    var eingabe = document.getElementById("eingabe");
    var ausgabe = document.getElementById("ausgabe");
    ausgabe.innerHTML = "";

    document.getElementById("pruefen").onclick = vergleich;

    function vergleich () {
        var tipp = eingabe.value;

        if (tipp.trim() === "") {
            tipp.placeholder = "Eingabe darf nicht leer sein";
        }

        if (tipp < zufall) {
            kommentar = i + "ter Versuch: Ihre Eingabe <b>" + tipp + "</b> ist zu niedrig";
            eingabe.value = "";
        } else if (tipp > zufall) {
            kommentar = i + "ter Versuch: Ihre Eingabe: <b>" + tipp + "</b> ist zu groß";
            eingabe.value = "";
        } else {
            kommentar = i + "ter Versuch: Richtig geraten!";
            eingabe.value = "";
        }
        i++;
        ausgabe.innerHTML = kommentar;
    } 

}

document.getElementById("starten").onclick = raten;
