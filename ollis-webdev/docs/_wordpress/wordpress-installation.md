---
layout: techdoc
title: Wordpress Installation
order: 200
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

======================================================================
Wordpress
======================================================================
Installation:
Wir haben:
✓ ✓ Purchased the domain name registration for your account
✓ ✓ Obtained a hosting service on a web server for your blog
✓ ✓ Established your hosting account’s username, password, and
FTP address
✓ ✓ Acquired an FTP client for transferring files to your hosting account

1. Wordpress herunterladen
https://wordpress.org/download/ - english
https://de.wordpress.org/ - deutsch

Wordpress in gewünschten Ordner auspacken - normalerweise ins webroot, aber auch unterordner gehen.
zB. Windows: C:\xampp\htdocs[\optional_subfolder] oder Linux /var/www/html[/optional_subfolder]
  Beachtet die Art der Schrägstriche!
In meinem Fall ist es zB: /mnt/data/projects/wbs/webdev/wp_one

2. SQL Datenbank einrichten
Every web host is different in how it gives you access to set up and manage your MySQL database(s).
Choose a name for your database
Choose a username and password for your database,

hostname/phpmyadmin
Server->Databases : Create Database (name: egal, use wp_one, collation: utf8mb4_unicode_ci) - OK
Optional: Server->wp_one->Privileges : Add user account (offensichtlich) - OK
          Server->wp_one->Privileges : Edit privileges : Check all - OK

in meinem Fall: DB name: wp_one, DB user: wpuser, DB pass: 123

3. Wordpress hochladen / entpacken
Using your FTP client, connect to your web server and upload all these files
to your hosting account into the root directory.

Every hosting
provider’s setup is different. On my web server, my root directory is the
public_html folder; some of my clients have a root directory in a folder
called httpdocs or htdocs.

Upload the contents of the /wordpress folder to your web server —
not the folder itself.!!!!!!!!!

If you want your blog address to be
http://yourdomain.com/blog, you transfer the WordPress files into
a folder named /blog.

Choose the right file permissions. File permissions tell the web server
how these files can be handled on your server — whether they’re files
that can be written to. As a general rule, PHP files need to have a per-
mission (CHMOD) of 644, whereas file folders need a permission of 755.

4. Install Script ausführen
http://yourdomain.com/wp‐admin/install.php
Dig out the database name, username, and password
Database Host: Ninety‐nine percent of the time, you’ll leave this field set to localhost.

Kann passieren: "Die Datei wp-config.php ist nicht beschreibbar"
Dateisystemrechte:
- wp-config.php bzw der Ordner wo die rein soll muss vom Webserver beschreibbar machen
- Außerdem muss beschreibbar sein: wp-content Ordner
sicherer wäre, nur wp-content beschreibbar zu machen und wp-config.php von hand anzulegen.

* Titel der Webseite
* Benutzername: Dein Anmeldename für Wordpress. Dieser Benutzer hat automatisch auch Admin-Rechte.
* Passwort: 123 - dieses Passwort bitte NICHT in freier Wildbahn verwenden.
* E-Mail: Muss angegeben werden. Wird zB für WP Benachrichtungen benutzt.
* Sichtbarkeit für Suchmaschinen: robots.txt

5. Login
http://domain.com/wp‐login.php
http://domain.com/subfolder/wp‐login.php
In meinem Fall: http://localhost/projects/wbs/webdev/wp/wp_one/wp-login.php

Select the Remember Me check box if you want WordPress to place a
cookie in your browser.
Avoid selecting Remember Me when you’re using your work computer or a computer at an Internet café.

(Für Permalinks bzw Pretty-URLs, siehe unten)

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
