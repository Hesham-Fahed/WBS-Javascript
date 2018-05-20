"use strict";

///////////////////////////////////////////////////////////////
// Quadrat
///////////////////////////////////////////////////////////////
/*
function hoch2(zahlHoch2) {
    var quadrat = zahlHoch2 * zahlHoch2;
    return quadrat;
}

///////////////////////////////////////////////////////////////
// Differenz
///////////////////////////////////////////////////////////////



function subtraktion(subtrahent1, subtrahent2) {
    var differenz = subtrahent1 - subtrahent2;
    return differenz;
}

///////////////////////////////////////////////////////////////
// Produkt
///////////////////////////////////////////////////////////////


function produkt(faktor1, faktor2) {
    var prod = faktor1 * faktor2;
    return prod;
}

///////////////////////////////////////////////////////////////
// Vergleich
///////////////////////////////////////////////////////////////


function vergleich(zahl1, zahl2) {
    var als;
     
    if(zahl1 > zahl2) {
        als = "Der erste Wert: " + zahl1 + " ist <b>größer</b> als der zweite Wert: " + zahl2;
    }
    
    if(zahl1 < zahl2) {
        als =  "Der erste Wert: " + zahl1 + " ist <b>kleiner</b> als der zweite Wert: " + zahl2;
    }
    
    if(zahl1 == zahl2) {
        als = "Der erste Wert: " + zahl1 + " ist <b>gleich</b> dem zweiten Wert: " + zahl2;
    }
    return als;
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

"use strict";
//  1.1 quadrat Schreiben Sie eine Funktion die einen Paramter annimmt und das Quadrat, die Multiplikation dieser Zahl mit sich selbst, zurückgibt.

function square(x) {
    // var erg = x * x;
    // return erg;
    return x * x;
}


// 1.2 difference Schreiben Sie eine Funktion die zwei Parameter annimmt und die Differenz der beiden Zahlen zurückgibt. 
function difference(a, b) {
    return a - b;
}

// Anstatt für jede Grundrechenart eine eigene Funktion zu schreiben macht es Sinn das ganze zusammenfassend in einer Funktion zu erzeugen. 
operator: / * - + %

function calculate(a, b, operator) {

}

// 1.4 numberCompare Schreiben Sie eine Funktion die zwei Zahlen als Parameter annimmt. 
function numberCompare(x,y) {
    // var out;
    if(x === y) {
        // out = "Numbers are equal";
        return "Numbers are equal";
    } else if (x > y) {
        // out = "First is greater";        
        return "First is greater";        
    } else {
        // out = "Secound is greater";
        return "Secound is greater";
    }
    // return out;
}


///////////////////////////////////////////////////////////////////////////////////////////


var out = "";

//1.1
out += "square(2) //=> " + square(2) + "<br>";
out += "square(4) //=> " + square(4) + "<br>";

//1.2
out += "difference(20,10) //=> " + difference(20, 10) + "<br>";
out += "difference(20,10) //=> " + difference(100, 12) + "<br>";

//1.4
out += "numberCompare(1,1); //=> " + numberCompare(1,1) + "<br>";
out += "numberCompare(2,1); //=> " + numberCompare(2,1) + "<br>";
out += "numberCompare(1,2); //=> " + numberCompare(1,2) + "<br>";


document.write(out);

*/
/////////////////////////////////////////////////////////////////////////////////////
// Zeichenkette vergleichen
/////////////////////////////////////////////////////////////////////////////////////
/*
function include(word, letter) {
    var x = word.length;
    var freq = 0;
    var at = "";
    var pos = word.indexOf(letter);
    console.log(pos)

    for(var i = 0; i < x; i++) {
        if(word[i].toLowerCase() === letter.toLowerCase()){
            freq += 1;
            at += "at position: " + i + "<br>";
        }
    }
    document.write(at + "<br>");
    return freq;
}

function singleLetterCount(word,sign) {
    var counter = 0;
    word = word.toLowerCase();
    sign = sign.toLowerCase();
    // pos Position das erste Zeichen
    var pos = word.indexOf(sign);
    //SOLANGE ein Zeichen gefunden wird
    while(pos !== -1) {
        counter++;
        //Bestimmte neue Position des Zeichens, suche erst ab
        //letzter Position +1
        pos = word.indexOf(sign, pos+1);
    }
    return counter;
}
*/



/**
 *  https://www.mediaevent.de/javascript/string-search.html
 */
//Index      01234567...
//          "lalaland"
console.log('"lalaland".indexOf("@"") //=> ',  "lalaland".indexOf("@") );
console.log('"lalaland".indexOf("l") //=> ',  "lalaland".indexOf("l") );
//SIehe singleLEtterCount Variable pos und pos+1
console.log('"lalaland".indexOf("l",1) //=> ',  "lalaland".indexOf("l",1) );


console.log('"lalaland".indexOf("land") //=> ',  "lalaland".indexOf("land") );
console.log('"Wasserschifffahrtsgesellschaft".indexOf("fahrt") //=> ',  "Wasserschifffahrtsgesellschaft".indexOf("fahrt") );
/* indexOf gibt entweder die erste Indexposition vom beginn des Strings zurück auf der sich das gesuchte Zeichen befindet oder -1 wenn das Suchzeichen im String nicht vorhanden ist. */



/////////////////////////////////////////////////////////////////////////////////////
// Zeichenkette umdrehen
/////////////////////////////////////////////////////////////////////////////////////
/*
function umdrehen(richtigrum) {
    var lang = richtigrum.length;
    var gedreht = "";

    for(var i = richtigrum.length - 1; i >= 0; i-- ) {
        gedreht += richtigrum[i];
    }
    return gedreht;
}
*/

///////////////////////////////////////////////////////////
// alternative

function reverseNumber(x) {
    var temp = x.toString();    // "12345"
    if(temp.charAt(0) === "-") { // "-12345"
        temp = temp.substring(1); // "12345" :: substring kopiert ab Position 1. Das - fällt also weg.
    }
    var array = temp.split(""); // ["1","2","3","4","5"]
    array.reverse(); // ["5","4","3","2","1"]
    temp = array.join(""); // "54321"
    return Number(temp);
}
  
  console.log("2: " + numberTwister(12345));

/////////////////////////////////////////////////////////////////////////////////////
// Ersten Buchstaben in Großbuchstaben umwandeln
/////////////////////////////////////////////////////////////////////////////////////

/*
function capitalize(cap) {
    var neu  = cap[0].toUpperCase();

    for(var i = 1; i < cap.length; i++) {
        neu += cap[i];
    }
    return neu;
}
*/
/////////////////////////////////////////////////////////// Variante
// function capitalize(cap) {
//     var firstLetter = cap.slice(0,1).toUpperCase();
//     var rest = cap.slice(1); // .slice() macht das gleiche wie .substring(). 
//     return firstLetter + rest;
// }

/////////////////////////////////////////////////////////// Variante kompakt
// function capitalize(cap) {
//     return cap.charAt(0).toUpperCase() + cap.slice(1);
// }

/**
 * s[0] = s.charAt(0).toUpperCase();
 * TypeError: 0 is read-only
 * Primitive Datentypen string und number sind immutable/unveränderlich
 * Überschreiben funktioniert aber Indexpositionen können nicht geändert werden.
 * Alternativ gibt es dafür aber auch Stringmethoden
 */


/////////////////////////////////////////////////////////////////////////////////////
// Type of
/////////////////////////////////////////////////////////////////////////////////////
/*
var arr = [];
function welcherTyp(bestimmung) {
    return typeof document.write("Welcher Typ: "  + typeof bestimmung + "<br>");;
}
*/
/////////////////////////////////////////////////////////////////////////////////////
// Type of
/////////////////////////////////////////////////////////////////////////////////////
/*
(function() {
    var a = b = 5;
})();
    console.log(b);
*/
    http://benalman.com/news/2010/11/immediately-invoked-function-expression/