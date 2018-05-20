"use strict";

var form = document.getElementById("form");
form.innerHTML = "<form action='#' method='get'>"
    + "<label for='vorname'>Vorname</label>"
    + "<input type='text' name='vorname' id='vorname'>"
    + "<label for='nachname'>Nachname</label>"
    + "<input type='text' name='nachname' id='nachname'>"
    + "<label for='e-mail'>E-mail</label>"
    + "<input type='text' name='e-mail' id='e-mail'>"
    + "<input type='submit' id='sendBtn' value='Absenden'>";
+ "</form>"


var button = document.getElementById("sendBtn");
button.onclick = validateForm;

function validateForm(e) {
    e.preventDefault();
    var input = document.getElementById("form").getElementsByTagName("input");
    var valide = Array();

    // kontrollieren ob input leer ist, falls ja placeholer setzten und kontroll-array-variable auf false setzen
    for (var i = 0; i < input.length - 1; i++) {
        if(input[i].value.trim() === "") {
            input[i].placeholder = "Feld darf nicht leer sein";
            valide[i] = false;
        } else {
            valide[i] = true;
        }
    }

    // kontrollieren, ob eins der Felder leer ist (valide[i] === false), falls ja, 2. kontrollvariable auf false lassen und Schleife sofort abrechen. 
    for (var i = 0; i < valide.length; i++) {
        var absenden = false;
        if (valide[i] === true) {
            absenden = true;
        } else {
            break;
        }
    }
    
    // wenn "absenden" in allen Fällen von valide[i] true ist, dann Formular löschen und folgen Text einfügen
    if (absenden === true) {
        form.innerHTML = "<h2>Geschafft!</h2>"
                       + "<h3>Vielen Dank für Ihre Daten</h3>"
                       + "<p>Mit lieben Grüßen, ihre NSA.</p>"
    }

    // console.log(valide);
}