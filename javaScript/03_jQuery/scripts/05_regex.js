(function (window, document, $) {
    "use strict";
    $(function () {
        /* 
        https://regex101.com/
        https://www.mediaevent.de/javascript/Javascript-Regulaere-Ausdruecke-1.html
        
        */

        /* 
        Muster/Pattern

        /suchmuster/Modifier

        /e/     - Sucht nach dem ersten Zeichen e
        /e/g    - Sucht nach allen Zeichen e
        /e/gi   - Sucht nach allen Zeichen e und ist case insensitive


        Deutsche Postleitzahlen: 
        5 Stellen bestehend aus Ziffern: 12345
        oder D gefolgt von Bindestrich/Leerzeichen gefolgt von 5 Ziffern Muster: D-12345
        */

        var a = "Ein Text mit vielen Zeichen";
        console.log('a //=> ',a);
        console.log('a.replace(/e/, "@") //=> ',a.replace(/e/, "@"));
        console.log('a.replace(/e/g, "@") //=> ',a.replace(/e/g, "@"));
        console.log('a.replace(/e/gi, "@") //=> ',a.replace(/e/gi, "@"));
        console.log('"1,49".replace(/,/,".") //=> ',"1,49".replace(/,/,"."));

        
        /* Regex literale Schreibweise */
        var regex = /@/i;

        console.log('"max.muster@mustermail.com".match(/@/) //=> ',"max.muster@mustermail.com".match(/@/));
        console.log('"max@muster@mustermail@com".match(/@/g) //=> ',"max@muster@mustermail@com".match(/@/g));
        console.log('"max.muster.mustermail.com".match(/@/g) //=> ', "max.muster.mustermail.com".match(/@/g));
        console.log('"max.muster@mustermail.com".search(/@/) //=> ',"max.muster@mustermail.com".search(/@/));
        
        var emailAtCount = "max.muster@mustermail.com".match(/@/);
        if(emailAtCount > 1) {
            // Fehlermeldung: E-Mail darf nur ein @ Zeichen enthalten
        } else if( emailAtCount < 1) {
            // Fehlermeldung: E-Mail muss ein @-Zeichen enthalten
        }
        
        var s = "max@muster@mustermail@com";
        var pos = s.indexOf("@");       
        while(pos !== -1) {
            console.log(pos);
            pos = s.indexOf("@",pos+1);
        }



    var regEx = new RegExp("@","g");
    var result, indizes = [];
    while((result = regEx.exec("max@muster@mustermail@com"))) {
        console.log("Gefunden: " + result[0] + " Posiiton: " + result.index + " Anfang nächste Suche: " + regEx.lastIndex);
        indizes.push(result.index);
    }
    console.log(indizes);
    
    
    console.log(result = regEx.exec("max@muster@mustermail@com"));
    console.log(result.index );
    console.log(result = regEx.exec("max@muster@mustermail@com"));
    console.log(result.index );
    console.log(result = regEx.exec("max@muster@mustermail@com"));
    console.log(result.index );


    /* 
    Interpunktionszeichen mit spezieller Bedeutung im Ausdruck:
    ^ $ . * + ? = ! : | \ / ( ) [ ] { }

    Sollen diese Zeichen gesucht werden, müssen Sie mit Backslash \ maskiert oder mit eckigen Klammern gruppiert werden []
    
    ^       Passt auf den Anfang 
    $       Passt auf das Ende 
    .       ein beliebiges Zeichen
    *       ein einzelnes Zeichen, eine geklammerte Zeichenfolge oder eine Klasse darf 
    *       beliebigt oft vorkommen auch kein Mal.
    +       Das vorangegangen Element muss min. einmal vorkommen darf auber auch öfter
    ?       Das vorangegangen Element nicht oder genau einmal vorkommen, aber keinesfalls öfter
    =
    !
    :
    |       ODER-Verknüpfung [ae|ä]
    (x)     Capturing Brackets, Inhalt wird gruppiert und gespeichert 
            ([a-z])
            \1 ist der Zugriff auf die ersten Capturin Brackets
    []      Zeichenklasse
            [abc] passt auf a, b oder c aber nicht auf x
            [a-z] ist ein Bereich 
            [a-zäöü]
    {x}     Anzahl genau x mal
    {n,m}   Mindestens n mal vorkommen aber höchstens m mal
    */


    });
}(window, document, jQuery));

