(function (window, document, $) {
    "use strict";
    $(function () {

        //////////////////////////////////
        // Funktionen 
        //////////////////////////////////

        function zufallszahl(dataLength) {
            return Math.floor(Math.random() * dataLength);
        }


        /////////////////////////////////
        // Aufgaben
        /////////////////////////////////

        var $keyVisual = $("#key-visual");

        $.ajax({
            url: "lib/data/bilder.json",
            dataType: "json",
            success: function(data) {
                var dataLength = data.length;
                var zufallsBild = data[zufallszahl(dataLength)];

                $keyVisual.attr("src", zufallsBild.link).attr("alt", zufallsBild.alt);
            }
            
        })

    }) // ende $(function ()) ////////////////////////////////
    .ajaxError(function (event, xhr, settings, error) {
        alert(error);
    });

}(window, document, jQuery));

