(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {

        var preview = document.getElementById("preview");
        var datei = "lib/data/aufgabe2_data.json";

        preview.addEventListener("click", getData);
    }
    );

    function getData(e) {
        // ajaxGet aus der Lib-Datei: Steffen Rech
        ajaxGet("lib/data/aufgabe2_data.json", function (resp) {
            var bildDaten = JSON.parse(resp);
            showInfo(bildDaten, e);
        });
    }

    function showInfo(bildDaten, e) {

        if (e.target.parentElement.nodeName === "LI") {
            var nomen = e.target.parentElement.lastElementChild;
            var infotext = document.getElementById("infotext");


            // Ausgabe leeren
            removeContent(infotext); // removeContent aus der Lib-Datei: Steffen Rech

            // bestimmt welches Array dem angeklickten Bild entspricht
            // und gibt position weiter
            for (var i = 0; i < bildDaten.length; i++) {
                if(bildDaten[i][0].toLowerCase() == nomen.textContent.toLowerCase().trim("")) {
                   var pos = i;
                }
            }
            
            /////////////////////////////////////////////////
            // Ausgabe befüllen
            /////////////////////////////////////////////////

            // ul
            var ul = createElement("ul"); // CreateElement aus der Lib-Datei: Steffen Rech
            
            // img
            var img = createElement("img"); // CreateElement aus der Lib-Datei: Steffen Rech
            img.setAttribute("src", "lib/img/magic/preview/" + bildDaten[pos][6]);
            infotext.appendChild(img);

            // h2
            var headline = createElement("h2", bildDaten[pos][0]); // CreateElement aus der Lib-Datei: Steffen Rech
            var li = createElement("li"); // CreateElement aus der Lib-Datei: Steffen Rech
            li.appendChild(headline);
            ul.appendChild(li);
            
            // restliche Listenpunkt ohne erste, ohne letzte Position
            for(var j = 1; j < bildDaten[pos].length-1; j++) {
                var li2 = createElement("li", bildDaten[pos][j]); // CreateElement aus der Lib-Datei: Steffen Rech
                ul.appendChild(li2);
            }
            
            var li = createElement("li"); // CreateElement aus der Lib-Datei: Steffen Rech

            // input
            var input = createElement("input"); // CreateElement aus der Lib-Datei: Steffen Rech
            input.setAttribute("value", 1);
            input.setAttribute("type", "text");

            // button
            var button = createElement("button"); // CreateElement aus der Lib-Datei: Steffen Rech
            button.setAttribute("type", "button");
            var wahren = document.createTextNode("In den Wahrenkorb");
            button.appendChild(wahren);
            
            
            li.appendChild(input);
            li.appendChild(button);
            ul.appendChild(li);

            infotext.appendChild(ul);
        }
    }


}(window, document));