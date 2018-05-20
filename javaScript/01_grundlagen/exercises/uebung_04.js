"use strict";

// 3: Mit Dezimalzahl
document.write("<br>3: ");

for(var i=3; i<=4.1; i+=0.2) {
    document.write(i.toFixed(1) + " ");
}

document.write("<hr><p>");

for(var k = 10; k <=50; k++) {
    if(k > 15 && k <= 25) {
        continue;
    }
    if(k == 45) {
        break;
    }
    document.write(k + ", ");
}

document.write("</p>");


//////////////////////////////////////////////////////////
//  while-Schleifen
//////////////////////////////////////////////////////////
var out = "";
var a = 1;
document.write("<p>a: ")
while(a <= 10) {
    out += a;
    if(i <= 10) {
        out += ", ";
    }
    a++;
}
document.write(out + "</p>")
/*
///////////////////////////////////////////////////////
//2,4,6,8,10

var b = 2;
document.write("<p>b: ")
while(b <= 10) {
    document.write(b + ", ");
    b += 2;
}
document.write("</p>")

//////////////////////////////////////////////////////
// 2,7,12,17,22

var c = 2;
document.write("<p>c: ")
while(c <= 22) {
    document.write(c + ", ");
    c += 5;
}
document.write("</p>")

//////////////////////////////////////////////////////
// 49,42,35,28,21

var d = 49;
document.write("<p>d: ")
while(d >= 21) {
    document.write(d + ", ");
    d -= 7;
}
document.write("</p>")

//////////////////////////////////////////////////////
// 1,2,4,8,16,32,64,128,256,512,1024

var e = 1;
document.write("<p>e: ")
while(e <= 1024) {
    document.write(e + ", ");
    e *= 2;
}
document.write("</p>")
*/
//////////////////////////////////////////////////////
// 8, 13, 18, 23, 28, 33, 38, 43, 48
/*
var zufall;
var tipp;
var zufallsReihe = "";
var zaehler = 2;

do {
    for(var x = 0; x < zaehler; x++) {
        zufall = Math.floor(Math.random()*10 + 1);
        zufallsReihe += zufall;
    }
    alert("Bitte merken: " + zufallsReihe);
    tipp = parseInt(prompt("Dein Tipp: "));
    zaehler++;

} while(tipp != zufallsReihe)
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*
document.write("<hr>");

var out2 = "";
var ende = parseInt(prompt("Bitte Ende eingeben", "20"));
var start = 1;
while(start <= ende) {
    out2 += start;
    if(start < ende) {
        out2 += ", ";
    }
    start++;
}

document.write(out2);
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*
var anzahl = Number(prompt("Bitte Anzahl Sternchen eingeben (max. 55)","55"));
var ausgabe = "";

if(isNaN(anzahl) || anzahl === "" || anzahl <= 0){
  ausgabe = "Bitte gültige Zahl > 0 eingeben";
} else if (anzahl > 55) {
  ausgabe = "Höchster erlaubter Wert: 55";
} else {
  var rowcounter = 10;
  var lastcount = rowcounter;
  for(anzahl; anzahl > 0; anzahl--){
    if(rowcounter === 0){
      ausgabe += "<br>";
      lastcount--;
      rowcounter = lastcount;
    }
    ausgabe += "*";
    rowcounter--;
  }
}

document.write(ausgabe); 

*/
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
// 3
//////////////////////////////////////////////////////////////////////////
//b
/*
var eingabe, zahl, check = true;
do {
    eingabe = prompt("Aufgabe 3 - Bitte geben Sie eine Anzahl bis max. 55 ein","55");
    zahl = Number(eingabe);
    if(eingabe === null) {
        break;
    } else if(zahl < 1 || zahl > 55 || isNaN(zahl)) {
        alert("Bitte gültige Zahl eingeben.");
    } else {
        check = false;
        for(var i = 1; i <= zahl; i++) {
            out += "*";
            console.log(i);
            // if(i === 10 || i === 20 || i === 30 || i === 40 || i === 50) {
            //     out += "<br>";
            // }
            if(
                i === 10 ||     // **********
                i === 19 ||     // *********
                i === 27 ||     // ********
                i === 34 ||     // *******
                i === 40 ||     // ******
                i === 45 ||     // *****
                i === 49 ||     // ****
                i === 52 ||     // ***
                i === 54        // **
            )
            for (var y = 10; y > 0; y--) {
                
            }
        }
    }
}while(check);
*/
//////////////////////////////////////////////////////////////////////////
// 3
//////////////////////////////////////////////////////////////////////////
//d
/*
var eingabe, zahl, check = true;
do {
    eingabe = prompt("Aufgabe 3 - Bitte geben Sie eine Anzahl bis max. 55 ein","55");
    zahl = Number(eingabe);
    if(eingabe === null) {
        break;
    } else if(zahl < 1 || zahl > 55 || isNaN(zahl)) {
        alert("Bitte gültige Zahl eingeben.");
    } else {
        check = false;
        var anzahl = 0;
        var umbruch = 10; 
        for(var i = 1; i <= zahl; i++) {
            out += "*";
            anzahl++;
            if(anzahl === umbruch) {
                out += "<br>";
                umbruch--;
                anzahl = 0;
            }
            
            
            // if(i % umbruch !== 0) {
            //     out += "*";
            // } else {
            //     out += "*<br>";
            // }
           
        }
    }
}while(check); 
*/
//////////////////////////////////////////////////////////////////////////
// 3
//////////////////////////////////////////////////////////////////////////
//d

var eingabe, zahl, check = true;
do {
    eingabe = prompt("Aufgabe 3 - Bitte geben Sie eine Anzahl bis max. 55 ein","55");
    zahl = Number(eingabe);
    if(eingabe === null) {
        break;
    } else if(zahl < 1 || zahl > 55 || isNaN(zahl)) {
        alert("Bitte gültige Zahl eingeben.");
    } else {
        check = false;
        var umbruch = 10; 
        for(var i = 1; i <= zahl; i++) {
            out += "*";
            if(i % umbruch === 0) {
                out += "<br>";
                umbruch-=0.5;
                // 1 Zeile 10 % 10 !== 0
                // 2 Zeile 19 % 9.5 !== 0
                // 3 Zeile 27 % 9 !== 0
                //...
                // 10 Zeile 55 % 5.5 !== 0
            }       
        }
    }
}while(check);  




document.write(out);