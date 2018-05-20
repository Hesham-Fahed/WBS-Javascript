"use strict";

// function twoDigits(inStr){
//     var outStr = String(inStr);
//     if(outStr.length === 1 && !isNaN(outStr)){
//         outStr = "0" + outStr;
//     }
//     return outStr;
// }

function digits(str,count,sign) {
    str = String(str);
    if(sign === undefined) { // !sign
        sign = "0";
    }
    if(count === undefined) { // !count
        count = 2;
    }
    while(str.length < count) {
        str = sign + str;
    }
    return str;
}


function timer() {
    var d = new Date();
    return digits(d.getHours()) + ":" + digits(d.getMinutes()) + ":" + digits(d.getSeconds());
}

document.getElementById("zeit").innerHTML = timer();
// Syntax: setInterval(fnReferenz,zeitInMs)
setInterval(
    function(){
        document.getElementById("zeit").innerHTML = timer();
    },1000
);

// Funktionsausdruck
// anoynme FN


///////////////////////////////////////////////////////////////////////////////////
// Random Color in Zeitinterval ändern
///////////////////////////////////////////////////////////////////////////////////

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRGB() {
    return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")"
}


// var intRef = setInterval( 
//     function(){
//         var class_box = document.getElementsByClassName("box");
//         for(var i = 0; i < class_box.length;i++) {
//             class_box[i].style.backgroundColor = randomRGB();
//         }

//         counter++; console.log(counter);
//         if(counter === 5) {
//             clearInterval(intRef);
//         }
//     }, 
//     5000
// );


function changeColor(){
    var class_box = document.getElementsByClassName("box");
    for(var i = 0; i < class_box.length;i++) {
        class_box[i].style.backgroundColor = randomRGB();
    }

    counter++; console.log(counter);
    if(counter === 5) {
        clearInterval(intRef);
    }
}

var counter = 0;
var intRef = setInterval(changeColor,5000);
//Der Rückgabe von setIntval ist eine Nummer, diese Nummer ist die ID des Timers.
//Über die ID kann der Interval mit clearInterval gelöscht werden
console.log("Interval id //=> ", intRef);


var intRef2 = setInterval(
    function(){ 
        document.getElementsByTagName("h1")[0].style.color = randomRGB();
    }
    , 2000
);


setTimeout(
    function(){
        clearInterval(intRef2);
    }
    , 10000
);