<?php declare(strict_types=1);

include_once "../../webdev/php/lib/form_helpers.php";

session_start();

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST' && validate_token()) {
    if (empty($_POST['fname'])) {
        $errors['fname'] = "Bitte geben Sie Ihren Vorname an.";
    }
    if (empty($_POST['lname'])) {
        $errors['lname'] = "Bitte geben Sie Ihren Nachname an.";
    }
    if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Bitte geben Sie Ihren Email an.";
    }
    if (empty($_POST['msg'])) {
        $errors['msg'] = "Bitte geben Sie Ihren Nachricht an.";
    }
    if (empty($errors)) {
    echo sendmail($_POST);
    }
}

$token = md5(uniqid(microtime(), true));
$_SESSION['token'] = $token;

function sendmail(array $data) {
    $to="me@example.de";
    $subject = $data['lname'].$data['fname'];
    $emailadresse = $data['email'];
    $message = $data['msg'];
    if(!empty($data) && mail($to,$subject,$message,$emailadresse)){
        return "<h1>GESENDET</h1>";
    }
}

?>
<div class="container">
<div class="container clearfix">
<form action="" method="POST">
    <fieldset>
    <legend>Kontakt</legend>
    <input type="hidden" name="token" value="<?=$token?>" >
    <div class="form-group">
        <label for="email">E-Mail Address</label>
        <?= get_error('email', $errors)?>
        <input type="email" class="form-control" id="email" name="email"
        <?= get_post_value('email');?>
        >
    </div>
    <div class="form-group">
        <label for="fname">Vorname</label>
        <?= get_error('fname', $errors)?>
        <input type="text" class="form-control" id="fname" name="fname"
        <?=  get_post_value('fname');?>
        >
    </div>
    <div class="form-group">
        <label for="lname">Nachname</label>
        <?= get_error('lname', $errors)?>
        <input type="text" class="form-control" id="lname" name="lname"
        <?= get_post_value('lname');?>
        >
    </div>
    <div class="form-group">
        <label for="msg">Ihre Nachricht</label>
        <?= get_error('msg', $errors)?>
        <textarea class="form-control" row="3" id="msg" name="msg"><?=$right = get_post_text('msg')?></textarea>
    </div>
    <input type="submit" class="btn btn-danger " value="Senden" name="btn"> 
    </fieldset>
    
</form>
</div>
</div>

<?php
var_dump($_POST);
?>