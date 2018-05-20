"use strict";
// 1.1
var person = {
    vorname: "Max",
    nachname: "Mustermann",
    hobbys: ["Wandern", "Lesen", "Fallschirmspringen"]
};
var ausgabe = document.getElementById("ausgabe");
var html = "";
// 1.2
html += "<h3>DOT-Notation</h3><ul>";
html += "<li>person.vorname //=> " + person.vorname + "</li>";
html += "<li>person.nachname //=> " + person.nachname + "</li>";
html += "<li>person.hobbys //=> " + person.hobbys + "</li>";
html += "</ul>";

html += "<h3>Array-Notation</h3><ul>";
html += "<li>person[\"vorname\"] //=> " + person["vorname"] + "</li>";
html += "<li>person[\"nachname\"] //=> " + person["nachname"] + "</li>";
html += "<li>person[\"hobbys\"] //=> " + person["hobbys"] + "</li>";
html += "</ul>";

// 1.3
html += "<h3>DOT-Notation mit for-in-Schleife</h3><ul>";
for (var key in person) {
    html += "<li>person[key] //=> person[\"" + key + "\"] //=> " + person[key] + "</li>";
}
html += "</ul>";
/******************************************************************************************
 * Bitte verwendet die for-in Schleife und nicht Object.keys mit einer for-Schleife!
 *****************************************************************************************/
html += "<h3>Object.keys(person) mit for-Schleife</h3><ul>";
var keys = Object.keys(person);
for (var i = 0; i < keys.length; i++) {
    html += "<li>person[keys[" + i + "]] //=> person[\"" + keys[i] + "\"] //=> " + person[keys[i]] + "</li>";
}


//2
html += "<h3>Zusatzinfo</h3><ul>";
html += "<li>person //=> " + person + "</li>";
html += "<li>String(person) //=> " + String(person) + "</li>";
html += "<li>JSON.stringify(person) //=> " + JSON.stringify(person) + "</li>";
html += "</ul>";

ausgabe.innerHTML = html;

console.log(data);
console.log(data.timeline);
console.log(data.timeline.headline);
console.log(data.timeline.text);

console.log(data.date[0]);
console.log(data.date[1]);
console.log(data.date[2]);

console.log(data.date[0].startdatum);
console.log(data.date[0].headline);
console.log(data.date[0].text);

console.log(data.date[1].startdatum);
console.log(data.date[1].headline);
console.log(data.date[1].text);

console.log(data.date[2].startdatum);
console.log(data.date[2].headline);
console.log(data.date[2].text);

var timeline = document.getElementById("timeline");
// Viel zu viel Code
// Nicht modular, jeder neue Eintrag erfordert erweiterung des Codes

/* var s = "<h2>" + data.timeline.headline + "</h2><p>" + data.timeline.text + "</p>";
s += "<ul>";
s += "<li><ul>";
s += "<li>" + data.date[0].headline + "</li>";
s += "<li>" + data.date[0].startdatum + "</li>";
s += "<li>" + data.date[0].text + "</li>";
s += "</ul></li>";

s += "<li><ul>";
s += "<li>" + data.date[1].headline + "</li>";
s += "<li>" + data.date[1].startdatum + "</li>";
s += "<li>" + data.date[1].text + "</li>";
s += "</ul></li>";

s += "<li><ul>";
s += "<li>" + data.date[2].headline + "</li>";
s += "<li>" + data.date[2].startdatum + "</li>";
s += "<li>" + data.date[2].text + "</li>";
s += "</ul></li>";
s += "</ul>"; */


//Mit for-Schleife wird es kürzer:
var s = "<h2>" + data.timeline.headline + "</h2><p>" + data.timeline.text + "</p>";
s += "<ul>";
for (var i = 0; i < data.date.length; i++) {
    s += "<li><ul>";
    s += "<li>" + data.date[i].headline + "</li>";
    s += "<li>" + data.date[i].startdatum + "</li>";
    s += "<li>" + data.date[i].text + "</li>";
    s += "</ul></li>";
}
s += "</ul>";

//for-in in der for-Schleife (nur wenn Reihenfolge der Ausgabe nicht wichtig ist)
/* var s = "<h2>" + data.timeline.headline + "</h2><p>" + data.timeline.text + "</p>";
s += "<ul>";
for (var i = 0; i < data.date.length; i++) {
    s += "<li><ul>";
    for(var key in data.date[i]) {
        s += "<li>" + data.date[i][key] + "</li>";  
    }
    s += "</ul></li>";
}
s += "</ul>"; */
timeline.innerHTML = s;



// 3

console.log(collection);
console.log(collection.cd);
console.log(collection.cd[0]);
console.log(collection.cd[0].year);
console.log(collection.cd[0].artist);
console.log(collection.cd[1]);

var cdsammlung = document.getElementById("cdsammlung");
var out = "";
var cds = collection.cd;
var count = cds.length;
var cd;
//durch count wird die Anzahl der Elemente nur einmalig ausgelesen und 
//bei jeder Prüfung der Bedinung
for(var j = 0; j < count/* collection.cd.length */; j++) {
    cd = cds[j]; //besser Lesbarkeit
    out += "<div class='cd'>";
    out += "<h2 class='artist'>" + cd.artist + "</h2>";
    out += "<h3 class='title'>" + cd.title + "</h3>";
    out += "<ul class='songlist'><li>" + cd.songlist.song.join("</li><li>") + "</li></ul>";
    out += "<p class='jahr'>Erscheinungsjahr" + cd.year + "</p>";
    out += "</div>";
}

cdsammlung.innerHTML = out;


/* 
1. Einfaches Objekt
1.1. Legen Sie ein Objekt person an, das Ihre persönlichen Daten enthält.
Mindestens vorname, nachname und ein Array hobbys mit 3 Einträgen.

2. Geben Sie das Objekt aus Übung 1 ohne Schleife aus.
Geben Sie das Objekt in die Konsole aus.
Geben Sie alle Eigenschaften einzeln in die Konsole aus.
Geben Sie das Objekt als ungeordnete Liste im HTML-Dokument aus, legen Sie dazu vorher einen div#ausgabe in der HTML-Datei an.

1.3. Geben Sie das Objekt aus Übung 1 mit Schleife(n) aus. Geht bei einem Objekt eine for-schleife? Bzw. die for-schleife die wir bereits kennen.

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