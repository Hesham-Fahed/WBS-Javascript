(function (window, document, $) {
    "use strict";
    $(function () {

        $("#ausgabe").empty();
 
        $("#einstieg").find("a")
        .click(function(e){
            e.preventDefault();
            $("#einstieg").find("a").removeClass();
            $(this).addClass("marked")

            // var clickEl = $(this).get(0);
            // $("#ausgabe").text(clickEl);
            
            
            $("#ausgabe")
            .html("Die id des geklickten links <b>"+this.id+"</b>.<br> Die Zahl <b>"+this.id.split("-")[1]+"</b><br> Der Textknoten: <b>"+this.textContent+"</b><br>Er wurde durch JavaScript mit der Klasse <b>"+this.className +"</b> versehen.");

        }) 


   /*      var $einstieg_a = 
        $("#einstieg")
        .find("a")
        .on("click", function(e){
            e.preventDefault();
            $einstieg_a.removeClass("marked");
            $(this).addClass("marked");
        });
 */
    }
    );

}(window, document, jQuery));

