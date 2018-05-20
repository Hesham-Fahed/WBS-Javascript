// Aufgabe 2
ajaxGetXML("../../_lib/data/cd_sammlung.xml", function (res) {
    alert();
    var cd = res.getElementsByTagName("cd");
    var artist = res.getElementsByTagName("artist");
    var title = res.getElementsByTagName("title");
    var songlist = res.getElementsByTagName("songlist");

    for (var i = 0; i < cd.length; i++) {
        var div_cd = document.createElement("div");
        div_cd.setAttribute("class", "cd");
        var h2_artist = document.createElement("h2");
        h2_artist.setAttribute("class", "artist");
        var artist_text = document.createTextNode(artist[i].textContent);
        var h3_title = document.createElement("h3");
        h3_title.setAttribute("class", "title");
        var title_text = document.createTextNode(title[i].textContent);
        var ul_songlist = document.createElement("ul");
        ul_songlist.setAttribute("class", "songlist");
        for (var j = 0; j < songlist[i].children.length; j++) {
            var li_song = document.createElement("li");
            var song = document.createTextNode(songlist[i].children[j].textContent);
            li_song.appendChild(song);
            ul_songlist.appendChild(li_song);
        }
        var jahr = cd[i].getAttribute("erscheinungsjahr");
        var jahr_text = document.createTextNode(jahr);
        var p = document.createElement("p");
        p.setAttribute("class", "jahr");
        p.appendChild(jahr_text);

        h3_title.appendChild(title_text);
        h2_artist.appendChild(artist_text);
        div_cd.appendChild(h2_artist);
        div_cd.appendChild(h3_title);
        div_cd.appendChild(ul_songlist);
        div_cd.appendChild(p);
        document.getElementById("ausgabe1").appendChild(div_cd);
    }
});


// Aufgabe 3.1
ajaxGetXML("../../_lib/data/cd-sammlung.xml", function (res) {
    var cd = res.getElementsByTagName("cd");
    var artist = res.getElementsByTagName("artist");
    var title = res.getElementsByTagName("title");
    var ul = document.createElement("ul");
    for (var i = 0; i < cd.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var text = document.createTextNode(artist[i].textContent + " - " + title[i].textContent);
        a.appendChild(text);
        a.setAttribute("href", "#");
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.getElementById("ausgabe2").appendChild(ul);
});
// Aufgabe 3.2
var ausgabe2 = document.getElementById("ausgabe2");
var ausgabe2_a = ausgabe2.getElementsByTagName("a");
ausgabe2.addEventListener("click", function (e) {
    e.preventDefault();
    if(e.target.nodeName === "A"){
        document.getElementById("ausgabe3").innerHTML = "";
        // console.log(e.target.firstChild.textContent);
        ajaxGetXML("../../_lib/data/cd-sammlung.xml", function (res) {
            var cd = res.getElementsByTagName("cd");
            var artist = res.getElementsByTagName("artist");
            var title = res.getElementsByTagName("title");
            var songlist = res.getElementsByTagName("songlist");
            for (var i = 0; i < ausgabe2_a.length; i++) {
                if (e.target === ausgabe2_a[i]) {
                    var div_cd = document.createElement("div");
                    div_cd.setAttribute("class", "cd");
                    var h2_artist = document.createElement("h2");
                    h2_artist.setAttribute("class", "artist");
                    var artist_text = document.createTextNode(artist[i].textContent);
                    var h3_title = document.createElement("h3");
                    h3_title.setAttribute("class", "title");
                    var title_text = document.createTextNode(title[i].textContent);
                    var ul_songlist = document.createElement("ul");
                    ul_songlist.setAttribute("class", "songlist");
                    for (var j = 0; j < songlist[i].children.length; j++) {
                        var li_song = document.createElement("li");
                        var song = document.createTextNode(songlist[i].children[j].textContent);
                        li_song.appendChild(song);
                        ul_songlist.appendChild(li_song);
                    }
                    var jahr = cd[i].getAttribute("erscheinungsjahr");
                    var jahr_text = document.createTextNode(jahr);
                    var p = document.createElement("p");
                    p.setAttribute("class", "jahr");
                    p.appendChild(jahr_text);
                    
                    h3_title.appendChild(title_text);
                    h2_artist.appendChild(artist_text);
                    div_cd.appendChild(h2_artist);
                    div_cd.appendChild(h3_title);
                    div_cd.appendChild(ul_songlist);
                    div_cd.appendChild(p);
                    document.getElementById("ausgabe3").appendChild(div_cd);
                }
            }
        });
    }
});