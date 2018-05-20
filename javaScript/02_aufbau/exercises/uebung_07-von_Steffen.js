/* Lösung 3 */
(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {
        function setErrors(a) {
            for (var i = 0; i < a.length; i++) {
                a[i].style.border = "2px solid #ff0000";
            }
        }
        function removeAllErrors(a) {
            for (var i = 0; i < a.length; i++) {
                a[i].style.border = "";
            }
        }

        document.forms[0].addEventListener("submit", function (e) {
            // e.preventDefault();
            var f = e.target;
            var fehler = document.getElementById("fehler");
            var errorMsg = [];
            var errorEl = [];
            removeAllErrors([document.getElementById("anrede"), f.vorname, f.nachname, f["e-mail"], f.sektion, f.agb.parentElement]);

            if (!isChecked(f.geschlecht)) {
                errorMsg.push("Bitte wählen Sie ein Geschlecht");
                errorEl.push(document.getElementById("anrede"));
            }

            if (f.vorname.value.trim() === "") {
                errorMsg.push("Bitte Vornamen eintragen");
                errorEl.push(f.vorname);
            }
            if (f.nachname.value.trim() === "") {
                errorMsg.push("Bitte Nachnamen eintragen");
                errorEl.push(f.nachname);
            }
            if (f["e-mail"].value.trim() === "") {
                errorMsg.push("Bitte E-Mail eintragen");
                errorEl.push(f["e-mail"]);
            }

            if (f.sektion.options.selectedIndex < 1) {
                errorMsg.push("Bitte Sektion wählen");
                errorEl.push(f.sektion);
            }
            if (!isChecked(f.agb)) {
                errorMsg.push("Bitte AGB akzeptieren");
                errorEl.push(f.agb.parentElement);
            }

            fehler.innerHTML = "";
            if (errorMsg.length) {
                e.preventDefault();
                fehler.innerHTML = "<ul><li>" + errorMsg.join("</li><li>") + "</li></ul>";
                setErrors(errorEl);
            }
        });
    });
}(window, document));


/* Lösung 3 */
// (function (window, document) {
//     "use strict";
//     window.addEventListener("load", function () {
//         function setError(el) {
//             el.style.border = "2px solid #ff0000";
//         }

//         function removeAllErrors(a) {
//             for (var i = 0; i < a.length; i++) {
//                 a[i].style.border = "";

//             }
//         }

//         document.forms[0].addEventListener("submit", function (e) {
//             // e.preventDefault();
//             var f = e.target;
//             var fehler = document.getElementById("fehler");
//             var errorMsg = [];           
//             removeAllErrors([document.getElementById("anrede"),f.vorname,f.nachname,f["e-mail"],f.sektion, f.agb.parentElement]);


//             if(!isChecked(f.geschlecht)) {
//                 errorMsg.push("Bitte wählen Sie ein Geschlecht");
//                 // document.getElementById("anrede").style.border = "2px solid #ff0000";
//                 setError(document.getElementById("anrede"));
//             }

//             if(f.vorname.value.trim() === "") {
//                 errorMsg.push("Bitte Vornamen eintragen");
//                 // f.vorname.style.border = "2px solid #ff0000";
//                 setError(f.vorname);
//             }
//             if(f.nachname.value.trim() === "") {
//                 errorMsg.push("Bitte Nachnamen eintragen");
//                 // f.nachname.style.border = "2px solid #ff0000";
//                 setError(f.nachname);
//             }
//             if(f["e-mail"].value.trim() === "") {
//                 errorMsg.push("Bitte E-Mail eintragen");   
//                 // f["e-mail"].style.border = "2px solid #ff0000";    
//                 setError(f["e-mail"]);         
//             }


//             if(f.sektion.options.selectedIndex < 1) {
//                 errorMsg.push("Gewünschte Sektion wählen"); 
//                 setError(f.sektion); 
//             }
//             if(!isChecked(f.agb)) {
//                 errorMsg.push("Bitte AGB akzeptieren");
//                 setError(f.agb.parentElement); 
//             }


//             fehler.innerHTML = "";
//             if (errorMsg.length) {
//                 e.preventDefault();
//                 fehler.innerHTML = "<ul><li>" + errorMsg.join("</li><li>") + "</li></ul>";
//             }
//         });
//     });
// }(window, document));


/* Lösung 1-2 */
// (function (window, document) {
//     "use strict";
//     window.addEventListener("load", function () {
//         document.forms[0].addEventListener("submit", function (e) {
//             // e.preventDefault();
//             var f = e.target;
//             var fehler = document.getElementById("fehler");
//             var errorMsg = [];
//             // isChecked(f.geschlecht) === false
//             if(!isChecked(f.geschlecht)) {
//                 errorMsg.push("Bitte wählen Sie ein Geschlecht");
//             }

//             if(f.vorname.value.trim() === "") {
//                 errorMsg.push("Bitte Vornamen eintragen");
//             }
//             if(f.nachname.value.trim() === "") {
//                 errorMsg.push("Bitte Nachnamen eintragen");
//             }
//             if(f["e-mail"].value.trim() === "") {
//                 errorMsg.push("Bitte E-Mail eintragen");                
//             }

//             //Vorsicht: Bitte wählen ist options Index 0
//             // < 1 funktioniert in diesem Beispiel weil ---Bitte wählen--- Index 0 ist
//             console.log(f.sektion.options.selectedIndex);
//             if(f.sektion.options.selectedIndex < 1) {
//                 errorMsg.push("Gewünschte Sektion wählen"); 
//             }
//             if(!isChecked(f.agb)) {
//                 errorMsg.push("Bitte AGB akzeptieren");
//             }

//             fehler.innerHTML = "";
//             if (errorMsg.length) {
//                 e.preventDefault();
//                 fehler.innerHTML = "<ul><li>" + errorMsg.join("</li><li>") + "</li></ul>";
//             }
//         });
//     });
// }(window, document));



/* 
1. isChecked(a)
1.1 Schreiben Sie eine Funktion isChecked, der Sie eine HTMLCollection/RadioNodelist oder ein Array mit inputs vom type: radio oder checkbox als Parameter übergeben können. Die Funktion gibt ein true zurück wenn eines der übergebenen Elemente angewählt wurde (checked === true). Ist kein Element angewählt gibt die Funktion false zurück.
1.2 Erweitern Sie die Funktion dahingehend das zuerst geprüft wird ob in Parameter a ein einzelnes Element oder eine Sammlung von Element übergeben wurde. Die weitere Funktionalität soll
wie bei 1.1 bleiben.

1.1
isChecked( [f.html, f.css, f.js] )
isChecked( f.geschlecht )

1.2
isChecked( f.agb )


2. Formularvalidierung
Alle mit Stern gekennzeichneten Felder sind Pflichtfelder.
Validierung wie im Beispiel 10_form.

Fehler im Container div#fehler als ungeordnete Liste ausgeben.

3. Für die schnellen:
Versehen Sie alle Felder mit Fehlern mit einem roten Rahmen und denken Sie daran diesen bei
korrekt ausgefüllten Feldern zu entfernen.
Denken Sie über eine automatisierung nach, for-Schleife über Formularfelder.
*/