(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
        document.forms[0].addEventListener("submit", function(e){
            // e.preventDefault();
            var f = e.target; //this oder document.forms[0] ...
            var errorMsg = [];

            if(f.vorname.value.trim() === "") {
                // alert("Vorname darf nicht leer sein");
                errorMsg.push("Vorname darf nicht leer sein");
            }
            if(f.nachname.value.trim() === "") {
                // alert("Nachname darf nicht leer sein");
                errorMsg.push("Nachname darf nicht leer sein");
            }

            // !f.geschlecht[0].checked && !f.geschlecht[1].checked
            if(f.geschlecht[0].checked === false && f.geschlecht[1].checked === false) {
                errorMsg.push("Bitte wählen Sie ein Geschlecht"); 
            }

            // !f.html.checked && !f.css.checked && !f.js.checked
            if(f.html.checked === false && f.css.checked === false && f.js.checked === false ) {
                errorMsg.push("Bitte wählen Sie Ihre Lieblingssprache"); 
            }

            console.log(f.sprache.options.selectedIndex);
            if(f.sprache.options.selectedIndex < 1) {
                errorMsg.push("Bitte wählen Sie welche Sprache Sie noch lernen möchten"); 
            }

            if(!f.agb.checked) {
                errorMsg.push("Bitte akzeptieren Sie die AGB");
            }

            //Immer bevor wir Fehler neu schreiben, alte Fehler löschen
            document.getElementById("fehlerliste").innerHTML = "";
            // errorMsg.length > 0
            if(errorMsg.length) {
                e.preventDefault();
                document.getElementById("fehlerliste").innerHTML = "<ul><li>"+errorMsg.join("</li><li>") +"</li></ul>";
            } /* else {
                f.action = "../../_lib/php/get_post.php";
                f.method = "get";
                f.submit();
            } */

            /* 
            Zum Testen bzw. Schreiben e.preventDefault() immer am Anfang der Funktion. Wenn dann ein Fehler im JS-Code auftritt wird das Formular nicht versendet.

            Später kann e.prevetDefault() für die Live-Seite im if der Fehlermeldung stehen, 
            dadurch entfällt das else mit submit().
            */








            /*Möglichkeiten Element einzulesen Seite 220  */
            // console.log(document.forms[0].vorname);
            // console.log(document.getElementById("vorname"));
            // console.log(document.forms[0].elements[1]);
            // console.log(document.forms[0][1]); //input#vorname
            // console.log(document.forms[0][0]); //fieldset
            // console.log(document.forms[0][3]); //fieldset
            // /* forms[0] 
            // button, fieldset, input, select, textarea, output
            // label, legend und andere nicht Formularelement, z.B. div, p usw. sind nicht in document.forms[0] enthalten.
            // */
            // console.log(document.getElementsByTagName("form")[0].vorname);
        });
    });
}(window,document));

/* 
Kapitel 7.8 Buch 
7.8 - 7.8.4


Lesen und an diesem Forumlar testen.
*/