---
layout: techdoc
title: Hyperlinks
order: 1100
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

# Anchor Elemente
* `<a>`-Elemente sind das Erfolgsrezept des Internets.
* Im `href`-Attribut wird das Ziel eines Links angezeit.
* Im `title`-Attribut kann eine Beschreibung des Links angegeben werden, die aber nur angezeigt wird, wenn man mit dem Mauszeiger über dem Link steht.
* Ein Link kann sowohl Text, als auch (mehrere) Inline- oder Block-Elemente umschließen. So zB auch ein Bild.
* Links können nicht nur auf ein HTML-Dokument zeigen, sondern auf beliebige Ressourcen.
* Gibt man einem `a`-Element das Attribut `target="_blank`, so wird der Link in einem neuen Tab geöffnet.

# Pfade
* Links können mit relativen oder absoluten Pfaden angegeben werden.
* Ein relativer Pfad geht immer von dem Verzeichnis aus, in dem die HTML-Datei liegt, die den Link beinhaltet.
* Ein absoluter Pfad beinhaltet immer die vollständige URL.
* Hinter dem Dateinamen kann nach einem Hash `#` auch ein Linkziel innerhalb einer Datei angegeben werden. Das Linkziel ist hierbei gleich der `id` des Zielelements.

```html
<a href="impressum.html">Link auf der selben Ebene</a>
<a href="img/avatars/peter_pan.jpg">Link in ein Unterverzeichnis</a>
<a href="../ignorance_is_bliss.html">Link zu einer Datei im Elternverzeichnis</a>
<a href="http://radwild.de/chalus-road/">Absoluter Pfad</a>
<a href="https://en.wikipedia.org/wiki/Japanese_spider_crab#Life_cycle">Link innerhalb eines Dokuments</a>
<a href="#trololo">Link innerhalb des selben Dokuments</a>
<a href="http://google.com" target="_blank">Google in neuem Browser-Tab öffnen.</a>
```

* Warum wäre der Folgende Link problematisch?

```html
<p>
  <a href="https://firefox.com/">Klicke hier</a>
um Firefox herunterzuladen</p>
```

# URLs, Links und Leseverhalten
Benutzer von Bilschirmlesegeräten (screen reader) springen auf der Webseite von Link zu Link. Diese werden dann ohne Zusammenhang vorgelesen. Der Linktext sollte also ausreichend beschreiben, wohin der Hyperlink führt.

Suchmaschinen benutzen den Linktext, um die Zieldateien zu indexieren. Der Linktext sollte also Schlagwörter (keywords) enthalten, die mit dem Inhalt des verlinkten Dokumentes zu tun haben.

Leser der Webseite scannen die Webseite zuerst durch, anstatt sie direkt Wort für Wort zu lesen. Dabei werden die Augen von hervorgehobenem Text, wie zum Beispiel Links und Überschriften, angezogen. Ist der Linktext hinreichend beschreibend, so ist dem Leser sofort klar, wohin er führt. Ist dies nicht der Fall, wird der Link überlesen und als _belanglos_ oder _unwichtig_ abgetan.

Die URL sollte nicht als Teil des Linktextes wiederholt werden. URLs sehen nicht schön aus und Bildschirmlesegeräte geben diese Buchstabe für Buchstabe aus, was sehr nervig ist. Im Zweifelsfall kann man sich die Augen verbinden und eine unbekannte Seite von einem Screen Reader vorlesen lassen. Spätestens beim dritten buchstabierten Linktext reißt man sich die Augenbinde runter.

Außerdem sollte beim Linktext nicht erwähnt werden, dass es ein _Link_ ist. Bildschirmlesegeräte sagen automatisch, dass es sich um einen Link handelt und der Link sollte auch mit Hilfe von CSS ausreichend kenntlich gemacht sein. Links sollten auf den ersten Blick immer als solche zu erkennen sein.

Halten Sie den Linktext so kurz wie möglich und so lang wie nötig. Lange Linktexte sind besonders für Benutzer von Bildschirmlesegeräten nervend, denn der Linktext wird immer komplett vorgelesen.

Vermeiden Sie es, den selben Linktext für mehrere Links zu benutzen, die auf unterschiedliche Dokumente verweisen. Benutzer von Bildschirmlesegeräten wird die Navigation erschwert, wenn ihnen mehrmals der Linktext "Klicken Sie hier" vorgelesen wird.


# E-Mail Links
* E-Mail Links beginnen mit "mailto:", gefolgt von der Adresse.
* In URL-Parameter-Notation können nach der Adresse auch alle gültigen Mail-Headerfelder verwendet werden.

```html
<a href="mailto:papst@vatikan.vt">Maile dem heiligen Stuhl</a>
<a href="mailto:robin@sherwood.co.uk?cc=littlejohn@sherwood.co.uk&amp;subject=Eat%20the%20Rich">Arrow-Mail Us!</a>
```
