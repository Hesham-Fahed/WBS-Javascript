<?php declare(strict_types=1);

function get_post_value($fieldname) : string {
        if(!empty($_POST[$fieldname])) {
            return ' value="' . htmlentities($_POST[$fieldname]) . '" ';
        }
        return '';
}

function get_error_message(
    string $fieldname, 
    array $errors,
    string $formatstring = "<div class='error-msg'>%s</div>"
    ) : string {
    if (!empty($errors[$fieldname])) {
        return sprintf($formatstring, $errors[$fieldname]);
    }
    return '';
}

function validate_token() : bool {
    if (!isset($_SESSION['token'])) {
        echo "Missing token in SESSION.";
        return false;
    }
    if (!isset($_POST['token'])) {
        echo "Missing token in POST";
        return false;
    }
    if ($_POST['token'] !== $_SESSION['token']) {
        echo "Token missmatch. POST !== SESSION";
        return false;
    }
    return true; 
}