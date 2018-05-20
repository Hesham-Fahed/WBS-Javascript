"use strict";

function accum(s) {
    var newString = "";
    console.log(s.length);
    for (var i = 0; i < s.length; i++) {

        if (i === s.length - 1) {
            newString += s[i].toUpperCase() + (s[i].toLowerCase().repeat(i));
        } else {
            newString += s[i].toUpperCase() + (s[i].toLowerCase().repeat(i)) + "-";
        }
    }
    return newString;
}

var test = "abcd";
console.log(accum(test));



function accum1(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
        // Alternative: neues Array. X frei Plätze. Wenn dann über push und join ein Buchstabe eingefügt wird, wirkt dies wie ein Multiplikator und füllt den Buchstaben X-mal ein.
        result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    console.log("Katbow says: " + typeof result);
    return result.join('-');
}

console.log(accum1(test));
