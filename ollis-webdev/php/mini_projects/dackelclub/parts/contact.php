<?php declare(strict_types=1); 

require_once "lib/form_helpers.php";

session_start();

$errors = [];

if (($_SERVER['REQUEST_METHOD'] === 'POST') && validate_token()) {
    if (empty($_POST["name"])) {
        $errors["name"] = 'Geben Sie bitte Ihren Namen an.';
    }

    if (empty($_POST["message"])) {
        $errors["message"] = 'Geben sie bitte Ihre Nachricht ein.';
    }

    if (!$errors) {
        // Wenn HTML Mail verschickt wird, müssen Benutzereingaben
        // wie Name und Nachricht mit htmlspecialchars oder
        // htmlentities bereinigt werden!!!
        $name = $_POST['name'];
        $message = $_POST['message'];
        $to = "waldi@dackelclub-cabanossi.de";
        $subject = "Nachricht von: " . $name;
        $body = $name . " schreibt:/n" . $message;

        if (mail($to, $subject, $body)) {
            header("Location: index.php?message=mail_sent");
        }
        else {
            header("Location: index.php?message=mail_error");
        }
    }
    unset($_SESSION['token']);    
}

$token = md5(uniqid(microtime(), true));
$_SESSION['token'] = $token;
?>

<h1>Kontaktformular</h1>
<form method="POST"
      action="<?= $_SERVER["SCRIPT_NAME"] . '?page=contact'; ?>"
>

    <input type="hidden" name="token" value="<?= $token; ?>">

    <fieldset>
        <legend>Ihre Daten</legend>

       <!-- Name -->
        <div class="form-group row required">
            <label class="col-sm-2 col-form-label" for="name">Ihr Name</label>
            <div class="col-sm-10">
                <?= get_error('name', $errors, "<p class='text-danger'>%s</p>"); ?>
                <input class="form-control" type="text" name="name" id="name" <?= get_post_value('name');  ?>>            
            </div>
        </div>

        <!-- Nachricht -->
        <div class="form-group row required">
            <label class="col-sm-2 col-form-label" for="message">Ihre Nachricht</label>
            <div class="col-sm-10">
                <?= get_error('message', $errors, "<p class='text-danger'>%s</p>"); ?>
                <textarea class="form-control" name="message" id="message"><?= get_post_text('message'); ?></textarea>
            </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary btn-block">versenden</button>

    </fieldset>
</form>
