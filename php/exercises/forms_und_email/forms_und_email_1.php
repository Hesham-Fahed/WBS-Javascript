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
// Get Checkbox

function get_post_checked($name, $value) {
     
    if (isset($_POST[$name])) {


        if (is_array($_POST[$name]) && in_array($value, $_POST[$name])) {
              return " checked='checked' ";   

        }
       
        elseif ($_POST[$name] == $value) {
             return " checked='checked' "; 
        }
    }
  
    return "";
}
// Get selected

function get_post_selected($name, $value) {
     
    if (isset($_POST[$name])){

        if (is_array($_POST[$name]) && in_array($value, $_POST[$name])) {
              return " selected='selected' ";   
        }
       
        elseif ($_POST[$name] == $value) {
             return " selected='selected' "; 
        }
    }
  
    return "";
}

// Get Text
function get_post_text(string $name) {
    if (!empty($_POST[$name])) {
        return  htmlspecialchars($_POST[$name], ENT_QUOTES);
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
    if (empty($_POST['vorname'])) {
        $errors['vorname'] = "Bitte geben Sie Ihren Benutzernamen an.";
    }
    if (empty($_POST['nachname'])) {
        $errors['nachname'] = "Bitte geben Sie Ihren Benutzernamen an.";
    }

    if (empty($_POST['password'])) {
        $errors['password'] = "Bitte geben Sie Ihr Passwort an.";
    }

    if (mb_strlen($_POST['password']) >= 1 && mb_strlen($_POST['password']) < 6) {
        $errors['password'] = "Passwort muss mindestens 6 Zeichen lang sein.";
    }

    if (!preg_match("/[0-9]{5}$/",$_POST['plz']))  {
        $errors['plz'] = "Postleitzahl muss 5 Zeichen lang sein.";
    }
    
    if (!isset($_POST['geschlecht'])) {
        $errors['geschlecht'] = "Bitte wählen Sie Ihr Geschlecht aus.";
    }
    
    if (!isset($_POST['lieblingscheese'])) {
        $errors['lieblingscheese'] = "Bitte wählen Sie Ihren Käse aus.";
    }
    
    if (!isset($_POST['betreff'])) {
        $errors['betreff'] = "Bitte wählen Sie Ihr Betreff aus.";
    }
    
    if (empty(trim($_POST['nachricht']))) {
        $errors['nachricht'] = "Bitte hinterlassen Sie eine Nachricht.";
    }

  
}
?>
<?php
$token = md5(uniqid(microtime(), true));

$_SESSION['token'] = $token;

?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Übung Form Und Email Vali</title>
    <style>
        input{
            display :block;
        }
        .error { color: red; }
    </style>
</head>

<body>
<h1>Form und Email Vali</h1>
<form method="post" action="" id="myFormId" name="myFormName">
<input type="hidden" name="token" value="<?= $token ?>">
        <fieldset>

            <legend>Persönliche Angaben</legend>
            <label for="vorname">Vorname</label>
            <?= get_error('vorname', $errors) ?>
            <input type="text" id="vorname" name="vorname"
            <?= get_post_value('vorname'); ?>
            >
            
            <label for="nachname">Nachname</label>
            <?= get_error('nachname', $errors) ?>
            <input type="text" id="nachname" name="nachname"
            <?= get_post_value('nachname'); ?>
            >
      
            <label for="plz">PLZ</label>
            <?= get_error('plz', $errors) ?>
            <input type="text" id="plz" name="plz"
            <?= get_post_value('plz'); ?>
            >

            <label for="password">Password</label>
            <?= get_error('password', $errors) ?>
            <input type="password" id="password" name="password">
            
        </fieldset>
        <fieldset>
            <legend>Geschlecht</legend>
            <?= get_error('geschlecht', $errors); ?>
            Weiblich: <input type="radio" id="radio_weiblich" name="geschlecht" value="w"
            <?= get_post_checked("geschlecht","w");?>>
            Männlich: <input type="radio" id="radio_männlich" name="geschlecht" value="m"
            <?=get_post_checked("geschlecht","m");?>>
        </fieldset>
        <fieldset>
            <legend>Was ist Ihre LieblingsKäse?</legend>
            <?= get_error('lieblingscheese', $errors) ?>
            <input type="checkbox" data-check="cheese" id="gouda" name="lieblingscheese[]" value="gouda" 
            <?= get_post_checked("lieblingscheese","gouda");?>>Gouda |
            <input type="checkbox" data-check="cheese" id="tilsiter" name="lieblingscheese[]" value="tilsiter" <?= get_post_checked("lieblingscheese","tilsiter");?>> Tilsiter |
            <input type="checkbox" data-check="cheese" id="edamer" name="lieblingscheese[]" value="edamer"<?= get_post_checked("lieblingscheese","edamer");?>> Edamer 

            

        </fieldset>
        <fieldset>
            <legend>Betreff</legend>
            <?= get_error('betreff', $errors) ?>
            <select name="betreff" id="betreff">
                <option disabled selected>Bitte wählen</option>

                <option value="support" <?=get_post_selected("betreff","support");?>>Support</option>
                <option value="beschwerde"<?=get_post_selected("betreff","beschwerde");?>>Beschwerde</option>
                <option value="pizza"<?=get_post_selected("betreff","pizza");?>>Pizza</option>

            </select>
        </fieldset>
        <fieldset>
         <legend>Nachricht</legend><?= get_error('nachricht', $errors) ?>
        <textarea  name="nachricht" id="nachricht" cols="20" rows="10" > <?= get_post_text("nachricht");?> </textarea>
            <legend>Newsletter </legend>
          <input type="checkbox" id="newsletter " name="newsletter" value="newsletter" 
          <?= get_post_checked("newsletter","newsletter");?>>
         
        </fieldset>
        <input type="submit" id="submit_btn" name="submit_btn" value="Absenden">
        <input type="reset" id="clearForm" value="Alles löschen">
    </form>
    <?=
    // var_dump(get_post_checked());
    var_dump($_POST);
    echo empty($_POST["nachricht"]);
    ?>

    
</body>
</html>