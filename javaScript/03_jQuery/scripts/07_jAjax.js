(function (window, document, $) {
    "use strict";
    $(function () {
        /* 
        Kapitel 4.14.1 bis 4.14.5 Ajax & JSON  
        
        Prüfung 2 Aufbau Aufgabe 1-3  mit jQuery lösen.        
        */

        $.ajax();

        $.ajaxSetup( {
            url : "adressen.php",
            success : function() {
                $(this).addClass("fertig");
            },
            context  : document.body,
            type : "POST"
        })
    });
}(window, document, jQuery));

