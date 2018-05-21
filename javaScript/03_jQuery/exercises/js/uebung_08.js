(function (window, document, $) {
    "use strict";
    $(function () {

        $("form").eq(0).on("submit", function (e) {
            e.preventDefault();
            $.ajax({
                url : "orte_de.json",
                success: function(data) {
                    // console.log(data[0])

                    var plzData = data[0];
                    var plzEingabe = $("#plz").val();
                    var $ausgabe = $("#ausgabe");

                    for(var key in plzData) {
                        if(key.indexOf(plzEingabe) > -1) {
                            $ausgabe.append(plzData[key].orte.join(", "))
                        }
                    }
                }
            })
        })

    }
    );

}(window, document, jQuery));