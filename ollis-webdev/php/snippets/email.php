<?php
declare(strict_types=1);

$to = "cartwright@bonanza.com";
$subject = "Howdy!";
$headers  = "From: torfboy@humus.com\r\n";
$headers .= "Reply-To: torfboy@humus.com\r\n";
$headers .= "CC: rindenheinz@humus.com\r\n";
$headers .= "BCC: rindenheinz@humus.com, ollosch@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$body = <<<MAILBODY
Hi old man,

How are you?

Look at this link: <a href="myDomain.com/register.php?username="><script>alert("you have been hacked!")</script>">Funny Cat Pictures!</a>
MAILBODY;

if (mail($to, $subject, $body, $headers)) {
    echo("<p>Email erfolgreich gesendet.</p>");
}
else {
    echo("<p>Versand der Email fehlgeschlagen.</p>");
}
