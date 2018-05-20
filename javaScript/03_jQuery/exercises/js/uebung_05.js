(function (window, document, $) {
    "use strict";
    $(function () {
        /* ////////////////////////////////////////////////////
        1. Click-Event - Listenpunkte verschieben
        Alle Hyperlinks "Verschieben" mit einem click-Handler versehen der es ermöglicht die Links von einer
        in die andere Liste zu verschieben. Dies soll in beide Richtungen funktionieren, 
        ein von ul#liste_oben nach ul#liste_unten verschobener link soll auch wieder 
        zurück geschoben werden können. Denken Sie daran das Attribute class nach dem 
        verschieben anzupassen. 
        */ ////////////////////////////////////////////////////

        var $liste = $("ul[id^=liste]").on("click", moveIt);
        var $liste = $("ul[id^=liste]").on("click", bearbeiteIt);


        /* ////////////////////////////////////////////////////
         2. Click - Event - Listenpunkt bearbeiten
        div#bearbeiten soll nicht angezeigt werden.Verstecken Sie das Element beim
        laden der Seite.Wird der Hyperlink "Bearbeiten" an einem  Listenpunkt angeklickt wird der
        Textknoten des Listenpunktes zum bearbeiten ausgelsen.
        Schreiben Sie den ausgelesenen Textknoten des Listenpunkts in das Inputfeld#eintrag.
        Der Nutzer hat jetzt die Möglichkeit den Listeneintrag zu bearbeiten / ändern.
        Wird auf "Änderung speichern" gedrückt, wird der Listenpunkt auf den neuen Wert
        gesetzt und das Feld div#bearbeiten soll wieder versteckt werden. 
        */ ////////////////////////////////////////////////////


        var $bearbeiten = $("#bearbeiten");
        $bearbeiten.detach();
        function bearbeiteIt(e) {
            e.preventDefault();
            if (e.target.textContent == 'Bearbeiten') {

                var $textBearbeiten;

                $bearbeiten.insertAfter($("#liste_unten").next());

                var $eintrag = $("#eintrag");
                $textBearbeiten = $(e.target).parent().contents().eq(-1);
                $eintrag.val($textBearbeiten.text().trim());

                $bearbeiten.on("submit", function (e) {
                var $target = $(e.target);
                var geaendert = $target.find("input[id='eintrag']").val();

                $textBearbeiten.replaceWith("&nbsp;" + geaendert);
                $bearbeiten.detach();
                });
            } // Ende if e.target === Bearbeiten ////////////////
        }
        /*  ////////////////////////////////////////////////////
        3. Neue Listenpunkte in obere oder untere Liste hinzufügen
        Ein neuer Listenpunkt in der gewünschten Liste wird mit Klassenattribut wird erzeugt.
            Button "Oben eintragen" - Inputfeldauslesen und den Inhalt als Listenpunkt mit
        der Klasse oben in ul#liste_oben einfügen

        Button "Unten eintragen" - Inputfeldauslesen und den Inhalt als Listenpunkt
        mit der Klasse oben in ul#liste_unten einfügen

        Jeder neue Listenpunkt soll ebenfalls mit einem Eventhandler versehen werden,
            der das bearbeiten ermöglicht.
        */ ////////////////////////////////////////////////////

        var $oben_eintragen = $("#oben_eintragen");
        // var $form = $("#neu form");
        $oben_eintragen.on("click", function (e) {
            e.preventDefault();
            var neuerEintrag = $("#neuerEintrag").val().trim();
            var $clone = $("#liste_oben").children().last().clone();
            $clone.contents().eq(-1).replaceWith("&nbsp;" + neuerEintrag);
            $("#liste_oben").children().last().after($clone);
            $("#neuerEintrag").val("");
        })

        var $unten_eintragen = $("#unten_eintragen");
        $unten_eintragen.on("click", function (e) {
            e.preventDefault();
            var neuerEintrag = $("#neuerEintrag").val().trim();
            var $clone = $("#liste_unten").children().last().clone();
            $clone.contents().eq(-1).replaceWith("&nbsp;" + neuerEintrag);
            $("#liste_unten").children().last().after($clone);
            $("#neuerEintrag").val("");
        })
    }); // Ende window onload


    ///////////////////////////////////////////////////////
    // Funktionen
    ///////////////////////////////////////////////////////

    // aufgabe 1: Listenpunkte verschieben ///////////////
    function moveIt($element) {
        $element.preventDefault();
        var $target = $($element.target);
        var $unten = $("#liste_unten");
        var $oben = $("#liste_oben");

        if ($target.text() === "Verschieben") {
            // console.log($target.parents("ul").attr("id"))

            if ($target.parents("ul").attr("id") == "liste_oben") {
                // alert()
                $target.parent().removeClass().addClass("unten").appendTo($unten);
            } else if ($target.parents("ul").attr("id") == "liste_unten") {
                // alert()
                $target.parent().removeClass().addClass("oben").appendTo($oben);
            }
        }
    } // Ende function moveIt //////////////////////////


    // aufgabe 2: Listenpunkte verschieben ///////////////

}(window, document, jQuery));