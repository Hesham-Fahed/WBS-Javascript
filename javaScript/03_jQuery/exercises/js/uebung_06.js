(function (window, document, $) {
    "use strict";
    $(function () {

        var settings = {
            debug: true,
            errorElement: "label",
            errorClass: "error",
            validClass: "valid",

            errorPlacement : function($error, $element) {
                if($element.attr("name") === "geschlecht") {
                    $element.parents("div").append($error);
                } 
                else {
                    $error.insertAfter($element);
                }
                

            }, // ende errorPlacement

            rules: {
                geschlecht : {
                    required: true,
                },
                vorname : {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                nachname : {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                ["e-mail"] : {
                    required: true,
                    email : true, 
                    minlength: 2
                },
                plz : {
                    required: true

                },
                sektion : {
                    required : true
                },
                promocode : {
                    minlength : 5
                },
                agb : {
                    required : true
                }
            }, // ende rules
            // highlight: function(element,errorClass, validClass) {
            //     //$(element).parent().addClass(errorClass);
            //      $(element).addClass(errorClass); // Default
            // },
            // unhighlight: function(element,errorClass, validClass) {
            //     //$(element).parent().removeClass(errorClass).addClass(validClass);
            //      $(element).removeClass(errorClass).addClass(validClass); // Default
            // },
            messages: {
                geschlecht : {
                    required : "Bitte wählen!"
                },
                vorname : {
                    required : "Bitte Vornamen eingeben",
                    letterswithbasicpunc : "Nur Buchstaben und Interpunktion erlaubt",
                    minlength : "2 Zeichen!"
                },
                nachname : {
                    required : "Bitte nachnamen eingeben",
                    letterswithbasicpunc : "Nur Buchstaben und Interpunktion erlaubt",
                    minlength : "2 Zeichen!"
                },
                ["e-mail"] : {
                    required : "Bitte eine richte Adresse eingeben",
                    email : "Nur Buchstaben und Interpunktion erlaubt",
                    minlength : "2 Zeichen!"
                },
                plz : {
                    required : "Bitte angeben"
                },
                sektion : {
                    required : "!"
                },
                promocode : {
                    minlength : "5 Zeichen!"
                },
                agb : {
                    required : "Anklicken"
                }
            }


        } // ende settings

        var formvalidate = {
            init: function () {
                console.log("Validate aktiv");
                $("form")
                    .eq(0)
                    .validate(settings);
            }
        };

        formvalidate.init();

    }
    ); // ende window-factory-function

}(window, document, jQuery));

