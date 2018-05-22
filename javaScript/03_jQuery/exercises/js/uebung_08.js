(function (window, document, $) {
    "use strict";
    $(function () {

        $("form").eq(0).on("submit", function (e) {
            e.preventDefault();
            $.ajax({
                url: "orte_de.json",
                success: function (data) {
                    ausgabe(data);
                } // ende success
            }); // ende .ajax
        }); // ende click-Handler

        $("#plz").on("keyup", function (e) {
            e.preventDefault();
            $.ajax({
                url: "orte_de.json",
                success: function (data) {
                    console.log(data)
                    ausgabe(data);
                } // ende success
            }); // ende .ajax
        }); // ende click-Handler
    }); // ende .window


    /////////////////////////////////////
    // FUNKTIONEN
    /////////////////////////////////////

    function ausgabe(data) {
        var plzData = data[0];
        var plzEingabe = $("#plz").val();
        var $ausgabe = $("#ausgabe");
        $ausgabe.empty();
        var html = '';

        if (plzEingabe.length > 0 && plzEingabe.length < 6) {
            for (var key in plzData) {
                if (key.indexOf(plzEingabe) > -1) {
                    html = "<div class='treffer'>";
                    html += "<div class='plz'><b>PLZ: </b>" + key + "</div>";
                    html += "<div class='orte'><b>Orte: </b>" + plzData[key].orte.join(", ") + "</div>";
                    html += "<div class='kreis'><b>Kreis: </b>" + plzData[key].kreis + "</div>";
                    html += "<div class='bundesland'><b>Bundesland: </b>" + plzData[key].bundesland + "</div>";

                    html += "</div>"; // .treffer schließen
                    $ausgabe.append(html);
                }
            } // ende for (var key in plzData)
        } // ende if (plzEingabe > 0 && plzEingabe < 5)
        else {
            if (plzEingabe.trim().length >= 6) {
                alert("Zu laaaaaang!")

            }
            if (plzEingabe.trim() === "") {
                alert("Z krz!")
            }
        } // ende else
        // muss hier stehen, da asynchroner Request
        // $ausgabe.append(html);

    } // ende f.ausgabe




}(window, document, jQuery));