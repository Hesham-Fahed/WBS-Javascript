(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {

        var uls = document.getElementsByTagName("ul");

        //__________anfang u1.addEventListener______________________
        for (var i = 0; i < uls.length - 1; i++) {
            document.getElementsByTagName("ul")[i]
                .getElementsByTagName("a")[0]
                .addEventListener("click", function (e) {
                    e.preventDefault();

                    // wählt das dem Elternelement benachbarte Ausgabe-Div aus
                    var ausgabe = this.parentElement.parentElement.nextElementSibling;

                    // wählt den Link aus dem href-Attribut des angeklickten Elements
                    var link = this.href;
                    ajaxGet(link, function (res) {
                        var data = JSON.parse(res);
                        var s = "<ul>";

                        // Prüft ob es eine HTML-Collection oder ein einzelnes Objekt ist
                        if (data.length !== undefined) {
                            // Öffnet gegebenenfalls Arrays in denen die Objekte liegen
                            for (var i = 0; i < data.length; i++) {
                                s += "<li><a href='" + data[i].url + "'>" + data[i].text + "</a></li>";
                            }
                        } else {
                            // Wenn die Länge undefined ist: 
                            for (var keys in data) {
                                s += "<li>" + capitalize(keys) + " : " + data[keys] + "</li>";
                            }
                        }

                        s += "</ul>";
                        ausgabe.innerHTML = s;
                    })
                });
        } //__________ende u1.addEventListener______________________





        //__________anfang u3.addEventListener______________________
        document.getElementById("u3")
            .addEventListener("click", function (e) {
                e.preventDefault();

                var datei = "aufgabe3.json";


                if (e.target.id === "all") {
                    ajaxGet(datei, function (resp) {
                        return getAllElements(resp);
                    })
                } else {
                    var ziel = e.target;
                    ajaxGet(datei, function (resp) {
                        return getElements(resp, ziel);
                    })
                }


            }); //__________ende u3.addEventListener______________________

        function getElements(resp, ziel) {
            var ausgabe3 = document.getElementById("a3");
            var s = "<ul>";
            var data3 = JSON.parse(resp);
            // ziel ist der angeklickte link. Die Ziel-id ist um ein höher als die id in der JSON. Also wird die letzte Stelle in aus der Id gezogen (slice) und um 1 reduziert. Das entspricht, dann der Id in der JSON-Datei.
            for (var keys in data3[(ziel.id.slice(-1) - 1)]) {
                s += "<li>" + capitalize(keys) + " : " + data3[(ziel.id.slice(-1) - 1)][keys] + "</li>";
            }
            s += "</ul>";
            ausgabe3.innerHTML = s;
        }

        function getAllElements(resp) {
            var ausgabe3 = document.getElementById("a3");
            var s = "<ul>";

            var data3 = JSON.parse(resp);
            for (var i = 0; i < data3.length; i++) {
                for (var keys in data3[i]) {
                    s += "<li>" + capitalize(keys) + " : " + data3[i][keys] + "</li>";
                }
            }
            s += "</ul>";
            ausgabe3.innerHTML = s;
        }


/* 
        function showData(e) {
            e.preventDefault();
            ajaxGet("aufgabe3.json", function (res) {
                var data = JSON.parse(res);
                var email = e.target.innerHTML;
                console.log(email);
                var s = "";
                s += "<ul>";
                for(var i = 0; i < data.length; i++) {
                    if(data[i].email === email || email === "Alle") {
                        for(var key in data[i]) {
                            s += "<li>" + key + " : " + data[i][key] + "</li>";
                        }
                    }                    
                }
                s += "</ul>";
                document.getElementById("a3").innerHTML = s;
            });
        }
 */
    }
    ); // _________________ende  window.addEventListener_________________


}(window, document));