"use strict";

var neues = document.getElementById("neu");
console.log(neues.value);

function eintragen(e) {
    e.preventDefault();

    var neu = this.neu;
    var fehler = document.getElementById("fehler");
    fehler.innerHTML = "";

    if (neu.value.trim() === "") {
        fehler.innerHTML = "Eingabe darf nicht leer sein";
    } else {
        document.getElementById("liste").innerHTML += "<li>" + neues.value + "</li>";
        neues.value = "";
    }
}

document.forms[0].onsubmit = eintragen;