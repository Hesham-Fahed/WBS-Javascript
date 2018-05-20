(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {

        var user2 = {
            vorname: "Michel2",
            nachname: "Holzky",
            email: "tufftuff@tuuut.dummdumm"
        }

        var user = {
            vorname: "Michel",
            nachname: "Holzky",
            email: "tufftuff@tuuut.dummdumm",
            fillForm: function (f) {
                for (var keys in this) {
                    //           _______ greift auf die objekt-eigenschaften zu 
                    //           |
                    //           |
                    if (typeof this[keys] !== "function") {  // hier wird geprüft, ob eine der
                                                             // Eigenschaften eine Funktion enthält:
                        f[keys].value = this[keys];
                    } //     | 
                }     //     |
            },        //     |_____ greift auf die Formular-Elemente zu, 
                      //            deren IDs genauso benannt sind,
                      //            wie die Eigenschaften des Objekts

            /////////////////////////////////////////////
            // Variante mit for-Schleife
            /////////////////////////////////////////////
            // 
            // function fillForm() {
            //     var f = document.forms[0];
            //     for(var i = 0; i < f.length; i++) {
            //         if(user[f[i].id] !== undefined) {
            //             f[i].value = user[f[i].id] ;
            //         }
            //     }
            // },
            /////////////////////////////////////////////
    
            changeData: function (e) {
                e.preventDefault();
                for (var keys in this) {
                    if (typeof this[keys] !== "function") {
                        this[keys] = e.target[keys].value;
                    }
                }
                console.log("Menschnochmal: ", this);
            }
        };

        // ruft die erste Methode im Objekt auf. Diese füllt das HTML-Formular
        user.fillForm(document.forms[0]);

        var formular = document.forms[0];
        formular.addEventListener("submit", user.changeData.bind(user));

    });
}(window, document));