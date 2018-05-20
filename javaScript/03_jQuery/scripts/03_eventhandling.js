(function (window, document, $) {
    "use strict";
    $(function () {

        // #################################################################################
        // Native Eventlistener https://www.mediaevent.de/javascript/events.html
        // #################################################################################

        // function showInfo(e){
        //     e.preventDefault();
        //     console.log(e);
        //     // this.removeEventListener("click", showInfo);
        // }

        // var lesson1_a = document.getElementById("lesson-1").getElementsByTagName("a");
        // for (var i = 0; i < lesson1_a.length; i++) {
        //     lesson1_a[i].addEventListener("click",showInfo);            
        // }


        // #################################################################################
        // jQuery Eventhandling ohne Delegation
        // #################################################################################
        
        $("#lesson-1")
            .find("a")
            .on("click", function (e) {
                e.preventDefault();
                console.log(e);
            });

        //Eventhandler entfernen
        $("#lesson-1").find("a").off("click");

        // #################################################################################
        // jQuery Eventhandling mit Delegation
        // #################################################################################
        
        $("#lesson-1")
            .on("click", "a", function (e) {
                e.preventDefault();
                console.log(e);
            });

        // #################################################################################
        // Natives JS für Eventdelegation
        // #################################################################################
        
        // document.getElementById("lesson-1").addEventListener("click", function (e) {
        //     e.preventDefault();
        //     if (e.target.nodeName === "A") {

        //     }
        // });


        //Eventhandler entfernen
        $("#lesson-1").find("a").off("click");


        
        function showInfo(e){
            e.preventDefault();
            console.log(e);
            // this.removeEventListener("click", showInfo);
        }   

        $("#lesson-1").on("click","a", showInfo);

        // Plain-Object {}
        $("header")
        .find("h1")
        .text("KLICK MICH")
        .on({
            mouseenter : function(){
                console.log("Maus hat sich in die H1 bewegt");
            },
            mouseleave : function(){
                console.log("Maus hat die H1 verlassen");
            },
            click : function(){
                console.log("Maus hat in die H1 geklickt");
            }
        });


        // STRG + #
        /* STRG + SHIFT # */

    });
}(window, document, jQuery));