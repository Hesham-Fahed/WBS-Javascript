(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {
        function countUp() {
            var zahl = Number(this.innerHTML);
            //Preinkrement: ++zahl 
            //Wert erst erhöhen und dann zahl benutzen
            this.innerHTML = ++zahl;

            /** Kurzform: Automatische Umwandlung durch Postinkrement */
            // this.innerHTML++;
        }

        function foobar(e) {
            console.log(e);
        }

        var class_box = document.getElementsByClassName("box");
        for (var i = 0; i < class_box.length; i++) {
            class_box[i].addEventListener("mouseover", countUp);
            class_box[i].addEventListener("mouseover", foobar);
        }
        ////////////////////////////////////////////////////////////////////////////////
        /* Eventhandler DOM-Level1 vs Eventlistener DOM Level 2
        Vorteile von DOM-Level2:
        1. Durch addEventlistener können mehrere Events an einem Element gebunden werden
            (sogar Events des gleichen Typs)
        2. DOM Level 2 Events können mit element.removeEventListener wieder entfernt werden 
        
        */
        ////////////////////////////////////////////////////////////////////////////////
        function addHandler(el, ev, fn) {
            el.addEventListener(ev, fn);
        }

        function showInfo(e) {
            e.preventDefault();
            console.log(e);
            console.log(e.target.innerHTML, this.innerHTML);
        }

        var list_a = document.getElementById("list").getElementsByTagName("a");
        for (var i = 0; i < list_a.length; i++) {
            //list_a[i].addEventListener("click", showInfo);
            addHandler(list_a[i], "click", showInfo);
            //In der FN: el.addEventListener(ev, fn);

        }
        /* 
        Funktion addHandler
        Die Funktion nimmt 3 Parameter an
        Parameter 1: Ein JS-Objekt vom Typ-Element
        Parameter 2: Eine Zeichenkette mit dem Event z.B. "click", "mouseover"...
        Parameter 3: Eine FN-Referenz die aufgerufen werden soll wenn das Event ausgelöst wird.
        Kein return

        Die Funktion soll das Event über addEventlistener binden.


        Funktion benutzen um die Hyperlinks in der ul#list mit einem click Handler zu versehen.
        Beim click soll eine FN showInfo aufgerufen werden, diese gibt das EventObjekt und das innerHTML des geklickten Links in die Konsole aus.
        */


        function zuweisung(objekt, event, funk) {
            objekt.addEventListener(event, funk);
        }



        function changeRGB() {
            var zufall = "rgb(";
            for (var i = 0; i < 3; i++) {
                if (i === 2) {
                    zufall += Math.floor(Math.random() * 256);
                } else {
                    zufall += Math.floor(Math.random() * 256) + ", ";
                }
            }
            zufall += ");";
            alert(zufall);
            this.style.color = zufall;
            // return zufall;
        }


        var links = document.getElementById("list").getElementsByTagName("a");
        console.log("Links " + links);

        for (var i = 0; i < links.length; i++) {
            // objekt[i].addEventListener("mouseover", countUp);
            zuweisung(links[i], "mouseover", changeRGB);
        }





    });
}(window, document));