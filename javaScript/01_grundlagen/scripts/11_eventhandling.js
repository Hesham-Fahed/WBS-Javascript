"use strict";
function showEventInfo(e) {
    console.log(e);
    console.log(this);
    if(this !== undefined) {
        console.log(this.innerHTML);
    }
}

// S.103 Ereignisse
//https://www.mediaevent.de/javascript/this.html

// S.103 Ereignisse als Eigenschaften
// CSS: #container2 button
var container2_btn = document.getElementById("container2").getElementsByTagName("button");
console.log(container2_btn);

//Hier wird eine FN-Referenz zugewiesen, kein Aufruf
//Bei einer FN-Referenz auf einen Eventhandler wird immer autom. das Eventobjekt übergeben.
container2_btn[0].onclick = showEventInfo; 
container2_btn[1].onmouseover = showEventInfo;
container2_btn[2].onmousemove = showEventInfo;
/* 
RICHTIG:
container2_btn[0].onclick = showEventInfo; 
Hier wird die FN als Referenz übergeben und erst beim Ereignis (click) aufgerufen und zwar immer wenn geklickt wird.
Die FN-Referenz wird ausgelöst/gefeuert wenn das Event/Ergeinis eintritt

FALSCH: 
container2_btn[0].onclick = showEventInfo();
Hier wird die FN einmalig in der Zeile aufgerufen in der dieser Befehl steht. 
*/

function showHref(e) {
    e.preventDefault(); // Weiterleitung verhindern
}

var list_a = document.getElementById("list").getElementsByTagName("a");
console.log(list_a);
for(var i = 0; i < list_a.length; i++) {
    list_a.onclick = showHref;
}





















function foobar() {
    return "sillystuff";
}

var rf = foobar;

var x = foobar();
var y = rf();

console.log(document.getElementsByTagName("p")[0].innerHTML); 

document.getElementsByTagName("p")[0].innerHTML = "<b>Neuer Text hinzugefügt mit JavaScript</b>";