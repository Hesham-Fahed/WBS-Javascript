 <!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Forms - 05</title>
</head>

<body>
<h1>Forms - 05</h1>
<!--
    Validierung und Fehlermeldungen sind nun in Funktionen
    ausgelagert. Das HTML sieht schon bedeutend sauberer aus.

    Es gibt jetzt noch ein Problem.
    Denn man kann POST Anfragen auch fälschen. Es gibt also
    Möglichkeiten, Daten an den Server zu senden, die aussehen,
    als kämen sie von unserem Formular, die aber gar nicht
    über das Formular abgeschickt wurden.

    Um dies zu verhindern, wollen wir im Formular eine
    zufällig generierte ID speichern, ein sogenanntes Token.
    Das gleiche Token speichern wir auch auf dem Server.

    Wenn jetzt das Formular abgeschickt wird, vergleichen wir
    ob das Token im Formular gleich dem Token auf dem Server ist.

    Weil bei jeder Anfrage ein neues Token generiert wird,
    ist es für einen Angreifer sehr schwer, die Anfrage zu
    fälschen. Jeder Benutzer hat ja bei jeder Anfrage ein neues,
    zufälliges Token.

    Wir schreiben uns eine Hilfsfunktion, die überprüft,
    ob im Formular und auf dem Server ein Token vorhanden ist.
    Wenn ja, überprüfen wir, ob beide gleich sind.
    Die Funktion soll validate_token() heißen (siehe unten)
-->

<?php
/*******************
* HELPER FUNCTIONS *
*******************/
function get_post_value(string $fieldname) : string
{
    if (!empty($_POST[$fieldname])) {
        return ' value="' . htmlentities($_POST[$fieldname]) . '" ';
    }
    return '';
}

function get_error(
    string $fieldname,
    array $errors,
    string $formatString = '<div class="message error">%s</div>'
) : string
{
    if (!empty($errors[$fieldname])) {
        return sprintf($formatString, htmlentities($errors[$fieldname]));
    }
    return '';
}

// Wir geben jeder Form eine eigene ID.
// So könnten wir zwischen mehreren Forms auf der selben
// Seite unterscheiden.
function validate_token()
{
    // Gibt es ein Token auf dem Server, also in der Session?
    if (!isset($_SESSION['token'])) {
        echo "HACK: Missing token in SESSION.";
        return false;
    }
    
    // Gibt es ein Token im Formular?
    if (!isset($_POST['token'])) {
        echo "HACK: Missing token in POST.";
        return false;
    }

    // Sind die beiden Token ungleich?
    if ($_SESSION['token'] !== $_POST['token']) {
        echo "HACK: POST and SESSION token are different.";
        return false;
    }

    // Beide Token vorhanden und gleich
    return true;
}


/*************
* VALIDATION *
*************/
$errors = [];

// Wir starten eine Session auf dem Server
// Damit können wir in der Superglobalen $_SESSION
// Werte speichern. Diese Werte bleiben auch erhalten,
// wenn wir die Seite neu laden.
// Wir benutzen die Session, um unser Token zu speichern.
session_start();

// Wir überprüfen, ob es sich um einen POST Request handelt
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sind die Token gesetzt sind und stimmen sie überein
    if (validate_token()) {
        // Es ist ein POST Request und die Token sind OK
        // Also führen wir unsere normale Validierung durch
        if (empty($_POST["username"])) {
            $errors["username"] = 'Geben sie ein Benutzernamen ein.';
        }

        if (empty($_POST["password"])) {
            $errors["password"] = 'Geben sie ein Passwort ein.';
        }

        if ($errors) {
            $errors["errors"] = 'Es sind Fehler aufgetreten.';
        }
        else { // Kein Fehler
            echo "<p>Alles OK. Username: " .
                get_post_value('username') .
                ", Passwort: " .
                get_post_value('password') .
                "</p>";
        }
        // Immer, wenn das Formular abgeschickt wurde, machen
        // wir das letzte Token ungültig.
        // Wir löschen es aus der Session
        unset($_SESSION['token']);
    }
    else {
        echo "Token Error!!!!";
    }
}
?>


<?php
/*******
* FORM *
********/
// Hier generieren wir schließlich unser Token.
// Es gibt viele Möglichkeiten, dies zu tun.
// Wir lassen uns mit "microtime()" die aktuelle Unix-Zeit
// in Mikrosekunden geben, also ein großes Integer
// Mit uniqid() generieren wir daraus einen einzigartigen
// Wert (genau das ist die Aufgabe der Funktion)
// Dann bilden wir mit md() ein Hash des Wertes.
//
// Dies gibt uns einen sehr zufälligen String
$token = md5(uniqid(microtime(), true));

// Diesen String speichern wir unter dem Namen der Funktion
// plus "_token" in der Session.
$_SESSION['token'] = $token;

?>
<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Login</legend>

        <?= get_error('errors', $errors); ?>

        <!-- Im Formular verwenden wir ein "hidden" input field
             um unser Token zu speichern. Dieses Feld lesen wir
             beim Absenden des Formulars aus und vergleichen
             es mit dem in der Session gespeicherten Wert -->
        <input type="hidden" name="token" value="<?= $token; ?>">

        <div class="formfield">
            <label for="username">Benutzername</label>
            <?= get_error('username', $errors); ?>
            <input type="text" name="username" id="username"
                <?= get_post_value('username'); ?>
            >
        </div>

        <div class="formfield">
            <label for="password">Passwort</label>
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