/* ////////////////////////////////////////////////////////////////////////// 

Wir hätten gerne einen »Für Vegetarier«-Button. Wenn er angeklickt wird, sollen
die fleischlichen Bestandteile in der Web-Speisekarte automatisch gegen vegetarische
Entsprechungen ausgetauscht werden.

Die Ersetzungen sollen so funktionieren:
— Für Fischgerichte gibt es keinen vegetarischen Ersatz. Die müssen also entfernt werden.
— Als vegetarische Alternative für Hamburger bieten wir Portobello-Zuchtchampignons an.
— Für alle unsere Fleisch- und Eiergerichte außer Hackfleischgerichten bieten wir Tofu als vegetarische Alternative an.
— Wir benötigen einen Button, der das Menü wieder in seinen Originalzustand versetzt.
P.S. Es wäre schön, wenn außerdem ein Blatt-Symbol neben den vegetarischen
Alternativgerichten angezeigt werden könnte.

Schauen Sie sich die HTML und CSS Dateien an bevor Sie etwas programmieren! 

*/ //////////////////////////////////////////////////////////////////////////


(function (window, document, $) {
    "use strict";
    $(function () {

        var $vegetarisch_an = $("#vegetarisch_an");
        $vegetarisch_an.on("click", veggikarte);

        var $zuruecksetzen = $("#zuruecksetzen");
        $zuruecksetzen.on("click", normalos);

    });

    ////////////////////////////////////////////////
    // Funktionen
    ////////////////////////////////////////////////

    function veggikarte(e) {
        $(".fisch").parent().parent().hide();

        var $hamburger = $(".hamburger");

        $hamburger
            .each(function (index, element) {
                // weist jedem Element einzeln ein Attribut zu und befüllt dieses 
                // mit dem ursprünglichen Text
                $(this).attr("data-zutat", $(this).text());
            })
            .text("Portobello-Zuchtchampignons")
            .wrap("<em></em")
            .parent()
            .parent()
            .parent()
            .addClass("blatt_symbol");

        var $fleisch = $(".fleisch");
        $fleisch
            .each(function (index, element) {
                $(this).attr("data-zutat", $(this).text())
            })
            .text("Tofu")
            .parent()
            .parent()
            .addClass("blatt_symbol");
    } // function veggikarte

    function normalos() {
        $(".fisch").parent().parent().show();

        $(".hamburger")
            .each(function (index, element) {
                // liest den zwischengespeicherten Wert aus dem Attribut
                // und schreibt diesen wieder zurück ins innerHTML
                $(this).text($(this).attr("data-zutat"))
            })
            .parent()
            .parent()
            .removeClass("blatt_symbol");

        $(".fleisch")
            .each(function (index, element) {
                $(this).text($(this).attr("data-zutat"))
            })
            .parent()
            .parent()
            .removeClass("blatt_symbol");
    } // function normalos


}(window, document, jQuery));