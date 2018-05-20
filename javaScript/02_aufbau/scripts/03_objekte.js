"use strict";


/* Jede Variable die global angelegt wird auch eine Eigenschaft des 
window-Objekts */
var foo = "bar";
var bar = "foo";

/* console.log(window);
console.log(window.document);
console.log(window.foo);
console.log(window.bar);
console.log(window.x);  //=> undefined
// console.log(x); //=> ReferenceError: x is not defined

 */
/* 
//Konstruktoren für Objekte:
var array = new Array(); // Literal []
var objekt = new Object(); // Literal {}

//Hier wird mit der  Literalschreibweise kein Objekt erzeugt sondern 
// ein primitiver Datentyp.
var string = new String();
var number = new Number();
var boolean = new Boolean(); 
*/
/* 
var array = [];
var x = [12,25,36,4,120,25,42];
console.log("array //=> ", array, "typeof //=> ", typeof array);
console.log("array.length //=> ", array.length);
console.log("x.length //=> ", x.length);
console.log("x.join(' - ') //=> ", x.join(" - "));
console.log("x.push(1000) //=> ", x.push(1000));
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
// Objekte als reine Datenspeicher
////////////////////////////////////////////////////////////////////////////////////////////////////

//Arrayartige Notation
//[] Computed Memberoperator 
var kurs = {};
kurs["title"] = "Stricken und Häckeln für Einsteiger";
kurs["num "]= "PD-4711-223-69";
kurs["description"] = "Strickmuster für Einsteiger";
kurs["places"] = 18;
kurs["members"] = [];

//Dot Notation  
//. Memberoperator 
var kurs = {};
kurs.title = "Stricken und Häckeln für Einsteiger";
kurs.num = "PD-4711-223-69";
kurs.description = "Strickmuster für Einsteiger";
kurs.places = 18;
kurs.members = [];

/**************************************************************************************
Dotnotation benutzen außer es ist nicht möglich

1. Beispiel Eigenschaftsname: Anzahl Teilnehmer
datenbank["Anzahl Teilnehmer"]

2. for-in-Schleife
***************************************************************************************/

//Objekt direkt anlegen
//In den geschweiften Klammern werden Eigenschaftsname und Wert mit : (Doppelpunk) getrennt
//Eigenschaft-Wert-Paare werden mit , (Komma) beendet
//Beim letzten Eigenschaft-Wert-Paar kein , (Komma)
var kurs = {
    title : "Stricken und Häckeln für Einsteiger",
    num : "PD-4711-223-69",
    description : "Strickmuster für Einsteiger",
    places : 18,
    members : [] //Hier kein Komma
};

var html = "<h3>for-Schleife mit i < 5</h3>";

for(var i = 0; i < 5/* kurs.length */; i++) {
    html += "kurs["+i+"] //=> " + kurs[i] + "<br>";
}
html += "<p><b>Objekte haben keine Eigenschaft .length und keine numerischen Indizes. Solange diese nicht expliziet angelegt werden</b></p>";

////////////////////////////////////////////////////////////////////////////////////////////////////
// for-in
////////////////////////////////////////////////////////////////////////////////////////////////////
html += "<h3>for-in-Schleife für Objekte</h3>";
for(var key in kurs) {
    html += "kurs[key] //=> kurs[\""+key+"\"] //=> " + kurs[key] + "<br>";
}

/** 
 * for...in 
 * for (variable in object) {... }
 * variable: in jedem Schleifendurchlauf wird der Name einer Eigenschaft der variable zugewiesen.
 * object: Das Objekt dessen Eigenschaften / Attribute durchlaufen werden sollen.
 
Die Schleife durchläuft die Eigenschaften/Methoden eines Objekts in willkürlicher Reihenfolge.
In jedem Schleifendurchlauf wird der aktuelle Eigenschaftsname (Schlüssel/Key/Property)
in die Variable key (Name ist freiwählbar: key, prop, index, i ...) als Zeichenkette abgespeichert.

https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...in

*/
/////////////////////////////////////////////////////////////////////////////////////////////
// So kann man sich den Ablauf einer for-in-Schleife vorstellen:
/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Object.keys(obj)
 * obj: ein Objekt, dessen aufzählbare eigene Eigenschaften zurückgegeben werden sollen
 * return: Ein Array mit Strings, die alle aufzählbare Eigenschaften des gegebenen Objektes repräsentieren.
 */
var keys = Object.keys(kurs); //=> [ "title", "num", "description", "places", "members" ]
for(var i = 0; i < keys.length; i++) {
    console.log(kurs[keys[i]]);
}


/////////////////////////////////////////////////////////////////////////////////////////////
// Ausgabe über direktes ansprechen der Eigenschaftsnamen
/////////////////////////////////////////////////////////////////////////////////////////////
html += "<h3>Ausgabe über direktes ansprechen der Eigenschaftsnamen</h3>";
html += "kurs //=> " + kurs + "<br>";
html += "kurs.title //=> " + kurs + "<br>";



document.getElementById("ausgabe").innerHTML = html;



/* 
JS legt ein Array unter der Haube wie ein Objekt an

var array = [];
var array = {
    length : 0
}

var array = ["Max","Peter"];
var array = {
    "0" : "Max",
    "1" : "Peter",
    length : 0
} */


console.log("Object //=> ", Object);
console.log("kurs //=> ", kurs, "typeof //=> ", typeof kurs);



/* 
HOTEL Objekt

Eigenschaften:
Sterne
Anzahl Zimmer
Rezeption 24h besetzt
Mitarbeiter
Betten
Minibar
Pool

Methoden:
checkIn();
checkOut();
buchung();
buchhaltung();  
    bezahlen();
    rueckererstattung();





HUND Objekt

Eigenschaften:
FCI-Standard
Rasse
Farbe
Gewicht
Größe
Geschlecht
Stammbaum
Ursprung
Widerristhöhe
Alter
Variettäten

Methoden:
bellen();
beissen();
apportieren();
aufspueren();
gassigehen();
spielen();
hausaufgabenfressen();
...


*/

