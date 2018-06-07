<?php 
    // Einen Array mit Fehlermeldungen anlegen und befüllen, falls Felder nicht,
    // oder falsch ausgefüllt werden. 
    $errors = [];
    if ($_SERVER['REQUEST_METHOD'] === "POST") {
        // Sicherheitstoken $token wird geprüft
        if (validate_token()) {
            if (empty($_POST['vorname'])) {
                $errors['vorname'] = 'Geben sie Deinen Vornamen ein.';
            }
            if (empty($_POST['nachname'])) {
                $errors['nachname'] = 'Geben sie Deinen Nachnamen ein.';
            }
            // Wenn Fehlermeldungen im Array sind kommt noch ne Meldung dazu
            if ($errors) {
                $erros['errors'] = 'Leider sind Fehler aufgetreten.';
            }
            unset($_SESSION['token']);
        }
        else {
            echo "Token missmatch.";
        }
    }
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <title>Formular und Mail</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Formularvalidierung2</h1>
    <form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
        <input type="hidden" name="token" value="<?= $token; ?>">
        <fielset>
            <div class="formfield">
                <label for="vorname">Vorname</label>
                <?= get_error_message('vorname', $errors) ?>
                <input type="text" name="vorname" id="vorname"
                <?= get_post_value('vorname') ?>
                >
            </div>
            
            <div class="formfield">
                <label for="nachname">Nachname</label>
                <?= get_error_message('nachname', $errors) ?>
                <input type="text" name="nachname" id="nachname"
                <?= get_post_value('nachname') ?>
                >
            </div>
            <div class="formfield">
                <button type="submit">Absenden</button>
            </div>
        </fielset>
    </form>
</body>
</html>