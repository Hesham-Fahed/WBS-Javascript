(function (window, document, $) {
    "use strict";
    $(document).ajaxError(function (event, xhr, settings, error) {
        console.log(error);
    });

    $(function () {
        $("#auswahl")
            .find("a")
            .on("click", function (e) {
                e.preventDefault();
                var deck = $(this).parent().find("span").text();
                $.getJSON("lib/data/aufgabe3_data.json", function (data) {
                    var obj;
                    for (var key in data) {
                        obj = data[key];
                        if (obj.Deckname === deck) {
                            $("#right")
                                .empty()
                                .append('<h2>' + obj.Deckname + '</h2><img src="lib/img/magic/deck_ansicht/' + obj.Bild.src + '" alt="' + obj.Bild.alt + '" title="' + obj.Bild.title + '"><h3>Karten:</h3><ul><li>'+obj.Karten.join('</li><li>') +'</li></ul><p>Kaufen <a href="'+obj.Link+'">'+obj.Deckname+ '</a></p>');
                        }
                    }
                });
            });
    });
}(window, document, jQuery));


/* var html ='<h2>' + obj.Deckname + '</h2>';
html += '<img src="lib/img/magic/deck_ansicht/' + obj.Bild.src + '" alt="' + obj.Bild.alt + '" title="' + obj.Bild.title + '">';
html *= '<h3>Karten:</h3>';
html += '<ul><li>'+obj.Karten.join('</li><li>') +'</li></ul>';
html += '<p>Kaufen <a href="'+obj.Link+'">'+obj.Deckname+ '</a></p>'; */

/*var deck = this.parentElement.getElementsByTagName("span")[0].textContent;*/