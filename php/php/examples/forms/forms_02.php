<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Forms - 02</title>
</head>

<body>
<h1>Forms - 02</h1>
<!--
    Im ersten Schritt wollen wir die Eingabe des Benutzers
    wieder in die Textfelder eintragen, wenn das Formular
    Abgeschickt wird.
-->

<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Login</legend>

        <div class="formfield">
            <label for="username">Benutzername</label>
            <input type="text" name="username" id="username" value="<?php
                // wir überprüfen, ob der gesuchte Index "username"
                // im $_POST array leer ist.
                // Wenn er nicht leer ist,
                // bereinigen wir den Wert mit htmlentities und
                // fügen ihn wieder ins Formular ein
                if (!empty($_POST['username'])) {
                    echo htmlentities($_POST['username']);
                }
             ?>">
        </div>

        <div class="formfield">
            <label for="password">Passwort</label>
            <input type="password" name="password" id="password" value="<?php
                // Das Gleiche, wie bei "username", nur für "password"
                if (!empty($_POST['password'])) {
                    echo htmlentities($_POST['password']);
                }
             ?>">
        </div>

        <div class="formfield">
            <button type="submit">Absenden</button>
        </div>
    </fieldset>
</form>

</body>
</html>