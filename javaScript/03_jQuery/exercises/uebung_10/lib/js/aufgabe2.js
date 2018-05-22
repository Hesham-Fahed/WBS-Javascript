/* Globale Ajax Errorhandler
Fehler in aufgabe1_data.json z.B. durch Kommentar am Ende erzeugen. */
$(document).ajaxError(function (event, xhr, settings, error) {
    console.log(error);
});

/* jQuery getJSON */
(function (window, document, $) {
    "use strict";
    $(function () {
        $("#preview")
            .find("img")
            .on("click", function (e) {
                $.getJSON("lib/data/aufgabe2_data.json", function (data) {
                    var file = e.target.src; //$(e.target).attr("src");
                    file = file.substring(file.lastIndexOf("/") + 1);

                    /* Alternativ: */
                    // file = e.target.alt + ".jpg";
                    for (var key in data) {
                        if (data[key][5] === file) {
                            $("#infotext")
                                .empty()
                                .append(
                                    '<img src="lib/img/magic/preview/' + data[key][5] + '" alt="' + data[key][5].slice(0, -4) + '"><ul><li><h2>'+key+'</h2></li><li>' + data[key].slice(0, 5).join('</li><li>') + '</li><li>' +'<input type="text" value="1"><button type="button">In den Warenkorb</button></ul>'
                                );
                        }
                    }



                });
            });


    });
}(window, document, jQuery));



/* 
//Alternativ index des li in der ul stimmt mit index in data überein
// Externe Datei : [[],[],[],[]]
var index = $("#preview img").index(e.target);
console.log(index);
console.log(data[index]);

*/