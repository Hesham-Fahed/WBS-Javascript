<?php
declare(strict_types=1);

/*************************************
 * EXERCISES - MODEL VIEW CONTROLLER *
 *************************************/
?>
<!DOCTYPE html>
<html lang="de">
<head><?php include 'helpers/head.php'; ?></head>
<body>

<h1>Übung zum Architekturmuster: Model View Controller</h1>

<p>Erstelle eine App zur Verwaltung einer Firmenstruktur.<p>
<p>Die App soll Mitarbeiter, Standorte und Abteilungen verwalten können.</p>

<h3>Folgende Daten sollen gespeichert werden:</h3>
<h4>Mitarbeiter (employees)</h4>
<ul>
    <li>Name</li>
    <li>Alter</li>
</ul>

<h4>Abteilungen (departments)</h4>
<ul>
    <li>Name</li>
</ul>

<h4>Standorte (locations)</h4>
<ul>
    <li>Name</li>
</ul>

<h3>Die App soll folgende Funktionen bieten:</h3>
<ul>
    <li>Login / Logout</li>
    <li>Standorte alphabetisch sortiert anzeigen</li>
    <li>Abteilungen alphabetisch nach Abteilung und Standort sortiert anzeigen als: Abteilung - Standort</li>
    <li>Mitarbeiter alphabetisch nach Name sortiert anzeigen als: Mitarbeiter - Abteilung - Standort</li>
    <li>Mitarbeiter alphabetisch nach Abteilung und Name sortiert anzeigen als: Mitarbeiter - Abteilung - Standort</li>
    <li>Mitarbeiter alphabetisch nach Standort und Name sortiert anzeigen als: Mitarbeiter - Abteilung - Standort</li>
    <li>Standort hinzufügen / löschen</li>
    <li>Abteilung hinzufügen / löschen</li>
    <li>Mitarbeiter hinzufügen / löschen</li>
    <li>Mitarbeiter in eine andere Abteilung verschieben</li>
</ul>

<p>Überlege dir eine geeignete Datenbankstruktur. Du wirst wahrscheinlich 3 Tabellen für
die Firma benötigen, plus eine users-Tabelle für die Benutzer des Systems.</p>

<p>Lege dann die benötigten Controller, Models und Templates an. Eventuell kann es sinnvoll
sein, mit nur einem einzigen Model (Company) zu arbeiten.</p>

<a href="../../docs/assets/img/company.png"><img width=100% src="../../docs/assets/img/company.png"></a>
