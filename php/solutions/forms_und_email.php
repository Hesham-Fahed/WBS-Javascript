<?php
declare(strict_types=1);

// session_start();
// var_dump($_POST);
// var_dump($_SESSION);


/******************************
* SOLUTIONS - FORMS UND EMAIL *
******************************/

// In dieser Übung lernen wir, ein umfangreiches Formular
// zu erstellen. Gleichzeitig lernen wir, mit längeren und
// deshalb komplexeren PHP Dateien umzugehen.

// Überspringe zunächst den folgenden Code
// und gehe direkt zur Beschreibung der Übung
// (Zeile 80)

// Wir haben bereits folgende Funktionen:
function get_error(
    string $fieldname,
    array $errors,
    string $formatString = '<div class="message error">%s</div>'
) : string {
    if (!empty($errors[$fieldname])) {
        return sprintf($formatString, htmlentities($errors[$fieldname]));
    }
    return '';
}


function get_post_value(string $fieldname) : string {
    if (!empty($_POST[$fieldname])) {
        return ' value="' . htmlentities($_POST[$fieldname]) . '" ';
    }
    return '';
}


function validate_token() {
    if (!isset($_SESSION['token'])) {
        echo "HACK: Missing token in SESSION.";
        return false;
    }
    
    if (!isset($_POST['token'])) {
        echo "HACK: Missing token in POST.";
        return false;
    }

    if ($_SESSION['token'] !== $_POST['token']) {
        echo "HACK: POST and SESSION token are different.";
        return false;
    }

    return true;
}

// Hier könnt ihr natürlich auch eure eigene
// Implementierung verwenden.
function pig_latin(string $word) : string {
  $vowels = array('a', 'e', 'i', 'o', 'u');
  $firstVowel = PHP_INT_MAX;

  foreach ($vowels as $vowel) {
    $idx = mb_stripos($word, $vowel);
    if($idx !== FALSE) {
      $firstVowel = min($idx, $firstVowel);
    }
  }

  if ($firstVowel === 0) {
    return $word . 'way';
  }
  else {
    return mb_substr($word, $firstVowel) .
        mb_substr($word, 0, $firstVowel) . 'ay';
  }
}



/* Übung 1 : Helper Functions
   ==========================
Unsere Hilfsfunktion get_post_value() liest einen mit value="bla"
angegebenen Wert aus dem POST aus, bereinigt ihn und gibt ihn
so zurück, dass wir er direkt wieder ins HTML eingefügt werden
kann.

Andere Formelemente übergeben ihre Werte nicht mit value="bla"
sondern zB mit einem einfachen "checked" oder "selected".

Wenn ihr euch unsicher seid, welches Formelement was übergibt,
könnt ihr euch die Werte mit einem var_dump oder print_r
anzeigen lassen.

Nun zur Aufgabe:

Schreibt die folgenden Hilfsfunktionen:
  - get_post_selected(string $fieldname, string $value) : string
      für <select name="selectbox"

  - get_post_checked(string $fieldname, string $value) : string
      für <input type="checkbox" und type="radio"

  - get_post_text(string $fieldname) : string
      für <textarea

fieldname ist hier der Name des Feldes im HTML (name="myName")
value ist der Wert des Feldes, sofern dieses gesetzt wurde (value="cheese")
  (zB bei Checkboxes und Radiobuttons:  value="cheese")

Die Funktionen geben den ins HTML einzufügenden String aus.
  <textarea name="textarea"><?= get_post_text('textarea'); ?></textarea>

Beachtet den Sonderfall der Checkbox:
  <input type="checkbox" name="toppings[]" value="cheese" ...
  <input type="checkbox" name="toppings[]" value="salami" ...

In diesem Fall ist der Wert von $_POST['toppings'] ein Array.
  [ 'cheese', 'salami' ]

Es muss also zwischen zwei Arten von Checkbox unterschieden werden:
1.  <input ... name="mycheckbox"     gibt einen String an PHP
2.  <input ... name="mycheckbox[]"   gibt ein Array aus Strings an PHP

Die beiden Funktionen:
  is_[]
  in_[]
helfen Euch hierbei bestimmt.
*/

function get_post_selected(string $fieldname, string $value) : string {
    if (isset($_POST[$fieldname])) {
        if (is_array($_POST[$fieldname]) && in_array($value, $_POST[$fieldname])) {
            return ' selected ';
        } elseif ($_POST[$fieldname] == $value) {
            return ' selected ';
        }
    }
    return '';
}


function get_post_checked(string $fieldname, string $value) : string {
    if (isset($_POST[$fieldname])) {
        if (is_array($_POST[$fieldname]) && in_array($value, $_POST[$fieldname])) {
            return ' checked ';
        } elseif ($_POST[$fieldname] == $value) {
            return ' checked ';
        }
    }
    return '';
}


function get_post_text(string $fieldname) : string {
    if (!empty($_POST[$fieldname])) {
        return htmlentities($_POST[$fieldname]);
    }
    return '';
}


/* Übung 2 : HTML Forms und PHP
  ==============================
Implementiert ein sicheres Formular zum Versenden von Emails.
Es soll folgende Informationen vom Benutzer aufnehmen,
validieren und, bei korrekter Eingabe, einen var_dump von
$_POST ausgeben.

- Vorname
- Nachname
- Postleitzahl (Deutschland, also 5 Ziffern)
- Email
- Geschlecht (radio buttons)
- Lieblingskäse (gib 3 Sorten zur Auswahl. Mindestens eine muss ausgewählt werden)
    benutze dazu mehrere Checkboxes
- Betreff (Selectbox mit: "Support", "Beschwerde" und "Pizza")
- Nachricht (textarea mit der Nachricht des Benutzers)
- Newsletter abonieren (checkbox)
*/


/*************
* VALIDATION *
*************/
session_start();

$errors = [];
$form_id = "contactform";

if (
    isset($_POST['submit']) &&
    $_POST['submit'] === $form_id &&
    $_SERVER['REQUEST_METHOD'] == 'POST' &&
    validate_token()
) {
    // Vorname
    if (
        isset($_POST["firstname"]) &&
        // empty(trim(VALUE)) funktioniert erst ab PHP 5.5
        // Davor akzeptierte empty() nur eine Variable. Man müsste dann also
        // das Ergebnis von trim() in einer Variablen speichern, und diese an
        // empty() übergeben:
        // $trimmed = trim(VALUE);
        // if(empty($trimmed) ...
        empty(trim($_POST["firstname"]))
    ) {
        $errors["firstname"] = 'Geben Sie bitte Ihren Vornamen an.';
    }

    // Nachname
    if (isset($_POST["lastname"]) && empty(trim($_POST["lastname"]))) {
        $errors["lastname"] = 'Geben Sie bitte Ihren Nachnamen an.';
    }

    // Postleitzahl leer
    if (isset($_POST["zipcode"]) && empty(trim($_POST["zipcode"]))) {
        $errors["zipcode"] = 'Geben Sie bitte Ihre Postleitzahl an.';
    }

    // Postleitzahl enhält nicht genau 5 Ziffern
    if (isset($_POST["zipcode"]) && !preg_match("/^[0-9]{5}$/", $_POST["zipcode"])) {
        $errors["zipcode"] = 'Geben Sie bitte eine gültige Postleitzahl an.';
    }

    // Email leer
    if (isset($_POST["email"]) && empty(trim($_POST["email"]))) {
        $errors["email"] = 'Geben Sie bitte Ihre Email-Adresse an.';
    }

    // Email hat kein gültiges Format
    if (
        isset($_POST["email"]) &&
        (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false)
    ) {
        $errors["email"] = 'Geben Sie bitte eine valide Email-Adresse an.';
    }

    // Geschlecht
    if (!isset($_POST["gender"])) {
        $errors["gender"] = 'Bitte geben Sie Ihr Geschlecht an.';
    }

    // Lieblingskäse
    if (!isset($_POST["cheese"]) || (count($_POST["cheese"]) < 1)) {
        $errors["cheese"] = 'Wählen Sie mindestens eine Käsesorte aus.';
    }

    // Betreff
    if (isset($_POST["topic"]) && empty($_POST["topic"])) {
        $errors["topic"] = 'Bitte wählen Sie einen Betreff aus.';
    }

    // Nachricht
    if (isset($_POST["message"]) && empty($_POST["message"])) {
        $errors["message"] = 'Bitte geben Sie ihre Nachricht ein.';
    }

    // Newsletter braucht keine Validierung

    if ($errors) {
        $errors["errors"] = 'Bitte füllen Sie alle Pflichtfelder aus.';
        // Redirect back to Form page
    }
    else {
        echo "<h2>Fomular erfolgreich abgeschickt.</h2>";
        // Redirect to OK Page
    }
    unset($_SESSION['token']);
}
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Text Forms</title>
    <meta name="description" content="Beispiele für textbasierte Formular-Elemente">
    <link rel="stylesheet" href="">
    <style>
        .required label { color: #993333; }
        .error { color: #FF0000; }
    </style>
</head>
<body>


<?php
/*******
* FORM *
********/

// We will write the new token into the session later.
// If we do it now, the validate_token will fail for
// the second form.
// $_SESSION['token'] = $token;

// We'll use the same token for both forms
// We generate it here because we need it for this form
$token = md5(uniqid(microtime(), true));
?>

<h1>Kontaktformular</h1>
<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Ihre Daten</legend>

        <input type="hidden" name="token" value="<?= $token; ?>">

        <?= get_error('errors', $errors); ?>

        <!-- Vorname -->
        <div class="formfield required">
            <label for="firstname">Vorname</label>
            <?= get_error('firstname', $errors); ?>
            <input type="text" name="firstname" id="firstname" <?= get_post_value('firstname');  ?>>
        </div>

        <!-- Nachname -->
        <div class="formfield required">
            <label for="lastname">Nachname</label>
            <?= get_error('lastname', $errors); ?>
            <input type="text" name="lastname" id="lastname" <?= get_post_value('lastname');  ?>>
        </div>

        <!-- Postleitzahl -->
        <div class="formfield required">
            <label for="zipcode">Postleitzahl</label>
            <?= get_error('zipcode', $errors); ?>
            <input type="number" name="zipcode" id="zipcode" <?= get_post_value('zipcode');  ?>>
        </div>

        <!-- Email -->
        <div class="formfield required">
            <label for="email">Email</label>
            <?= get_error('email', $errors); ?>
            <input type="email" name="email" id="email" <?= get_post_value('email');  ?>>
        </div>

        <!-- Geschlecht -->
        <div class="formfield required">
            <label for="gender">Geschlecht</label>
            <?= get_error('gender', $errors); ?>
            <input type="radio" name="gender" value="male" <?= get_post_checked('gender', 'male'); ?>>männlich</option>
            <input type="radio" name="gender" value="female" <?= get_post_checked('gender', 'female'); ?>>weiblich</option>
        </div>

        <!-- Lieblingskäse -->
        <div class="formfield required">
            <label for="cheese">Käsewahl</label>
            <?= get_error('cheese', $errors); ?>
            <input type="checkbox" name="cheese[]" value="edamer" <?= get_post_checked('cheese', 'edamer'); ?>>Edamer</option>
            <input type="checkbox" name="cheese[]" value="gouda" <?= get_post_checked('cheese', 'gouda'); ?>>Gouda</option>
            <input type="checkbox" name="cheese[]" value="tilsiter" <?= get_post_checked('cheese', 'tilsiter'); ?>>Tilsiter</option>
        </div>

        <!-- Betreff -->
        <div class="formfield required">
            <label for="selectbox">Betreff</label>
            <?= get_error('topic', $errors); ?>
            <select name="topic" id="topic">
                <option value="">-- bitte wählen Sie --</option>
                <option value="support" <?= get_post_selected('topic', 'support'); ?>>Support</option>
                <option value="beschwerde" <?= get_post_selected('topic', 'beschwerde'); ?>>Beschwerde</option>
                <option value="pizza" <?= get_post_selected('topic', 'pizza'); ?>>Pizza</option>
            </select>
        </div>

        <!-- Nachricht -->
        <div class="formfield required">
            <label for="message">Nachricht</label>
            <?= get_error('message', $errors); ?>
            <textarea name="message" id="message"><?= get_post_text('message'); ?></textarea>
        </div>

        <!-- Newsletter -->
        <div class="formfield">
            <label for="newsletter">Newsletter</label>
            <?= get_error('newsletter', $errors); ?>
            <input type="checkbox" name="newsletter" value="newsletter" <?= get_post_checked('checkbox', 'cheese'); ?>>Abonieren?</option>
        </div>

        <!-- Submit Button -->
        <div class="formfield buttons">
            <button type="submit" name="submit" value="<?= $form_id ?>">verpacken</button>
        </div>

        <!-- Kommentar -->
        <div class="formfield" style="font-size:80%;">
            Felder mit dunkelroter Beschreibung sind Pflichtfelder.
        </div>
    </fieldset>
</form>


<?php

/* Übung 3a : Pig Latin Converter
  ================================
Erzeuge ein sicheres Formular mit zwei Feldern. In ein Feld soll der Benutzer
seinen Namen eintragen können, in das andere einen Text, der in Pig-Latin
umgewandelt werden soll.

Du kannst dazu unsere Funktion pig_latin() aus der Übung 4 zu Funktionen benutzen.
*/


/* Übung 3b : Emailversand mit dynamischem Inhalt
   =============================================

Ergänze Übung 3a um eine Email-Funktionalität. Der in pig_latin verwandelte Text
soll jetzt per Email versendet werden.

Die Email soll folgendes Format haben:

Neue Nachricht von: Cicero (<- der Name aus dem Formular)

Nachricht:
Onceway uponway away idnightmay earydray, ilewhay Iway onderedpay, eakway andway earyway,
Overway anymay away aintquay andway uriouscay olumevay ofway  orgottenfay orelay
*/


/*************
* VALIDATION *
*************/
// Eigentlich haben wir hier so gut wie keine Validierung

// session_start();         Session läuft bereits
$errors = [];
$form_id = "pig_latin";

if (
    isset($_POST['submit']) &&
    $_POST['submit'] === $form_id &&
    $_SERVER['REQUEST_METHOD'] == 'POST' &&
    validate_token()
) {
    // Name
    if (isset($_POST["name"]) && empty(trim($_POST["name"]))) {
        $errors["name"] = 'Geben Sie bitte Ihren Nachnamen an.';
    }

    // Satz
    if (isset($_POST["sentence"]) && empty($_POST["sentence"])) {
        $errors["sentence"] = 'Bitte geben Sie einen Satz ein.';
    }

    if ($errors) {
        $errors["errors"] = 'Bitte füllen Sie alle Pflichtfelder aus.';
        // Redirect back to Form page
    }
    else {
        echo "<h2>Fomular erfolgreich abgeschickt.</h2>";

        echo "<h2>Ihr Satz in Pig Latin</h2>";
        $words = explode(" ", get_post_text('sentence'));
        $result = "";
        foreach ($words as $word) {
            $result .= pig_latin($word) . " ";
        }

        echo "<p>$result</p>";

        // Übung 3b
        // Statt einem "echo $result" versenden wir jetzt eine Email:
        $name = $_POST['name'];
        $sentence = $_POST['sentence'];
        $to = "cartwright@bonanza.com";
        $subject = "Neue Nachricht von: " . $name;
        $headers = "From: webmaster@example.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $body = "Nachricht:<br>" . $result;

        $success = mail($to, $subject, $body, $headers);

        if ($success) {
            echo("<p>Email erfolgreich gesendet.</p>");
        }
        else {
            echo("<p>Versand der Email fehlgeschlagen.</p>");
        }
    }
    unset($_SESSION['token']);
}

?>
<?php
/*******
* FORM *
********/
// We'll reuse the token of the first form
// $token = md5(uniqid(microtime(), true));
?>

<h1>Pig Latin</h1>
<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <input type="hidden" name="token" value="<?= $token; ?>">

        <?= get_error('errors', $errors); ?>

        <!-- Name des Benutzers -->
        <div class="formfield">
            <label for="name">Ihr Name</label>
            <?= get_error('name', $errors); ?>
            <input type="text" name="name" id="name" <?= get_post_value('name'); ?>>
        </div>

        <!-- Eingabe des Benutzers -->
        <div class="formfield">
            <label for="sentence">Ihr Satz</label>
            <?= get_error('sentence', $errors); ?>
            <textarea name="sentence" id="sentence"><?= get_post_text('sentence'); ?></textarea>
        </div>

        <!-- Submit Button -->
        <div class="formfield buttons">
            <button type="submit" name="submit" value="<?= $form_id ?>">umwandeln</button>
        </div>

    </fieldset>
</form>

<?php
// At the very end, we will write the token into the session
$_SESSION['token'] = $token;