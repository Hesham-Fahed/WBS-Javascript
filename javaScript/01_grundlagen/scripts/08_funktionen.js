"use strict";
//////////////////////////////////////////////////////////////////////////////
// https://www.mediaevent.de/javascript/Javascript-Funktionen-Grundlagen.html
//////////////////////////////////////////////////////////////////////////////

console.log("log ist \"eigentlich\" auch eine Funktion");
console.log(isNaN("12"));
console.log(parseInt("12"));


//////////////////////////////////////////////////////////////////////////////
// Bezeichner einer Funktion folgen den Regeln für Variablennamen
// https://www.mediaevent.de/javascript/variable.html

// Die Deklaration der Funktion
function showMessage() {
    document.write("<p>Hallo Welt...aus der Funktion showMessage</p>");
} // Kein Semikolon nötig


//Funktionsaufruf: Funktionsbezeichner gefolgt vom Funktionsaufrufoperator ()
showMessage();
showMessage();
showMessage();
showMessage();


// Die Deklaration der Funktion
// Funktionsausdrucksschreibweise:
// Eine anonyme Funktion, ohne Namen, wird einer Variable zugewiesen.
// Die FN selbst hat im Ausdruck keinen Namen, der Name ergibt sich durch die Variable
// der dieser Funktiosnausdruck zugewiesen wird.
var showInfo = function(){
    document.write("<p>Info...aus der Funktion showInfo</p>");
}; // Semikolon ist wichtig/pflicht

//Funktionsaufruf: Funktionsbezeichner gefolgt vom Funktionsaufrufoperator ()
showInfo();
showInfo();
showInfo();


// Neue Schreibweise mit ECMA 6 Arrow Functions (Pfeilfunktionen)
var arrowFN = () => { 
    document.write("<p>arrowFN</p>");
};


arrowFN();
arrowFN();
arrowFN();


var einfach = () => document.write("<p>einfach</p>");
einfach();
 

function foo() {
    return "bar";
}

/* var foo = () => "bar"; */

foo(); // "bar"

// Der Aufruf gibt "bar" durch das return zurück aber wir verwenden diesen Rückgabewert 
// nicht. Das entspricht in etwa der folgenden Zeile:
"bar"

//Erst wenn der Rückgabewert an console.log übergeben wird können wir diesen sehen.
console.log(foo());


//////////////////////////////////////////////////////////////////////////////////////
// FN mit Parametern
function steuer(betrag, satz) {
    var mwst = betrag * satz / 100;
    var summe = betrag + mwst; 
    //console.log(summe);
    return summe; 
}

// FN hier werden 2 Argumente übergeben
// Die Argumenten werden in der Reihenfolge in der Sie im Aufruf stehen in die
// Parameter eingetragen.
document.write("steuer(200,19) //=> ", steuer(200,19), "<br>");
document.write("steuer(100,19) //=> ", steuer(100,19), "<br>");
document.write("steuer(10,19) //=> ", steuer(10,19), "<br>");

console.log("steuer(10,19) //=> ", steuer(10,19));

var erg = steuer(129, 19);
document.write("var erg = steuer(129, 19); //=> erg: ", erg);

/******************************************************************************************
 * Der Rückgabewert der Funktion ersetzt den Funktionsaufruf
 * Aufruf: steuer(200,19) 
 * Rückgabewert: 238 
 * 
 * Der Rückgabewert muss verarbeitet werden: gespeichert oder ausgegeben bzw. an
 * andere FN zur Ausgabe übergeben werden. 
 */

//Dieser return wird nicht gespeichert und nicht ausgegeben:
steuer(112,19); //=> 133.28

//Rückgabewert wird an console.log zur Ausgabe übergeben
console.log(steuer(112,19));

//Rückgabewert speichern
var x = steuer(112,19);



//Hier werden mehrere Parameter an document.write übergeben und intern verkettet:
document.write("<p>","Das","sind","einzelne","Zeichenketten","</p>");
//Verkettung erfolgt durch + zuerst und an write wird nur ein Zeichenkette übergeben:
document.write("<p>"+"Das"+"sind"+"einzelne"+"Zeichenketten"+"</p>");
// Ergebnis: document.write("<p>DassindeinzelneZeichenketten</p>");
console.log("************** ARGUMENTS**********************"); 


function summe(a,b) {
    if( a === undefined) { a = 0;}
    if( b === undefined) { b = 0;}
    
    var sum = a + b;
    console.log("Anzahl Elemente: ", arguments.length); // Anzahl Elemente
    console.log("Elemente: ", arguments); // Elemente
    console.log(arguments[0]); // Parameter a
    console.log(arguments[1]); // Parameter b
    console.log(arguments[2]); // Wert ohne Parameter
    // for(var i = 0; i < arguments.length; i++) {
    //     console.log("arguments[i] //=>", arguments[i]);
    // }
    for(var i = 2; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log("************************************"); 

    return sum;
}

document.write("summe(12) //=> ", summe(12), "<br>" );
document.write("summe(12,30) //=> ", summe(12,30), "<br>" );
document.write("summe(2,4,14) //=> ", summe(2,4,14), "<br>" );
document.write("summe(2,4,14,6,12,52,32,22) //=> ", summe(2,4,14,6,12,52,32,22), "<br>" );

var zahlen = [12, 13, 42, 93, 39];
console.log(zahlen);
console.log("length: " + zahlen.length);

document.write(summe(zahlen));