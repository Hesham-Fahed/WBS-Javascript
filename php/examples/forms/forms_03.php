<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Forms - 03</title>
</head>

<body>
<h1>Forms - 03</h1>
<!--
    Die Benutzereingaben werden nun wieder
    in die Felder eingetragen.
    
    Als nächstes bauen wir eine (sehr einfache)
    Validierung ein.
-->

<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Login</legend>

        <div class="formfield">
            <label for="username">Benutzername</label>
            <?php
                // Wir überprüfen:
                // 1. mit isset(), ob $_POST["username"] gesetzt ist,
                //    damit beim 1. Aufruf des Formulars keine Fehlermeldung
                //    erscheint ($_POST gibt es dann ja noch gar nicht)
                // UND
                // 2. mit empty(), ob $_POST["username"] leer ist.
                //    Ist es leer, geben wir eine Fehlermeldung aus,
                //    denn der Benutzername ist hier ein Pflichtfeld
                if (isset($_POST["username"]) && empty($_POST["username"])) {
                    echo '<div class="message error">Geben sie einen Benutzernamen ein.</div>';
                }
            ?>
            <input type="text" name="username" id="username" value="<?php
                if (!empty($_POST['username'])) {
                    echo htmlentities($_POST['username']);
                }
             ?>">
        </div>

        <div class="formfield">
            <label for="password">Passwort</label>
            <?php
                // Analog zu "username", nur für "password"
                if (isset($_POST["password"]) && empty($_POST["password"])) {
                    echo '<div class="message error">Geben sie ein Passwort ein.</div>';
                }
            ?>
            <input type="password" name="password" id="password">
        </div>

        <div class="formfield">
            <button type="submit">Absenden</button>
        </div>
    </fieldset>
</form>

</body>
</html>