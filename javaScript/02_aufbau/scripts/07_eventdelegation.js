(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
        function showInfo1(e) {
            e.preventDefault();
            document.getElementById("ausgabe1").innerHTML = e.target.innerHTML;
        }

        var list1_a = document.getElementById("list1").getElementsByTagName("a");
        for (var i = 0; i < list1_a.length; i++) {
            list1_a[i].addEventListener("click", showInfo1);            
        }

        /* function foobar(e){
            e.preventDefault();
            document.getElementById("list1").innerHTML += "<li><a href='#'>Neuer Eintrag</a></li>";
        }
        document.getElementById("hinzu1").addEventListener("click", foobar); */

        //Funktion wird nur einmal genutzt, braucht also keinen Namen
        //Lösung: anonyme FN als Referenz:
        document.getElementById("hinzu1")
        .addEventListener("click", function(e){
            e.preventDefault();
            document.getElementById("list1").innerHTML += "<li><a href='#'>Neuer Eintrag</a></li>";
        });
        ///////////////////////////////////////////////////////////////////////
        // Info Siehe unten *
        ///////////////////////////////////////////////////////////////////////
        /* function showInfo2(e) {
            document.getElementById("ausgabe2").innerHTML = e.target.innerHTML;
        }

        document.getElementById("list2").addEventListener("click", function(e){
            e.preventDefault();
            //Eventdelegation auf den Hyperlink a
            if(e.target.nodeName === "A") {
                console.log("this //=> ", this);
                console.log("e.target //=> ", e.target);
                console.log("e.target.nodeName //=> ", e.target.nodeName);
                showInfo2(e);
            }
        }); */

        //Vereinfacht:
        document.getElementById("list2").addEventListener("click", showInfo2);
        
        function showInfo2(e) {
            e.preventDefault();
            if(e.target.nodeName === "A") {
                document.getElementById("ausgabe2").innerHTML = e.target.innerHTML;
            }
        }


        document.getElementById("hinzu2")
        .addEventListener("click", function(e){
            e.preventDefault();
            document.getElementById("list2").innerHTML += "<li><a href='#'>Neuer Eintrag</a></li>";
        });


    });
}(window,document));
/* 
Hier gibt es zwei Probleme:
1. Neue Elemente haben keinen Handler weil die Handler beim laden Seite 
gebunden werden. Wird ein neues Element hinzugefügt weiß es nicht das es einen Handler haben sollte.

2.innerHTML überschreibt das HTML und zwingt den Browser dazu die Seite neu
zu parsen. Durch das parsen werden auch die alten EventHandler  in diesem Container überschrieben.

WICHTIG:
innerHTML sollte nur sehr sparsam verwendet. Siehe DOM createElement als
alternative.
*/