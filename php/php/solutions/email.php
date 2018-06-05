<?php declare(strict_types=1);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandbox</title>
</head>
<body>

<?php
    echo mail('hallo@hoelle.de', 'Hallo', 'Huhu, alles ok?');
    var_dump($_GET);
?>
</body>
</html>




