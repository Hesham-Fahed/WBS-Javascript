<?php
declare(strict_types=1);

/*******************
 * EXERCISES - SQL *
 *******************/

?>
<!DOCTYPE html>
<html lang="de">
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übungen zu SQL</h1>

<p>Importiere den cheese_tables.sql Datenbankdump in eine vorhandene Datenbank (zB wbs).</p>
<p>Der Dump enthält die Tabellen users, cows, cheesewheels und cheesewheels_cows.
<strong> Achte darauf, dass diese nicht bereits existieren, da sie überschrieben würden.</strong>
</p>
<p>Die Datei liegt auch im Ordner <code>webdev/miscellaneous/exercises</code>
</p>

<p>Schreibe SQL-Queries, die die verlangten Informationen beinhalten.<br>
Versuche, soweit möglich, nur die verlangten Felder aus der Datenbank auszulesen.
(Die Spaltenanzahl des Result Sets ist in Klammern angegeben.)</p>

<ol>
    <li>Alle Benutzernamen. (1)</li>
    <li>Alle Käsesorten (types), alphabetisch sortiert. Jede Käsesorte soll nur einmal angezeigt werden. (1)</li>
    <li>Alle Käseräder (id) mit einem Gewicht zwischen 10 und 12 Kilo (inklusive). Lies das Gewicht mit aus. (2)</li>
    <li>Alle Käseräder (id), die von einem User gekauft wurden. Lies den Benutzernamen und den Kaufpreis mit aus. (3)</li>
    <li>Alle Käsetypen und der Durchschnittspreis deren Käseräder. Jeder Käsetyp darf (logischerweise) nur ein Mal im Ergebnis vorkommen. (2)</li>
    <li>Alle Käsetypen und ihr durchschnittlicher Kilopreis. Jeder Käsetyp darf nur ein Mal im Ergebnis vorkommen. (2)</li>
    <li>Wie viele Kühe stecken in Käse 11? (1)</li>
    <li>Id und Preis aller unverkauften Käseräder. (2)</li>
    <li>Liste aller Rind- und Usernamen, alphabetisch sortiert. (1)</li>
    <li>Namen aller Rinder, von deren Käse User 1 gekauft hat. Jeder Name darf nur ein Mal vorkommen. (1)</li>
    <li>Name und Geschlecht aller Rinder, von denen noch nie ein Käse verkauft wurde. (2)</li>
    <li>Welcher User hat von wie vielen Kühen Käse gekauft. Ergebnis nach Anzahl der Kühe sortieren. (2)</li>
</ol>
</body>
</html>
