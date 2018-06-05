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





// Get Text
function get_post_text(string $name){
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form Übung 2</title>
</head>
<body>

<?php 
function pig_latin(string $word) : string {
    $vowels = array('a', 'e', 'i', 'o', 'u');
    $length = strlen($word);

    if (in_array($word[0], $vowels)) {
        return $word . "way";
    }

    while (!in_array($word[0], $vowels) && $length--) {
        $word = substr($word, 1) . $word[0];
    }

    return $word . "ay";
}



?>
    <form action="" method="post">
    <input type="hidden" name="token" value="<?= $token ?>">
    <input type="text" name="name">
    <legend>Nachricht</legend>
    <?= get_error('nachricht', $errors); ?>
        <textarea  name="nachricht" id="nachricht" cols="20" rows="10" ><?= pig_latin(get_post_text("nachricht")); ?></textarea>
        <button type="submit">Send</button>
       
    </form>
    <?php 
    var_dump($_POST);
    ?>
</body>
</html>