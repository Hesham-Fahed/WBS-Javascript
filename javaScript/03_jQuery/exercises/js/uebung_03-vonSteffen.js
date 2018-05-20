(function (window, document, $) {
    "use strict";
    $(function () {

        // var $entry =  $("#main").find(".entry");
        // for(var i = 0; i < $entry.length; i++) {
        //     $entry.eq(i).css("background-color",randomRGB());
        // }

        // $("#main").find(".entry").each(function(){
        //     $(this).css("background-color",randomRGB())
        // });

        $("#main")
            .find(".entry")
            .css("background-color", randomRGB)
            .append("&nbsp;<a href='#'>EDIT</a>");


        $("#endNeu")
            .on("click", function (e) {
                e.preventDefault();
                var val = $("#neu").val().trim(); // $.trim($neu.val());
                if(val !=="") {
                    //var html = "<div class='entry'>" + neu + "<br><a href='#'>UP</a>&nbsp;<a href='#'>DOWN</a>&nbsp;<a href='#'>EDIT</a></div>";
                    var $entrys = $(".entry");
                    var $newEntry = $entrys.eq(0).clone();
                    $newEntry.attr("id", $entrys.length + 1);
                    $newEntry.contents().eq(0).replaceWith(val);
                    $newEntry.appendTo("#main").css("background-color", randomRGB);
                    $("#neu").val("");
                } else {
                    $("#neu").attr("placeholder","Neuer Post darf nicht leer sein");
                }
                
            }); // -------- #endNeu click

        var $box;
        $("#main")
            .on("click", "a", function (e) {
                e.preventDefault();
                $box = $(this).parent(); // this.parentElement;
                var $target;
                // $(this).text().toLowerCase();
                switch (this.textContent.toLowerCase()) {
                    case "up":
                        $target = $box.prev();
                        $target.insertAfter($box);
                        break;
                    case "down":
                        $target = $box.next();
                        $target.insertBefore($box);
                        break;
                    case "edit":
                        $("#endNeu").hide();
                        $("#endEdit").show();
                        var text =  $box.contents().eq(0).text();
                        $("#neu").val(text);
                        break;
                }
            }); // -------- #main click

        $("#endEdit")
        .on("click", function(e){
            e.preventDefault();
            var val = $("#neu").val().trim();
            $box.contents().eq(0).replaceWith(val);
            $("#neu").val("");
            $("#endNeu").show();
            $("#endEdit").hide();
        }).hide(); // -------- #endEdit click



    }); // -------- end ready
}(window, document, jQuery));

/*
1. Bei laden der Seite sollen alle div.entry eine zufällige Farbe erhalten.
Jeder div.entry bekommt eine andere zufällige Farbe.

2.  Neuer Post
Wird in das textarea#neu etwas eingetragen und der Button <Neuer Post> angeklickt. Soll ein div.entry als neues Element nach dem letzten eingefügt werden. Keine Fehlermeldung wenn textarea#neu leer ist. Zusätzlich erhält der neue Post auch eine zufällige Farbe.

3. UP | DOWN in den div.entry sollen die Elemente entsprechen verschieben.
Klicken auf UP verschiebt das Element nach oben. Jeder weitere Klick verschiebt es solange bis es das erste Element ist. DOWN nach unten.

4. Nach UP | DOWN soll ein Hyperlink EDIT eingefügt werden.

5. EDIT mit Funktionalität versehen.
Wird EDIT angeklickt soll der Text aus dem div.entry in dem sich dieser Hyperlink Edit befindet im textarea#neu angezeigt werden. 
Der Text kann bearbeitet und mit dem Button Beenden wieder in den div.entry zurückgeschrieben werden.

6. Der Button Beenden soll nur zu sehen sein, wenn gerade ein div.entry bearbeitet wird.

$el.hide()
$el.show()

*/