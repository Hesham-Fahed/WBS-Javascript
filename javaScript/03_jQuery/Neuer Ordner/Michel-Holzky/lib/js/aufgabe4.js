(function (window, document, $) {
    "use strict";
    $(function () {

        var settings = {
            debug: false, 
            errorElement: "div",
            errorClass: "error",
            validClass: "ok",
            // errorLabelContainer : "#fehlerliste",
            errorPlacement: function ($error, $element) {
                $element.parent().append($error);
            }, // Ende errorPlacement
            highlight: function (element, errorClass, validClass) {
                var $element = $(element);
                $element.addClass("errorInput")/* .attr("aria-required", "true") */;
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parent().find("div").detach();
                $(element).removeClass("errorInput").addClass("ok");

            },
            submitHandler: function (form) {
                alert($(form).serialize());
            },
            rules: { 
                vorname: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                nachname: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                mail: {
                    required: true,
                    email: true,
                },
                anzahl: {
                    required: true,
                    digits: true,
                },
                agb: {
                    required: true,
                }
            },
            messages: {
                vorname: {
                    required: "Vorname ist ein Pflichtfeld",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: "Bitte mindestens 2 Zeichen eingeben"
                },
                nachname: {
                    required: "Nachname ist ein Pflichtfeld",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: "Bitte mindestens 2 Zeichen eingeben"
                },
                mail: {
                    required: "Bitte E-Mail-Adresse angeben",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: "Bitte mindestens 2 Zeichen eingeben"
                },
                anzahl: {
                    required: "Bitte geben Sie die Anzahl ein",
                    digits: "bitte numerisch",
                },
                agb: {
                    required: "Muss bestätigt werden"
                }
            }
        }; // ende var settings

        var formvalidate = {
            init: function () {
                $("form")
                    .eq(0)
                    .validate(settings);
            }
        };

        formvalidate.init();

    }) // ende $(function ()) ////////////////////////////////

}(window, document, jQuery));

