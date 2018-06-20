---
layout: techdoc
title: Wordpress Grundlagen
order: 300
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}


## Links

### Wordpress
https://wordpress.com/

https://wordpress.org/download/ - english
https://de.wordpress.org/ - deutsch

https://codex.wordpress.org/
https://codex.wordpress.org/#Learn_How_to_Use_WordPress
https://codex.wordpress.org/Glossary

https://developer.wordpress.org/themes/
https://codex.wordpress.org/Theme_Development
https://codex.wordpress.org/Child_Themes
https://codex.wordpress.org/The_Loop_in_Action

### HTML/CSS
https://wiki.selfhtml.org/

https://developer.mozilla.org/de/docs/Web
https://developer.mozilla.org/en-US/docs/Web

https://whatwg.org/
https://www.w3schools.com/

https://validator.w3.org/
https://gsnedders.html5.org/outliner/
https://caniuse.com/

https://flukeout.github.io/

https://achecker.ca/checker/index.php
https://www.einfach-fuer-alle.de/artikel/test-werkzeuge/

https://www.e-recht24.de/impressum-generator.html

### Design
https://fonts.google.com/
https://material.io/
https://www.materialpalette.com/
https://www.toptal.com/designers/colorfilter




The Dashboard
----------------------------------------------
You can consider the Dashboard to be a Control Panel of sorts because it
offers several quick links and areas that provide information about your web-
site,

Oben: Ansicht anpassen.

Dasboard:
- Startseite
- Aktualisierungen

Beiträge:
- Alle Beiträge
- Erstellen
- Kategorien
- Schlagwörter

Mediathek:
- Medienübersicht
- Datei hinzufügen

Seiten:
- Alle Seiten
- Erstellen

Kommentare

Design:
- Themes
- Customizer
- Widgets
- Menüs
- Header
- Editor

Plugins:
- Installierte Plugins
- Installieren
- Editor

Benutzer:
- Alle Benutzer
- Neu hinzufügen
- Dein Profil

Werkzeuge:
- Verfügbare Werkzeuge
- Daten Importieren
- Daten Exportieren

Einstellungen:
- Allgemein
  - Titel der Webseite : template-parts/header/site-branding.php: bloginfo('name')
  - Untertitel : template-parts/header/site-branding.php: get_bloginfo( 'description', 'display' )
  - WordPress-Adresse (URL) : Der Pfad zur Wordpress Installation, wo die Core Dateien liegen
  - Website-Adresse (URL) : Der Pfad zu deiner Seite, also dem, was Besucher sehen sollen.
  - E-Mail-Adresse : An diese Adresse sendet Wordpress Benachrichtigungen.
  - Mitgliedschaft : "Jeder kann sich registrieren" vs "Alle Accounts werden von Hand angelegt"
  - Standardrolle eines neuen Benutzers: Abonnent, Mitarbeiter, Autor, Redakteur, Administrator - siehe Kaptiel: Rechtesystem
  Zeitzone : Wichtig, wenn Benutzer in verschiedenen Zeitzonen liegen bzw. für geplante Posts.
  - Datumsformat, Zeitformat, Woche beginnt am
- Schreiben
  - Standard Beitrags-Kategorie : Die voreingestellte Kategorie für neue Beiträge
  - Standard-Beitragsformat : idem, Beitragsformate werden recht selten genutzt.
  - Via E-Mail schreiben : Überspringen wir im Kurs
- Lesen
  - Startseite zeigt : Entweder die letzten Blogeinträge (Posts), oder eine statische Seite (Page)
    - Startseite : Wird auf der TODO XXXXX
  - Blogseiten zeigen maximal : Die maximale Anzahl der Posts, die auf einer Seite angezeigt werden sollen.
  - Newsfeeds zeigen die letzten : Die maximale Anzahl der Posts, die in einem RSS Feed ausgegeben werden sollen.
  - Sichtbarkeit für Suchmaschinen : Diese Einstellung wird nicht unbedingt von Suchmaschinen beachtet.
- Diskussion
  - Standardeinstellungen für Beiträge :
    - Versuche, jedes in Beiträgen verlinkte Weblog zu benachrichtigen - sendet Ping Trackbacks
    - Link-Benachrichtigungen von anderen Blogs bei neuen Beiträgen erlauben - solche Trackbacks tauchen dann in den Kommentaren des Posts auf.
    - Besuchern erlauben, neue Beiträge zu kommentieren
  - Weitere Kommentareinstellungen
    - Benutzer müssen zum Kommentieren Name und E-Mail-Adresse hinterlassen
    - Benutzer müssen zum Kommentieren registriert und angemeldet sein
    - Kommentare zu Beiträgen, die älter als XX Tage sind, automatisch schließen - Kommentare können nur bis XX Tage nach Veröffentlichung des Beitrags erstellt werden. Dies kann ein wirksames Mittel gegen Spam sein.
    - Verschachtelte Kommentare in XX Ebenen organisieren: Die maximale Tiefe, bis zu welcher Kommentare verschachtelt sein können.
    - Breche Kommentare in Seiten um, mit XX Top-Level-Kommentaren pro Seite und zeige die ERSTE/LETZTE Seite standardmäßig an : Erhält ein Beitrag sehr viele Kommentare, kann dies sehr unübersichtlich werden und zu längeren Ladezeiten führen. Mit dieser Einstellung kann man die maximale Anzahl an Top-Level Kommentaren einstellen, also Kommentaren auf Ebene 1, die auf einer Seite dargestellt werden sollen. Außerdem kann man angeben, ob mit der ersten oder der letzten Kommentarseite begonnen werden soll.
    - Die ältesten/neuesten Kommentare sollen oben stehen
    - Mir eine E-Mail senden, wenn
	  - jemand einen Kommentar schreibt
      - ein Kommentar auf Freischaltung wartet
	- Bevor ein Kommentar erscheint, muss der Kommentar
	  - manuell genehmigt werden
      - muss der Autor bereits einen genehmigten Kommentar geschrieben haben
    - Kommentarmoderation
	  - Einen Kommentar in die Warteschlange schieben, wenn er .....
	    Hier kommt eine Reihe von Einstellungen wie blacklists und whitelists für bestimmte Werte bei Inhalt Namen, URL, E-Mail-Adresse oder IP.
	- Avatars : Eine Reihe von Einstellungen bezüglich Avataren
  - Mediathek
    - Bildgröße : Wordpress skaliert alle hochgeladenen Bilder automatisch auf frei verschiedene Größen. Das Original wird dabei nicht verändert.
      - Vorschaubilder : 150px x 150px, proportional oder exakt
	  - Mittelgroß : 300px x 300px
	  - Groß : 1024px x 1024
	- Dateien hochladen
	  - Organisiere Uploads in monats- und jahresbasierten Ordnern : ist gerade bei Webseiten mit einer hohen Anzahl von Bilder sinnvoll. Alternativ kann auch ein Plugin verwendet werden, um die Bilder in einer Ordnerstruktur zu organisieren.
  - Permalinks
    - Gebräuchliche Einstellungen : Hier wird festgelegt, nach welchem Schema Pretty-URLs erzeugt werden sollen. Damit dies funktioniert, muss das Apache-Modul mod_rewrite geladen sein.
	- Kategorie-Basis und Schlagwort-Basis : Die entsprechenden Unterordner in der URL, über die auf Kategorien und Schlagwörter (Tags) zugegriffen werden kann. Trägt man bei Kategorie-Basis zB. "kat" ein und es gibt eine Kategorie "ze", so wäre der Pfad zu den Beiträgen dieser Kategorie: "localhost/kat/ze"
	- Damit die Änderungen übernommen werden können, muss die .htaccess Datei für Apache beschreibbar sein. Ist sie dies nicht, kann man die Änderungen auch von Hand vornehmen.




Das hier muss in die .htaccess Datei rein, die im WP root liegt.
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /projects/wbs/webdev/wp/wp_one/
	RewriteRule ^index\.php$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /projects/wbs/webdev/wp/wp_one/index.php [L]
</IfModule>
Alternativ einfach die Datei für Apache beschreibbar machen.


Dateisystem

Wurzelverzeichnis
- wp-admin/
- wp-content/
  - languages/
  - plugins/
    - akismet
	...
  - themes/
    - twentyseventeen/
	...
  - upgrade/
  - upload/
- wp-includes/
- favicon.ico (optional)
- robots.txt




the_custom_logo

is_front_page

bloginfo - https://developer.wordpress.org/reference/functions/bloginfo/
get_bloginfo - https://developer.wordpress.org/reference/functions/get_bloginfo/




## Rechtesystem
https://codex.wordpress.org/Roles_and_Capabilities#Capability_vs._Role_Table

Super Admin – somebody with access to the site network administration features and all other features. See the Create a Network article.
Administrator (slug: 'administrator') – somebody who has access to all the administration features within a single site.
Editor (slug: 'editor') – somebody who can publish and manage posts including the posts of other users.
Author (slug: 'author') – somebody who can publish and manage their own posts.
Contributor (slug: 'contributor') – somebody who can write and manage their own posts but cannot publish them.
Subscriber (slug: 'subscriber') – somebody who can only manage their profile.

