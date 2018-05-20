"use strict";
/* 
Zufallsgenerator: Wer ist dran?
1. Legen Sie ein Array mit allen Teilnehmern die heute
Anwesend sind an. 

2. Fügen Sie in der HTML-Datei einen Button und eine div#ausgabe ein. Wird der Button gedrückt ermitteln Sie einen zufälligen TN aus dem erzeugten Array und geben diesen im div#ausgabe aus. 

3. Zusätzlich geben Sie alle TN aus dem Array noch als Liste nach dem zufällig ermittelten TN aus. Markieren Sie den zufälligen TN der ermittelt wurde innerhalb der Liste mit einem <b>-Tag.

TIPP: Denken Sie beim erzeugen der Zufallszahl daran das ggf. neuer TN zum Array hinzugefügt oder bestehende entfernt werden können. Zufallszahl muss flexibel sein.
*/

function zufallsTeilnehmer() {
    var out = document.getElementById("ausgabe");
    var s = "";

    var teilnehmer = [
        "Alexander Matthias",
        "Andre Christen",
        // "Anna-Maria Baumeister",
        "Antonio Vincenzo Pamentieri",
        "Dirk Metzger",
        "Fred Walther",
        "Guido Wiegandt",
        "Igor Alimov",
        "Jeanette Kantenwein",
        "Jens Haake",
        "Marco Rehberg",
        "Martina Brosche",
        "Natascha Schulz",
        "Rami Ismaeel",
        "Rita Kolb",
        "Robert Jammernegg",
        "Sebastian Sommerfeld"
    ];
    // .length-1, Die Anzahl ist immer um 1 größer als der letzte Index
    // Zufallszahl soll zwischen Index 0 und letztem Index .length-1
    var zz = rand(0,teilnehmer.length-1); // rand(0,15)
    var opfer = teilnehmer[zz];
    // console.log(teilnehmer);
    // console.log(opfer);
    s += "<p>Zufällige(r) Teilnehmer-(in) <b>" + opfer + "</b></p>";
    //mit join kann der zufällige TN nicht direkt bei der Ausgabe markiert werden
    // s += "<ul><li>" + teilnehmer.join("</li><li>") + "</li></ul>";

    s += "<ul>";
    var count = teilnehmer.length;
    for(var i = 0; i < count; i++) {
        if(teilnehmer[i] === opfer) {
            s += "<li><b>" + teilnehmer[i] + "</b></li>";
        } else {
            s += "<li>" + teilnehmer[i] + "</li>";
        }

        // s += "<li>";
        // if(teilnehmer[i] === opfer) {
        //     s += "<b>" + teilnehmer[i] + "</b>";
        // } else {
        //     s += teilnehmer[i];
        // }        
        // s += "</li>";
    }
    s += "</ul>";

    out.innerHTML = s;
}