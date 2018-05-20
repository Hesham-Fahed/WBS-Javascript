"use strict";

/* 
1. Einfaches Objekt
1.1. Legen Sie ein Objekt person an, das Ihre persönlichen Daten enthält.
Mindestens vorname, nachname und ein Array hobbys mit 3 Einträgen.
*/
var person = {};
person.vorname = "Michel";
person.nachname = "Holzky";
person.gebJahr = "1978";
person.geschlecht = "männlich";
person.groesse = "198";
person.hobbys = ["wandern", "klettern", "Rechner"].join(", ");


/*
2. Geben Sie das Objekt aus Übung 1 ohne Schleife aus.
Geben Sie das Objekt in die Konsole aus.
*/
console.log(person);
/*
Geben Sie alle Eigenschaften einzeln in die Konsole aus.
*/
console.log("person.vorname: " + person.vorname);
console.log("person.nachname: " + person.nachname);
console.log("person.gebjahr: " + person.gebJahr);
console.log("person.geschlecht: " + person.geschlecht);
console.log("person.groesse: " + person.groesse);
console.log("person.hobbys: " + person.hobbys);
console.log("typeof person.hobbys: " + typeof person.hobbys);

/*
Geben Sie das Objekt als ungeordnete Liste im HTML-Dokument aus, legen Sie dazu vorher einen div#ausgabe in der HTML-Datei an.

1.3. Geben Sie das Objekt aus Übung 1 mit Schleife(n) aus. Geht bei einem Objekt eine for-schleife? Bzw. die for-schleife die wir bereits kennen.
*/
var ausgabe = document.getElementById("ausgabe");

var sammeln = "<ul>";
for (var props in person) {
    sammeln += "<li>" + props + ": " + person[props] + "</li>";
}
sammeln += "</ul>";

ausgabe.innerHTML = sammeln;


/*
2. Timeline
    Nutzen Sie das Objekt data um eine Timeline als ul im Dokument darzustellen.
    
    Die Eigenschaft timeline enthält den Inhalt für den Seitenkopf
    headline soll als h2 Überschrift über der Liste erscheinen.
    text soll als Absatz unter der h2 Überschrift vor der Liste erscheinen.
    
    Die Eigenschaft date enthält 3 Timeline Ereignisse die in einer ul angezeigt werden soll. Jedes Objekt in Date ist ein Listenpunkt mit eigener ul
    
    <h2>Timeline</h2>
    <p>Ereignisse in der Stadt Musterhausen</p>
    <ul>
        <li>
            <ul>
                <li>Jahresrückblick</li>
                <li>01.01.1945</li>
                <li>Der Krieg ist aus. Die wichtigsten Ereignisse <a href='#'>mehr lesen</a></li>
            </ul>
        </li>  
        ... 
    </ul>
*/
var data = {
    timeline: {
        headline: "Timeline",
        text: "Ereignisse in der Stadt Musterhausen"
    },
    date: [
        {
            startdatum: "09.05.1945",
            headline: "Jahresrückblick",
            text: "Der Krieg ist aus. Die wichtigsten Ereignisse <a href='#'>mehr lesen</a>"
        },
        {
            startdatum: "04.07.1954",
            headline: "Das Wunder von Bern",
            text: "Aus! Aus! Aus - Das Spiel ist aus! Deutschland ist Weltmeister <a href='#'>mehr lesen</a>"
        },
        {
            startdatum: "21.07.1969",
            headline: "Mondlandung",
            text: "Thats one small step for a man, on giant leap for mankind <a href='#'>mehr lesen</a>"
        }
    ]
};

var timelineAusgabe = document.getElementById("timeline");
var timelineSammeln = "";

timelineSammeln += "<h2>" + data.timeline.headline + "</h2>";
timelineSammeln += "<p>" + data.timeline.text + "</p>";
timelineSammeln += "<ul>";

for (var i = 0; i < data.date.length; i++) {
    timelineSammeln += "<li><ul>";
    for (var key in data.date[i]) {
        timelineSammeln += "<li>" + key + ": " + data.date[i][key] + "</li>";
    }
    timelineSammeln += "</ul></li>";
}
timelineSammeln += "</ul>";
timelineAusgabe.innerHTML = timelineSammeln;
/*
3. CD-Sammlung
    
    Erzeugen Sie eine Ausgabe für die beiden CDs die im Objekt collection angelegt sind.
    
    HTML-Vorlage (soll für die CDs erzeugt werden):
    
    <div class="cd">
        <h2 class="artist">artist</h2>
        <h3 class="title">title</h3>
        <ul class="songlist">
            <li>song</li>
            <li>song</li>
        </ul>
        <p class="jahr">Erscheinungsjahr: xxxx</p>
    </div>

    
    Erzeugtes HTML:
    
    <div class="cd">
        <h2 class="artist">The Beatles</h2>
        <h3 class="title">Help!</h3>
        <ul class="songlist">
            <li>Help!</li>
            <li>The Night Before</li>
            ...
        </ul>
        <p class="jahr">Erscheinungsjahr: 1965</p>
    </div>
    
    <div class="cd">
        <h2 class="artist">The Rolling Stones</h2>
        <h3 class="title">Voodoo Lounge</h3>
        <ul class="songlist">
            <li>Love is Strong</li>
            <li>You Got MeRocking</li>
            ...
        </ul>
        <p class="jahr">Erscheinungsjahr: 1994</p>
    </div> 

*/

var collection = {
    cd: [{
        year: "1965",
        artist: "The Beatles",
        title: "Help!",
        songlist: {
            song: [
                "Help!",
                "The Night Before",
                "You've Got To Hide Your Love Away",
                "I Need You",
                "Another Girl",
                "You're Gonna Lose That Girl",
                "Ticket to Ride",
                "Act Naturally",
                "It's Only Love",
                "You Like Me Too Much",
                "Tell Me What You See",
                "I've Just Seen a Face",
                "Yesterday",
                "Dizzy Miss Lizzy"
            ]
        }
    },
    {
        year: "1994",
        artist: "The Rolling Stones",
        title: "Voodoo Lounge",
        songlist: {
            song: [
                "Love is Strong",
                "You Got MeRocking",
                "Sparks Will Fly",
                "The Worst",
                "New Faces",
                "Moon Is Up",
                "Out Of Tears",
                "I Go Wild",
                "Brand New Car",
                "Sweethearts Together",
                "Suck On The Jugular",
                "Blinded By Rainbows",
                "Baby Break It Down",
                "Thru And Thru",
                "Mean Disposition"
            ]
        }
    }
    ]
};



var cdsammlungAusgabe = document.getElementById("cdsammlung");
var cdSammlungSammeln = "";
var sammlung = collection.cd;
var sammlungLength = sammlung.length;

// den Inhalt des ersten Arrays durchzählen
for (var i = 0; i < sammlungLength ; i++) {
    cdSammlungSammeln += " <div class='cd'>";

    // im Array liegen wiederrum objekte, deren eigenschaften mit folgender Schleife ausgelesen werden 
    for (var key in sammlung[i]) {

        switch (key) {
            case "artist":
                var artist = "<h2 class='artist'>" + sammlung[i].artist + "</h2>";
                break;
            case "title":
                var titel = "<h3 class='title'>" + sammlung[i].title + "</h3>";
                break;
            case "songlist":
                var lieder = ""; 
                // die songs sind wieder ein objekt in dem ein array liegt. Das wird auch durchgezählt und die Songs ausgelesen
                for (var j = 0; j < sammlung[i].songlist.song.length; j++) {
                    lieder += "<li>" + sammlung[i].songlist.song[j] + "</li>";
                }
                break;
            case "year":
                var year = "<p>Erscheinungsjahr: " + sammlung[i].year + "</p>";
                break;
        }
    }

    cdSammlungSammeln += artist + titel + "<ul>" + lieder + "</ul>" +  year + "</div>";
}

cdsammlungAusgabe.innerHTML = cdSammlungSammeln;
