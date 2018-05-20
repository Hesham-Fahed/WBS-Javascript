(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {
        var p = document.getElementsByTagName("p"); //=>  HTMLCollection
        var firstP = p[0]; //=> JS-Objekt aus Index 0

        /* Inline in HTML ist OUT aber in JS ist es wieder IN */

        /* DOT-Notation */
        // firstP.style.color = "rgb(255,0,0)";
        // firstP.style.backgroundColor = "#ff0000";
        // firstP.style.color = "#ffffff";
        // firstP.style.padding = "20px";
        // firstP.style.fontSize = "20px";

        /* Arrayartige-Notation */
        // firstP.style["color"] = "rgb(255,0,0)";
        // firstP.style["background-color"] = "#ff0000";
        // firstP.style["color"] = "#ffffff";
        // firstP.style["padding"] = "20px";
        // firstP.style["font-size"] = "20px";

        /* Zuweisung als string in Eigenschaft style */
        // firstP.style = "background-color: #ff0000; color: #ffffff; padding: 20px;font-size: 20px;"

        /* Eigene Funktion die Eigenschaften über Plainobjekt ändert */

        /**
         * 
         * @param {JS-Objekt Typ Element} el [Das Element des style geändert werden soll]
         * @param {JS-Objekt} obj [Objekt mit Eigenschaft-Wert Paaren für Style]
         */
        function changeStyle(el, obj) {
            for (var prop in obj) {
                el.style[prop] = obj[prop];
            }
        }

        changeStyle(firstP, {
            color: "#ffffff",
            backgroundColor: "#ff0000",
            padding: "10px",
            fontSize: "30px"
        });

        /* 
        <p id="absatz1" class="red" title="Das ist ein Titel">
        Der Text zwischen Start- und End-Tag
        </p>
        
        Alle Attribute die wir im HTML haben, hat das JS-Objekt als Eigenschaft!
        Zwei Ausnahmen gibt es:  
        class wird zu className 
        Knoten zwischen Start- und Endtag sind als string in innerHTML vorhanden
        */
        firstP.title = "absatz1";
        firstP.lang = "de";

        /******************************************************************* 
        var id_liste_li = liste.getElementsByTagName("li");
        Es gibt keine Variable liste!
        Neu Browser lesen alle HTML-Elemente mit einer ID automatisch beim 
        laden der Seite in Varibalen ein. Die Variablen heißen wie die ID.     
        
        BITTE NICHT BENUTZEN. Element immer einlesen.
        
        ****************************************************************** */
        var li = document.getElementById("liste").getElementsByTagName("li");
        console.log(li);

        //Hier wird am arrayartigen Objekt, der HTMLCollection, eine  Eigenschaft
        //className erzeugt, das ändert aber nicht die Klasse an allen Elementen
        li.className = "offen";
        console.log(li);

        //Um alle Elemente in der Collection mit der Klasse offen zu versehen
        //benötigen wir eine for-Schleife
        for (var i = 0; i < li.length; i++) {
            li[i].className = "offen";
        }

        li[0].className = "marked";
        li[0].className = "erledigt";
        /* Funktioniert nicht wegen überschreibung. Soll eine Klasse nicht überschreiben
        sondern hinzufügen, muss hier mit Stringverkettung gearbeitet werden: */
        li[0].className = "marked";
        li[0].className += " erledigt";



        /* Alternativ zu className gibt es classList und die Methoden:
        toggle,add,remove, contains 
        https://www.mediaevent.de/javascript/classlist.html
        */
        //HTMLCollection p aus Zeile 4

        for (var j = 0; j < p.length; j++) {
            p[j].innerHTML = "p[" + j + "] " + p[j].innerHTML;
        }

        p[1].classList.add("offen");

        console.log(p[1].classList.contains("offen"));
        console.log(p[1].classList.contains("erledigt"));

        p[2].classList.add("erledigt");
        p[2].classList.add("marked");

        p[2].classList.remove("erledigt");

        /* Funktioniert im aktuellen Firefox BUG!? */
        //p[3].classList = "marked erledigt";

        function markiere(e) {
            e.target.classList.toggle("marked");
            // this.classList.toggle("marked");
        }

        //Alle Absätze ab p[1] mit click Handler versehen
        for (j = 1; j < p.length; j++) {
            p[j].addEventListener("click", markiere);
        }

        //////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////
        function addClass(el, className) {
            el.classList.add(className);
        }

        function removeClass(el, className) {
            el.classList.remove(className);
        }

        function toggleClass(el, className) {
            el.classList.toggle(className);
        }

        addClass(p[10], "marked");
        removeClass(p[2], "marked");
        // alert("Klasse wird am ersten Listenpunkt getoggelt");
        toggleClass(li[0], "marked");
        // alert("Klasse wird am ersten Listenpunkt getoggelt");
        toggleClass(li[0], "marked");


        /* var classList = {
            add : function (el, className) {
                el.classList.add(className);
            },
            remove: function (el, className) {
                el.classList.remove(className);
            },
            toggle : function (el, className) {
                el.classList.toggle(className);
            },
            contains: function(el,className) {
                return el.classList.contains(className);
            }
        }; */

        var classList = {
            add: function (el, className) {
                if (el.classList) {
                    el.classList.add(className);
                } else {
                    var classes = el.className.split(" ");
                    classes.push(className);
                    el.className = classes.join(" ").trim();

                    //Stringverkettung
                    /* el.className += " " + className; */
                }
            },
            remove: function (el, className) {
                if (el.classList) {
                    el.classList.remove(className);
                } else {
                    var classes = el.className.split(" ");
                    console.log(classes);
                    var remove = classes.indexOf(className);
                    if (remove > -1) {
                        classes.splice(remove, 1);
                    }
                    el.className = classes.join(" ").trim();
                }
            },
            toggle: function (el, className) {
                if (el.classList) {
                    el.classList.toggle(className);
                } else {
                    var classes = el.className.split(" ");
                    var check = classes.indexOf(className);
                    if (check > -1) {
                        classes.splice(check, 1);
                    } else {
                        classes.push(className);
                    }
                    el.className = classes.join(" ").trim();
                }
            },
            contains: function (el, className) {
                if (el.classList) {
                    return el.classList.contains(className);
                } else {
                    var classes = el.className.split(" ");
                    var check = classes.indexOf(className);
                    if (check > -1) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        };

        //console.log(classList.contains(li[0], "marked"));
        console.log(classList.add(li[0], "offen"));
        console.log(classList.remove(li[0], "offen"));

        li[1].addEventListener("click", function (e) {
            console.log(e.target);
            classList.toggle(e.target, "marked");
        });


        console.log(classList.contains(li[0], "erledigt"));
        console.log(classList.contains(li[0], "marked"));
        console.log(classList.contains(li[0], "offen"));


        /* 
        Aufgabe 1-4 sind mit classList zu lösen.

        1. addClass(el, className)
        Die Funktion nimmt das JS-Objekt und einen Klassennamen an. Am JS-Objekt soll
        diese Klasse gesetzt werden.

        2. removeClass(el, className)
        Die Funktion nimmt das JS-Objekt und einen Klassennamen an. Am JS-Objekt soll
        diese Klasse entfernt werden.

        3. toggleClass(el, className)
        Die Funktion nimmt das JS-Objekt und einen Klassennamen an.
        Am JS-Objekt soll diese Klasse entfernt werden wenn Sie bereits vorhanden ist oder
        gesetzt werden wenn Sie noch nicht vorhanden ist.

        4. Objektorientiert Schreiben.
        Erzeugen Sie ein Objekt classChange mit den Methoden add,remove, toggle, contains.
       
        add nimmt JS-Objekt und einen Klassennamen an.
        remove nimmt JS-Objekt und einen Klassennamen an.
        toggle nimmt JS-Objekt und einen Klassennamen an.
        contains nimmt JS-Objekt und einen Klassennamen an.


        classChange.add(el, "foobar");

        5. Erweiteren Sie die Methoden aus Aufgabe 4 dahingehend das die Funktionalität
        im IE 8 und 9 gegeben ist. Fallback Lösung für alte Browser die classList nicht kennen.
        */


        /* 
        1. getById(id)
        Schreiben Sie eine Funktion die als Parameter eine id annimmt und das JS-Objekt
        passend zur ID zurückgibt.
        
        2. getByTag(tag)
         Schreiben Sie eine Funktion die als Parameter einen Tag annimmt und die HTMLCollection der übereinstimmenden Element zurückgibt.

        3. getByClass(class)
        Schreiben Sie eine Funktion die als Parameter eine Klasse annimmt und die HTMLCollection der übereinstimmenden Element zurückgibt.

        4. select(sel) 
        Fassen Sie die Funktionen 1,2 und 3 zusammen. 
        Der Funktion kann ein Selektor übergeben werden, id, tag, klasse
        #blub
        .foobar
        p

        select(sel) 

        "#blub"
        ".foobar"
        "p"
        */
        function select(sel) {
            switch (sel.charAt(0)) {
                case "#":
                    return document.getElementById(sel.substr(1));
                    // break;
                case ".":
                    return document.getElementsByClassName(sel.substr(1));
                    // break;
                default:
                    return document.getElementsByTagName(sel);
            }
        }

        function getById(id) {
            return document.getElementById(id);
        }

        function getByTag(tag) {
            return document.getElementsByTagName(tag);
        }

        function getByClass(cl) {
            return document.getElementsByClassName(cl);
        }
        console.log(getById("liste"));
        console.log(getByTag("p"));
        console.log(getByClass("marked"));
        //In der Funktion: document.getElementById("liste");

        console.clear();
        console.log(select("p"));
        console.log(select(".marked"));
        console.log(select("#liste"));
        console.log(select(".blub"));
        console.log(select("#foobar"));

    });
}(window, document));




/* 
HTMLCollection
arrayartiges Objekt: Sammlung von JS-Objekten

[ <p>, <p>, <p>, <p>, <p>, <p>, <p>, <p>, <p>, <p>, <p> ]


JS-Objekt
Repräsentation eines HTML-Elements in JS.
<p>
*/