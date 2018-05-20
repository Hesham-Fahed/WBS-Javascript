
(function () {
    "use strict";
    /* 1.1 quadrat Schreiben Sie eine Funktion die einen Paramter annimmt und das Quadrat, die Multiplikation dieser Zahl mit sich selbst, zurückgibt.*/

    function square(x) {
        // var erg = x * x;
        // return erg;
        return x * x;
    }


    /* 1.2 difference Schreiben Sie eine Funktion die zwei Parameter annimmt und die Differenz der beiden Zahlen zurückgibt. */
    function difference(a, b) {
        return a - b;
    }

    /* Anstatt für jede Grundrechenart eine eigene Funktion zu schreiben macht es Sinn das ganze zusammenfassend in einer Funktion zu erzeugen. 
    operator: / * - + %
    */
    function calculate(zahl1, zahl2, operator) {
        var erg = 0;
        switch (operator) {
            case "+":
                erg = zahl1 + zahl2;
                break;
            case "-":
                erg = zahl1 - zahl2;
                break;
            case "*":
                erg = zahl1 * zahl2;
                break;
            case "/":
                erg = zahl1 / zahl2;
                break;
            case "%":
                erg = zahl1 % zahl2;
                break;
            default:
                erg = "Berechnung nicht möglich!";
        }
        return erg;
    }

    /* 1.4 numberCompare Schreiben Sie eine Funktion die zwei Zahlen als Parameter annimmt. */
    function numberCompare(x, y) {
        // var out;
        if (x === y) {
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

    /* 1.5 singleLetterCount Schreiben Sie eine Funktion die zwei Strings als Parameter annimmt. Der erste Parameter ist ein String mit einem Wort und der zweite Parameter ist ein string mit einem Buchstaben. Ermitteln Sie wie oft der Buchstabe (Parameter 2) im Wort (Parameter 1) vorkommt und geben Sie die ermittelt Häufigkeit zurück. Prüfen Sie case insensitive, Groß-/Kleinschreibung wird beim vergleich ignoriert. TIPP: S. 161 6.2.1 Operationen mit Zeichenketten */

    /* function singleLetterCount(word,sign) {
        var counter = 0;
        word = word.toLowerCase();
        sign = sign.toLowerCase();
        for(var i = 0; i < word.length; i++) {
            // console.log(word[i]);
            if(word[i]=== sign) { //WENN word[i] GLEICH sign 
                counter++;//...erhöhe counter um 1
            }
        }
        return counter;
    } */

    function singleLetterCount(word, sign) {
        var counter = 0;
        word = word.toLowerCase();
        sign = sign.toLowerCase();
        // pos Position das erste Zeichen
        var pos = word.indexOf(sign);
        //SOLANGE ein Zeichen gefunden wird
        while (pos !== -1) {
            counter++;
            //Bestimmte neue Position des Zeichens, suche erst ab
            //letzter Position +1
            pos = word.indexOf(sign, pos + 1);
        }
        return counter;
    }


    /*2. Schreiben Sie eine Funktion die ein Zahl als Parameter annimmt und umdreht. Der Rückgabewert ist eine Zahl.*/
    /* function reverseNumber(x) {
        var temp = String(x);
        if(temp.charAt(0) === "-") { // "-12345"
            temp = temp.substring(1); // "12345" 
        }
        var erg = "";
        for(var i = temp.length-1; i >= 0; i--) {
            erg += temp[i];
        }
        return Number(erg);
    } */

    /* function reverseNumber(x) {
        var temp = String(x);
        if(temp.charAt(0) === "-") { // "-12345"
            temp = temp.substring(1); // "12345" 
        }
        var erg = "";
        for(var i = 0; i < temp.length; i++) {
            erg = temp[i] + erg;
        }
        return Number(erg);
    } */


    function reverseNumber(x) {
        var temp = x.toString(); // "12345"
        if (temp.charAt(0) === "-") { // "-12345"
            temp = temp.substring(1); // "12345" 
        }
        var array = temp.split(""); // ["1","2","3","4","5"]
        array.reverse(); // ["5","4","3","2","1"]
        temp = array.join(""); // "54321"
        return Number(temp);
    }


    /* 3. Schreiben Sie eine Funktion die einen string als Parameter annimmt und den ersten Buchstaben in diesem String in Großbuchstaben umwandelt.TIPP: S. 161 6.2.1 Operationen mit Zeichenketten */
    /* function capitalize(s) {
        //      01234567
        // s = "lalaland"
        var temp = ""; 
        temp = s.charAt(0).toUpperCase(); // Index 0 als Großbuchstabe:  temp = "L"
        //Die Schleife beginnt bei Index 1: "alaland"
        for (var index = 1; index < s.length; index++) {
            temp += s.charAt(index);        
        }
        return temp;
    } */

    // function capitalize(s) {
    //     var firstLetter = s.substring(0,1).toUpperCase();
    //     var rest = s.substring(1);
    //     return firstLetter + rest;
    // }

    // function capitalize(s) {
    //     var firstLetter = s.slice(0,1).toUpperCase();
    //     var rest = s.slice(1);
    //     return firstLetter + rest;
    // }

    function capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    /* 4.Schreiben Sie eine Funktion die einen Parameter annimmt und den Datentyp des Werteszurückgibt. Mögliche Rückgabewerte: object, boolean, function, number, string, and undefined. */
    function type(a) {
        return typeof a;
    }

    /* 6 06_zufallszahlen.js */
    /* function rand(min,max) {
        var zahl = Math.random(); 
        var multi = (max + 1) - min; 
        zahl = zahl * multi; 
        zahl = zahl + min; 
        zahl = Math.floor(zahl); 
        return zahl;
    } */

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    var out = "";

    //1.1
    out += "square(2) //=> " + square(2) + "<br>";
    out += "square(4) //=> " + square(4) + "<br>";

    //1.2
    out += "difference(20,10) //=> " + difference(20, 10) + "<br>";
    out += "difference(20,10) //=> " + difference(100, 12) + "<br>";

    //1.4
    out += "numberCompare(1,1); //=> " + numberCompare(1, 1) + "<br>";
    out += "numberCompare(2,1); //=> " + numberCompare(2, 1) + "<br>";
    out += "numberCompare(1,2); //=> " + numberCompare(1, 2) + "<br>";

    //1.5

    out += "singleLetterCount(\"lalaland\",\"a\"); //=> " + singleLetterCount("lalaland", "a") + "<br>";
    out += "singleLetterCount(\"lalaland\",\"d\"); //=> " + singleLetterCount("lalaland", "d") + "<br>";
    out += "singleLetterCount(\"lalaland\",\"A\"); //=> " + singleLetterCount("lalaland", "A") + "<br>";


    //2
    out += "reverseNumber(12345) //=> " + reverseNumber(12345) + "<br>";
    out += "reverseNumber(12345) //=> " + reverseNumber(-12345) + "<br>";


    // 3
    out += "capitalize(\"lalaland\"); //=> " + capitalize("lalaland") + "<br>";
    out += "capitalize(\"hallo\"); //=> " + capitalize("hallo") + "<br>";

    //4
    out += "type(\"Hallo\"); //=> " + type("Hallo") + "<br>";
    out += "type(12); //=> " + type(12) + "<br>";
    out += "type(true); //=> " + type(true) + "<br>";
    out += "type(function(){}); //=> " + type(function () {}) + "<br>";
    out += "type([]); //=> " + type([]) + "<br>";


    /* Information in 09_gueltigkeitsbereiche */
    // 5
    // (function () {
    //     var a = b = 5;
    // })();
    // console.log(b);


    // 6
    out += "rand(1,10) //=> " + rand(1, 10) + "<br>";
    out += "rand(-10,10) //=> " + rand(-10, 10) + "<br>";
    out += "rand(25,100) //=> " + rand(25, 100) + "<br>";


    // 7
    var zahl1 = 0,
        zahl2 = 0,
        zahl3 = 0,
        zahl4 = 0,
        zahl5 = 0,
        zahl6 = 0,
        zahl7 = 0,
        zahl8 = 0,
        zahl9 = 0,
        zahl10 = 0,
        zz = 0;
    
    for(var i = 0; i < 10000; i++) {
        zz = rand(1,10);
        switch(zz) {
            case 1 : zahl1 ++; break;
            case 2 : zahl2 ++; break;
            case 3 : zahl3 ++; break;
            case 4 : zahl4 ++; break;
            case 5 : zahl5 ++; break;
            case 6 : zahl6 ++; break;
            case 7 : zahl7 ++; break;
            case 8 : zahl8 ++; break;
            case 9 : zahl9 ++; break;
            case 10 : zahl10 ++; break;
            default : alert("Danke - Sie haben das Internet gelöscht!");
        }
    }
    var test =  i; //zahl1+zahl2+zahl3+zahl4+zahl5+zahl6+zahl7+zahl8+zahl9+zahl10;
    out += "<h2>Zufallszahlen Häufigkeit</h2>";
    out += "Die Zahl 1 kam: " +zahl1+" mal vor.<br> Die Zahl 2 kam: "+zahl2+" mal vor.<br> Die Zahl 3 kam: "+zahl3+" mal vor.<br> Die Zahl 4 kam: "+zahl4+" mal vor.<br> Die Zahl 5 kam: "+zahl5+" mal vor.<br> Die Zahl 6 kam: "+zahl6+" mal vor.<br> Die Zahl 7 kam: "+zahl7+" mal vor.<br> Die Zahl 8 kam: "+zahl8+" mal vor.<br> Die Zahl 9 kam: "+zahl9+" mal vor.<br> Die Zahl 10 kam: "+zahl10+" mal vor.<br>Test: Häufigkeit aller Zahlen : " + test +"<br>";





    document.write(out);
    /**
     *  https://www.mediaevent.de/javascript/string-search.html
     */
    //Index      01234567...
    //          "lalaland"
    console.log('"lalaland".indexOf("@"") //=> ', "lalaland".indexOf("@"));
    console.log('"lalaland".indexOf("l") //=> ', "lalaland".indexOf("l"));
    //SIehe singleLEtterCount Variable pos und pos+1
    console.log('"lalaland".indexOf("l",1) //=> ', "lalaland".indexOf("l", 1));


    console.log('"lalaland".indexOf("land") //=> ', "lalaland".indexOf("land"));
    console.log('"Wasserschifffahrtsgesellschaft".indexOf("fahrt") //=> ', "Wasserschifffahrtsgesellschaft".indexOf("fahrt"));
    /* indexOf gibt entweder die erste Indexposition vom beginn des Strings zurück auf der sich das gesuchte Zeichen befindet oder -1 wenn das Suchzeichen im String nicht vorhanden ist. */


    var s = "lalaland";
    // s = s.charAt(0).toUpperCase() + s.slice(1);
    /**
     * s[0] = s.charAt(0).toUpperCase();
     * TypeError: 0 is read-only
     * Primitive Datentypen string und number sind immutable/unveränderlich
     * Überschreiben funktioniert aber Indexpositionen können nicht geändert werden.
     * Alternativ gibt es dafür aber auch Stringmethoden
     */

}());