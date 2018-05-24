(function (window, document, $) {
    "use strict";
    $(function () {
        
        //////////////////////////////////
        // Funktionen
        //////////////////////////////////
        

        //////////////////////////////////
        // Aufgabe 2
        //////////////////////////////////


        var $links = $(".beitrag li a");
        $(".beitrag").on("click", " li a", function(e){
            e.preventDefault();
            var $artikel = $("#artikel");
            $artikel.empty();
            var index = $links.index(e.target);
            var html = "";

            $.ajax({
                url: "lib/data/artikel.json",
                dataType: "json",
                success: function(data) {

                    var $artikelText = data["a" + index];
                    
                    html += "<h2>" + $artikelText.headline + "</h2>"
                    html += "<p>" + $artikelText.fliesstext + "</p>"
                    html += "<img src='lib/" + $artikelText.src + "' alt='" + $artikelText.alt + "' height='400' width='400'>";

                    $artikel.append(html);
                } // ende success
            }) // ende $.ajax
        }) // ende on click
        
    }) // ende $(function ()) ////////////////////////////////
    .ajaxError(function (event, xhr, settings, error) {
        alert(error);
    });

}(window, document, jQuery));

