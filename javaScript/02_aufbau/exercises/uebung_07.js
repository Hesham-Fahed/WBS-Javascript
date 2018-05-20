(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {

        document.forms[0].addEventListener("submit", function (e) {
            e.preventDefault();
            // console.log(e);
            // console.log(this);
            // console.log(e.target);



            var out = [];

            var form = document.forms[0];
            var geschlecht = document.getElementById("anrede").getElementsByTagName("input");
            // console.log("Geschlecht: ", isChecked(geschlecht));
            isChecked(geschlecht);

            var agb = [];
            agb.push(document.getElementById("agb"));
            isChecked(agb);


            function isChecked(obj) {
                var check = false;
                var element = [];

                if (obj.length < 2) {
                    element.push(obj[0].id);
                    if (obj[0].checked === true) {
                        check = true;
                    }
                } else {
                    for (var i = 0; i < obj.length; i++) {
                        element.push(obj[i].id);
                        // console.log("ID: ", obj[i].id);
                        if (obj[i].checked === true) {
                            check = true;
                            break;
                        }
                    }
                }
                if (check === false) {
                    out.push("Bitte füllen sie das Feld " + element + " aus.");
                    // element.style.border = "1px solid red";
                    document.getElementById(element[0]).style.backgroundColor = 'red';
                    // console.log(document.getElementById(element[0]).style);
                }
                return check;

            }

            var sektion = document.getElementById("sektion");
            // blendet den roten Rahmen sofort aus sobald eine Eingabe erfolgt
            sektion.addEventListener("change", function (e) {
                // console.log(e.target);
                e.target.style.border = "";
            })
            if (sektion.options.selectedIndex < 0) {
                out.push("Bitte geben sie eine Sektion an.");
                sektion.style.border = "2px solid red";
            }


            // blendet den roten Rahmen sofort aus sobald eine Eingabe erfolgt
            form.vorname.addEventListener("input", function (e) {
                // console.log(e.target);
                e.target.style.border = "";
            })
            if (form.vorname.value.trim() === "") {
                out.push("Vorname darf nicht leer sein.");
                form.vorname.style.border = "2px solid red";
            }

            // blendet den roten Rahmen sofort aus sobald eine Eingabe erfolgt
            form.nachname.addEventListener("input", function (e) {
                // console.log(e.target);
                e.target.style.border = "";
            })
            if (form.nachname.value.trim() === "") {
                out.push("Nachname darf nicht leer sein.");
                form.nachname.style.border = "2px solid red";
            }

            if (form["e-mail"].value.trim() === "") {
                out.push("Email darf nicht leer sein.");
            }

            document.getElementById("fehler").innerHTML = "";
            if (out.length) {
                document.getElementById("fehler").innerHTML = "<ul><li>" + out.join("</li><li>") + "</li></ul>";
            }
        })
    });
}(window, document));

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