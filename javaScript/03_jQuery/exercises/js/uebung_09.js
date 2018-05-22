
/* 
1. Aufgabe Erstellen Sie aus den Rohdaten eine XML-Datei (speichern in data) cd-sammlung.xml

1.1 Erstellen Sie einen XML-Doctype siehe vorhandene XML-Dateien
1.2 Legen Sie ein Rootelement <collection> an
1.3 Jede CD wird einem Element <cd> abgelegt
1.4 Jede CD hat ein Erscheinungsjahr, muss als Attribut in CD angelegt werden
1.5 Element cd hat folgende Kinder
    artist      The Beatles
    title       Help!
    songlist
        song    Help!
        song    The Night Before
        song    You've Got To Hide Your Love Away


TIPP: Validieren Sie die XML-Datei
Möglichkeit
1: Im Browser (einfach öffnen)
2: http://www.xmlvalidation.com/


2. Wird die Seite geladen sollen eine Ajax-Anfrage die Datei aus Aufgabe 1 laden. Geben Sie den Inhalt im div#ausgabe1 wie folgt aus:

HTML-Vorlage
<div class="cd">
    <h2 class="artist">artist</h2>
    <h3 class="title">title</h3>
    <ul class="songlist">
        <li>song</li>
        <li>song</li>
    </ul>
    <p class="jahr">Erscheinungsjahr: xxxx</p>
</div>
<div class="cd">
    <h2 class="artist">artist</h2>
    <h3 class="title">title</h3>
    <ul class="songlist">
        <li>song</li>
        <li>song</li>
    </ul>
    <p class="jahr">Erscheinungsjahr: xxxx</p>
</div>
*/

(function (window, document, $) {
    "use strict";
    $(function () {



        $.get("data/cd-sammlung.xml", function (data) {
            var $ausgabe = $("#ausgabe2")
            var $daten = $(data);
            var html;
            var $cds = $daten.find("cd");

            for (var i = 0; i < $cds.length; i++) {
                html = "";
                html += "<div class='cd'>";
                html += "<h2 class='artist'>" + $($cds[i]).find("artist").text() + "</h2>";
                html += "<h3 class='title'>" + $($cds[i]).find("title").text() + "</h3>";
                html += "<ul class='songlist'>";

                var $songs = $($cds[i]).find(".songlist li");
                for (var j = 0; j < $songs.length; j++) {
                    html += "<li>" + $($songs[j]).text() + "</li>";
                }
                html += "</ul>";
                html += "<p class='jahr'>Erscheinungsjahr: " + $($cds[i]).find("jahr").text() + "</p>";

                html += "<div>"; // class=cd schließen

                $ausgabe.append(html);

            }



        }, "xml");

    }
    );

}(window, document, jQuery));




/*
3.1 Erweiterung div#ausgabe2:
Beim laden soll nur noch der Artist und CD-Name in einer ungeordneten Liste ausgegeben werden.

<ul>
    <li><a href="#">The Beatles - Help!</a></li>
    ...
</ul>

3.2 Erweiterung div#ausgabe3:
Die erzeugten Link erhalten danach einen Eventhandler click.
Erst wenn einer der Links angeklickt wird, sollen alle Information
zu dieser CD div#ausgabe angezeigt werden.


//////////////////////////////////////////////////////////////////
Rohdaten für Aufgabe 1:

Jahr 1965
The Beatles
Help!
Help!
The Night Before
You've Got To Hide Your Love Away
I Need You
Another Girl
You're Gonna Lose That Girl
Ticket to Ride
Act Naturally
It's Only Love
You Like Me Too Much
Tell Me What You See
I've Just Seen a Face
Yesterday
Dizzy Miss Lizzy

Jahr 1994
The Rolling Stones
Voodoo Lounge
Love is Strong
You Got Me Rocking
Sparks Will Fly
The Worst
New Faces
Moon Is Up
Out Of Tears
I Go Wild
Brand New Car
Sweethearts Together
Suck On The Jugular
Blinded By Rainbows
Baby Break It Down
Thru And Thru
Mean Disposition


*/