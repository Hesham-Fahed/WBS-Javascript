"use strict";

//////////////////////////////////////////////////////////////////
// 2.
// function bereinigen(a) {
//     var neu = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === undefined) {
//             a.splice(i, 0);
//         } else {
//             neu += a[i];
//         }
//     }
//     return neu;
// }
// var tierArray = ["Vogel", "Katze", "Fisch"];
// tierArray.length = 10;
// tierArray[9] = "Spinne";

// function bereinigen(a) {
//     var neu = [];
//     for (var z = 0; z < a.length; z++) {
//         if (a[z] !== undefined) {
//             neu[neu.length] += a[z];
//         } 
//     }
//     return neu;
// }
// var tierHeim = [];
// tierHeim = bereinigen(tierArray);
// out += tierHeim;


// document.write(out);
var namen = ["Max","Christian",,,,"Petra","Klaus","Jörgen","Max","Jochen","Dieter","Max","Josef"];


var neu = [];
var pos = namen.indexOf("Max"); // 0
while(pos !== -1) {
    // splice gibt immer ein Array zurück, auch wenn nur ein Element ausgeschnitten wird
    // namen.splice(pos,1) //=> ["Max"]
    // namen.splice(pos,1)[0] //=> "Max"
    // Ohne [0] -> neu.push(namen.splice(pos,1)) //=> [["Max"],["Max"],["Max"]]
    neu.push(namen.splice(pos,1)[0]);
    pos = namen.indexOf("Max");  
}
