(function (window, document, $) {
    "use strict";
    //jQuery( callback )
    //callback ist eine FN-Referenz
    $(function () {
        
        // ####### SAMMLUNG erzeugen #######
        //jQuery( selector )
        console.log( $("p") );
        //jQueryfiziert, jQuery-Sammlung, jQuery-Wrapper-Objekt
        //jQuery bietet neue Methoden für diese Objekte
        
        console.log("****************************************************");
        //CACHING: jQuery-Wrapper-Objekt in Variable speichern
        //$ am Anfang ist Optional, zeigt aber das in der Variable
        //ein jQuery-Objekt gespeichert wird.
        var $p = $("p"); 
        console.log('$("p") //=> ', $p);
        console.log('$p[0] //=> ', $p[0]);
        
        var p = document.getElementsByTagName("p");
        console.log('document.getElementsByTagName("p") //=> ', p);
        console.log('p[0] //=> ', p[0]);
        //In der jQuery-Sammlung und der HTMLCollection liegen auf numerischen 
        //Indizes die JS-Objekte vom Typ Element
        console.log('p[0] === $p[0] //=> ', p[0] === $p[0]);

        console.log('$($p[0]) //=> ', $($p[0]));

        
        //$p[0].html(); // TypeError: $p[0].html is not a function
        console.log($p.eq(2).html());
        console.log($p.first().html());
        console.log($p.last().html());
        /*eq(x) Erzeugt eine neue jQuery-Sammlung, die nur noch aus Element x besteht. */

        console.log("****************************************************");
        
        /* NOGO: Factory-FN liest immer wieder den Selektor "p" ein */
        // console.log( $("p") );
        // console.log( $("p") );
        // console.log( $("p") );
        // console.log( $("p") );

        /* Performance ist besser Caching greift auf Pointer in var $p zurück */
        // console.log($p);
        // console.log($p);
        // console.log($p);
        // console.log($p);
        
        // ###### Methode html (innerHTML) ######
        /* Kein Argument übergeben: LESENDER ZUGRIFF auf das erste Elemente der Sammlung */
        // console.log($p.html());

        // //String als Argument: SCHREIBENDER ZUGRIFF auf alle Elemente der Sammlung
        // Automatische Schleife (vordefiniert)
        //console.log($p.html("TEST"));
        
        /* Callback-FN wird übergeben
        jquery läuft automatisch über alle Elemente der Sammlung und ruft
        für jedes Element diese Funktion auf */
        $p.html( function(index, content){
            console.log(index);     //=> Schleifenzähler
            console.log(content);   //=> innerHTML des aktuellen Elements
            console.log(this);      //=> aktuelles Elemente als JS-Objekt
            return "<b>Absatz " + (index + 1) + "</b> " + content;
        });

        


        // function html(a,b){
        //     if(b === undefined) {
        //         return a[0].innerHTML;
        //     } else if(typeof b === "string") {
        //         for (var i = 0; i < a.length; i++) {
        //             a[i].innerHTML = b;                    
        //         }
        //     } else if(typeof b === "function") {
        //         var ret, x;
        //         for (var i = 0; i < a.length; i++) {
        //             x = b.bind(a[i]); // this
        //             ret = x(i,a[i].innerHTML);  
        //             if(ret !== undefined) {
        //                 a[i].innerHTML = ret;
        //             }             
        //         }
        //     }
        // }

        // var p = document.getElementsByTagName("p");
        // console.log("***********************************");
        // console.log( html(p) );
        // html(p,"Neuer Inhalt");
        // html(p, function(index,content){
        //     console.log(index);     //=> Schleifenzähler
        //     console.log(content);   //=> innerHTML des aktuellen Elements
        //     console.log(this);      //=> aktuelles Elemente als JS-Objekt
        //     return "<b>Absatz " + (index + 1) + "</b> " + content;
        // });




    });
}(window, document, jQuery));
//Einbindung siehe Index-Datei
/* 
https://api.jquery.com/jQuery/
http://overapi.com/jquery
 */


//  /* 
//         Schreiben Sie eine Funktion html(a,b)

//         Parameter a: Ist eine HTMLCollection (Hier alle p-Element einlesen)
//         Parameter b: 
//                     1. Leer
//                     liest das innerHTML des ersten Elements von Parameter a aus
//                     und gibt dieses zurück.            
//                     2. string 
//                     Schreibt den string in das innerHTML aller Element von Parameter a 
//                     3. FN 
//                     Die FN wird für jedes Element der Sammlung in Parameter a aufgerufen, und kann 
//                     dann 2 Parameter annehmen:
//                     1. Paramter: Der Index der Schleife
//                     2. Parameter: das innerHTML des aktuellen Elements.

//                     Das return der FN setzt das innerHTML des aktuellen Elements auf den Rückgabewert.
//         */











/* 
var a;

function foo() {
    return "bar";
}

var a = foo();


var b = function () {
    return "foobar";
}

var c = (function () { return "foobar"; }());
console.log(c);


 */







(function (window, document, $) {
    "use strict";
    $(function () {

        var fruits = ['Apple', 'Banana'];
        var digits = [9, 8,,9];
        console.log("keys: ", Object.keys(digits))

        digits.forEach(function(item, index, array) {
            console.log("Urzustand Item: ", item, "Index: ", index);
            item = item*2;
            console.log("Danach Item: ", item, "Index: ",index);
        })

    }
    );

}(window, document, jQuery));

