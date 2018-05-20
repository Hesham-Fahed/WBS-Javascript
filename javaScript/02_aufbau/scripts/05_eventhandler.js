///////////////////////////////////////////////////////////////////
// 1. Ausführlich
///////////////////////////////////////////////////////////////////
/*
"use strict";
 function setup() {
    var class_box = document.getElementsByClassName("box");
    console.log(class_box); 
}

window.onload = setup; */


// Eine FN die nur einmal aufgerufen wird braucht keinen Namen
// Lösung: eine anonyme FN als Referenz (Funktionsausdruck)

///////////////////////////////////////////////////////////////////
// 2. Kurzform
///////////////////////////////////////////////////////////////////
/* window.onload = function(){
    "use strict";

    function countUp(e) {

    }
    var class_box = document.getElementsByClassName("box");
    console.log(class_box);
}; */
//Zuweisung eines Funktionsausdrucks wird mit Semikolon beenden
//Der Funktionsausdruck ist eine anonyme FN als Referenz.

///////////////////////////////////////////////////////////////////
// 3. Der eigene Namensraum/Gültigkeitsbereich für unsere Seite
///////////////////////////////////////////////////////////////////

var x = "global";

/* (function(window,document){
    ///////////////////////////////////////////////////////////////////////////////////////////
    // Gültigkeitsbereich anonyme FN START
    ///////////////////////////////////////////////////////////////////////////////////////////
    "use strict";
    //Tiefensuche weil x weder lokal in FN angelegt und auch kein 
    //Parameter ist
    //console.log(x);

    //Die Referenz auf das globale window liegt im Parameter window
    //Keine Tiefensuche aber das window-Objekt kann bearbeitet werden
    console.log(window);

    //Lokale Variablen innerhalb der anonymen FN, diese sind aber für alle folgenden Codezeilen
    //wie globale Variablen. Die anonyme FN ist für uns ein eigener Gültigkeitsbereich
    function countUp(e) {
        // this.innerHTML++;
        e.target.innerHTML++;
    }
    
    window.onload = function(){
        //Alles was in der Webseite (im DOM) passiert landet hier:
        //document ist auch inline und document ist ein Parameter
        var class_box = document.getElementsByClassName("box");
        console.log(class_box);
        for (var i = 0; i < class_box.length; i++) {
            class_box[i].onmouseover = countUp;
            
        }
        
    };
    ///////////////////////////////////////////////////////////////////////////////////////////
    // Gültigkeitsbereich anonyme FN END
    ///////////////////////////////////////////////////////////////////////////////////////////
}(window,document)); */
/*
DOM-Eventlistener (DOM-Level)

element.addEventListener("click", showInfo); im IE element.attachEvent("onclick", showInfo);

IE8 kein e.target und kein e.preventDefault()
e.target ist e.srcElement;
e.preventDefault() ist e.returnValue = false;
*/

(function(window,document){
    "use strict";
    window.onload = function(){
        // 1. Funktionen
        function countUp(e) {
            e.target.innerHTML++;
        }
        
        //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
        function showInfo(e) {
            e.preventDefault();
            console.log("e //=> ", e);
            console.log("e.target //=> ", e.target);
            console.log("this //=> ", this);

            console.log("this === e.target //=> ", this === e.target);
            console.log(this === document.getElementsByTagName("a")[0]);
            ///////////////////////////////////////////////////////////////////////////////
            // Hier sind this und e.target identisch 
            // Es gibt eine Ausnahme bei Objekten und Methoden Siehe 04_objekte_methoden.html
            ///////////////////////////////////////////////////////////////////////////////

            /* 
            e ist das Eventobjekt, hier click
            mit vielen Informationen als Eigenschaften zu diesem Ereignis.
            z.B. e.screenX und e.screenY ...

            this und e.target zeigen beide auf das Element an dem das Event, hier click, ausgelöst/gefeuert wurde.
            */
        }
        // 2. Variablen
        var i;

        // 3. Variable für Elemente und dann Eventhandler (mit Schleife) binden
        var class_box = document.getElementsByClassName("box");
        for (i = 0; i < class_box.length; i++) {
            class_box[i].onmouseover = countUp;            
        }        

        var list_a = document.getElementById("list").getElementsByTagName("a");
        for (i = 0; i < list_a.length; i++) {
            list_a[i].onclick = showInfo;          
        } 
        /* Immer wenn eine FN-Referenz an einen Eventhandler gebunden wird passieren zwei Dinge:
        1. In der Referenz wird this zu dem Element das, dass Event ausgelöst hat
            (ACHTUNG: beim Objekt wird this wieder durch das Objekt überschrieben!)
        2. Es wird automatisch ein Argument, das Event-Objekt, übergeben. */
    };

}(window,document));


