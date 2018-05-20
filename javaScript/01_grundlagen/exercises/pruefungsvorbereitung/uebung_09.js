"use strict";
/* 
Zufallsgenerator: Wer ist dran?
1. Legen Sie ein Array mit allen Teilnehmern die heute
Anwesend sind an. 

2. Fügen Sie in der HTML-Datei einen Button und eine div#ausgabe ein. Wird der Button gedrückt ermitteln Sie einen zufälligen TN aus dem erzeugten Array und geben diesen im div#ausgabe aus. 

3. Zusätzlich geben Sie alle TN aus dem Array noch als Liste nach dem zufällig ermittelten TN aus. Markieren Sie den zufälligen TN der ermittelt wurde innerhalb der Liste mit einem <b>-Tag.

TIPP: Denken Sie beim erzeugen der Zufallszahl daran das ggf. neuer TN zum Array hinzugefügt oder bestehende entfernt werden können. Zufallszahl muss flexibel sein.
*/




// Zufällig einen Teilnehmer aussuchen und ausgeben
function buttonRand(e) {
    e.preventDefault();
    
    var teilnehmer = Array();
    teilnehmer = ["Mandy", "Tim", "Michael", "Elifteria", "Rums", "Bums", "Karius", "Baktus"];

    var ausgewaehlt = document.getElementById("ausgabe");
    var gluecksrad = Math.floor(Math.random() * teilnehmer.length);

    switch (gluecksrad) {
        case 0:
            ausgewaehlt.innerHTML = teilnehmer[0];
            break;
        case 1:
            ausgewaehlt.innerHTML = teilnehmer[1];
            break;
        case 2:
            ausgewaehlt.innerHTML = teilnehmer[2];
            break;
        case 3:
            ausgewaehlt.innerHTML = teilnehmer[3];
            break;
        case 4:
            ausgewaehlt.innerHTML = teilnehmer[4];
            break;
        case 5:
            ausgewaehlt.innerHTML = teilnehmer[5];
            break;
        case 6:
            ausgewaehlt.innerHTML = teilnehmer[6];
            break;
        case 7:
            ausgewaehlt.innerHTML = teilnehmer[7];
            break;
    }

    // Liste erschaffen und ein class-Attribut hinzufügen
    var neueListe = document.createElement("ul"); // Eine ul erschaffen
    document.body.insertBefore(neueListe, document.getElementById("form"));

    var attributEmpfang = document.getElementsByTagName("ul"); // ul-knotenpunt in Variable speichern
    var attribut = document.createAttribute("class"); // das Erschaffen eines class-attributs in variable
    attribut.value = "liste"; // dem Attribut einen Wert zuweisen
    attributEmpfang[0].setAttributeNode(attribut); // das Erschaffene Attribut einem Tag-zuweisen

    // Der Liste (ul) li-Elemente für jeden Teilnehmer hinzufügen
    var heute = "";
    for (var i = 0; i < teilnehmer.length; i++) {
        if (ausgewaehlt.innerHTML == teilnehmer[i]) {
            heute += "<li><b>" + teilnehmer[i] + "</b></li>";
        } else {
            heute += "<li>" + teilnehmer[i] + "</li>";
        }
    }
    attributEmpfang[0].innerHTML = heute;


    // return ausgewaehlt;
}

document.forms[0].onsubmit = buttonRand;


// if(buttonRand == teilnehmer[i]) {
//    document.getElementsByClassName("liste")[0].replaceChild
//     heute += "<li><b>" + teilnehmer[i] + "</b></li>";
// }