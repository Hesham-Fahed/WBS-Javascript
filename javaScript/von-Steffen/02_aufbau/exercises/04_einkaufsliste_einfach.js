(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
        
        //Eventlistener click wird an das Elternelement ul#liste gebunden
        //Die Liste delegiert den Eventlistener an alle Kinder weiter...
        document.getElementById("liste").addEventListener("click", function(e){
            e.preventDefault();
            //...wenn das Kind, das dass Event ausgelöst hat, ein a-Element ist... 
            if(e.target.nodeName === "A") {
                //...ändere an diesem a die Klasse auf erledigt
                e.target.className = "erledigt";
            }   
         }); // ---------------------- end click ul#liste

         //submit-Event des Formulars abfangen
         document.forms[0].addEventListener("submit", function(e){
            e.preventDefault();
            var f = e.target;
            if(f.neu.value.trim() === "") {
                alert("Bitte geben Sie min. 2 Zeichen");
            } else {
                document.getElementById("liste").innerHTML += "<li><a href='#' class='offen'>"+ f.neu.value.trim() + "</a></li>"; 
                f.neu.value = "";
            }
         });

    });
}(window,document));