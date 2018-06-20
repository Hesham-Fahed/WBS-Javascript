---
layout: default
permalink: /php/index.html
---
{% include toc.html chapter="php" %}

## Was dieser PHP Kurs behandelt
Im ersten Teil dieses Kurses werden wir auf die Grundstrukturen von PHP eingehen. Anhand von Beispielen und Übungen werden wir auf Themen wie [Variablen]({{ site.url }}{{ site.baseurl }}/php/variablen-und-konstanten.html), [Operatoren]({{ site.url }}{{ site.baseurl }}/php/operatoren.html), [Kontrollstrukturen]({{ site.url }}{{ site.baseurl }}/php/kontrollstrukturen.html) und [Funktionen]({{ site.url }}{{ site.baseurl }}/php/funktionen.html) eingehen.

Anschließend werden wir uns mit [Datenbanken]({{ site.url }}{{ site.baseurl }}/php/datenbanken.html) und [Sicherheitsaspekten]({{ site.url }}{{ site.baseurl }}/php/sicherheit.html) der Webprogrammierung mit PHP beschäftigen, bevor wir uns schließlich einem neuen [Programmier-Paradigma](https://de.wikipedia.org/wiki/Programmierparadigma) zuwenden, nämlich der [objektorientierten Programmierung]({{ site.url }}{{ site.baseurl }}/php/objektorientierung.html).

Außerdem werden wir immer wieder auf wichtige Themen des Internets eingehen, wie zum Beispiel TCP/IP Netzwerke, das HTTP Protokoll oder das OSI-Modell.

Im zweiten Kursteil werden wir uns ein eigenes Mini-Framework auf Basis des [Model-View-Controller](https://de.wikipedia.org/wiki/Model_View_Controller) [Entwurfmusters](https://de.wikipedia.org/wiki/Entwurfsmuster) schreiben.

Als letztes programmieren wir mit unserem Mini-Framework einen "Social networking service", also ein Soziales Netzwerk á la Facebook in klein, und versehen dieses mit einer [REST API](https://de.wikipedia.org/wiki/Representational_State_Transfer), von der wir per [AJAX](https://de.wikipedia.org/wiki/Ajax_(Programmierung)) Daten anfordern.


## Voraussetzungen
Um alle Beispiele und Übungsaufgaben dieses Kurses ausführen zu können, wird ein [Webserver](https://de.wikipedia.org/wiki/Webserver) und ein [Datenbankserver](https://de.wikipedia.org/wiki/Datenbankserver) benötigt. Als Webserver kommt  [Apache](https://de.wikipedia.org/wiki/Apache_HTTP_Server) zum Einsatz, auf welchem auch [PHP](https://de.wikipedia.org/wiki/PHP) ausgeführt wird. Als Datenbank wird [MariaDB](https://de.wikipedia.org/wiki/MariaDB) dienen, ein freier [MySQL](https://de.wikipedia.org/wiki/MySQL) [Fork](https://de.wikipedia.org/wiki/Abspaltung_(Softwareentwicklung)).

Außerdem brauchen wir einen [Webbrowser](https://de.wikipedia.org/wiki/Webbrowser), um uns die Seiten, die der Webserver ausliefert, anzuschauen. Chrome und Firefox sind für unsere Zwecke die beiden besten Alternativen.

Das Aussehen der erstellten Webseiten wird in diesem Kurs kaum eine Rolle spielen, solange am Ende eine funktionierende Seite mit validem HTML herauskommt. Designentgleisungen [wie diese](http://www.theworldsworstwebsiteever.com/) sind trotzdem zu vermeiden.

An einigen Stellen wird der Einsatz von [JavaScript](https://de.wikipedia.org/wiki/JavaScript) und/oder [jQuery](https://de.wikipedia.org/wiki/JQuery) sich nicht vermeiden lassen. Ein Grundverständnis von JavaScript sollte deshalb vorhanden sein.