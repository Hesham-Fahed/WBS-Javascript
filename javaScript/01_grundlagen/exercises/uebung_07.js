"use strict";

var inhalt = document.getElementsByClassName("boxes")[0].getElementsByClassName("box");
console.log(inhalt); // hier wird die HTML Collection in eine Variable eingelesen

// inhalt[0].onclick = count; // Element X aus der HTML-Collection wird an die Funktion weitergegeben.
// inhalt[1].onclick = count; 
// inhalt[2].onclick = count; 
// inhalt[3].onclick = count; 

for(var i = 0; i < inhalt.length; i++) {
    inhalt[i].onclick = count; // Element X aus der HTML-Collection wird an die Funktion weitergegeben.
}

function count() {
this.innerHTML++;
// this.innerHTML = Number(this.innerHTML) + 1 ; // this verweist auf das angeklickte Objekt. Der                                                            Inhalt von this.innerHTML wird mit dem in eine Nummer                                                    umgewandelten Wert von this.HTML + 1 befüllt. So wird                                                    sichergestellt, dass die Addition klappt. 
}


// var spionage = document.getElementById("container").getElementsByTagName("a");
// console.log(spionage);

// document.getElementById("link-01").onclick = inhalte; // Das Element wird and die Funktion 
// document.getElementById("link-02").onclick = inhalte; // inhalte weitergegeben
// document.getElementById("link-03").onclick = inhalte; 
// document.getElementById("link-04").onclick = inhalte; 


////////////////////////
// BESSER WEIL KÜRZER
var daten = document.getElementById("container").getElementsByTagName("a");

for(var i = 0; i < daten.length; i++) {
    daten[i].onclick = inhalte;
}
////////////////////////

function inhalte(daten) {
    // Der ID-Name
    document.getElementById("ausgabe").getElementsByTagName("b")[0].innerHTML = this.id;
    
    // Die Zahl: aus dem ID-Tag werden die letzten beiden Zeichen ausgelesen und ausgegeben
    document.getElementById("ausgabe").getElementsByTagName("b")[1].innerHTML = this.id.substring(5);
    
    // Der Knoten: Text aus HTML-Element wird ausgelesen und weitergegeben.
    document.getElementById("ausgabe").getElementsByTagName("b")[2].innerHTML = this.innerHTML;
}