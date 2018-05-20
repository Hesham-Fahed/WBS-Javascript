<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>Ereignisse im Formular</title>
</head>
<body><p>
<?php
   echo "Anrede: " . $_POST["anrede"] . "<br>";
   echo "Nachname: " . $_POST["nachname"] . "<br>";
   echo "Vorname: " . $_POST["vorname"] . "<br>";
   if(isset($_POST["reise"]))
      echo "Reise: " . $_POST["reise"] . "<br>";
   echo "Land: " . $_POST["land"] . "<br>";
   echo "Bemerkung: " . $_POST["bemerkung"];
?></p>
</body>
</html>
