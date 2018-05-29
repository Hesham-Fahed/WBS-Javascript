---
layout: techdoc
title: Fonts
order: 2700
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Textinhalte werden generell wie aneinandergereihte Inline-Elemente behandelt, die alle nebeneinander auf einer Zeile angeordnet sind. Erst wenn die Zeile voll ist, wird automatisch ein Zeilenumbruch generiert.

Man unterscheidet generell zwei verschiedene Kategorien der Textgestaltung:

# Font styles
Dies sind Eigenschaften, die den Font beeinflussen, in dem der Text dargestellt werden soll. Sie legen fest, welcher Font verwendet wird, seine Größe, ob er fett oder kursiv sein soll, usw.

* `color`: Legt die Textfarbe fest. Es können beliebige CSS-Farbangaben verwendet werden.
* `font-family`: Legt einen (oder eine Reihe von) Fonts fest, in dem der Text dargestellt werden soll. Ein Font kann nur angezeigt werden, wenn er auf dem entsprechenden Gerät vorhanden ist. Der Browser versucht der Reihe nach, einen der angegebenen Fonts zu finden. Kann er dies nicht, verwendet er einen Standardfont.
* `font-size`: Ein Element erbt immer die Fontgröße seines Elternelements, angefangen beim root-Element, also `<html>`, dessen Standardgröße 16px ist. Die am häufigsten verwendeten Einheiten für die Fontgröße sind px, em und rem. Beachte, dass rem sich auf die Fontgröße des html-Elements bezieht, em aber auf die Größe des Elternelements, was bei verschachtelten Elementen zu unerwarteten Ergebnissen führen kann.
```css
p       { color: blue; }
li      { color: #99ffdd; }
html    { font-family: Helvetica, Arial, sans-serif; }
html    { font-size: 18px; }
h1      { font-size: 2.5em; }
.remark { font-size: 0.5rem; }
```

## Web Safe Fonts
Es gibt nur wenige Fonts, die im Normalfall auf allen Systemen zu finden sind (Windows, OSX, die meisten Linux Distributionen, Android und iOS). Diese Liste kann sich natürlich ändern, ist jedoch bereits seit vielen Jahren "stabil".

* Arial	(sans-serif) - Meist wird zusätztlich zu Arial auch Helvetica angegeben, da man sagt, dieser sehe etwas besser aus. Arial ist jedoch "verfügbarer" als Helvetica.
* Verdana (sans-serif)
* Courier New (monospace) - Auf einigen Betriebssystemen ist nur eine ältere Version namens "Courier" installiert. Deshalb sollten immer beide Fonts angegeben werden.
* Georgia (serif)
* Times New Roman (serif) -  Auf einigen Betriebssystemen ist nur eine ältere Version namens "Times" installiert. Deshalb sollten immer beide Fonts angegeben werden.


## Default Fonts
CSS legt auch fünf generische Namen für Fonts fest. Davon werden drei häufig eingesetzt: `serif`, `sans-serif` und `monospace`. Es handelt sich dabei um Fonts, auf die der Browser zurückgreift, wenn er keinen der exakt angegebenen Fonts finden kann.

## Web Fonts
Web Fonts sind Fonts, die im CSS Stylesheet als URL angegeben werden und die dann automatisch heruntergeladen werden. Solche Fonts selbst einzubinden ist recht aufwändig. Es gibt jedoch "Online Font Serives", welche diesen Vorgang stark vereinfachen. Der wohl Bekannteste ist [Google Fonts](https://fonts.google.com/).

Bei Google Fonts klickt man sich die Fonts zusammen, die man verwenden will, und Google sagt, was man in sein CSS kopieren muss.

```html
<link href="https://fonts.googleapis.com/css?family=Mukta+Malar:400,700|Source+Sans+Pro:400,700" rel="stylesheet">
```
```css
font-family: 'Mukta Malar', sans-serif;
font-family: 'Source Sans Pro', sans-serif;
```

## Text Weight, Decoration und Caps
Es gibt in CSS view Properties, um das Gewicht (weight/emphasis) von Text anzugeben:
* `font-style`: Legt fest, ob der Text kursiv dargestellt werden soll.
  * `normal`: keine Kursivschrift
  * `italic`: verwendet die Italic version des Fonts, wenn vorhanden. Wenn nicht, wird stattdessen `oblique` verwendet.
  * `oblique`: Simuliert eine Kursivschrift, indem die normale Schrift schräg dargestellt wird.
* `font-weight`: Gibt an, wie fett die Schriftart dargestellt werden soll. Ob diese Einstellung Auswirkungen hat, hängt davon ab, wie viele Varianten des Fonts existieren (-light, -normal, -bold, -extrabold, -black, ...)
  * `normal`, `bold`: Die beiden am häufigsten verwendeten. Stellt den Font normal oder fett dar.
  * `lighter`, `bolder`: Setzt die "Fettigkeit" des Fonts gegenüber der des Elternelements um eine Stufe herab oder hinauf.
  * `100`-`900`: Numerische Fettigkeiten.
* `text-transform`: Verändert den Text selbst.
  * `none`: Keine Transformation.
  * `uppercase`, `lowercase`: Wandelt den gesamten Text in Groß- oder Kleinbuchstaben um.
  * `capitalize`: Wandelt den ersten Buchstaben jedes Wortes in einen Großbuchstaben um.
  * `full-width`: Stellt jeden Buchstaben dar, als befände er sich in Kästchen, die alle die selbe Größe haben. Dies ist also ähnlich wie ein monospace Font, funktioniert aber auch mit zB asiatischen Schriftarten.
* `text-decoration`: Gibt Textdekorationen an. Es können auch mehrere Dekorationen angewendet werden. Dies ist eigentlich eine Abkürzung für `text-decoration-line`, `text-decoration-style` und `text-decoration-color`.
  * `none`: Entfernt alle Dekorationen.
  * `underline`: Unterstreicht den Text.
  * `overline`: Überstreicht den Text.
  * `line-throuth`: Streicht den Text durch.
* `font-variant`:
  * `normal`: Normale Darstellung.
  * `small-caps`: Stellt den Text in Kapitälchen dar.

## Textschatten
Mit dem `text-shadow` Property können dem Text sogenannte "Drop Shadows" hinzugefügt werden.
`text-shadow: -3px 4px 5px red;` - die 4 Werte sind:
* Horizontaler Offset vom Originaltext (Pflichtangabe)
* Vertikaler Offset vom Originaltext (Pflichtangabe)
* Blur Radius - je höher, desto diffuser ist der Schatten. Default ist 0, also kein Blur.
* Die Basisfarbe des Schattens. Default ist schwarz.

# Text layout styles
Diese beeinflussen Dinge wie den Zeichen- und Zeilenabstand, die Ausrichtung des Textes, usw.

## Ausrichtung von Text (Alignment)
* `text-align`: Dieses Property ist aus gängigen Textverarbeitungsprogrammen wie MS Word bekannt. Mögliche Werte sind `left`, `right`, `center`, `justify` (respektive links, rechts, zentriert und Blocksatz).
* `line-height`: Gibt die Höhe der Zeile an, in der der Text steht. 
* `letter-spacing`, `word-spacing`: Diese geben den Abstand zwischen den einzelnen Buchstaben und Wörtern an. Sie werden nicht oft verwendet, können aber interessante optische Effekte haben.
