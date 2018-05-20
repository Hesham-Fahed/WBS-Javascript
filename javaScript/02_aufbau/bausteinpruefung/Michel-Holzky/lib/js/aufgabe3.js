(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {

        var left = document.getElementById("left");

        left.addEventListener("click", getData);

    }
    ); // :::::::::- ende eventlistener "load" -::::::::::


    ////////////////////////////////////////////
    // Funktionen
    ////////////////////////////////////////////

    function getData(e) {
        e.preventDefault();

        var datei = "lib/data/aufgabe3_data.json";

        // ajaxGet aus der Lib-Datei: Steffen Rech
        ajaxGet(datei, function (resp) {
            var bildDaten = JSON.parse(resp);
            showInfo(bildDaten, e);
            // console.log(bildDaten.length);
        });
    } // :::::::::- ende getData -::::::::::


    function showInfo(bildDaten, e) {
        if (e.target.parentElement.nodeName === "A") {
            var nomen = e.target.parentElement.lastElementChild;
            var right = document.getElementById("right");


            // Die Class="active" resetten
            var removeClass = document.getElementById("auswahl").getElementsByTagName("span");
            removeContent(right); // removeContent aus der Lib-Datei
            for (var i = 0; i < removeClass.length; i++) {
                removeClass[i].classList.remove("active");
            }

            // bestimmt welches Array dem angeklickten Bild entspricht
            // und gibt position weiter
            for (var i = 0; i < bildDaten.length; i++) {
                if (bildDaten[i].Deckname.toLowerCase() == nomen.textContent.toLowerCase().trim("")) {
                    var pos = i;
                    if (i === bildDaten.length - 1) {
                        alert("Puh, geschafft.");
                    }
                }
            }

            // der vorschau die Klasse acitve geben
            nomen.classList.add("active");


            //////////////////////////////////////////////////
            // Ausgabe befüllen
            /////////////////////////////////////////////////
            // headline
            var headline = createElement("h2", nomen.textContent); // createElement aus der Lib-Datei: Steffen Rech
            right.appendChild(headline);

            // img
            var img = createElement("img"); // createElement aus der Lib-Datei: Steffen Rech
            img.setAttribute("src", "lib/img/magic/deck_ansicht/" + bildDaten[pos].Bild.src);
            img.setAttribute("alt", bildDaten[pos].Deckname);
            img.setAttribute("title", bildDaten[pos].Deckname + " Deckliste");
            right.appendChild(img);

            // h3
            var h3 = createElement("h3", "Karten:"); // createElement aus der Lib-Datei: Steffen Rech
            right.appendChild(h3);

            // ul und li
            var ul = createElement("ul"); // createElement aus der Lib-Datei: Steffen Rech
            ul.setAttribute("id", "karten");
            for (var i = 0; i < bildDaten[pos].Karten.length; i++) {
                var li = createElement("li", bildDaten[pos].Karten[i]); // CreateElement aus der Lib-Datei: Steffen Rech
                ul.appendChild(li);
            }


            // ul.innerHTML = li;
            right.appendChild(ul);

            // Link zum Shop
            var p = createElement("p"); // createElement aus der Lib-Datei: Steffen Rech
            var pText = document.createTextNode("Kaufen ");
            var pA = createElement("a"); //  createElement aus der Lib-Datei: Steffen Rech
            var linkText = document.createTextNode(bildDaten[pos].Deckname);
            pA.appendChild(linkText);
            pA.setAttribute("href", bildDaten[pos].Link);
            p.appendChild(pText);
            p.appendChild(pA);
            right.appendChild(p);
        }
    }

}(window, document));