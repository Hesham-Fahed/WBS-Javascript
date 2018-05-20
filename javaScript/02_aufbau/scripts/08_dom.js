(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {
        var p = document.getElementsByTagName("p");
        console.log("p //=> ", p); //=> HTMLCollection (Sammlung JS-Objekte)
        console.log("p[0] //=> ", p[0]); //=> JS-Objekt aus Index 0
        console.log("p[0].children //=> ", p[0].children); //=> Kinder vom Typ-Element
        console.log("p[0].childNodes //=> ", p[0].childNodes); //=> Alle Kinder
        console.log("p[0].firstChild //=> ", p[0].firstChild);
        console.log("p[0].firstElementChild //=> ", p[0].firstElementChild);

        // https://www.mediaevent.de/javascript/DOM-Navigation.html
        var ausgabe = document.getElementById("ausgabe");
        var childs = p[0].childNodes;

        var s = "Anzahl Kinder " + childs.length + "<br>";

        for (var i = 0; i < childs.length; i++) {
            if (childs[i].nodeType === /* 3 */ Node.TEXT_NODE) {
                s += "Kind " + i + " ist ein Textknoten - Inhalt (nodeValue/textContent): " + childs[i].nodeValue + "<br>";
            } else if (childs[i].nodeType === /* 1 */ Node.ELEMENT_NODE) {
                s += "Kind " + i + " ist ein Elementknoten - Namen (tagName/nodeName): " + childs[i].tagName + "<br>";
            }
        }
        ausgabe.innerHTML = s + "<hr>";


        console.log(p); //HTMLCollection
        console.log(p[0]); //JS-Objekt aus Index 0 der HTMLCollection
        console.log(p[0].firstChild); //JS-Node-OBjekt aus JS-Objekt aus Index0 der HTMLCol.
        console.log(p[1].firstElementChild); //null
        //Wir suchen ein Objekt, es wird keins gefunden Rückgabe ist null

        console.log("**************************************************");
        var parent = document.body;
        var child = parent.firstChild;
        //Jedes Objekt ist in der while  true         
        //child.nextSibling ist beim letzten Kind null (null ist false)
        while (child) {
            console.log(child);
            child = child.nextSibling;
        }
        /////////////////////////////////////////////////////////////////////////////////
        //Elemente erzeugen ohne innerHTML
        //innerHTML nur wenig benutzen, ist nicht optimal für die Performance
        /////////////////////////////////////////////////////////////////////////////////
        var p = document.createElement("p"); // <p></p>
        var txt = document.createTextNode("Hallo Welt"); // #text "Hallo Welt"
        p.appendChild(txt); // <p>Hallo Welt</p>
        ausgabe.appendChild(p);


        var h2 = document.createElement("h2");
        txt = document.createTextNode("Ausgabe der Kinder mit for-Schleife");
        h2.appendChild(txt);
        ausgabe.insertBefore(h2, ausgabe.firstChild);



    });
}(window, document));