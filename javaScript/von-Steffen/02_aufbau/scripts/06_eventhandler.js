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

        console.log(list_a, typeof list_a, String(list_a));
        console.log(list_a[0],typeof list_a[0], String(list_a[0]));

        // addHandler(list_a[0], "click", showInfo);
        // addHandler(list_a[1], "click", showInfo);
        // addHandler(list_a[2], "click", showInfo);
        // addHandler(list_a[3], "click", showInfo);
                
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

    });
}(window, document));