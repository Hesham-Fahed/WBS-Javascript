<?php declare(strict_types=1); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ceasar Cipher</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Ceasar Cipher</h1>

    <?php

    function ceasar_cipher() {
        if($_POST['encodeDecode'] === 'encode') {
            $message = $_POST['message'];
    
            for ($i=0; $i < strlen($message); $i++) {
                $lower_char = strtolower($message);
                $converted_char = ord($lower_char[$i]);
                $converted_char += 13;
                if($converted_char > 122) { 
                    $converted_char -= 26;  
                    } 
                $newmessage[$i] = chr($converted_char);
            }
            
            $return_message = str_replace("-", " ", implode($newmessage));
            return $return_message;
        }
        
        if($_POST['encodeDecode'] === 'decode') {
            $message = $_POST['message'];
    
            for ($i=0; $i < strlen($message); $i++) {
                $lower_char = strtolower($message);
                $converted_char = ord($lower_char[$i]);
                $converted_char -= 13;
                if($converted_char < 97) { 
                    $converted_char += 26;  
                    } 
                $newmessage[$i] = chr($converted_char);
            }
    
            $return_message = str_replace("-", " ", implode($newmessage));
            return $return_message;
        }
    }

    ?>

    <form method="POST" class="selectForm">
        <fieldset>
            <legend>Optionale Angaben</legend>
            
            <div class="inputwrapper">
                <label for="message">Your Message</label>
                <textarea name="message" id="message"></textarea>
            </div>
            
            <div class="inputwrapper">
                <label for="encodeDecode">encode</label>
                <input type="radio" id="encode" name="encodeDecode" value="encode">
                <label for="encodeDecode">decode</label>
                <input type="radio" id="decode" name="encodeDecode" value="decode">
            </div>
        </fieldset>
    <button type="submit">Absenden</button>
</form>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {    
        
    echo ceasar_cipher();

}

?>


</body>
</html>

