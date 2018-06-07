<?php
declare(strict_types=1);

session_start();

/*******************
 * FORMS AND EMAIL *
 ******************/
?>
<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Forms und Email - Examples</title>
</head>

<body>
<h1>Example Form</h1>

<?php
/*******************
* Helper Functions *
*******************/
function get_post_value(string $fieldname) : string
{
    if (!empty($_POST[$fieldname])) {
        return ' value="' . htmlentities($_POST[$fieldname]) . '" ';
    }
    return '';
}

function get_post_text(string $fieldname) : string
{
    if (!empty($_POST[$fieldname])) {
        return htmlentities(trim($_POST[$fieldname]));
    }
    return '';
}

function get_error(
    string $fieldname,
    array $errors,
    string $formatString = '<div class="message error">%s</div>'
) : string
{
    if (!empty($errors[$fieldname])) {
        return sprintf($formatString, htmlentities($errors[$fieldname]));
    }
    return '';
}

function validate_token()
{
    if (!isset($_SESSION['token'])) {
        echo "HACK: Missing token in SESSION.";
        return false;
    }
    
    if (!isset($_POST['token'])) {
        echo "HACK: Missing token in POST.";
        return false;
    }

    if ($_SESSION['token'] !== $_POST['token']) {
        echo "HACK: POST and SESSION token are different.";
        return false;
    }

    return true;
}


/*************
* Validation *
*************/
$errors = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (validate_token()) {

        if (empty($_POST["name"])) {
            $errors["name"] = 'Geben sie Ihren Namen ein.';
        }

        if (empty($_POST["message"])) {
            $errors["message"] = 'Geben sie Ihre Nachricht ein.';
        }

        if ($errors) {
            $errors["errors"] = 'Es sind Fehler aufgetreten.';
        }
        else { // Kein Fehler
            $name = htmlentities($_POST['name']);
            $message = htmlentities($_POST['message']);

            $to = "cartwright@bonanza.com";
            $topic = "You have a message!";

            $headers  = "From: torfboy@humus.com\r\n";
            $headers .= "Reply-To: torfboy@humus.com\r\n";
            $headers .= "CC: rindenheinz@humus.com\r\n";
            $headers .= "BCC: rindenheinz@humus.com\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

            $body = nl2br($message);

            if (mail($to, $topic, $body, $headers)) {
                echo("<p>Email erfolgreich gesendet.</p>");
                echo("<p>Name: $name</p>");
                echo("<p>Nachricht:<br>$body</p>");
            }
            else {
                echo("<p>Versand der Email fehlgeschlagen.</p>");
            }
        }
        unset($_SESSION['token']);
    }
    else {
        echo "Token Error!!!!";
    }
}
?>


<?php
/*******
* Form *
********/
$token = md5(uniqid(microtime(), true));
$_SESSION['token'] = $token;

?>
<form action="<?= $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <?= get_error('errors', $errors); ?>

        <input type="hidden" name="token" value="<?= $token; ?>">

        <div class="formfield">
            <label for="name">Ihr Name</label>
            <?= get_error('name', $errors); ?>
            <input type="text" name="name" id="name"
                <?= get_post_value('name'); ?>
            >
        </div>

        <div class="formfield">
            <label for="message">Ihre Nachricht</label>
            <?= get_error('message', $errors); ?>
            <textarea name="message" id="message">
                <?= get_post_text('message'); ?>
            </textarea>
        </div>

        <div class="formfield">
            <button type="submit">Absenden</button>
        </div>
    </fieldset>
</form>

</body>
</html>
