(function (window, document, $) {
    "use strict";
    $(function () {
        var $p = $("p");
        console.log($p);
        // http://overapi.com/jquery -> Traversing
        console.log($p.eq(0));
        
        
        
        console.log($(".box"));


        //Methoden-Chaninig (Verketten)
        $(".box")
        .eq(0)
        .css("border","5px solid #000")
        .end()
        .eq(3)
        .css("border","5px solid #00f")

        
        //Seite 72 Arten von jQuery-Methoden

        // ##### Transparente Methoden geben die Eingabe Sammlung zurück #####
        //Rückgabe: Collection wie sie vorher gewesen ist
        $(".box").html("0"); //html schreibend ist transparent

        // ##### Destruktive Methoden geben eine neue Sammlung zurück #####
        //Rückgabe: jQuery-Objekt, entspricht nicht mehr der Eingabe Sammlung
        $(".box").eq(0);

        // ##### Terminierende Methoden geben keine Sammlung mehr zurück #####
        //Rückgabe: zahl,string, array, object, boolean
        console.log("Puh: ", $(".box").html()); //html lesend ist terminierend


        



    });
}(window, document, jQuery));





/* 
// console.log(document.querySelector(".box"));
        // console.log(document.querySelectorAll(".box"));



        function $$(sel) {
            var temp = {};
            var elements = document.querySelectorAll(sel);
            for (var i = 0; i < elements.length; i++) {
                temp[i] = elements[i];                
            }
            temp.length = elements.length;

            temp.eq = function(x){
                var b = {
                    "0" : this[x],
                    length : 1
                };
                return b; 
            }

            return temp;
        }

        console.log($$(".box"));
        console.log($$(".box").eq(0));
        console.log($$(".box").eq(1));
        console.log($$(".box").eq(2));
        console.log($$("#lesson-1"));

*/