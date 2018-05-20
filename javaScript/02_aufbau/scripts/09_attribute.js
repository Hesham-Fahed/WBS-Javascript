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



        /* 
        Aufgabe 1-4 sind mit classList zu lösen.
 
        1. addClass(el, className)
        Die Funktion nimmt das JS-Objekt und einen Klassennamen an. Am JS-Objekt soll
        diese Klasse gesetzt werden.
        */

        function addClass() {
            this.classList.add("rotate");
        }

        for (j = 1; j < p.length; j++) {
            p[j].addEventListener("click", addClass);
        }

        /*
        2. removeClass(el, className)
        Die Funktion nimmt das JS-Objekt und einen Klassennamen an. Am JS-Objekt soll
        diese Klasse entfernt werden.
        */

        for (j = 1; j < p.length; j += 2) {
            p[j].addEventListener("click", removeClass);
        }

        function removeClass() {
            this.classList.remove("rotate");
        }

        /*
        3. toggleClass(el, className)
        Die Funktion nimmt das JS-Objekt und einen Klassennamen an.
        Am JS-Objekt soll diese Klasse entfernt werden wenn Sie bereits vorhanden ist oder
        gesetzt werden wenn Sie noch nicht vorhanden ist.
        */


        for (j = 1; j < p.length; j++) {
            p[j].addEventListener("click", toggleClass);
        }

        function toggleClass() {
            this.classList.toggle("uppercase");
        }

        /*
        4. Objektorientiert Schreiben.
        Erzeugen Sie ein Objekt classChange mit den Methoden add,remove, toggle, contains.
        
        add nimmt JS-Objekt und einen Klassennamen an.
        remove nimmt JS-Objekt und einen Klassennamen an.
        toggle nimmt JS-Objekt und einen Klassennamen an.
        contains nimmt JS-Objekt und einen Klassennamen an.
        */
        var ul = document.getElementsByTagName("ul");
        var li = document.getElementsByTagName("li");
        console.log("ul[0]: " + ul[1]);
        //    ul[1].style.fontSize = "30px";


        var classChange1 = {
            add1: function (e, klasse) {
                e.className += klasse;
            },
            remove1: function (e, klasse) {
                e.className += klasse;
            },
            toggle1: function (e, klasse) {
                e.classList.toggle(klasse);
            },
            contains1: function (e, klasse) {
                var pruef = e.classList.contains(klasse);
                console.log("Contains: ", pruef);
            }
        }

        for (j = 0; j < li.length; j++) {
            classChange1.contains1(li[j], "erledigt");
        }


        /*
        classChange.add(el, "foobar");
 
        5. Erweiteren Sie die Methoden aus Aufgabe 4 dahingehend das die Funktionalität
        im IE 8 und 9 gegeben ist. Fallback Lösung für alte Browser die classList nicht kennen.
        */


        
    var classChange = {
        isIE : function(){
          if(document.body.classList !== undefined){
            return false;
          } else {
            return true;
          }
        },
        add : function(el, className){
          if(!this.isIE()){
            el.classList.add(className);
          } else {
            var newClasses = el.className.split(" ");
            newClasses.push(className);
            el.className = newClasses.join(" ").trim();
          }
        },
        remove : function(el, className){
          if(!this.isIE()){
            el.classList.remove(className);
          } else {
            var newClasses = el.className.split(" ");
            if(newClasses.indexOf(className) != -1){
              var cIndex = newClasses.indexOf(className);
              newClasses[cIndex] = "";
            }
            el.className = newClasses.join(" ").trim();
          }
        },
        toggle : function(el, className){
          if(!this.isIE()){
            el.classList.toggle(className);
          } else {
            var newClasses = el.className.split(" ");
            if(newClasses.indexOf(className) == -1){
              this.add(el, className);
            } else {
              this.remove(el, className);
            }
          }
        },
        contains : function(el, className){
          if(!this.isIE()){
            return el.classList.contains(className);
          } else {
            var newClasses = el.className.split(" ");
            if(newClasses.indexOf(className) == -1){
              return false;
            } else {
              return true;
            }
          }
        }
  
      }




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