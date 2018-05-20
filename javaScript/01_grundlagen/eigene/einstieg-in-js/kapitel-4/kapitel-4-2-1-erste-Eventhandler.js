"use strict";
function wechsel(objekt) {
    document.f.kontrolle.value =
          objekt.name + ", " + objekt.value + ", Inhalt neu";
}

function aenderung(objekt) {
    document.f.kontrolle.value =
          objekt.name + ", " + objekt.value + ", Zeichen neu";
}

function markiert(objekt) {
    var ausgabe = objekt.name + ", " + objekt.value;
    if (objekt.checked)
          document.f.kontrolle.value = ausgabe + ", markiert";
    else
          document.f.kontrolle.value = ausgabe + ", nicht markiert";
}

function senden() {
    return confirm("Wollen Sie das Formular absenden?");
}

function ruecksetzen() {
    return confirm("Wollen Sie das Formular zurücksetzen?");
}