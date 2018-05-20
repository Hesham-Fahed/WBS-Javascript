"use strict;"

var zaehler = document.getElementsByClassName("boxes")[0].getElementsByClassName("box");

for (i = 0; i < zaehler.length; i++) {
    zaehler[i].onclick = change;
}

function change(e) {
    this.innerHTML++;
}


var daten = document.getElementById("container").getElementsByTagName("a");
for (var i = 0; i < daten.length; i++) {
    daten[i].onclick = spionage;
}

function spionage(e) {
    document.getElementById("ausgabe").getElementsByTagName("b")[0].innerHTML = this.id;
    document.getElementById("ausgabe").getElementsByTagName("b")[1].innerHTML = this.id.split("-")[1];
    document.getElementById("ausgabe").getElementsByTagName("b")[2].innerHTML = this.innerHTML;
}

var splitten = "Hallo";
var splitten2 = "12345";

var arr = splitten.split("");
var arr2 = splitten2.split("");


var bunt = document.getElementById("container").getElementsByTagName("h2")[0].innerHTML;
// var bunt = arr3.split("");
for (var i = 0; i < bunt.length; i++) {
    var rand = Math.floor(Math.random() * 10 + 1);
    switch (rand) {
        case 1:
            bunt[i] = "<span style='color: red;'>" + bunt[i] + "</span>";
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 2:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 3:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 4:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 5:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 6:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 7:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 8:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 9:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
        case 10:
            bunt[i] = bunt[i].replace(bunt[i], '<span style="color: red;">' + bunt[i] + '</span>');
            break;
    }
}