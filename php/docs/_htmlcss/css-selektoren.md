---
layout: techdoc
title: Selektoren
order: 2100
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

CSS-Selektoren lassen sich in fünf Gruppen aufteilen.

# Einfache Selektoren
Diese matchen aufgrund des Element-Typs (p, div, h1)

```html
<p>Ich mag Broccoli!</p>
<div>Pfui Deiwwel.</div>
```
```css
p   { color: red; }
div { color: blue; }
```

... oder aufgrund der Klasse oder Id

```html
<ul id="unique-list">
    <li class="first done">Get one ring to rule them all.</li>
    <li class="second done">Get one ring to find them.</li>
    <li class="third">Get one ring to bring them all and in the darkness bind them.</li>
</ul>
```
```css
.li    { margin-bottom: 25px; }
.first { font-weight: bold; }
.done  { text-decoration: line-through; }
#unique-list { background: lightblue; }
```

Der Universalselektor `*` matcht **alle** Elemente. Dies kann negative Auswirkungen auf die Performance haben. Deshalb ist dieser Selektor mit Vorsicht zu verwenden.
```css
* {
    padding: 0;
    margin: 0;
}
```

## Miniübung
Formatiere das `palak_paneer.html`-Dokument aus der letzten Miniübung. Überlege dir dabei, wo Klassen Sinn machen und wo du eventuell eine Id benötigst.
* Gib der Zutatenliste eine hellgraue Hintergrundfarbe
* Färbe alle Gewürze auf der Zutatenliste hellrot ein (Schriftfarbe)
* Gib der Kochanleitung einen dünnen, schwarzen Rahmen.
* Besorge dir Informationen zum HTML-Element `<time>` (w3c, mdn, selfhtml).
    Gib dann alle Zeitangaben mit Hilfe dieses Elements an.
* Hebe die Zubereitungszeit optisch hervor.


# Kombinatoren
Mit Kombinatoren kann man mehrere Selektoren verknüpfen. Es gibt vier verschiedene:
* ` ` (leerzeichen) - descendant selector: Wählt ein Element aus, das sich irgendwo innerhalb eines anderen Elements befindet. Es muss dabei kein direktes Kind sein.
* `>` - child selector: Wählt ein Element aus, das ein direktes Kind eines anderen Elements ist.
* `+` - adjacent sibling selector: Wählt ein Element aus, das ein direkter Nachbar (sibling heißt eigentlich Geschwister) eines anderen Elements ist, das also auf der selben Ebene, aber direkt nach dem anderen Element steht.
* `~` - general sibling selector: Wählt ein Element aus, das ein beliebiger Nachbar eines andere Elements ist, das also nur auf der selben Ebene steht.

```html
<section>
  <h2>Heading 1</h2>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <div>
    <h2>Heading 2</h2>
    <p>Paragraph 3</p>
    <p>Paragraph 4</p>
  </div>
</section>
```
```css
/* Alle p innerhalb der section (4) */
section p   { color: blue; }
/* alle p, die direktes Kind der section sind (2) */
section > p { background-color: yellow; }
/* alle p, die direkte Nachbarn einer h2 sind (2) */
h2 + p      { text-transform: uppercase; }
/* alle p, die Nachbarn einer h2 sind (4) */
h2 ~ p      { border: 1px dashed black; }
```

# Mehrfachselektoren
Eine komma-separierte Liste von mehreren Selektoren.
* Die CSS-Regeln gelten für alle Selektoren in der Liste.
* Vorsicht: Ist einer der Selektoren ungültig, so ist die gesamte Liste ungültig.

```css
h1, h2, h3, h4, h5, h6 {
    font-family: helvetica, 'sans serif';
}
```

## Miniübung
Löse die Aufgaben 1-14 von [CSS Diner](https://flukeout.github.io/).

<!-- #### TODO: Miniübung Tabelle stylen -->


# Attribut Selektoren
Matchen Elemente über deren Attribute oder Attributwerte.

## Attribut- und Attributwert-Selektoren
Attribut- und Attributwert-Selektoren matchen einen extakten Attributwert. Folgendes selektiert alle Elemente, die...
* `[attr]`: ein Attribut namens "attr" haben.
* `[attr=val]`: ein Attribut namens "attr" haben, wenn dessen Wert "val" ist.
* `[attr~=val]`: ein Attribut namens "attr" haben, wenn dessen Wert "val" einer der durch Leerzeichen getrennte Werte des Attributs ist. zB eine von mehreren Klassen eines Elements.

```html
<h1 lang="en-US">Cheese Sandwich Spezial</h1>
<ul>
    <li data-tags>Brot</li>
    <li data-tags="fett">Butter</li>
    <li data-tags="fett scharf">Chilipaste</li>
    <li data-tags="tierisch fett">Cheddar</li>
    <li>Mehr Käse</li>
    <li data-tags="scharf nachtschatten">Jalapeños</li>
</ul>
```
```css
[data-tags]          { background: lightgrey; }
[data-tags="scharf"] { color: red; }
[data-tags~="fett"]  { text-decoration: underline; }
```

## Attributwert-Substring-Selektoren
Diese Selektoren werden auch RegExp-ähnliche Selektoren genannt, da sie flexibler als die exakten Selektoren sind. Es handelt sich jedoch nicht wirklich um Regular Expressions.

Folgende Selektoren wählen alle Elemente aus, die ein Attribut namens "attr" haben, dessen Wert...
* `[attr\|=val]`: exakt "val" ist oder mit "val-" beginnt. (beachte das Minus! Wird oft für Sprachcodes wie fr-FR verwender.)
* `[attr^=val]`: mit "val" beginnt.
* `[attr$=val]`: mit "val" endet.
* `[attr*=val]`: den String "val" enthält (im Gegensatz zu [attr~=val] behandelt dieser Selektor Leerzeichen nicht als Trennzeichen, sondern als Teil des Attributwertes.)

```css
/* Dieses CSS bezieht sich auf das HTML des letzten Beispiels */
h1[lang|=en]          { color: blue; }
[data-tags^="fett"]   { color: brown; }
[data-tags$="scharf"] { text-decoration: overline; }
[data-tags*="scharf nachtschatten"] {
    text-decoration: line-through;
}
```

## Miniübung
Öffne die Datei `football.html`. Darin befindet sich die Aufgabenstellung.


# Pseudoklassen
Pseudoklassen matchen den Zustand eines Elements. Zum Beispiel, ob mit der Mauszeiger darüber steht, ob eine Checkbox ausgewählt ist oder ob ein Element das erste Kind seines Elternelements ist. Das Element wird also nur gestylet, wenn es den entsprechenden Zustand hat.

Es gibt derzeit 41 Pseudokassen, weshalb an dieser Stelle nur die wichtigsten angesprochen werden.

Die Syntax einer Pseudoklasse ist: `SELEKTOR:PSEUDOKLASSE`

```html
<a href="https://developer.mozilla.org/"
   target="_blank">Mozilla Developer Network</a>
```
```css
a { /* Link im Urzustand */
    font-weight: bold;
    color: blue;
}

a:visited {
    color: blue;
}

a:hover,
a:active,
a:focus {
    color: red;
    text-decoration: none;
}
```

Einige Pseudoklassen und wann sie "greifen":
* `:hover` - Mauszeiger steht über dem Link.
* `:visited` - Bereits besuchter Link.
* `:focus` - Link wurde ausgewählt (zB mit der Tastatur).
* `:active` - Element ist Aktiv. Bei Links zB solange der Mausknopf gedrückt wird.

* `:checked` - Ausgewählter radiobutton, checkbox oder select-option.
* `:disabled` - Deaktiviertes Element, zB durch die Klasse "disabled".
* `:enabled` - Nicht deaktiviertes Element.

* `:first-child` - Element ist das erste Kind seines Elternelements.
* `:first-of-type` - Element ist das erste Kind seines Elternelements, das einen bestimmten Typ hat. zB `p:first-of-type`

* `:last-child` - Wie first-child, aber hier ist es das letzte Kind.
* `:last-of-type` - Wie first-of-type, aber hier ist es das letzte Kind.

* `:nth-child(X)` - Alle X. Kinder ihres Elternelements.
  * X kann "odd" (Kind 1, 3, 5, ...) oder "even" (Kind 2, 4, 6) sein.
  * X kann in Funktionalnotation geschrieben werden: An+B mit A, B € N
  * :nth-child(3n+5) wäre zB jedes dritte Kind, beginnend beim fünften.
* `:nth-last-child(X)` - Wie nth-child, fängt aber hinten an zu zählen.
* `:nth-of-type(X)` - Wie nth-child, aber das Element muss einen bestimmten Typ haben.
  * li:nth-of-type(odd) wären alle "ungeraden" <li> Elemente.
* `:nth-last-of-type()` - Wie nth-of-type, fängt aber hinten an zu zählen.

* `:in-range` - Ein Input-Element, dessen Wert zwischen seinem "min" und "max" Attribut liegt.
* `:out-of-range` - Wie in-range, aber der Wert liegt nicht im gültigen Bereich.

* `:valid` - Ein Form Element, dessen Inhalt valide ist.
* `:invalid` - Ein Form Element, dessen Inhalt nicht valide ist.
* `:required` - Ein Pflichtfeld eines Formulars (required Attribut)

* `:not(ELEMENT)` - Elemente, die nicht gleich "ELEMENT" sind, zB `:not(p)`.

# Pseudoelemente
Pseudoelemente sind den Pseudoklasse ähnlich. Sie werden an einen Selektor angehängt, und wählen dann nur einen Teil eines Elements aus.

* `::after` - Wählt den imaginären Bereich nach dem Ende des Inhalts eines Elements, aber vor dem Beginn des schließenden Tags aus.
* `::before` - Wie ::after, jedoch zwischen Inhalt und öffnendem Tag.
* `::first-letter` - Wählt den ersten Buchstaben des Inhalts eines Elements aus.
* `::first-line` - Wählt die erste Zeile des Inhalts eines Elements aus.
* `::selection` - Matcht einen vom Benutzer (zB mit der Maus) markierten Bereich.

```html
<p>Es war einmal ein <a href="http://google.de">Google Link<a></p>
```
```css
p::after { content: "!!!"; }
p::first-letter { font-size: 2em; }
```

# Miniübung
* Löse die Aufgaben 15-32 von [CSS Diner](https://flukeout.github.io/).
* Formatiere die Zutatenliste in `palak_paneer.html` so, dass alle ungeraden Zeilen mit einer Hintergrundfarbe dargestellt werden, alle geraden Zeilen mit einer anderen.
* Der erste Buchstabe des ersten Absatzes der Rezeptanleitung soll als Initiale in der 2.5-fachen Schriftgröße dargestellt werden. Außerdem soll er einen hellgrauen Hintergrund haben.
