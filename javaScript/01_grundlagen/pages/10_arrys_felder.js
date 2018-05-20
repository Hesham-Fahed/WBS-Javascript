"use strict";

function ausgabeMitSchleife(a) {
    var s = "<ul>";
    for (var i = 0; i < a.length; i++) {
        s += "<li>" + a[i] + "</li>";
    }
    s += "</ul>";
    return s;
}


// var a = true;
// a = "Hallo Welt";
// a = 12;
// a = function(){};
var out = "";
var a = [];

out += "var out = \"\"; //=> " + a + "<br>";
out += "a.length //=> " + a.length + "<br>";

a = ["Paul", "Manuela", "Michael"];

out += "[\"Paul\",\"Manuela\",\"Michael\"]; //=> " + a + "<br>";
out += "a.length //=> " + a.length + "<br>";
out += "a.join(\" *** \") //=> " + a.join(" *** ") + "<br>";
out += "a.join(\", \") //=> " + a.join(", ") + "<br>";
out += "a.join(\"\") //=> " + a.join("") + "<br>";

out += "\"&lt;ul&gt;&lt;li&gt;\"+a.join(\"&lt;/li&gt;&lt;li&gt;\") + \"&lt;/li&gt;&lt;/ul&gt;\" //=> " + "<ul><li>" + a.join("</li><li>") + "</li></ul>";
/* 
   0        1         2 
["Paul","Manuela","Michael"]

"<ul><li>" + a.join("</li><li>") + "</li></ul>";

"<ul><li>"
"Paul</li><li>"
"Manuela</li><li>"
"Michael"
"</li></ul>"
*/
out += "ausgabeMitSchleife() //=> " + ausgabeMitSchleife(a) + "<br>";

a.length = 0;

out += "a.length = 0; //=> " + a + "<br>";
out += "a.length //=> " + a.length + "<br>";

a[0] = "Manfred";
out += "a[0] = \"Manfred\"; //=> " + a + "<br>";
out += "a.length //=> " + a.length + "<br>";

a[1] = "Josef";
out += "a[1] = \"Josef\"; //=> " + a + "<br>";
out += "a.length //=> " + a.length + "<br>";

/* Hier entsteht ein spärliches/lückenhaftes Array:
Indizes 2 bis 9 sind undefined
*/
a[10] = "Ulrich";
out += "a[10] = \"Ulrich\"; //=> " + a + "<br>";
out += "a.length //=> " + a.length + "<br>";
out += "F12 Konsole öffnen<br>";
console.log(a);

out += "<b>Ausgabe mit Schleife:</b><br>";
for (var i = 0; i < a.length; i++) {
    out += "In Index " + i + " liegt der Wert: " + a[i] + "<br>";
}

out += "<b>Ausgabe mit Schleife (Filtern von undefined):</b><br>";
for (var i = 0; i < a.length; i++) {
    if (a[i] !== undefined) {
        out += "In Index " + i + " liegt der Wert: " + a[i] + "<br>";
    }
}

/**
 * callByReference: 
 * Arrays werden nicht als Kopie des Wertes übergeben. Array und Objekte werden
 * als Pointer/Zeiger auf den Speicherplatz übergeben. Wird ein Array oder 
 * Objekt in eine FN übergeben und dort geändert, ändert sich das Array/Objekt
 * auch außerhalb. 
 * WICHTIG: Am besten nicht das Original Array (den Parameter) bearbeiten, 
 * sonderen eine Kopie oder ein temp Array anlegen.*/
function cleanUndef(array) {
    var tempArray = []; // var tempArray = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            tempArray.push(array[i]); // tempArray[tempArray.length] = array[i];
        }
    }
    return tempArray;
}

var cleanA = cleanUndef(a);
out += "var cleanA = cleanUndef(a); //=> " + cleanA + "<br>";

out += "<b>In diesem Fall brauchen wir das original nicht mehr. In fast allen anderen Fällen sollte man das original aber behalten und in einem neuen Array speichern</b><br>";

a = cleanUndef(a);
out += "a = cleanUndef(a); //=> " + a + "<br>";


console.log(a);
// callByValue und callByReference
// Objekt und Primitive Datentypen werden unterschiedlich in die FN übergeben


/////////////////////////////////////////////////////////////////////////
// https://www.mediaevent.de/javascript/Javascript-Array-Methoden.html
/////////////////////////////////////////////////////////////////////////
a.length = 0;

a = ["Paris", "London"];
out += "a = [\"Paris\",\"London\"]; //=> " + a + "<br>";

// Syntax: arr.push( element1[, ...[, elementN]] )
// Gilt nur für die Erklärung der Syntax:
// [] die Parameter in diesen Klammern sind optional
a.push("Brüssel");
out += "a.push(\"Brüssel\"); //=> " + a + "<br>";
out += "<b>a.pop() würde das letzte Element entfernen</b><br>";

// Syntax: arr.unshift( element1[, ...[, elementN]] )
a.unshift("Wales");
out += "a.unshift(\"Wales\"); //=> " + a + "<br>";
out += "<b>a.shift() würde das erste Element entfernen</b><br>";

a.push("Wien", "Madrid", "Köln");
out += "a.push(\"Wien\",\"Madrid\",\"Köln\"); //=> " + a + "<br>";


// Index     0       1         2          3        4        5        6 
// a :  [ "Wales", "Paris", "London", "Brüssel", "Wien", "Madrid", "Köln" ]
// https://www.mediaevent.de/javascript/array-slice.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


var aKopie = a.slice(0); //slice erzeugt eine Kopie. Syntax: slice(start[, end]) 

// 2 Parameter ab welchem Index sollen wieviele gelöscht werden?
a.splice(0, 6); //=> ["Köln"]

out += "a.splice(0,6); //=> " + a + "<br>";

a = aKopie;
out += "a = aKopie; //=> " + a + "<br>";

a.splice(2, 2, "Kapstadt", "New York");
/* London und Brüssel wurden entfernt. Zwischen Paris und Wien wurden Kapstadt,New York hinzugefügt. */
out += "a.splice(2,2,\"Kapstadt\",\"New York\"); //=> " + a + "<br>";

a = aKopie;
out += "a = aKopie; //=> " + a + "<br>";

a.splice(4, 0, "Brügge", "Amsterdam");
/* Kein Element löschen/entfernen. Ab Index Position 4 Brügger, Amsterdam hinzufügen. Index 4,5,6 wandern nach hinten. Wien ist jetzt 6, Madrid 7 und Köln 8 */
out += "a.splice(4,0,\"Brügge\", \"Amsterdam\"); //=> " + a + "<br>";

var pos = a.indexOf("New York");
out += "a.indexOf(\"New York\") //=> " + pos + "<br>";

//             0        1         2  ... 
var namen = ["Max", "Christian", "Petra", "Klaus", "Jörgen", "Max", "Jochen", "Dieter", "Max", "Josef"];



/* var posArray = [];
var pos = namen.indexOf("Max"); // 0
while(pos !== -1) {
    posArray.push(pos); 
    pos = namen.indexOf("Max",pos+1);  
}
console.log(posArray);

var alleMax = [];
for(var i = 0; i < posArray.length; i++) {
    console.log(namen[posArray[i]]);
    var element = namen.splice(posArray[i],1);
    // alleMax.push(element[0]);
} */

var neu = [];
var pos = namen.indexOf("Max"); // 0
while (pos !== -1) {
    // splice gibt immer ein Array zurück, auch wenn nur ein Element ausgeschnitten wird
    // namen.splice(pos,1) //=> ["Max"]
    // namen.splice(pos,1)[0] //=> "Max"
    // Ohne [0] -> neu.push(namen.splice(pos,1)) //=> [["Max"],["Max"],["Max"]]
    neu.push(namen.splice(pos, 1)[0]);
    pos = namen.indexOf("Max"); // 4, 6 , -1
}

var mehrDim = [
    [ // mehrDim  Index 0 //=> mehrDim[0]
        "Max" // mehrDim  Index 00   //=> mehrDim[0][0]
    ],
    [ // mehrDim  Index 1 //=> mehrDim[1]
        "Max" // mehrDim  Index 10   //=> mehrDim[1][0]
    ],
    [ // mehrDim  Index 2 //=> mehrDim[2]
        "Max" // mehrDim  Index 20   //=> mehrDim[2][0]
    ]
]

console.log(neu);
console.log(namen);


function myIndexOf(array, search, pos) {
    //WENN: Parameter pos den Wert undefined hat, kein Wert übergeben wurde
    if (pos === undefined) {
        //beginnen wir auf Position 0 also Index 0 
        pos = 0;
    }
    //Start der for-Schleife i auf pos setzen
    for (var i = pos; i < array.length; i++) {
        //WENN das aktuelle Element, im Index i, GLEICH unserer Suche, Wert in search
        if (array[i] === search) {
            // Sobald es einen Treffer gibt, wird die Indexposition zurückgegeben und die
            // Schleife beendet
            return i; //Return verlässt beim ersten Treffer die FN
        }
    }
    //Läuft die Schleife ohne Treffer durch, geben wir -1 zurück
    return -1;
}

var b = ["Max", "Christian", "Petra", "Klaus", "Jörgen", "Max", "Jochen", "Dieter", "Max", "Josef"];

console.log(myIndexOf(b, "Max"));
console.log(myIndexOf(b, "Max", 1));
console.log("*********************");

var pos = myIndexOf(b, "Max");
while (pos !== -1) {
    console.log(pos);
    pos = myIndexOf(b, "Max", pos + 1);
}

function allIndizes(array, search) {
    var pos = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === search) {
            pos.push(i);
        }
    }
    return pos;
}
console.log(allIndizes(b, "Max"));


/* 
posArray [ 0, 5, 8 ]
   0        1         2       3        4      5      6        7       8      9
["Max","Christian","Petra","Klaus","Jörgen","Max","Jochen","Dieter","Max","Josef"]
*/

var c = ["Max", "Christian", "Petra", "Klaus", "Jörgen", "Jochen", "Dieter", "Josef"]

out += "c //=> " + c.join(", ") + "<br>";

out += "c.sort().join(\", \"); //=> " + c.sort().join(", ") + "<br>";


var d = [22, 10, 586, 100, 78, 2300, 1254];
out += "d //=> " + d.join(", ") + "<br>";
out += "d.sort().join(\", \"); //=> " + d.sort().join(", ") + "<br>";

function aufwaerts(a,b) {
    console.log(a); console.log(b);
    // Positiver Rückgabewert a ist größer   +1, + 1000000
    // Negativer Rückgabewert a ist kleiner -0, -2500000
    // 0 Rückgabewert a und b sind gleich
    return a - b;
}

function abwaerts(a,b) {
    return b - a;
}


out += "d.sort().join(\", \"); //=> " + d.sort(aufwaerts).join(", ") + "<br>";
out += "d.sort().join(\", \"); //=> " + d.sort(abwaerts).join(", ") + "<br>";

out += "d.sort(function (a,b) {return a - b;}).join(\", \"); //=> " + d.sort(function (a,b) {return a - b;}).join(", ") + "<br>";

out += "d.sort(function (a,b) {return b - a;}).join(\", \"); //=> " + d.sort(function (a,b) {return b - a;}).join(", ") + "<br>";



document.write(out);









/* 
1. Schreiben Sie eine for-Schleife in der mit Hilfe einer Kontrollstruktur nur noch belegte Indizes ausgegeben werden. Alle undefined werte werden nicht ausgegeben.

2. Machen Sie daraus eine Funktion die ein Array mit Werten als Parameter annimmt. Die FN gibt ein neues Array zurück in dem sich nur noch echt Werte befinden. Die FN entfernt ale undefined Werte bzw. schreibt nur Werte die nicht undefined sind in das neue Array das zurückgegeben wird.

3. Für die schnellen:
Überprüft den Datentyp eines Arrays mit typeof Operator.
Schreibt eine Funktion die isArray heißt und true zurück gibt wenn es sich um 
ein Array handelt, false wenn nicht.

Unterschied zwischen Objekt und Array!

var o = {};
var a = [];

isArray({}); //=> false
isArray([]); //=> true
*/





/* 
function bezeichner(parameter1) {
    //Sammlung aller parameter ist arguments
}

bezeichner(argument1)
*/