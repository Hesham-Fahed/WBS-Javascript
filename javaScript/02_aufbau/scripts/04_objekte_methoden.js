(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
        
        var person = {
            vorname : "Max",
            nachname : "Mustermann",
            ausgabe : function() {
                return this.vorname + " " + this.nachname;
            }
        };
        // console.log(person);
        console.log(person.ausgabe());


        var obj = {
            foo : "bar",
            showInfo : function(e) {
                console.log("this ", this);
                console.log("person ", obj);
                console.log(e.target);
            }
        };

        var list_a = document.getElementById("list").getElementsByTagName("a");
        for(var i = 0; i < list_a.length; i++) {
            // list_a[i].addEventListener("click", obj.showInfo);
            /* this zeigt hier in der Methode nicht mehr auf das Objekt
            soll das Objekt in der Methode angesprochen werden muss hier mit bind
            gearbeitet werden */
            
            // o.methode.bind(x) in der Methode wird this zum übergebenen Objekte x
            // Für unser Beispiel wird this in showinfo an person gebunden
            // innerhalb der FN muss jetzt e.target genutzt werden um
            // das Element das die FN ausgelöst/gefeuert hat anzusprechen
            list_a[i].addEventListener("click", obj.showInfo.bind(obj));
        }

        
        // Methoden des document-Objekts
        // document.getElementById()
        // document.write() 

        var kurs = {
            title : "Stricken und Häckeln für Einsteiger",
            num : "PD-4711-223-69",
            description : "Strickmuster für Einsteiger",
            places : 18,
            members : [],
            newMember : function(name) {
                // places reduzieren
                // members um name erweitern
            }
        };



    });
}(window,document));