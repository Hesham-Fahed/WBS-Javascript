"use strict";

function captcha12() {
    var ausgabe = document.getElementById("ausgabe");

    var captcha = "<p>Zufallserzeugte Ausgabe: <strong>";
    var rand = 0;
    for (var i = 0; i < 12; i++) {
        rand = Math.floor(Math.random() * 62);

        switch (rand) {
            case 0:
                captcha += 0;
                break;
            case 1:
                captcha += 1;
                break;
            case 2:
                captcha += 2;
                break;
            case 3:
                captcha += 3;
                break;
            case 4:
                captcha += 4;
                break;
            case 5:
                captcha += 5;
                break;
            case 6:
                captcha += 6;
                break;
            case 7:
                captcha += 7;
                break;
            case 8:
                captcha += 8;
                break;
            case 9:
                captcha += 9;
                break;
            case 10:
                captcha += "a";
                break;
            case 11:
                captcha += "b";
                break;
            case 12:
                captcha += "c";
                break;
            case 13:
                captcha += "d";
                break;
            case 14:
                captcha += "e";
                break;
            case 15:
                captcha += "f";
                break;
            case 16:
                captcha += "g";
                break;
            case 17:
                captcha += "h";
                break;
            case 18:
                captcha += "i";
                break;
            case 19:
                captcha += "j";
                break;
            case 20:
                captcha += "k";
                break;
            case 21:
                captcha += "l";
                break;
            case 22:
                captcha += "m";
                break;
            case 23:
                captcha += "n";
                break;
            case 24:
                captcha += "o";
                break;
            case 25:
                captcha += "p";
                break;
            case 26:
                captcha += "q";
                break;
            case 27:
                captcha += "r";
                break;
            case 28:
                captcha += "s";
                break;
            case 29:
                captcha += "t";
                break;
            case 30:
                captcha += "u";
                break;
            case 31:
                captcha += "v";
                break;
            case 32:
                captcha += "w";
                break;
            case 33:
                captcha += "x";
                break;
            case 34:
                captcha += "y";
                break;
            case 35:
                captcha += "z";
                break;
            case 36:
                captcha += "A";
                break;
            case 37:
                captcha += "B";
                break;
            case 38:
                captcha += "C";
                break;
            case 39:
                captcha += "D";
                break;
            case 40:
                captcha += "E";
                break;
            case 41:
                captcha += "F";
                break;
            case 42:
                captcha += "G";
                break;
            case 43:
                captcha += "H";
                break;
            case 44:
                captcha += "I";
                break;
            case 45:
                captcha += "J";
                break;
            case 46:
                captcha += "K";
                break;
            case 47:
                captcha += "L";
                break;
            case 48:
                captcha += "M";
                break;
            case 49:
                captcha += "N";
                break;
            case 50:
                captcha += "O";
                break;
            case 51:
                captcha += "P";
                break;
            case 52:
                captcha += "Q";
                break;
            case 53:
                captcha += "R";
                break;
            case 54:
                captcha += "S";
                break;
            case 55:
                captcha += "T";
                break;
            case 56:
                captcha += "U";
                break;
            case 57:
                captcha += "V";
                break;
            case 58:
                captcha += "W";
                break;
            case 59:
                captcha += "X";
                break;
            case 60:
                captcha += "Y";
                break;
            case 61:
                captcha += "Z";
                break;
        }

    }
    captcha += "</strong></p>"
    ausgabe.innerHTML = captcha;
}

document.forms[0].onsubmit = captcha12;