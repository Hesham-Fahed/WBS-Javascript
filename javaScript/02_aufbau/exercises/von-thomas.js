(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {

        var ausgabe1 = document.getElementById("a1");
        var ausgabe2 = document.getElementById("a2");
        var ausgabe3 = document.getElementById("a3");



        document.getElementById("u1")
            .getElementsByTagName("a")[0]
            .addEventListener("click", function (e) {
                e.preventDefault();
                ajaxGet("../../_lib/data/aufgabe1.json", function (x) {
                    var data = JSON.parse(x);
                    // console.log("Json ist ein String",x);
                    // console.log("JSON.parse Macht Objekt",data);
                    var s = "<ul>";
                    for (var key in data) {
                        s += "<li>" + key + " : " + data[key] + "</li>";
                        // console.log(key);
                        // console.log(data[key]);

                    }

                    s += "</ul>"
                    ausgabe1.innerHTML = s;
                });



            });
        ////////////////////////////////////////
        document.getElementById("u2")
            .getElementsByTagName("a")[0]
            .addEventListener("click", function (e) {
                e.preventDefault();
                ajaxGet("../../_lib/data/aufgabe2.json", function (x) {
                    var data = JSON.parse(x);
                    // console.log("Json ist ein String",x);
                    // console.log("JSON.parse Macht Objekt",data);
                    var s = "<ul>";
                    for (var key in data) {
                        s += "<li><a " + key + "='" + data[key] + "'>Mozilla</a></li>";
                        // console.log(key);
                        // console.log(data[key]);

                    }

                    s += "</ul>"
                    ausgabe2.innerHTML = s;
                });



            });
        ////////////////////////////////
        /* 
                document.getElementById("u3")
                .getElementsByTagName("a")[0]
                .addEventListener("click", function(e)
                {
                    e.preventDefault();
                    ajaxGet("../../_lib/data/aufgabe3.json",function(x)
                    {
                        var data = JSON.parse(x);
                        console.log("data: ", data);
                        console.log("data[1]: ", data[1]);
                        console.log("data[1].id: ", data[1].last_name);

                        var s = "";
                        var a =[];
                        
                           
                        for(var key in data[0])
                             {
                                 s+="<p>"+data[0][key]+"</p>";
                                 console.log("data[key]: //=> undefined, weil es mehrere data gibt: data[0], data[1], ... ", data[key]);
                             }
                        ausgabe3.innerHTML= s;
                    });
                }); // Ende addEventListener a[0]
         */

        
        ///////////////////////////////////////////////////////////////////////
        // anderer Ansatz
        ///////////////////////////////////////////////////////////////////////

        document.getElementById("u3")
            .addEventListener("click", function (e) {
                e.preventDefault();

                if (e.target.id === "p1" || e.target.id === "p2" || e.target.id === "p3" || e.target.id === "p4") {
                    console.log("e.target: //=> das angeklickte Element: ", e.target);
                    console.log("this: //=> das Elternelement, dass den Eventhandler hat: ", this);
                    ajaxGet("../../_lib/data/aufgabe3.json", function (x) {
                        var ident = e.target;
                        return getOneElement(x, ident);
                    });
                }

                if (e.target.id === "all") {
                    ajaxGet("../../_lib/data/aufgabe3.json", function (x) {
                        var ident = e.target;
                        return getAllElements(x);
                    });
                }

            }); // Ende addEventListener a[0]




        function getOneElement(x, ident) {
            var data = JSON.parse(x);
            var s = "";

            console.log("ident.ide: //=> Ist der Verweis auf den angeklickten Link", ident.id);
            // hier werden den einzelnen Ids die entsprechenden Positionen im data-objekt zugeordnet
            if (ident.id === "p1") {
                var position = 0;
            }
            if (ident.id === "p2") {
                var position = 1;
            }
            if (ident.id === "p3") {
                var position = 2;
            }
            if (ident.id === "p4") {
                var position = 3;
            }

            for (var key in data[position]) {
                s += "<p>" + data[position][key] + "</p>";
            }
            ausgabe3.innerHTML = s;
        }

        function getAllElements(x) {
            var data = JSON.parse(x);
            var s = "";

            for(var i = 0; i < data.length; i++) {
                for (var key in data[i]) {
                    s += "<p>" + data[i][key] + "</p>";
                }
            }
            ausgabe3.innerHTML = s;
        }



    });
}(window, document));