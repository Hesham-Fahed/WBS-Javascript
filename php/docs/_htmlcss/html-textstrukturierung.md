---
layout: techdoc
title: Textstrukturierung
order: 1200
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

In diesem Abschnitt werden die am häufigsten verwendeten Elemente zur Textstrukturierung beschrieben.

# Überschriften
* `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`, wobei h1 die wichtigeste Überschrift ist, die Hauptüberschrift, h6 ist die unwichtigste.
* Pro Dokument oder Section sollte es höchstens ein h1-Element geben. Dies ist auch für SEO wichtig.
* Pro Dokument sollten höchstens 5 h2-Überschriften geben.
* Pro Dokument sollten nicht mehr als 3 verschiedene Überschriftarten verwendet werden.
* Die Überschriften sollten in der Hierarchie Sinn ergeben. Eine h4 ist einer h2 untergeordnet, nicht anders herum.

## Warum Überschriften?
* Semantik. HTML dient der Deklaration von Semantik, nicht von Layout.
* Lesbarkeit bzw Scanbarkeit durch Menschen
* Semantische Analyse durch Suchmaschinen
* Navigation mit nicht optischen Wiedergabegeräten (Screen-Reader)

# Absätze
* `<p>` wie Paragraph. Zeichnet einen logischen Textabsatz aus.

# Zeilenumbruch
* `<br>` wie (line)break. Erzeugt einen (semantischen) Zeilenumbruch.
* `<br>` darf nur zum Erzeugen von Zeilenumbrüchen verwendet werden, wenn der Umbruch ein wirklicher Teil des Inhalts ist, wie zB in einem Gedicht oder in einer Adresse.

# Listen
* Listen sind überall. Menschen leben für Listen. Ohne Listen sind wir wertlos. Und uns sind auch unsere Listen wertlos. (Stanley Kubrick)
* Ungeordnete Listen (unordered lists) sind Listen ohne Nummerierung. Sie werden von einem `<ul>`-Element umschlossen.
* Geordnete Listen (ordered lists) sind Listen mit einer Nummerierung. Sie werden von einem `<ol>`-Element umschlossen.
* Jedes einzelne Listenelement (list item) wird wiederum von `<li>`-Element umschlossen.
* Listen können beliebig verschachtelt werden.
* Mit dem `start`-Attribut am `ol`-Element kann der Anfangswert der Liste werden.
* Mit dem `value`-Attribut an einem `li`-Element kann man dessen Weret setzen.
* Das Styling der Listenpunkte oder -zahlen erfolgt Über CSS.

```html
<ul>
    <li>Hartkäse
        <ol>
            <li>Gruyère</li>
            <li value="23">Queso curado de todo lo que hemos</li>
        </ol>
    </li>
    <li>Weichkäse
        <ol start="42">
            <li>Camembert</li>
            <li>Stinking Bishop</li>
        </ol>
    </li>
</ul>
```
wird zu:
<ul>
    <li>Hartkäse
        <ol>
            <li>Gruyère</li>
            <li value="23">Queso curado de todo lo que hemos</li>
        </ol>
    </li>
    <li>Weichkäse
        <ol start="42">
            <li>Camembert</li>
            <li>Stinking Bishop</li>
        </ol>
    </li>
</ul>

# Beschreibungslisten
Beschreibungslisten werden verwendet, um im weitesten Sinne Begriffe und ihre Beschreibung darzustellen, wie dies zB in einem Wörterbuch der Fall ist.
* Die komplette Beschreibungsliste (description lists) wird von einem `<dl>`-Element umschlossen.
* Darin befinden sich immer Gruppen von einem Begriff (description list term) `<dt>` und eine oder mehrere Beschreibungen dazu (description list description) `<dd>`.

```html
<dl>
  <dt>Radikaler Konstruktivismus</dt>
  <dd>Die persönliche Wahrnehmung kann nicht das Abbild einer Realität produzieren, welche unabhängig vom Individuum besteht, sondern Realität ist für jedes Individuum immer nur eine Konstruktion seiner eigenen Sinnesreize und seiner Gedächtnisleistung.</dd>
  <dt>Erkenntnistheoretischer Realismus</dt>
  <dd>Wasser ist nass.</dd>
  <dd>Die Welt ist "wirklich erkennbar". Unsere Meinungen können prinzipiell mit beobachtungsunabhängig existenten Objekten zu tun haben.</dd>
</dl>
```

wird zu:
<dl>
  <dt>Radikaler Konstruktivismus</dt>
  <dd>Die persönliche Wahrnehmung kann nicht das Abbild einer Realität produzieren, welche unabhängig vom Individuum besteht, sondern Realität ist für jedes Individuum immer nur eine Konstruktion seiner eigenen Sinnesreize und seiner Gedächtnisleistung.</dd>
  <dt>Erkenntnistheoretischer Realismus</dt>
  <dd>Wasser ist nass.</dd>
  <dd>Die Welt ist "wirklich erkennbar". Unsere Meinungen können prinzipiell mit beobachtungsunabhängig existenten Objekten zu tun haben.</dd>
</dl>


# Betonung und Wichtigkeit
Beim Sprechen verwenden wir Prosodie, um bestimmten Satzelementen oder Wörtern eine Betonung oder höhere Wichtigkeit zu geben. Beim Schreiben wird dies oft durch kursive oder fette Schrift dargestellt. Vergleiche:
* <em>Ich</em> habe gestern keinen Käse gekauft.
* Ich habe <em>gestern</em> keinen Käse gekauft.
* Ich habe gestern keinen <em>Käse</em> gekauft.

In HTML gibt es dazu zwei Elemente:
* `<em>` für Emphasis, also eine Betonung, normalerweise <em>kursiv</em>
* `<strong>` für strong, als etwas Wichtiges, normalerweise <strong>fett</strong>
* Beide sollten nicht dazu verwendet werden, Text lediglich kursiv oder fett darzustellen. Dazu gibt es CSS oder die Elemente `<i>` und `<b>`. Stattdessen haben sie die oben beschriebene semantische Funktion.

# Fett, Kursiv, Unterstrichen
* `<i>` italic = kursiv. Fremdwörter, Fachwörter, Gedanken
* `<b>` bold = fett. Stichwörter, Produktnamen
* `<u>` underlined = unterstrichen
* Zugegeben ist es manchmal etwas unklar, ob ein em oder doch ein i, ein strong oder doch ein b verwendet werden soll. Damit muss man leider leben. :)

# Miniübung
Die Datei palak_paneer.html enthält ein Kochrezept.
* Erstelle einen Unterordner "rezepte".
* Lege darin die Datei palak_paneer.html ab.
* Verwende HTML, um die einzelnen Elemente des Rezeptes semantisch möglichst korrekt auszuzeichnen.
* Lege dann im selben Verzeichnis eine Datei namens "index.html" an. Diese soll folgendes beinhalten:
  * Eine sinnvolle Überschrift
  * Ein Inhaltsverzeichnis, das zu den einzelnen Rezepten führt (von denen wir bisher nur ein einziges haben).
* Binde in beiden Dateien ein externes CSS-Stylesheet ein. Dieses bleibt vorerst noch leer.


# Code
Es gibt mehrere Elemente, um Programmcode auszuzeichnen.
* `<code>`: Das generische Element um Programmcode zu markieren.
* `<pre>`: Whitespace wie Leerzeichen und Zeilenumbrüche bleibt erhalten. Normalerweise kollabiert der Browser jeglichen Whitespace auf ein einziges Leerzeichen.
* `<var>`: Dient dem auszeichnen von Variablen.
* `<kbd>`: Markiert Tastatureingaben und andere Benutzereingaben.
* `<samp>`: Markiert die Ausgabe von Computerprogrammen.

```html
<pre>
  <code>var para = document.querySelector('p');

para.onclick = function() {
    alert('Owww, stop poking me!');
}</code>
</pre>

<p>
  Elemente wie <code>&lt;font&gt;</code> und <code>&lt;center&gt;</code>,
  die ausschließlich die Darstellung betreffen, sollten vermieden werden.
</p>

<p>
  In obigem JavaScript Beispiel wird in der Variablen <var>para</var>
  ein Paragraph Element gespeichert.
</p>

<p>
  Um den gesamten Text zu markieren, drücke
  <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.
</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

# Zitate
* Blockzitate (blockquote) `<blockquote>`: Dies sind Block-Elemente, die ein längeres Zitat beinhalten. Sie bilden einen eigenen Textabsatz.
* Zitate (quote) `<q>`: Dies sind Inline-Elemente für Zitate, die im normalen Textfluss dargestellt werden sollen.
* Blockquotes und quotes können ein `cite`-Attribut haben, um eine Quellenangabe zu machen. Derzeitige (2018) Browser und Screenreader ignorieren dieses jedoch einfach. Alternativ gibt es das:
* Quellenangaben (cite): `<cite>`-Elemente werden oft innerhalb eines Hyperlinks verwendet, um anzugeben, dass es sich dabei um eine Quellenangabe handelt.

```html
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>Das <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (oder
    <em>HTML Block Quotation Element</em>) gibt an, dass der eingeschlossene
    Text ein erweiterndes Zitat ist..
  </p>
</blockquote>

<p>Das Zitat-Element — <code>&lt;q&gt;</code> —
  <q cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/q"> gibt an,
  dass es sich bei dem eingeschlossenen Text um ein kurzes Zitat handelt.</q>
</p>
```

# Abkürzungen
* Abkürzungen und Acronyme (abbreviation) `<abbr>`: Dies sind Inline-Elemente, mit deren Hilfe man Abkürzungen annotieren kann. Die ausgeschriebene Form der Abkürzung wird in einem `title`-Attribut angegeben.

```html
<p>
  Mit <abbr title="Hypertext Markup Language">HTML</abbr> lassen sich
  Dokumente strukturieren.
</p>

<p>
  Etwa 23 <abbr title="von Hundert">v. H.</abbr> Deutschen beklagen
  sich über Lebensmittelunverträglichkeiten.
</p>
```

# Kontaktdaten
* Mit dem Inline-Element `<address>` können Kontaktdaten markiert werden.
* Beachte, dass dieses Element dazu gedacht ist, die Kontaktdaten der Person anzugeben, die das HTML-Dokument erstellt hat. Es soll nicht dazu verwendet werden, beliebige Addressen zu markieren.

```html
<address>
  <p>Bilbo Baggins, Bag End, Hobbiton, The Shire, Middle Earth</p>
</address>

<address>
  <p>Diese Seite wurde erstellt von
    <a href="http://villains.wikia.com/wiki/Karl_Hochman">Karl Hochman</a>.
  </p>
</address>
```

# Subscript und Superscript
* Die Inline-Elemente `<subscript>` und `<superscript>` dienen dazu, Text hochzustellen oder tiefzustellen, wie es bei Datumsangaben, chemischen Formeln und mathematischen Gleichungen oft gemacht wird.

```html
<p>Imam Reza was born on 11<sup>th</sup> of Dhu al-Qa'dah 148 AH.</p>

<p>Die chemische Formel von Kaffee ist
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>

<p>Wenn x<sup>3</sup> is 27 ist, muss x gleich 3 sein.</p>
```

# Datum und Zeit
* `<time>` ist ein Inline-Element, das dazu dient, ein Datum oder eine Uhrzeit in einem maschinenlesbaren Format anzugeben.
* Die Art und Weise, wie ein Datum angegeben wird, hängt stark von Sprache und Kultur ab. Zum Beispiel:
  * 8th February 2018
  * 8.2.2018
  * 02/08/18
  * 2018年2月8日
  * 8e Février 2018
* Diese Unterschiede machen es Computern fast unmöglich, ein solches Datum zu interpretieren. Das einheitliche `datetime`-Attribut ermöglicht dies.
* Es gibt viele verschiedene Möglichkeiten, ein maschinenlesbares Datum anzugeben:

```html
<!-- Standard Datum -->
<time datetime="2018-02-08">Perşembe, 8 Şubat 2018</time>
<!-- Nur Jahr und Monat -->
<time datetime="2018-02">2018年2月</time>
<!-- Nur Monat und Tag -->
<time datetime="01-20">8th February</time>
<!-- Nur die Uhrzeit in Stunden und Minuten -->
<time datetime="19:30">19:30</time>
<!-- Die Uhrzeit mit Sekunden und Millisekunden -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Datum und Uhrzeit -->
<time datetime="2018-02-08T19:30">7.30pm, 08 February 2018</time>
<!-- Datum und Uhrzeit im Zeitzonen-Offset-->
<time datetime="2018-02-08T19:30">7.30pm, 20 January 2016 is 8.30pm in France</time>
<!-- Nur Jahr und Wocher-->
<time datetime="2018-W06">Kalenderwoche 6, 2018</time>
```