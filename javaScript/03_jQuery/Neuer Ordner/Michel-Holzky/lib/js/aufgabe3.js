(function (window, document, $) {
    "use strict";
    $(function () {
        
        var $hier = $("#hier");
        
        $.ajax({
            url: "lib/data/newsthemen.json",
            dataType: "json",
            success: function(data) {
                var zufallsZahl = rand(0, data.length-1);
                var html = "";
                var artikel = data[zufallsZahl];
                $hier.find("h1").empty().append(artikel.h1);
                $hier.find("p").eq(0).empty().append(artikel.p0);
                $hier.find("p").eq(1).contents().eq(0).replaceWith(artikel.p1);
                $hier.find("a").eq(0).attr("title", artikel.atitle);
            }
        })
        


    }) // ende $(function ()) ////////////////////////////////
    .ajaxError(function (event, xhr, settings, error) {
        alert(error);
    });

}(window, document, jQuery));

