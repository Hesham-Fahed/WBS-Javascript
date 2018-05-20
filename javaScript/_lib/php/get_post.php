<?php 
//Einzeiliger Kommentar
#Einzeiliger Kommentar
/* Mehrzeiliger
Kommentar*/

header("Content-type: text/html; charset=UTF-8");
    
if(isset($_GET)) {
    echo "<h2>GET</h2>";
    /*echo $_GET["eingabe"] . "<br>";*/
    foreach($_GET as $key => $value) {
        echo "Schlüssel: " . $key . ", Wert: " . $value . "<br>";
    }
}

if(isset($_POST)) {
    echo "<h2>POST</h2>";
    /*echo $_POST["eingabe"] . "<br>";*/
    foreach($_POST as $key => $value) {
        echo "Schlüssel: " . $key . ", Wert: " . $value . "<br>";
    }
}

/*
Werden Daten an den Server übertragen, wird je nach Methode (GET oder POST)
das entsprechende globale PHP-Array erzeugt und gefüllt.

Übertragen werden zum Server schlüssel-wert-Paare
name-attribut im Formular ist der Schlüssel, dieser ist im PHP-Array der assoziative Index
<input type="text" name="eingabe" ... wird $_GET["eingabe"]
Das ausgelesene value aus diesem Eingabefeld ist der Wert der in $_GET["eingabe"] gespeichert wird.
*/


?>