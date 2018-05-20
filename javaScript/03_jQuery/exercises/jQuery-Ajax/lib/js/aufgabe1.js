$(function () {

    "use strict";

    $.ajax({
        url: "lib/data/aufgabe1_data.json",
        success: function (resp) {
            var bildDaten = resp;
            console.log(bildDaten)
            changePic(bildDaten);
        }
    });
    // Erzeugt Zufallszahl aus der Anzahl der Arrays/Bilder
    function randomPic(resp) {
        return Math.floor(Math.random() * resp.length);
    }
    
    
    // ändert die Attribute anhand der in randomPic ermittelten Arrays: Array[zufall]
    var $pic = $("#bg");
    console.log($pic.attr("src"))
    
    function changePic(resp) {
        var zufall = randomPic(resp);
        var quelle = "lib/img/magic/landing_page/" + resp[zufall][0];
        $pic.attr("src", quelle);
        console.log($pic.src)

        var altAtt = resp[zufall][1];
        $pic.attr("alt", altAtt);

        var titleAtt = altAtt;
        $pic.attr("title", titleAtt);
    }

});