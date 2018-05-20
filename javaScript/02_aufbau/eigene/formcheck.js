(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {

        // Formular an Variable geben und mit Eventhandler versehen
        var form = document.forms[0];
        form.addEventListener("submit", formChecker);





        function formChecker(e) {

            var errorMsg = [];

            e.preventDefault();

            var anrede = document.getElementById("anrede");
            if (!isChecked(anrede)) {
                errorMsg.push("Bitte werfen Sie eine Münze ein");
            }

            var vorname = document.getElementById("vorname");
            if (vorname.value.trim() === "" ) {
                errorMsg.push("Bitte tragen Sie Ihren Vornamen ein.");
            }
            
            var nachname = document.getElementById("nachname");
            if (nachname.value.trim() === "" ) {
                errorMsg.push("Bitte tragen Sie Ihren Nachnamen ein.");
            }

            var email = document.getElementById(["e-mail"]);
            if (email.value.trim() === "" ) {
                errorMsg.push("Bitte tragen Sie Ihre e-mail ein.");
            }

            var sektion = document.getElementById("sektion");
            if ( sektion.selectedIndex < 0) {
                errorMsg.push("Bitte wählen Sie eine Sektion aus.");
            }

            var agb = document.getElementById("agb");
            if (!isChecked(agb)) {
                errorMsg.push("Bitte akzeptieren Sie unsere AGBs.");
            }

            document.getElementById("fehler").innerHTML = "<ul><li>" + errorMsg.join("</li><li>") + "</li></ul>";
        }


    });

    function isChecked(el) {
        if (el.length !== undefined) {
            for (var i = 0; i < el.length; i++) {
                if (el[i] === checked) {
                    return true;
                }
            }
            return false;
        } else {
            return el.checked;
        }
    }

}(window, document));