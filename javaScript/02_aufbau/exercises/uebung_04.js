(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {

        var neu = document.getElementById("neu");
        var btn_hinzufuegen = document.getElementById("btn_hinzufuegen");
        btn_hinzufuegen.addEventListener("click", hinzufuegen);

        function hinzufuegen(e) {
            e.preventDefault
            if (neu.value.trim().length <= 1) {
                alert("Bitte etwas eingeben");
            } else {

                // Neuen Listenpunkt erschaffen und mit Anker befüllen
                var neuerPunkt = document.createElement("li");
                var neuerAnker = document.createElement("a");
                neuerAnker.classList.add("offen");
                neuerAnker.setAttribute("href", "#");
                neuerAnker.appendChild(document.createTextNode(neu.value));
                neuerPunkt.appendChild(neuerAnker);

                document.getElementById("liste").appendChild(neuerPunkt);
            }

        }

        // Anker bei Tap auf class=erledigt setzten
        document.getElementById("liste").addEventListener("click", erledigt);
        document.getElementById("liste").addEventListener("mouseover", hover);
        document.getElementById("liste").addEventListener("mouseout", hover);

        function erledigt(e) {
            e.preventDefault();
            if (e.target.nodeName === "A") {
                e.target.classList.toggle("offen");
                e.target.classList.toggle("erledigt");
            }
        }

        function hover(e) {
            if (e.target.nodeName === "A") {
                // e.target.appendChild(document.createTextNode(" <"));
                e.target.classList.toggle("hover");
            }
        }


    }
    );


}(window, document));