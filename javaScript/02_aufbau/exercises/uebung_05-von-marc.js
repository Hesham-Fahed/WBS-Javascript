
(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
      // div#bearbeiten verstecken
      var bearbeiten = document.getElementById("bearbeiten");
      bearbeiten.setAttribute("style","display:none;");
      
      // Funktion zum hinzufügen von EventListenern
      function addHandler(el, ev, fn) {
        el.addEventListener(ev, fn);
      }
      
      // Funktion zum tauschen von Listenpunkt
      var liste_oben = document.getElementById("liste_oben");
      var liste_unten = document.getElementById("liste_unten");
      function swapLi(e){
        e.preventDefault();
        if(e.target.innerHTML === "Verschieben" && e.target.parentElement.parentElement === liste_oben){
          liste_unten.appendChild(e.target.parentElement);
          e.target.parentElement.setAttribute("class","unten");
        } else if(e.target.innerHTML === "Verschieben" && e.target.parentElement.parentElement === liste_unten) {
          liste_oben.appendChild(e.target.parentElement);
          e.target.parentElement.setAttribute("class","oben");
        }
      }
  
      var i;
      var oben = document.getElementsByClassName("oben");
      var unten = document.getElementsByClassName("unten");
      var s;
      var help = 0;
      var eintrag = document.getElementById("eintrag");
      // Auslesen von Textknoten des zu bearbeitenden Listenpunkt und einblenden von div#bearbeiten
      // function edit(e){
        addHandler(document.body,"click",function(e){
        e.preventDefault();
        if(e.target.innerHTML === "Bearbeiten"){
          bearbeiten.style.display = "block";
          s = "";
          switch(e.target.parentElement.className){
            case "oben":
              s += "oben";
              for(i = 0; i < oben.length; i++){
                if(oben[i] === e.target.parentElement){
                    help = i;
                  }
                }
              break;
            case "unten":
              s += "unten";
              for(i = 0; i < unten.length; i++){
                if(unten[i] === e.target.parentElement){
                    help = i;
                  }
                }
              break;
          }
          eintrag.value = document.getElementsByClassName(s)[help].lastChild.data;
        }
        // Übertragen des geänderten Wertes in den entsprechenden Listenpunkt und ausblenden von div#bearbeiten
        if(e.target.id === "aendern"){
          document.getElementsByClassName(s)[help].lastChild.data = " " + eintrag.value.trim();
          bearbeiten.style.display = "none";
        }
      });
      
      // Schleifen zum binden von Eventhandlern an Links in Listenpunkt
      addHandler(liste_oben,"click",swapLi);
      addHandler(liste_unten,"click",swapLi);
  
      // Handler zum Erstellen neuer Listenpunkte
      addHandler(document.getElementById("neu"),"click",function(e){
        e.preventDefault();
        var li = document.createElement("li");
        var a1 = document.createElement("a");
        a1.setAttribute("href","#");
        var a2 = document.createElement("a");
        a2.setAttribute("href","#");
        var bearbeiten = document.createTextNode("Bearbeiten");
        var line = document.createTextNode(" | ");
        var verschieben = document.createTextNode("Verschieben");
        var listenText;
        li.appendChild(a1).appendChild(bearbeiten);
        li.appendChild(line);
        li.appendChild(a2).appendChild(verschieben);
        var neuerEintrag = document.getElementById("neuerEintrag");
        if(e.target.id === "oben_eintragen"){
          listenText = document.createTextNode(" " + neuerEintrag.value.trim());
          li.appendChild(listenText);
          li.setAttribute("class","oben");
          liste_oben.appendChild(li);
          neuerEintrag.value = "";
        } else if(e.target.id === "unten_eintragen"){
            listenText = document.createTextNode(" " + neuerEintrag.value.trim());
            li.appendChild(listenText);
            li.setAttribute("class","unten");
            liste_unten.appendChild(li);
            neuerEintrag.value = "";
        }
      });
    });
  }(window,document));