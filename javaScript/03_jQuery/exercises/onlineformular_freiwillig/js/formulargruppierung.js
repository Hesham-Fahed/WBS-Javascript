(function (window, document, $) {
    "use strict";
    $(function () {

        var settings = {
            debug: true,
            errorElement: "p",
            errorClass: "error",
            validClass: "valid",
            errorPlacement: function ($error, $element) {
                $(".errorMsg").append($error);
            }, // Ende errorPlacement
            highlight: function (element, errorClass, validClass) {
                $(".errorMsg").css("display", "block");
                //$(element).parent().addClass(errorClass);
                // $(".personalData").addClass(errorClass);
                $(element).addClass(errorClass); // Default
            },
            unhighlight: function (element, errorClass, validClass) {
                //////////////////////////////
                // invalid, success als lösung
                //////////////////////////////


                // $(".errorMsg").css("display", "none");
                //$(element).parent().removeClass(errorClass).addClass(validClass);
                // $(".personalData").removeClass(errorClass).addClass(validClass);
                $(element).removeClass(errorClass).addClass(validClass); // Default
            },
            rules: {
                firstname: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                lastname: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                street: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                number: {
                    required: true,
                    minlength: 1
                },
                zipCode: {
                    required: true,
                    // numbers: (/^\d{5}$/),
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 2
                },
                creditCard: {
                    required: true,
                },
                creditCardNumber: {
                    required: true,
                    creditcard: true
                },
                creditCardHolder: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                creditCardHolder: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                creditCardValidityDate: {
                    required: true,
                },
                businessConditions: {
                    required: true,
                },
            }, // ende rules /////////////////////////////
            messages: {
                firstname: {
                    required: "Bitte geben sie Ihren Namen an",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: 2
                },
                lastname: {
                    required: "Bitte geben sie Ihren Namen an",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: 2
                },
                street: {
                    required: "Wo soll das Ding hingehen?",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: 5
                },
                street: {
                    required: "Wo soll das Ding hingehen?",
                    minlength: "mindestens 1 Nummer. Hausnummer"
                },
                zipCode: {
                    required: "angeben!",
                    minlength: 5
                },
                email: {
                    required: "Email angeben!",
                    email: "Wenn, schon dann die richtige Mail-Adresse"
                },
                creditCard: {
                    required: "Bitte werfen Sie eine Münze ein."
                },
                creditCardNumber: {
                    required: "Bitte werfen Sie eine Münze ein.",
                    creditcard: "Kredikartennummer richtig machen."
                },
                creditCardHolder: {
                    required: "Bitte geben sie Ihren Namen an",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: 2
                },
                creditCardValidityDate: {
                    required: "bitte Gültigkeit angeben",
                },
                businessConditions: {
                    required: "Bitte AGB bestätigen",
                },
            } // ende messages //////////////////
        };




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
    );

}(window, document, jQuery));