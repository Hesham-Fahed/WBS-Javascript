---
layout: techdoc
title: Forms und Email
order: 700
examples: true
exercises: true
solutions: true
---
* TOC
{:toc}

## Grundlagen
Formulare sind das, was das Internet treibt. Sei es ein Facebook-Post, eine Twitter-Nachricht, ein Instagramm-Bild oder ein Kommentar zu einem dieser Dinge. Sie alle haben eins gemeinsam: Sie verwenden zur Erfassung der Daten (Text oder Dateien) Formulare.

In diesem Kapitel erstellen wir uns mit Hilfe von PHP ein einfaches Login-Formular. Wir beginnen mit dem reinen HTML-Gerüst und bauen nach und nach die benötigten Funktionalitäten ein.

## Ein einfaches Formular
Im ersten Schritt legen wir ein einfaches Formular mit zwei Feldern an:
```php
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Forms</title>
</head>

<body>
<h1>Forms</h1>

<form action="<?php echo $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        <div class="formfield">
            <label for="username">Benutzername</label>
            <input type="text" name="username" id="username">
        </div>

        <div class="formfield">
            <label for="password">Passwort</label>
            <input type="password" name="password" id="password">
        </div>

        <div class="formfield">
            <button type="submit">Absenden</button>
        </div>
    </fieldset>
</form>

</body>
</html>
```


## Benutzereingaben wieder eintragen
Im nächsten Schritt wollen wir die Eingaben des Benutzers wieder in die Formularfelder eintragen, wenn das Formular abgeschickt wird, aber Fehler enthält.

Dazu überprüfen wir zunächst, ob der gesuchte Index _username_ und _password_ im $_POST-Array leer ist.

Wenn er nicht leer ist, bereinigen wir den Wert mit _htmlentities_ und fügen ihn wieder ins Formular ein. Das Code-Snippet für den _username_ sieht so aus:
```php
<input type="text" name="username" id="username" value="<?php
    if (!empty($_POST['username'])) {
        echo htmlentities($_POST['username']);
    }
    ?>">
```


## Validierung
Als nächstes fügen wir eine einfache Validierung der Felder hinzu, so dass wir gegebenenfalls eine Fehlermeldung ausgeben können. Beide Felder sollen Pflichtfelder sein.

Dazu überprüfen wir zwei Dinge:
1. Ist `$_POST["username"]` überhaupt gesetzt?

   Wenn wir das Formular zum ersten Mal aufrufen, existiert `$_POST` noch gar nicht, denn wir haben die Seite ja über ein _GET_ angefordert.

   Würden wir jetzt versuchen, auf `$_POST["username"]` zuzugreifen, erhielten wir eine Fehlermeldung.
   
   Wir überprüfen dies mit der Funktion `isset()`.
1. Hat der Benutzer einen Wert eingetragen.

   Da beide Felder Pflichtfelder sein sollen, überprüfen wir anschließend, ob der Benutzer überhaupt etwas eingetragen hat.

   Dazu verwenden wir die Funktion `empty()`.


```php
<div class="formfield">
    ...
    <?php
        if (empty($_POST["username"])) {
            echo '<div class="message error">Geben sie einen Benutzernamen ein.</div>';
        }
    ?>
    ...
</div>
```


## DRY: Helper Funktionen
Die Formularfelder werden nun validiert und eingetragene Werte bleiben erhalten.

Allerdings wird unser Code langsam etwas unübersichtlich. Außerdem wiederholen wir den gleichen Code an verschiedenen stellen. Das widerspricht einem der grundlegendsten Programmierprinzipien, nämlich DRY, Don't Repeat Yourself, oder "wiederhole dich nicht".

Deshalb schreiben wir uns nun zwei Hilfsfunktionen:
1. Eine Funktion soll uns den Wert zurückgien, den der Benutzer in ein Feld eingegeben hat
2. Eine andere Funktion soll uns für ein bestimmtes Feld die dazugehörige Fehlermedung ausgeben. Dazu verwenden wir ein assoziatives Array, das wir bei der Validierung befüllen.

Wir legen eine Funktion namens _get_post_value_ an, der als einziger Parameter der Name des Feldes übergeben wird, dessen Wert wir wissen wollen.
```php?start_inline=true
function get_post_value(string $fieldname) : string
{
    // Wenn der Wert nicht leer ist  ...
    if (!empty($_POST[$fieldname])) {

        // ... geben wir den bereinigten Wert im Format:
        // value="WERT" zurück. Im HTML können wir diesen
        // Rückgabewert der Funktion dann mit echo einfügen.
        return ' value="' . htmlentities($_POST[$fieldname]) . '" ';           
    }

    // Wenn der Wert leer ist, geben wir einen leeren String
    // zurück
    return '';
}
```

Die Funktion für die Fehlermeldungen nennen wir _get_error_. Die Funktion hat drei Parameter:
1. Der Name des Feldes, also den Index im $errors Array, unter dem die Fehlermeldung gespeichert ist.
1. Das Fehlerarray selbst
1. Einen optionalen String zur Formatierung der Rückgabe

Für die Formatierung verwenden wir die Funktion `printf`. Sie nimmt einen Format-String, in dem bestimmte Platzhalter vorkommen können. Diese Platzhalter werden dann durch die Werte der nachfolgenden Argumente ersetzt. Zum Beispiel:
```php?start_inline=true
printf('<div>%s</div>', 'Mein toller String');
```
Wird ausgegeben als:
```html
<div>Mein toller String</div>'
```

Die Funktion lautet wie folgt:
```php?start_inline=true
function get_error(
    string $fieldname,
    array $errors,
    string $formatString = '<div class="message error">%s</div>'
) : string
{
    // Wenn für den gesuchten Index eine Fehlermeldung
    // im Array vorliegt...
    if (!empty($errors[$fieldname])) {
        // ... geben wir diese mit printf zurück.
        return sprintf($formatString, htmlentities($errors[$fieldname]));
    }
    return '';
}
```


## Validierung, Teil 2
An der Validierung ändern wir ledliglich, dass die Fehlermeldung nicht mehr direkt mit einem `echo` ins HTML ausgegeben wird, sondern im zuvor angelegeten `$errors`-Array gespeichert wird.

Am Ende der Validierung überprüfen wir dann, ob das Fehlerarray leer ist. Ist es leer, so können wir mit der Verarbeitung der Formulardaten beginnen. Ist es nicht leer, speichern wir eine _allgemeine Fehlermeldung_ im Fehlerarray und zeigen das Formular erneut an.
```php?start_inline=true
$errors = [];

if (empty($_POST["password"])) {
    $errors["password"] = 'Geben sie einen Benutzernamen ein.';
}

if ($errors) {
    $errors["errors"] = 'Es sind Fehler aufgetreten.';
}
elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Wenn wir hier ankommen, gab es keine Fehler 
    echo "<p>Alles OK. Username: " . get_post_value('username');
}
```

Schließlich geben wir an den entsprechenden Stellen im Formular unsere Fehlermeldungen aus:
```php?start_inline=true
<fieldset>
    <!-- Die allgemeine Fehlermeldung -->
    <?php echo get_error('errors', $errors); ?>

    <div class="formfield">
        <label for="username">Benutzername</label>
        <!-- Die Fehlermeldung für "username" -->
        <?php echo get_error('username', $errors); ?>
```

An dieser Stelle würde man auch alle weiteren Validierungen durchführen, wie zB Einschränkungen bei der Wahl eines Benutzernamens, Regeln für die Wahl eines Passwortes, Überprüfung der Emailadresse, usw.

Für komplexere Validierungen bieten sich Reguläre Ausdrücke an, deren Syntax [hier]({{site.url}}{{site.baseurl}}/miscellaneous/regular-expressions.html) genauer beschrieben ist. Da Regular Expressions im Vergleich zu den PHP String Funktionen sehr langsam sind, sollten sie nur dort verwendet werden, wo eine String Funktion nicht ausreicht.
§{{ page.base }}§

## Ein wenig Sicherheit
Validierung und Fehlermeldungen sind nun in Funktionen ausgelagert. Das HTML sieht schon bedeutend sauberer aus.
    
Es gibt allerdings noch ein weiteres Problem. Denn man kann POST Anfragen auch fälschen. Es gibt also Möglichkeiten, Daten an den Server zu senden, die aussehen, als kämen sie von unserem Formular, die aber gar nicht über das Formular abgeschickt wurden.

Um dies zu verhindern, wollen wir im Formular eine zufällig generierte ID speichern, ein sogenanntes Token. Das gleiche Token speichern wir auch auf dem Server.

Wenn das Formular abgeschickt wird, vergleichen wir ob das Token im Formular gleich dem Token auf dem Server ist.

Weil bei jeder Anfrage ein neues Token generiert wird, ist es für einen Angreifer sehr schwer, die Anfrage zu fälschen, da jeder Benutzer bei jeder Anfrage ein neues, zufälliges Token erhält.

### Session und Validierung
Damit wir das Token speichern können, starten wir mit ```session_start();``` eine Session auf dem Server. Jetzt können wir in der Superglobalen `$_SESSION` Werte speichern. Diese Werte bleiben auch erhalten, wenn wir die Seite neu laden.

Außerdem geben wir jedem Formular eine eigene ID, so dass wir verschiedene Formulare identifizieren können.

Bevor wir mit der Validierung beginnen, überprüfen wir, ob unsere Token übereinstimmen.

Wurde das Formular erfolgreich abgesendet, löschen wir das Token wieder aus der Session.
```php?start_inline=true
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (validate_token()) {
    ...
    // VALIDIERUNG
    ...
        unset($_SESSION['token']);
    }
    else {
        echo "Token Error!!!!";
    }
}
```

### Die beiden Token
Bevor wir das Formular ins HTML ausgeben generieren wir unser Token. Es gibt viele Möglichkeiten, dies zu tun. In unserem Fall lassen wir uns mit `microtime()` die aktuelle Unix-Zeit in Mikrosekunden geben, also ein großes Integer. Diesen Wert benutzen wir als Seed für einen Aufruf von `uniqid()`. Die Aufgabe dieser Funktion ist es, einen einzigartigen Wert zu generieren. Als letztes bilden wir mit `md5()` ein Hash des Wertes.

Diesen Zufallsstring speichern wir sowohl in der Session, als auch in einem versteckten Formularfeld.

```php?start_inline=true
$token = md5(uniqid(microtime(), true));
$_SESSION['token'] = $token;

?>
<form action="<?php echo $_SERVER["SCRIPT_NAME"]; ?>" method="POST">
    <fieldset>
        ...
        <input type="hidden" name="token" value="<?php echo $token; ?>">
        ...
```

Als letztes schreiben wir uns eine Hilfsfunktion, die überprüft, ob im Formular und auf dem Server ein Token vorhanden ist. Wenn ja, überprüfen wir, ob beide gleich sind. Die Funktion nennen wir _validate_token_.

```php?start_inline=true
// Wir geben jeder Form eine eigene ID.
// So könnten wir zwischen mehreren Forms auf der selben
// Seite unterscheiden.
function validate_token()
{
    // Gibt es ein Token auf dem Server, also in der Session?
    if (!isset($_SESSION['token'])) {
        echo "HACK: Missing token in SESSION.";
        return false;
    }

    // Gibt es ein Token im Formular?
    if (!isset($_POST['token'])) {
        echo "HACK: Missing token in POST.";
        return false;
    }

    // Sind die beiden Token ungleich?
    if ($_SESSION['token'] !== $_POST['token']) {
        echo "HACK: POST and SESSION token are different.";
        return false;
    }

    // Beide Token vorhanden und gleich
    return true;
}
```

Das vollständige Formular befindet sich in der Examples-Datei.

## Email
Mit PHP können leider über localhost keine Mails verschickt werden. Wir verwenden deshalb das Fakemail Tool, welches einen Mailserver simuliert und die Mails als Dataien auf der Festplatte speichert.

Dazu müssen wir die _php.ini_ folgendermaßen anpassen:
- Suche nach "SMTP" und kommentiere die Zeile mit einem ";" aus:
    ```;SMTP = localhost```
- Suche nach "sendmail_path" und gib den vollen Pfad zur Fakemail.exe an:
    ```C:/xampp/mailtodisk/mailtodisk.exe```
Damit die Änderungen wirksam werden, müssen wir Apache neu starten.

Nun können mit der PHP ```mail()``` Funktion Emails verschickt werden.
Diese werden in _c:/xampp/mailoutput_ gespeichert.

Mit ```Content-Type: text/html; charset=ISO-8859-1``` informieren wir unseren Client, dass die Mail nicht im _Plain Text Format_ gesendet wurde, also als reiner Text, sondern im HTML Format.

Die Verwendeung der mail-Funktion ist sehr einfach:
```php?start_inline=true
$to = "cartwright@bonanza.com";
$topic = "Your cattle is very tasty!";

$headers  = "From: torfboy@humus.com\r\n";
$headers .= "Reply-To: torfboy@humus.com\r\n";
$headers .= "CC: rindenheinz@humus.com\r\n";
$headers .= "BCC: rindenheinz@humus.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$body = <<<MESSAGE
Hi old man,

How are you?

Have a look at this link: <a href="myDomain.com/register.php?username="><script>alert("you have been hacked!")</script>">Funny Cow Pictures!</a>
MESSAGE;

if (mail($to, $topic, $body, $headers)) {
    echo "<p>Email erfolgreich gesendet.</p>";
}
else {
    echo "<p>Versand der Email fehlgeschlagen.</p>";
}
```

Achtet auf den Inhalt der Mail. Klickt Mr. Cartwright auf den Link, wird der eingebettete Javascript Code auf seinem Rechner ausgeführt. In diesem Fall ist es zum Glück nur ein ```alert()```.