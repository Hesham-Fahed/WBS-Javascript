<?php
declare(strict_types=1);

/*******************************
 * EXERCISES - FORMS AND EMAIL *
 ******************************/
?>
<!DOCTYPE html>
<html lang="de">
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übungen zu Formularen und Emailversand</h1>

<p>In dieser Übung lernen wir, ein umfangreiches Formular zu erstellen.
    Gleichzeitig lernen wir, mit längeren und deshalb komplexeren PHP Dateien umzugehen.</p>

<p>Diesmal müsst ihr einen Blick in den Quellcode werfen, um die Übung lösen zu können.</p>

<?php
// Wir haben bereits folgende Funktionen:
function get_error(
    string $fieldname,
    array $errors,
    string $formatString = '<div class="message error">%s</div>'
) : string {
    if (!empty($errors[$fieldname])) {
        return sprintf($formatString, htmlentities($errors[$fieldname]));
    }
    return '';
}


function get_post_value(string $fieldname) : string {
    if (!empty($_POST[$fieldname])) {
        return ' value="' . htmlentities($_POST[$fieldname]) . '" ';
    }
    return '';
}


function validate_token() {
    if (!isset($_SESSION['token'])) {
        echo "HACK: Missing token in SESSION.";
        return false;
    }
    
    if (!isset($_POST['token'])) {
        echo "HACK: Missing token in POST.";
        return false;
    }

    if ($_SESSION['token'] !== $_POST['token']) {
        echo "HACK: POST and SESSION token are different.";
        return false;
    }

    return true;
}

// Hier könnt ihr natürlich auch eure eigene
// Implementierung verwenden.
function pig_latin(string $word) : string {
  $vowels = array('a', 'e', 'i', 'o', 'u');
  $firstVowel = PHP_INT_MAX;

  foreach ($vowels as $vowel) {
    $idx = mb_stripos($word, $vowel);
    if($idx !== false) {
      $firstVowel = min($idx, $firstVowel);
    }
  }

  if ($firstVowel === 0) {
    return $word . 'way';
  }
  else {
    return mb_substr($word, $firstVowel) .
        mb_substr($word, 0, $firstVowel) . 'ay';
  }
}
?>

<h2>Übung 1 : Helper Functions</h2>
<p>Unsere Hilfsfunktion get_post_value() liest einen mit value="bla" angegebenen Wert
    aus $_POST aus, bereinigt ihn und gibt ihn so zurück, dass wir er direkt wieder
    ins HTML eingefügt werden kann.</p>

<p>Andere Formelemente übergeben ihre Werte nicht mit value="bla" sondern zB mit
    einem einfachen "checked" oder "selected".</p>

<p>Wenn ihr euch unsicher seid, welches Formelement was übergibt, könnt ihr euch die
    Werte mit einem var_dump oder print_r anzeigen lassen.</p>

<p>Nun zur Aufgabe:</p>

<h3>Schreibt die folgenden Hilfsfunktionen:</h3>
<ul>
    <li>textareas: get_post_text(string $fieldname) : string</li>
    <li>selectboxen: get_post_selected(string $fieldname, string $value) : string</li>
    <li>check- und radioboxen: get_post_checked(string $fieldname, string $value) : string</li>
</ul>
<p>"fieldname" ist immer der Name des Feldes im HTML (name="myName"),
    value ist der Wert des Feldes, sofern dieses gesetzt wurde (value="cheese")
    (zB bei Checkboxes und Radiobuttons:  value="cheese")</p>

<p>Die Funktionen geben den ins HTML einzufügenden String aus.<br>
<code>&lt;textarea name="textarea"&gt;&lt;?php echo get_post_text('textarea'); ?&gt;&lt;/textarea&gt;</code>
</p>

<p>Beachtet den Sonderfall der Checkbox:<br>
<ul>
    <li><code>&lt;input type="checkbox" name="toppings[]" value="cheese" ...</code></li>
    <li><code>&lt;input type="checkbox" name="toppings[]" value="salami" ...</code></li>
</ul>
</p>
<p>
In diesem Fall ist der Wert von $_POST['toppings'] ein Array.
  [ 'cheese', 'salami' ]
</p>

<p>Es muss also zwischen zwei Arten von Checkbox unterschieden werden:
<ol>
    <li><code>&lt;input ... name="mycheckbox"</code>gibt einen String an PHP</li>
    <li><code>&lt;input ... name="mycheckbox[]"</code>gibt ein Array aus Strings an PHP</li>
</ol>

<p>Die beiden Funktionen:<br>
  <code>is_array()</code><br>
  <code>in_array()</code><br>
helfen Euch hierbei bestimmt.</p>


<h2>Übung 2 : HTML Forms und PHP</h2>
<p>Implementiert ein sicheres Formular zum Versenden von Emails.</p>
<p>Es soll folgende Informationen vom Benutzer aufnehmen,
validieren und, bei korrekter Eingabe, am Bildschirm anzeigen:</p>
<ul>
    <li>Vorname</li>
    <li>Nachname</li>
    <li>Postleitzahl (Deutschland, also 5 Ziffern)</li>
    <li>Passwort</li>
    <li>Geschlecht (radio buttons)</li>
    <li>Lieblingskäse (überlege dir 3 Sorten)<br>
        benutze mehrere Checkboxen (siehe oben: name="cheese[]")</li>
    <li>Betreff (Selectbox mit: "Support", "Beschwerde" und "Pizza")</li>
    <li>Nachricht (textarea mit der Nachricht des Benutzers)</li>
    <li>Newsletter abonieren (checkbox)</li>
</ul>

<p>Benutzt zum Validieren auch die Funktionen, die ihr in Übung 1 geschrieben habt.
    Wir haben jetzt also folgende Funktionen zur Verfügung:</p>
<pre>
- get_error             Fehlermeldungen von Feldern
- get_post_value        Das "value" Attribut von Feldern
- get_post_text         Der Text einer textarea
- get_post_selected     Das "selected" Attribut einer Selectbox
- get_post_checked      Das "checked" Attribut von Checkboxen und Radio Buttons
- validate_token        Ist das Sicherheits-Token der Form in Ordnung?
</pre>


<h2>Übung 3a : Pig Latin Converter</h2>
<p>Erzeuge ein sicheres Formular mit zwei Feldern. In ein Feld soll der Benutzer
seinen Namen eintragen können, in das andere einen Text, der in Pig-Latin
umgewandelt werden soll.</p>

<p>Du kannst dazu unsere Funktion pig_latin() aus der Übung 4 zu Funktionen benutzen.</p>


<h2>Übung 3b : Emailversand mit dynamischem Inhalt</h2>
<p>Ergänze Übung 3a um eine Email-Funktionalität. Der in pig_latin verwandelte Text
soll jetzt per Email versendet werden.</p>

<p>Die Email soll folgendes Format haben:</p>
<pre>
Neue Nachricht von: Cicero (<- der Name aus dem Formular)

Nachricht:
Onceway uponway away idnightmay earydray, ilewhay Iway onderedpay, eakway andway earyway,
Overway anymay away aintquay andway uriouscay olumevay ofway  orgottenfay orelay
</pre>