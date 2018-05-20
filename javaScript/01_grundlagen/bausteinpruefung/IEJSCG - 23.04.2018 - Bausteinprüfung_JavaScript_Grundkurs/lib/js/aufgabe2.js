"use strict";

function randomRGB() {
    var rgbColor = "rgb(";

    for (var i = 0; i < 3; i++) {
        if (i == 2) {
            rgbColor += Math.floor(Math.random() * 256);
        } else {
            rgbColor += Math.floor(Math.random() * 256) + ", ";
        }
    }
    rgbColor += ")";
    return rgbColor;
}

// Die Div-Container "box" adressieren
var click = document.getElementById("main").getElementsByClassName("box");

// jedem einzelnen div-container ein click-event hinzufügen: funktion chanceRGB aufrufen
for (var i = 0; i < click.length; i++) {
    click[i].onclick = changeColor;
}

// dem angeklickten Element eine zufällige Farbe zuordnen
function changeColor(e) {
    this.style.backgroundColor = randomRGB();
}
