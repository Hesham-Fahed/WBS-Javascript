<?php declare(strict_types=1);

    function get_post_value(string $fieldname) : string {
        if (!empty($_POST[$fieldname])) {
            return ' value="' . htmlentities($_POST[$fieldname]) . '" ';           
        }
        return '';
    }

    function get_error(
        string $fieldname,
        array $errors,
        string $error_string = '<div class="message error">%s</div>'
    ) : string 
    {
        if (empty($errors[$fieldname])) {
            return sprintf($error_string, htmlentities($errors[$fieldname]));
        }
        return '';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>PHP Formular</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Formularvalidation</h1>
    <form action="" method="POST">
        <fieldset>
            <legend>Formular</legend>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" <?=
            
                get_post_value('name');

                // if (isset($_POST['name']) && empty($_POST['name'])) {
                //     echo "Benutzernamen eingaben";
                // }
            
            ?>>
        </fieldset>
        <input type="submit" name="submit">
    </form>
</body>
</html>