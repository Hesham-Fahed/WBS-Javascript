<?php
declare(strict_types=1);

function get_error(
    string $fieldname,
    array $errors,
    string $formatstring = '<div class="message error">%s</div>'
) : string
{
    if (!empty($errors[$fieldname])) {
        return sprintf($formatstring, htmlentities($errors[$fieldname]));
    }
    return '';
}


function get_post_value(string $fieldname) : string
{
    if (!empty($_POST[$fieldname])) {
        return ' value="' . htmlentities($_POST[$fieldname]) . '" ';
    }
    return '';
}


function get_post_selected(string $fieldname, string $value) : string
{
    if (isset($_POST[$fieldname])) {
        if (is_array($_POST[$fieldname]) && in_array($value, $_POST[$fieldname])) {
            return ' selected ';
        }
        elseif ($_POST[$fieldname] == $value) {
            return ' selected ';
        }
    }
    return '';
}


function get_post_checked(string $fieldname, string $value) : string
{
    if (isset($_POST[$fieldname])) {
        if (is_array($_POST[$fieldname]) && in_array($value, $_POST[$fieldname])) {
            return ' checked ';
        }
        elseif ($_POST[$fieldname] == $value) {
            return ' checked ';
        }
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


function validate_token() : bool
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
        var_dump($_SESSION['token']);
        echo "HACK: POST and SESSION token are different.";
        return false;
    }

    return true;
}