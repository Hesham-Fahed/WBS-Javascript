<?php declare(strict_types=1); 

session_start();
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Text Forms</title>
    <meta name="description" content="Beispiele für textbasierte Formular-Elemente">
    <link rel="stylesheet" href="">
    <style>.required label { color: #993333; }</style>
</head>
<body>

<?php

/*******************
* HELPER FUNCTIONS *
*******************/
// Diese sind in einer eigenen Bibliothek ausgelagert
include "../../lib/form_helpers.php";

/*************
* VALIDATION *
*************/

$errors = [];

if (($_SERVER['REQUEST_METHOD'] == 'POST') && validate_token()) {
    if (empty($_POST["email"])) {
        $errors["email"] = 'Geben Sie bitte Ihre Email-Adresse an.';
    }

    if (empty($_POST["password"])) {
        $errors["password"] = 'Ohne Passwort kommen Sie hier nicht weiter.';
    }

    if (empty($_POST["textarea"])) {
        $errors["textarea"] = 'Sie müssen uns schon sagen, in welches Geschenkpapier wir ihr Passwort verpacken sollen.';
    }

    if ($errors) {
        $errors["errors"] = 'Bitte füllen sie die Felder für Email, Passwort und Verpackungswunsch aus.';
        // Redirect back to Form page
    }
    else {
        echo "<pre>";
        print_r($_POST);
        echo "</pre>";
        echo "<h2>OK. Ihr Passwort wird jetzt verpackt und sicher gespeichert.</h2>";
        // Redirect to OK Page
    }
    unset($_SESSION['token']);
}
?>


<?php
/*******
* FORM *
********/
$token = md5(uniqid(microtime(), true));
$_SESSION['token'] = $token;

?>
<h1>Textbasierte Formular-Elemente</h1>
<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Wir verpacken ihr Passwort</legend>

        <input type="hidden" name="token" value="<?= $token; ?>">

        <?= get_error('errors', $errors); ?>

        <!-- INPUT FIELD - TEXT -->
        <div class="formfield">
            <label for="text">Ihr Name - Text field, text</label>
            <?= get_error('text', $errors); ?>
            <input type="text" name="text" id="text" <?= get_post_value('text');  ?>>            
        </div>
        
        <!-- TEXT FIELD - EMAIL -->
        <div class="formfield required">
            <label for="email">Ihre Email Adresse - Text field, email</label>
            <?= get_error('email', $errors); ?>
            <input type="email" name="email" id="email" <?= get_post_value('email');  ?> required>            
        </div>

        <!-- TEXT FIELD - PASSWORD -->
        <div class="formfield required">
            <label for="password">Ihr Passwort - Text field, password</label>
            <?= get_error('password', $errors); ?>
            <input type="password" name="password" id="password" <?= get_post_value('password'); ?> required>            
        </div>

        <!-- TEXT AREA -->
        <div class="formfield required">
            <label for="textarea">Ihr Verpackungswunsch - Text area</label>
            <?= get_error('textarea', $errors); ?>
            <textarea name="textarea" id="textarea"><?= get_post_text('textarea'); ?></textarea>
        </div>

        <!-- BUTTON -->
        <div class="formfield buttons">
            <button type="submit">verpacken</button>
        </div>

        <!-- COMMENT -->
        <div class="formfield" style="font-size:80%;">
            Felder mit dunkelroter Beschreibung sind Pflichtfelder.
        </div>
    </fieldset>
</form>

</body>
</html>
