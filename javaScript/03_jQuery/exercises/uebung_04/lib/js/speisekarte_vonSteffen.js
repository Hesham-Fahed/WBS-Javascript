(function (window, document, $) {
    "use strict";
    $(function () {
        var v = false; 
        var $f, $m;

        $("#vegetarisch_an")
        .on("click", function(e){
            e.preventDefault();
            $f = $(".fisch").parents("li").detach();

            $(".hamburger")
            .replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
            
            $(".portobello").parents("li").addClass("blatt_symbol");

            $m = $(".fleisch").after("<li class='tofu'><em>Tofu</em></li>").detach();
            $(".tofu").parents("li").addClass("blatt_symbol");

            v = true;
        
        }); // ----- vegetarisch_an button click


        $("#zuruecksetzen")
        .on("click", function(e){
            e.preventDefault();
            if(v === true) {
                $(".blatt_symbol").removeClass("blatt_symbol");
                $(".portobello").replaceWith("<li class='hamburger'>Hamburger</li>");
                $(".vorspeisen").find("li").first().before($f);

                var $tofu = $(".tofu");
                for(var i = 0; i< $tofu.length; i++) {
                    $tofu.eq(i).after($m[i]);
                }      
                $tofu.remove();          
                v = false;
            }

        }); // ----- zuruecksetzen button click



    });
}(window, document, jQuery));


/* function each(obj,fn) {
    var fnX;
    for(var i = 0; i < obj.length; i++) {
        fnX.bind(obj[i]);
        fnX(i,obj[i]);
    }
} */