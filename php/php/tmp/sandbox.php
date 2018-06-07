<?php declare(strict_types=1);

// FUNKTIONEN
function get_post_value(string $fieldname) : string
{
    if (!empty($_POST[$fieldname])) {
        return ' value="' . htmlspecialchars($_POST[$fieldname], ENT_QUOTES) . '" ';
    }

    return '';
}

function get_error(
    string $fieldname,
    array $errors,
    string $format_string = '<div class="message error">%s</div>'
) : string
{
    if (isset($errors[$fieldname])) {
        return sprintf($format_string, $errors[$fieldname]);
    }

    return '';
}

function validate_token() : bool
{
    if (!isset($_POST['token'])) {
        echo "Token in Post missing";
        return false;
    }

    if (!isset($_SESSION['token'])) {
        echo "Token in Session missing";
        return false;
    }

    if ($_POST['token'] !== $_SESSION['token']) {
        echo "Token mismatch";
        return false;
    }

    return true;
}


// VALIDIERUNG
session_start();

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST' && validate_token()) {
    if (empty($_POST['username'])) {
        $errors['username'] = "Bitte geben Sie Ihren Benutzernamen an.";
    }

    if (empty($_POST['password'])) {
        $errors['password'] = "Bitte geben Sie Ihr Passwort an.";
    }

    if (mb_strlen($_POST['password']) >= 1 && mb_strlen($_POST['password']) < 6) {
        $errors['password'] = "Passwort muss mindestens 6 Zeichen lang sein.";
    }

    if (intval($_POST['donation']) !== 0 &&
        (intval($_POST['donation']) < 10 || intval($_POST['donation']) > 50)) {
        $errors['donation'] = "Spenden müssen zwischen 10€ und 50€ liegen.";
    }
}
?>
<!-- HTML -->
<?php
$token = md5(uniqid(microtime(), true));

$_SESSION['token'] = $token;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandbox</title>
    <style>
        .error { color: red; }
    </style>
</head>
<body>

<form action="" method="post">
    <fieldset>
        <legend>Login</legend>

        <input type="hidden" name="token" value="<?= $token ?>">

        <div class="formfield">
            <label for="username">Benutzername</label>
            <?= get_error('username', $errors) ?>
            <input type="text" name="username" id="username"
            <?= get_post_value('username'); ?>
            >
        </div>

        <div class="formfield">
            <label for="password">Passwort</label>
            <?= get_error('password', $errors) ?>
            <input type="password" name="password" id="password">
        </div>

        <div class="formfield">
            <label for="donation">Spende</label>
            <?= get_error('donation', $errors) ?>
            <input type="number" name="donation" id="donation">
        </div>

        <div class="formfield">
            <button type="submit">Einloggen</button>
        </div>
    </fieldset>
</form>

<?php
    var_dump($_POST);
    var_dump($errors);
?>
</body>
</html>



