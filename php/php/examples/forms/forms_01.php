<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Forms - 01</title>
</head>

<body>
<h1>Forms - 01</h1>
<!--
    Ein einfaches HTML Formular.
-->

<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Login</legend>

        <div class="formfield">
            <label for="username">Benutzername</label>
            <input type="text" name="username" id="username">
        </div>

        <div class="formfield">
            <label for="password">Passwort</label>
            <input type="password" name="password" id="password">
        </div>

        <div class="formfield">
            <button type="submit">Absenden</button>
        </div>
    </fieldset>
</form>

</body>
</html>