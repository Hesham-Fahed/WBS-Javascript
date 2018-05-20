(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {


        // ajaxGet("lib/data/aufgabe1_data.json", function (resp) {
        //     var bildDaten = JSON.parse(resp);
        //     changePic(bildDaten);
        // });

        $.ajax({
            url : "lib/data/aufgabe1_data.json"
        })

        // Erzeugt Zufallszahl aus der Anzahl der Arrays/Bilder
        function randomPic(resp) {
            return Math.floor(Math.random() * resp.length);
        }


        // ändert die Attribute anhand der in randomPic ermittelten Arrays: Array[zufall]
        var pic = document.getElementById("bg");
        function changePic(resp) {
            var zufall = randomPic(resp);
            var quelle = "lib/img/magic/landing_page/" + resp[zufall][0];
            pic.src = quelle;

            var altAtt = resp[zufall][1];
            pic.alt = altAtt;

            var titleAtt = altAtt;
            pic.title = titleAtt;
        }
    }
    );


}(window, document));