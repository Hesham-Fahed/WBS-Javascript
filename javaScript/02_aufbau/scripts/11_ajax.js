(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {
        var class_ausgabe = document.getElementsByClassName("ausgabe");
        //HTMLCollection[div.ausgabe,div.ausgabe]
        //HTMLCollection hat kein innerHTML 
        //HTMLCollection[0] wäre div.ausgabe als JS-Objekt und dieser hat ein innerHTML
        for (var i = 0; i < class_ausgabe.length; i++) {
            class_ausgabe[i].innerHTML = "<p>ausgabe[" + i + "] / HTMLCollection Index: " + i + "</p>";
        }

        ///////////////////////////////////////////////////
        // 1
        ///////////////////////////////////////////////////
        document.getElementById("ajax1")
            .getElementsByTagName("a")[0]
            .addEventListener("click", function (e) {
                e.preventDefault();

                console.log(e.target.href);
                // Die Adresse des angeklickten Links anfordern
                var target = e.target.href;
                ajaxGet(target, function (resp) {
                    class_ausgabe[0].innerHTML = resp;
                });

            });

        ///////////////////////////////////////////////////
        // 2
        ///////////////////////////////////////////////////
        document.getElementById("ajax2")
            .getElementsByTagName("a")[0]
            .addEventListener("click", function (e) {
                e.preventDefault();

                console.log(e.target.href);
                // Die Adresse des angeklickten Links anfordern
                var target = e.target.href;
                ajaxGet(target, function (resp) {
                    var data = JSON.parse(resp);
                    console.log("res //=> ", resp);
                    console.log("var data = JSON.parse(res); //=> ", data);
                    var s = "<ul>";
                    for (var key in data) {
                        s += "<li>" + key + " : " + data[key] + "</li>";
                    }
                    s += "</ul>";
                    class_ausgabe[1].innerHTML = s;
                });

            }); // ende ajax klick 2


        ///////////////////////////////////////////////////
        // 3
        ///////////////////////////////////////////////////
        
        document.getElementById("ajax3")
            .getElementsByTagName("a")[0]
            .addEventListener("click", function (e) {
                e.preventDefault();

                console.log(e.target.href);
                // Die Adresse des angeklickten Links anfordern
                var target = e.target.href;
                ajaxGetXML(target, function (resp) {
                    var s = "<ul>";
                    var data = resp.getElementsByTagName("kontakt")[0].children;
                    for(var i = 0; i < data.length; i++) {
                        s += "<li>" + capitalize(data[i].nodeName) + " : " + data[i].textContent + "</li>";
                        // s += "<li>" + data[i].nodeName + " : " + data[i].firstChild.nodeValue + "</li>";
                    }

                    s += "<li>Geschlecht: " + resp.getElementsByTagName("kontakt")[0].getAttribute("geschlecht") + "</li>";
                    s+= "</ul>";

                    /* 
                    var kontakt = res.getElementsByTagName("kontakt")[0];
                    var s = "<ul>";
                    s += "<li>Name : " + kontakt.getElementsByTagName("name")[0].textContent + "</li>";
                    s += "<li>Ort : " + kontakt.getElementsByTagName("ort")[0].textContent + "</li>";
                    s += "<li>Strasse : " + kontakt.getElementsByTagName("strasse")[0].textContent + "</li>";
                    s += "<li>Postleitzahl : " + kontakt.getElementsByTagName("postleitzahl")[0].textContent + "</li>";
                    s += "<li>Geschlecht: " + kontakt.getAttribute("geschlecht") +"</li>"; 
                    s += "</ul>"; 
                    */
    
                    class_ausgabe[2].innerHTML = s;
                });

            }); // ---------------------ende ajax klick 3---------------------


    });


}(window, document));

/* 
xhr.readyState
0   UNSENT  Client has been created. open() not called yet.
1   OPENED  open() has been called.
2   HEADERS_RECEIVED    send() has been called, and headers and status are available.
3   LOADING Downloading; responseText holds partial data.
4   DONE    The operation is complete.

xhr.status
https://de.wikipedia.org/wiki/HTTP-Statuscode

xhr.responseText
Antwort vom Server als String (Zeichenkette)
*/


/* 
var xhr = new XMLHttpRequest();
xhr.open();
xhr.onreadystatechange = function(){

};
xhr.send();
*/


/* 
Funktion ajaxGet(file,fn) 
Die Ajaxanfrage soll immer asynchron ablaufen.
Parameter file wird mit dem Dateipfad befüllt.
Paramter fn soll eine Funktion enthalten die den xhr.responsetext weiterverarbeitet.
Die Funktion ajaxGet hat kein return, Sie gibt den xhr.responsetext als Argument an die 
Funktion im Parameter fn weiter.

*/
