---
layout: techdoc
title: Listen & Links Stylen
order: 2700
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

# Listen
Alle Listen (ol, ul, dd) werden grundsätzlich mit den gleichen Eigenschaften gestylet wie andere boxen.

```css
    padding-left: 0.5rem;
    line-height: 1.5;
```

Einige Properties dienen speziell der Darstellung von Listen:
* `list-style-type`: Legt die Art der Nummerierung fest. Mögliche Werte sind:
  * Schlüsselwörter: `disc`, `circle`, `square`, `decimal`, `georgian`, `upper-roman`, `kannada`<br>
    [List item keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
  * Ein String: `list-style-type: '-';`
  * Keine Nummerierung: `list-style-type: none;` (zB für Menüs)
* `list-style-position: inside/outside`: Legt fest, ob das Aufzählungszeichen vor oder innerhalb des Listeneintrags steht.
* `list-style-image: url(bla.jpg)`: Festlegen eines eigenen Icons für die Aufzählung.
* `list-style: square url(kohl.png) inside;`: In der Kurzschreibweise kann man zwei oder alle drei Eigenschaften zusammenfassen.

Sollte `list-style-image` nicht flexibel genug sein, kann man stattdessen mit einem Hintergrundbild arbeiten:

```css
ul {
    padding-left: 2rem;
    list-style-type: none;
}

ul li {
    padding-left: 2rem;
    background-image: url(bla.svg);
    background-position: 2px 0;
    background-size: 1rem 1rem;
    background-repeat: no-repeat;
}
```

# Links
Obwohl man Links stylen kann, wie man will, sollte man folgende Regeln berücksichtigen:
* Links sollten irgendwie als solche kenntlich gemacht werden. Oft werden sie unterstrichen.
* Links sollten sich verändern, wenn sie hover oder focus bekommen.

Die Standarddarstellung von Links lässt sich über verschiedene Eigenschaften beeinflussen, wie zB:
* `color`: Die Textfarbe
* `cursor`: Der Style des Mauszeigers. Mögliche Werte sind zB `help`, `wait`, `crosshair`, `pointer` oder `auto`. [Vollständige Liste](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).
* `outline`: Wie `border`, nimmt jedoch keinen Platz im Box Modell weg, sondern wird innerhalb der Marginbox angezeigt.
* `text-decoration: underline` oder `border-bottom: 1px dashed black` zum Unterstreichen
* Mit einem Hintergrundbild lässt sich hier, genau wie bei den Listen, ein Icon hinzufügen.

```css
a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:visited {
    color: green;
}

a:focus, a:hover {
  border-bottom: 1px dotted;
  background: red;
}

/* Trick um alle externen Links zu matchen */
/* TODO: reicht nicht aus */
a[href*="http"] {
  background: url('images/star.svg') no-repeat 100% 0;
  background-size: 15px 15px;
  padding-right: 19px;
}
```