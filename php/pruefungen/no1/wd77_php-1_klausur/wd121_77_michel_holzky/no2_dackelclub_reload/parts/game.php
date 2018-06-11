<?php declare(strict_types=1); 


session_start();

$errors = [];
$hit['selectedNumber'] = '';
if ($_SERVER['REQUEST_METHOD'] == 'POST' &&
    validate_token()) {
    if (isset($_POST["name"]) && empty(trim($_POST["name"]))) {
        $errors["name"] = 'Geben Sie bitte Ihren Namen an.';
    }
    if (isset($_POST["birthday"]) && empty(trim($_POST["birthday"]))) {
        $errors["birthday"] = 'Gib dein Geburtsdatum an, bitte.';
    }
    if (isset($_POST["selectedNumber"]) && ($_POST["selectedNumber"] === "Erdbeeren")) {
        $hit['selectedNumber'] = $_POST["selectedNumber"] . " ist richtig. Super!";
    }
    if (!$errors) {
        echo "<h2>Fomular erfolgreich abgeschickt.</h2>";

        if (isset($_POST["newsletter"])) {
            $newsletter = "Newsletter angefordert.";
        } 
        $spiel = !empty($hit['selectedNumber']) ? $hit['selectedNumber'] : 'Falsche Antwort.';
        $to = "erd@nuss.com";
        $subject = "Nachricht von Lucky Number " . $_POST["name"];
        
        $name = $_POST['name'];
        $birthday = $_POST['birthday'];
        $message = "Die Message: " . $_POST['message'];
        $headers = "From: webmaster@example.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $body = "Nachricht:<br>" 
        . "Name: " . $name . "<br>" 
        . "Geburtstag: " . $birthday . "<br>";
        
        $news = isset($newsletter) ? $newsletter : "Newsletter nicht angefordert.";
        $game = "Gewinnspiel:" . $spiel . "<br>" . "Nachricht:" . $message 
        . " Newsletter: " . $news;

        $success = mail($to, $subject, $body, $game, $message);

        if ($success) {
            echo("<p>Email erfolgreich gesendet.</p>");
        }
        else {
            echo("<p>Versand der Email fehlgeschlagen.</p>");
        }
    }
    unset($_SESSION['token']);
}
$hit['selectedNumber'] = '';


function get_hit_message(
    string $fieldname,
    array $hit,
    string $formatstring = '<div class="message hit">%s</div>'
    ) : string {
    if (!empty($hit[$fieldname])) {
        return sprintf($formatstring, $hit[$fieldname]);
    }
    return '';
}

$token = md5(uniqid(microtime(), true));    
?>

<div class="wrapper">
    <form method="POST" class="selectForm">
    
        <fieldset>
            <legend>Welche dieser Pflanzen ist eine Nuss?</legend>
            <input type="hidden" name="token" value="<?= $token; ?>">
            <select name="selectedNumber" id="selectedNumber">
                <option disabled selected>Bitte wählen</option>
                <option value="Cashewnüsse">Cashewnüsse</option>
                <option value="Erdbeeren">Erdbeeren</option>
                <option value="Pimpernuss">Die Gemeine Pimpernuss</option>
                <option value="Mandeln">Mandeln</option>
            </select>
            <?= get_hit_message('selectedNumber', $hit); ?>
        </fieldset>

        <fieldset>
            <legend>Deine Daten</legend>
            
            <div class="inputwrapper">
                <label for="name">Name</label>
                <?= get_error('name', $errors); ?>
                <input type="text" id="name" name="name" 
                <?= get_post_value('name');  ?>
                >
            </div>
            
            <div class="inputwrapper">
                <label for="birthday">Geburtstag</label>
                <?= get_error('birthday', $errors); ?>
                <input type="text" name="birthday" id="birthday" <?= get_post_value('birthday');  ?>>
            </div>
        </fieldset>

        <fieldset>
            <legend>Optionale Angaben</legend>
            
            <div class="inputwrapper">
                <label for="message">Deine Nachricht</label>
                <textarea name="message" id="message"><?= get_post_text('message'); ?></textarea>
            </div>
            
            <div class="inputwrapper">
                <label for="newsletter">Newsletter abonieren</label>
                <input type="checkbox" id="newsletter" name="newsletter" value="abo" <?= get_post_checked('newsletter', 'abo'); ?>>
            </div>
        </fieldset>
        <button type="submit">Absenden</button>
    </form>
</div> <!-- ende wrapper -->

<?php

$_SESSION['token'] = $token;