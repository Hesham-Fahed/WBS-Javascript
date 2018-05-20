(function (window, document, $) {
    "use strict";
    $(function () {
        // ################################################################
        // Natives JS-Objekt
        // ################################################################
        console.log("******** Natives JS-Objekt ********");
        var p1 = document.getElementsByTagName("p")[0];
        console.log("1.) p1 //=> ", p1);
        console.log("2.) p1.innerHTML //=> ", p1.innerHTML);
        console.log("3.) p1.textContent //=> ", p1.textContent);
        console.log("4.) p1.childNodes //=> ", p1.childNodes);
        console.log("5.) p1.children //=> ", p1.children);




        // ################################################################
        // jQuery-Objekt
        // ################################################################
        console.log("******** jQuery-Objekt ********");
        var $p1 = $("p").eq(0);
        console.log("1.) $p1 //=> ", $p1);
        console.log("2.) $p1.html() //=> ", $p1.html());
        console.log("3.) $p1.text() //=> ", $p1.text());
        console.log("4.) $p1.contents() //=> ", $p1.contents());
        console.log("5.) $p1.children() //=> ", $p1.children());


        
        // ################################################################
        // DOM Methoden (Natives JS)
        // ################################################################
        /* document.forms[0].addEventListener("submit", function(e){
            e.preventDefault();
            var newEntry = e.target.newEntry.value.trim();
            if(newEntry !== "") {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.textContent = newEntry;
                a.href = "#";
                li.appendChild(a);
                document.getElementById("liste").appendChild(li);
                e.target.newEntry.value = "";
            }
        }); 
        */


        // ################################################################
        // DOM Methoden (jQuery)
        // ################################################################

        /* append */
        // $("form")
        // .on("submit", function(e){
        //     e.preventDefault();
        //     var $newEntry = $("#newEntry");
        //     var newEntry = $newEntry.val().trim();
        //     if(newEntry !== "") {
        //         $("#liste")
        //         .append("<li><a href='#'>"+newEntry+"</a></li>");
        //         $newEntry.val("");
        //     }
        // });

        /* appendTo */
        $("form")
            .on("submit", function (e) {
                e.preventDefault();
                var $newEntry = $("#newEntry");
                var newEntry = $newEntry.val().trim();
                if (newEntry !== "") {
                    $("<li><a href='#'>" + newEntry + "</a></li>")
                        .appendTo("#liste");
                    $newEntry.val("");
                }
            });

            console.log($("#ausgabe").append("<p>Wurde mit append hinzugefügt</p>"));
            console.log($("<p>Wurde mit append hinzugefügt</p>").appendTo("#ausgabe"));


    });
}(window, document, jQuery));