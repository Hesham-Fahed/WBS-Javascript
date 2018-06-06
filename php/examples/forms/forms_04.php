<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Forms - 04</title>
</head>

<body>
<h1>Forms - 04</h1>

<!--
    Validierung und Füllen der Felder funktioniert nun.
    
    Man sieht leicht, dass bei dieser Herangehensweise
    der Code sehr unübersichtlich wird.
    
    Wir schreiben uns nun zwei Hilfsfunktionen.
    - Eine, die uns den Wert zurückgibt, den der Benutzer
      in ein Feld eingegeben hat
    - Eine Zweite, die uns für ein bestimmtes Feld die
      dazugehörige Fehlermedung ausgibt.
    
    Dieses Fehler-Array ($errors) befüllen wir bei der
    Validierung.
-->

<?php
/*******************
* HELPER FUNCTIONS *
*******************/
// get_post_value erhählt als Parameter den Namen des Feldes.
// Das ist genau der Name, unter dem wir den Wert des Feldes
// im $_POST Array speichern.
function get_post_value(string $fieldname) : string
{
    // Wenn der Wert nicht leer ist  ...
    if (!empty($_POST[$fieldname])) {
        // ... geben wir den bereinigten Wert im Format:
        // value="WERT" zurück. Im HTML können wir diesen
        // Rückgabewert der Funktion dann mit echo einfügen.
        return ' value="' . htmlentities($_POST[$fieldname]) . '" ';           
    }
    // Wenn der Wert leer ist, geben wir einen leeren String
    // zurück
    return '';
}

// Um Fehlermeldungen zu speichern, legen wir weiter unten
// ein Array namens $errors an. Wir schreiben eine Funktion
// get get_error, um Fehlermeldungen aus dem Array auszulesen.
//
// Die get_error Funktion will folgende Parameter:
// 1. Den Namen des Feldes, also den Index im $errors Array,
//    unter dem die Fehlermeldung gespeichert ist.
// 2. das Fehlerarray selbst
// 3. Einen optionalen String zur Formatierung der Rückgabe
function get_error(
    string $fieldname,
    array $errors,
    string $formatString = '<div class="message error">%s</div>'
) : string
{
    // Wenn für den gesuchten Index eine Fehlermeldung
    // im Array vorliegt...
    if (!empty($errors[$fieldname])) {
        // ... geben wir diese mit printf aus.
        // printf nimmt einen Format-String, in dem bestimmte
        // Platzhalter vorkommen können. Diese Platzhalter
        // werden durch die Werte der nachfolgenden Argumente
        // ersetzt. Zum Beispiel:
        // printf('<div>%s</div>', 'Mein toller String')
        //   wird zu: <div>Mein toller String</div>'
        return sprintf($formatString, htmlentities($errors[$fieldname]));
    }
    return '';
}


/*************
* VALIDATION *
*************/
// Dies ist unser Array für die Fehlermeldungen.
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    // Die Validierung bleibt genau wie vorher
    if (empty($_POST["username"])) {
        // Statt die Fehlermeldung mit "echo" direkt auszugeben,
        // speichern wir sie unter dem Feldnamen (zB "username")
        // im $errors Array
        $errors["username"] = 'Geben sie einen Benutzernamen ein.';
    }

    if (empty($_POST["password"])) {
        // Wie oben. Hier ist der Feldname "password"
        $errors["password"] = 'Geben sie ein Passwort ein.';
    }
}
// Wenn irgendwo ein Fehler aufgetreten ist, sprich,
// wenn das $Fehlerarray nicht leer ist, speichern wir auch
// eine allgemeine Fehlermeldung.
if ($errors) {
    $errors["errors"] = 'Es sind Fehler aufgetreten.';
}
elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Wenn wir hier ankommen, gab es keine Fehler 
    echo "<p>Alles OK. Username: " .
        get_post_value('username') .
        ", Passwort: " .
        get_post_value('password') .
        "</p>";
}

?>
<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Login</legend>
        
        <!-- Die allgemeine Fehlermeldung -->
        <?= get_error('errors', $errors); ?>

        <div class="formfield">
            <label for="username">Benutzername</label>
            <!-- Die Fehlermeldung für "username" -->
            <?= get_error('username', $errors); ?>
            <input type="text" name="username" id="username"
                <?= get_post_value('username'); ?>
            >
        </div>

        <div class="formfield">
            <label for="password">Passwort</label>
            <!-- Die Fehlermeldung für "password" -->
            <?= get_error('password', $errors); ?>
            <input type="password" name="password" id="password">
        </div>

        <div class="formfield">
            <button type="submit">Absenden</button>
        </div>
    </fieldset>
</form>

</body>
</html>