(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {

        var datei = "../../_lib/data/cd_sammlung.xml";

        // ::::::::::::::::::::::::- Anfang Aufgabe 2 -::::::::::::::::::::::::::
        ajaxGetXML(datei, function (resp) {
            var cd = resp.getElementsByTagName("cd");
            var ausgabe1 = document.getElementById("ausgabe1");
            let out = [];

            for (var i = 0; i < cd.length; i++) {
                out.push("<div class='cd'>");

                var artist = cd[i].getElementsByTagName("artist")[0].textContent;
                out.push("<h2>", artist, "</h2>");

                var title = cd[i].getElementsByTagName("title")[0].textContent;
                out.push("<h3>", title, "</h3>");

                var songlist = cd[i].getElementsByTagName("songlist")[0];
                var song = cd[i].getElementsByTagName("song");
                out.push("<ul class=", songlist.nodeName, ">");
                for (let i = 0; i < song.length; i++) {
                    out.push("<li>", song[i].textContent, "</li>");
                }
                out.push("</ul>");

                var jahr = cd[i].getElementsByTagName("year")[0];
                out.push("<p class='", jahr.nodeName, "'>", jahr.textContent, "</p></div>");

                ausgabe1.innerHTML = out.join("");
            }
        }); // ::::::::::::::::::::::::- ende Aufgabe 2 -::::::::::::::::::::::::::

        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////

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
        */

        // ::::::::::::::::::::::::- Anfang Aufgabe 3 -::::::::::::::::::::::::::
        ajaxGetXML(datei, function (resp) {
            var ausgabe2 = document.getElementById("ausgabe2");
            var cd = resp.getElementsByTagName("cd");

            let out = [];

            for (var i = 0; i < cd.length; i++) {
                out.push("<ul>")
                var artist = cd[i].getElementsByTagName("artist")[0].textContent;
                var title = cd[i].getElementsByTagName("title")[0].textContent;

                out.push("<li><a href='#'>", artist, "-", title, "</a></li></ul>");
                ausgabe2.innerHTML = out.join("");

            }
        }); // ::::::::::::- ende ajaxRequest -:::::::::::

        ausgabe2.addEventListener("click", addRest);



        /////////////////////
        function addRest(e) {
            e.preventDefault();

            if (e.target.nodeName === "A") {
                ajaxGetXML(datei, function (resp) {
                    getIndexInCollection(e, resp);
                }); // :::::::::::- ende ajaxGetXML -:::::::::::
            } // :::::::::::- ende (e.target.nodeName === "A") -:::::::::::
        } // :::::::::::- ende addRest -:::::::::::



        function getIndexInCollection(e, resp) {
            var cdLinks = document.getElementById("ausgabe2").getElementsByTagName("a");
            var cd = resp.getElementsByTagName("cd");
            var pos = -1;

            for (let posi = 0; posi < cdLinks.length; posi++) {
            
                // wenn eins der elemente der HTML-Collection mit e.target übereinstimmt ...
                if (cdLinks[posi] === e.target) {
                    pos = posi;
                    console.log(pos);
                } 
            } // :::::::::::- ende for-schleife -:::::::::::
            output(pos, cd);
        } // :::::::::::- ende getIndexInCollection -:::::::::::





        //////////////////////////
        function output(pos, cd) {
            var ausgabe3 = document.getElementById("ausgabe3");
            var out = [];
            out.push("<div class='cd'>");

            var artist = cd[pos].getElementsByTagName("artist")[0].innerHTML;
            out.push("<h2>", artist, "</h2>");

            var title = cd[pos].getElementsByTagName("title")[0].innerHTML;
            out.push("<h3>", title, "</h3>");

            var song = cd[pos].getElementsByTagName("song");
            var songs = []; // Speicher für HTML-Collection von song
            songs.push("<ul>");
            for (let j = 0; j < song.length; j++) {
                songs.push("<li>", song[j].innerHTML, "</li>"); //
            }
            out.push(songs.join(""), "</ul>");

            var jahr = cd[pos].getElementsByTagName("year")[0];
            out.push("<p class='", jahr.nodeName, "'>", jahr.innerHTML, "</p></div>");

            ausgabe3.innerHTML = out.join("");
        } // ::::::::::::::::::::::::- ende Aufgabe 3 -::::::::::::::::::::::::::
    }); // :::::::::::- ende window.listener -:::::::::::
}(window, document));


/* 
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
 */