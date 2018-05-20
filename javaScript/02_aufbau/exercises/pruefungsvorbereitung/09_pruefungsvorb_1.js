(function (window, document) {
    "use strict";
    //https://wiki.selfhtml.org/wiki/JavaScript/DOM/Event/%C3%9Cbersicht
    //Ereignis ohne on: click, mouseover, load, mouseenter, keypress ...
    window.addEventListener("load", function () {

        var liste = document.getElementById("con1").getElementsByTagName("ul")[0];
        addHandler(liste, "click", doAjax);
        document.getElementById("ausgabe_con1").removeEventListener("click", doAjax, true);

        var input = document.forms[0].getElementsByTagName("input")[0];
        addHandler(input, "keyup", suchen);

    }
    );

    function doAjax(e) {
        e.preventDefault();

        ajaxGet("louis_de_funes.json", function (resp) {

            var data = JSON.parse(resp);
            showInfo(data, e);

        }); // :::::::::::::- ende ajaxGet -::::::::::::::
    } // :::::::::::::- ende doAjax -::::::::::::::

    function showInfo(data, e) {
        var out = "";
        var ausgabe_con1 = document.getElementById("ausgabe_con1");

        if (e.target.innerHTML === "Alle ausgeben") {
            for (let key in data) {
                console.log(key);
                out += "<h3><a href='" + e.target.href + "'>" + key + "</a></h3>" + "<p>" + data[key].info + "</p>";
                out += "<p><b>Laufzeit: </b>" + ": " + data[key].Laufzeit + "</p>";
                out += "<p><b>Produktionsjahr: </b>" + ": " + data[key].Produktionsjahr + "</p>";
                out += "<p><b>Regie: </b>" + ": " + data[key].Regie + "</p>";
                out += "<p><b>Darsteller: </b>" + ": " + data[key].Darsteller + "</p>";
                out += "</div><hr>";
            }// :::::::::::::- ende for -::::::::::::::
        } else /* if (e.target.innerHTML === "Alle ausgeben") */ {
            out += "<div>"
            console.log("e.target.innerHTML" + e.target.innerHTML);
            for (let key in data) {
                if (key === e.target.innerHTML) {
                    out += "<h3><a href='" + e.target.href + "'>" + key + "</a></h3>" + "<p>" + data[key].info + "</p>";
                    out += "<p><b>Laufzeit: </b>" + ": " + data[key].Laufzeit + "</p>";
                    out += "<p><b>Produktionsjahr: </b>" + ": " + data[key].Produktionsjahr + "</p>";
                    out += "<p><b>Regie: </b>" + ": " + data[key].Regie + "</p>";
                    out += "<p><b>Darsteller: </b>" + ": " + data[key].Darsteller + "</p>";
                    out += "</div><hr>";
                }
            }// :::::::::::::- ende for -::::::::::::::

        }
        ausgabe_con1.innerHTML = out;
    }

    function suchen(e) {
        console.log(e);
    }



}(window, document));