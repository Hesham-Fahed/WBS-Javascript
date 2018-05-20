"use strict";

// function validateForm(e) {
//     e.preventDefault();
//     var neu = this.neu.value.trim();
//     var neu = document.getElementById("neu").value.trim();

//     if(neu === "") {
//         //Fehlermeldung
//     } else {
//         var ul = document.getElementById("liste");
//         // ul.innerHTML = ul.innerHTML + "<li>" + neu + "</li>";
//         ul.innerHTML += "<li>" + neu + "</li>";
//     }
// }

// document.forms[0].onsubmit = validateForm;


function validateForm(e) {
    e.preventDefault();
    var neu = this.neu;
    var fehler = document.getElementById("fehler");
    fehler.innerHTML = "";
    neu.style.border = "";
    if(neu.value.trim() === "") {
        fehler.innerHTML = "<b>Feld darf nicht leer sein</b>";
        neu.style.border = "2px solid red";
    } else {
        var ul = document.getElementById("liste");
        // ul.innerHTML = ul.innerHTML + "<li>" + neu + "</li>";
        ul.innerHTML += "<li>" + neu.value.trim() + "</li>";
        neu.value = "";
    }
}

document            //HTML-Dokument ansprechen
.forms              //Alle Formulare (vordefinierte HTMLColleciton)
[0]                 //davon das erste Element
.onsubmit           //Bindet Eventhandler onsubmit (Ereignis FOrmular soll gesendet werden)
= validateForm;     //Referenzieren der FN validateForm <- wird aufgerufen wenn Form gesendet werden soll