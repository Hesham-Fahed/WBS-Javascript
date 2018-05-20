
(function (window, document, $) {
    "use strict";
    $(function () {

        const $entry = $(".entry");

        // 1. Bei laden der Seite sollen alle div.entry eine zufällige Farbe erhalten.
        // Jeder div.entry bekommt eine andere zufällige Farbe.
        $entry.css("background-color", randomRGB);

        //         2.  Neuer Post
        // Wird in das textarea#neu etwas eingetragen und der Button <Neuer Post> angeklickt. Soll ein div.entry als neues Element nach dem letzten eingefügt werden. Keine Fehlermeldung wenn textarea#neu leer ist. Zusätzlich erhält der neue Post auch eine zufällige Farbe.

        const $main = $("#main");
        
        let $endNeu = $("#endNeu").on("click", function (e) {
            let $neu = $("#neu").val();
            e.preventDefault();
            const $prev =
                $("#main")
                    .children()
                    .eq(-1);

            // if ($neu != "") {
                $("<div class='entry' id='box"
                    + ($prev.index() + 2)
                    + "'>"
                    + $neu
                    + "<br><a href='#'>UP </a> <a href='#'>DOWN</a></div>")
                    .append("<a href='#'>Edit</a>")
                    .appendTo($main)
                    .css("background-color", randomRGB);
            // }

        })



        /*  3. UP | DOWN in den div.entry sollen die Elemente entsprechen verschieben.
         Klicken auf UP verschiebt das Element nach oben. Jeder weitere Klick verschiebt es solange bis es das erste Element ist. DOWN nach unten. */

        $main.on("click", "a:contains('UP')", moveUp);
        $main.on("click", "a:contains('DOWN')", moveDown);


        // 4. Nach UP | DOWN soll ein Hyperlink EDIT eingefügt werden.

        $entry.append("<a href='#'>Edit</a>");


        //         5. EDIT mit Funktionalität versehen.
        // Wird EDIT angeklickt soll der Text aus dem div.entry in dem sich dieser Hyperlink Edit befindet im textarea#neu angezeigt werden. 
        // Der Text kann bearbeitet und mit dem Button Beenden wieder in den div.entry zurückgeschrieben werden.

        $main.on("click", "a:contains('Edit')", edit);

        ///////////////////////////////////////////////////////////
        // ENDE
        ///////////////////////////////////////////////////////////
    });

    function randomRGB() {
        let color = [];
        let rgb = "";
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
        }
        rgb = "rgb(" + color.join(", ") + ")";
        return rgb;
    }

    function moveUp(e) {
        e.preventDefault();
        let $eTarget = $(e.target);
        let $eTargetPrev = $eTarget.parent().prev();
        console.log($eTargetPrev);
        $eTarget.parent().insertBefore($eTargetPrev);

    }
    function moveDown(e) {
        e.preventDefault();
        let $eTarget = $(e.target);
        let $eTargetAfter = $eTarget.parent().next();
        // console.log($eTargetPrev);
        $eTarget.parent().insertAfter($eTargetAfter);

    }

    function edit(e) {
        e.preventDefault();
        let $eTarget = $(e.target);

        // console.log("txt: ", $eTarget.parent().contents(0));
        console.log("txt: ", $eTarget.parent().contents().eq(0));
    }



}(window, document, jQuery));

/*








6. Der Button Beenden soll nur zu sehen sein, wenn gerade ein div.entry bearbeitet wird.

$el.hide()
$el.show()

*/