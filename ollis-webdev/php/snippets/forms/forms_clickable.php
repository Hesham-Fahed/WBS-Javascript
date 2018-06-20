<?php declare(strict_types=1); 

session_start();
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Click Forms</title>
    <meta name="description" content="Beispiele für klickbare Formular-Elemente">
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

if (($_SERVER['REQUEST_METHOD'] === 'POST') && validate_token()) {
    // Required Fields
    if (empty($_POST["selectbox"])) {
        $errors["selectbox"] = 'Sie müssen wohl eine Pizza auswählen, wenn sie Pizza wollen.';
    }

    if (!isset($_POST["radiobg"])) {
        $errors["radiobg"] = 'Bitte wählen Sie einen Song zur Pizza.';
    }

    if ($errors) {
        $errors["errors"] = 'Bitte füllen Sie alle Pflichtfelder aus.';
        // Redirect back to Form page
    }
    else {
        echo "<pre>";
        print_r($_POST);
        echo "</pre>";
        echo "<h2>OK. Pizza und Musik werden nun zubereitet.</h2>";
        // Redirect to OK Page
    }
    unset($_SESSION['token']);
    
    // Optional Fields
    if (!isset($_POST["checkbox"])) {
        $errors["checkbox"] = 'Sind Sie sicher, dass sie keinen Extra-Käse wollen?';
    }

    if (!isset($_POST["singlecheck"])) {
        $errors["singlecheck"] = 'Kein Einzelkäse?';
    }

}


/*******
* FORM *
********/
$token = md5(uniqid(microtime(), true));
$_SESSION['token'] = $token;
?>

<h1>Klickbare Formular-Elemente</h1>
<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <legend>Pizza Zeppelin</legend>

        <input type="hidden" name="token" value="<?= $token; ?>">

        <?= get_error('errors', $errors); ?>

        <!-- SELECTBOX -->
        <div class="formfield required">
            <label for="selectbox">Wahl der Pizza - Selectbox</label>
            <?= get_error('selectbox', $errors); ?>
            <select name="selectbox" id="selectbox">
                <option value="">-- bitte wählen Sie --</option>
                <option value="margharita" <?= get_post_selected('selectbox', 'margharita'); ?>>Pizza Margharita</option>
                <option value="salami" <?= get_post_selected('selectbox', 'salami'); ?>>Pizza Salami</option>
                <option value="thunfisch" <?= get_post_selected('selectbox', 'thunfisch'); ?>>Pizza Thunfisch</option>
                <option value="vierkaese" <?= get_post_selected('selectbox', 'vierkaese'); ?>>Pizza Vier-Käse</option>
            </select>
        </div>

        <!-- CHECKBOX -->
        <div class="formfield">
            <label for="checkbox">Käsewahl - Checkbox</label>
            <?= get_error('checkbox', $errors); ?>
            <input type="checkbox" name="checkbox[]" value="cheese" <?= get_post_checked('checkbox', 'cheese'); ?>>Extra Käse</input>
            <input type="checkbox" name="checkbox[]" value="morecheese" <?= get_post_checked('checkbox', 'morecheese'); ?>>Noch mehr Käse</input>
            <br>
            <?= get_error('singlecheck', $errors); ?>
            <input type="checkbox" name="singlecheck" value="singlecheck" <?= get_post_checked('singlecheck', 'singlecheck'); ?>>Einzelkäse</input>
        </div>

        <!-- RADIO BUTTONS -->
        <div class="formfield required">
            <label for="radiobg">Led Zeppelin Song - Radio Button Group</label>
            <?= get_error('radiobg', $errors); ?>
            <input type="radio" name="radiobg" value="blackdog" <?= get_post_checked('radiobg', 'blackdog'); ?>>Black Dog</input>
            <input type="radio" name="radiobg" value="mobydick" <?= get_post_checked('radiobg', 'mobydick'); ?>>Moby Dick</input>
        </div>

        <!-- BUTTON -->
        <div class="formfield buttons">
            <button type="submit">absenden</button>
        </div>

        <!-- COMMENT -->
        <div class="formfield" style="font-size:80%;">
            Felder mit dunkelroter Beschreibung sind Pflichtfelder.
        </div>
    </fieldset>
</form>

</body>
</html>