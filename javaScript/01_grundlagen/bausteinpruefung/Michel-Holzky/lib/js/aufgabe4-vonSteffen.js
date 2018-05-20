"use strict";

// function capitalize(s) {
//     return s.charAt(0).toUpperCase() + s.slice(1);
// }

// var fields = ["vorname","nachname","e-mail"];
// var f = '<form action="#" method="get">';
// for(var i = 0; i < fields.length; i++) {
//     f += '<label for="'+fields[i]+'">'+capitalize(fields[i])+'</label><input id="'+fields[i]+'" name="'+fields[i]+'" type="text">'
// }
// f += '<input id="sendBtn" value="Absenden" type="submit">'+
// '</form>';
// document.getElementById("form").innerHTML = f;


// function checkForm(e) {
//     e.preventDefault();
//     var vorname = document.getElementById("vorname");
//     var nachname = document.getElementById("nachname");
//     var email = document.getElementById("e-mail");
//     var error = false;

//     if(vorname.value.trim() === "") {
//         vorname.placeholder = "Feld darf nicht leer sein";
//         error = true;
//     }
//     if(nachname.value.trim() === "") {
//         nachname.placeholder = "Feld darf nicht leer sein";
//         error = true;
//     }
//     if(email.value.trim() === "") {
//         email.placeholder = "Feld darf nicht leer sein";
//         error = true;
//     }

//     if(!error/* vorname.value !== "" && nachname.value !== "" && email.value !== ""  */) {
//         document.getElementById("form").innerHTML = "<h2>Geschafft</h2><h3>Vielen Dank für Ihre Daten</h3>";
//     }
// }


// function checkForm(e) {
//     e.preventDefault();
//     var f = this; // document.forms[0];
//     var error = false;
//     if(f.vorname.value.trim() === "") {
//         f.vorname.placeholder = "Feld darf nicht leer sein";
//         error = true;
//     }
//     if(f.nachname.value.trim() === "") {
//         f.nachname.placeholder = "Feld darf nicht leer sein";
//         error = true;
//     }
//     if(f["e-mail"].value.trim() === "") {
//         f["e-mail"].placeholder = "Feld darf nicht leer sein";
//         error = true;
//     }

//     if(!error) {
//         document.getElementById("form").innerHTML = "<h2>Geschafft</h2><h3>Vielen Dank für Ihre Daten</h3>";
//     }
// }


function checkForm(e) {
    e.preventDefault();
    var f = this; // document.forms[0];
    var error = false;
    
    for(var i = 0; i < f.length; i++) {
        if(f[i].value.trim() === "") {
            f[i].placeholder = "Feld darf nicht leer sein";
            error = true;
        } 
    }
    if(!error) {
        document.getElementById("form").innerHTML = "<h2>Geschafft</h2><h3>Vielen Dank für Ihre Daten</h3>";
    }
}

var formString =  '<form action="#" method="get">'+
                  '<label for="vorname">Vorname</label>'+
                  '<input id="vorname" name="vorname" type="text">'+
                  '<label for="nachname">Nachname</label>'+
                  '<input id="nachname" name="nachname" type="text">'+
                  '<label for="e-mail">E-mail</label>'+
                  '<input id="e-mail" name="e-mail" type="text">'+
                  '<input id="sendBtn" value="Absenden" type="submit">'+
                  '</form>';


document.getElementById("form").innerHTML = formString;
document.forms[0].onsubmit = checkForm;


