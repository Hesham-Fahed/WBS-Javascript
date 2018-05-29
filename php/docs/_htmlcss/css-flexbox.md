---
layout: techdoc
title: CSS Flexbox
order: 2800
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Im Gegensatz zu CSS Grids, die Elemente horizontal oder vertikal auf einem Raster Platzieren, also zweidimensional sind, ist eine Flexbox eindimensional. Ihre Aufgabe ist, den Raum entlang einer Achse aufzuteilen.

# Grundlagen
Bei einer Flexbox gibt es immer zwei Achsen, die Hauptachse (main axis) und die Querachse (cross axis). Das `flex-direction`-Property bestimmt die Hauptachse. Die Querachse verläuft senkrecht dazu.

In Flexbox bezieht sich immer alles auf diese beiden Achsen. Ich verwende hier öfters den Grid-Term "Track", um mich je nach Ausrichtung auf eine Spalte oder Zeile zu beziehen.

Die Hauptachse kann vier Werte annehmen:
- `row` und `column`: Bei row verläuft die Hauptachse in der `inline` Richtung, also so, wie der Text fließt. Bei column verläuft die Hauptachse vom oberen Rand der Seite bis zum Unteren. Items werden in Codereihenfolge angezeigt.
- `row-reverse` und `column-reverse`: Bei den -reverse Varianten ist die Laufrichtung umgedreht. Items werden **scheinbar** in umgekehrter Codereihenfolge angezeigt. Dies ist nur eine visuelle Darstellung. Ein Screen Reader würde weiterhin die Codereihenfolge verwenden.

Wenn also die `flex-direction: row` ist und die Flussrichtung des Textes wie im Deutschen von links nach rechts, dann befindet sich der Anfang der Hauptachse links und deren Ende rechts. Im Arabischen, wo der Text von rechts nach links fließt, wäre dies umgekehrt.

# Flex Container
Als **Flex-Container** bezeichnet man einen Bereich eines Dokuments, der über eine Flexbox formatiert wird. Sobald wir das display Property eines Containers auf `flex` oder `inline-flex` setzen, werden alle direkten Kinder des Containers zu **Flex-Items**.

```css
.box {
    display: flex;
}
```

# Flex-Items
In einer Flexbox gibt es das Konzept des "Verfügbaern Raumes" (available space). Dabei gibt es zwei Arten von verfügbarem Raum:
- Positiver freier Raum (positive free space) - Der freie Raum in einem Container, wenn die Items nicht den ganzen Platz benötigen.
- Negativer freier Raum (negative free space) - Der Raum, der zusätlich verbraucht wird, wenn die natürliche Größe aller Elemente größer ist, als der Container.

Es gibt drei Properties, mit denen man steuern kann, wie freier Raum verteilt wird. Um diese zu verstehen, muss man wissen, was der min-content und max-content eines Elements ist.
- **min-content**:ie kleinste größe, die ein Element einnehmen kann, ohne dass der Inhalt überläuft (overflow).
- **max-content**: Die größe eines Elements, wenn es keinen Zeilenumbruch mehr enthält.

- `flex-basis`:
  - `auto` (default): Bestimmt die Basisgröße eines Items. Wie groß ist das Item vor dem wachsen oder schrumpfen (siehe unten)? Der Browser prüft zuerst, ob dem Item mit CSS eine Größe gegeben wurde. Wenn ja, benutzt er diesen Wert als flex-basis. Wenn nicht, ist flex-basis gleich max-content, also der Größe des Elements, wenn es keine Zeilenumbrüche enthielte.
  - `content`: Die flex-basis wird immer durch den Content bestimmt.
  - `0`: Der Inhalt des Items wird bei der Berechnung komplett ignoriert. Praktisch, um zB ein Menü mit gleich breiten Buttons zu bauen.
- `flex-grow: N`: Bestimmt den flex-grow Faktor, also wie stark sich das Item im Verhältnis zu anderen Items in positiven Raum ausdehnen wird. flex-grow wird auf einen positiven Wert gesetzt, der die Größenverhältnisse der Items bestimmt. Dabei wird zB ein Item mit "flex-grow: 6" dreimal so Groß sein, wie ein Item mit flex-grow: 2".
- `flex-shrink: N`: Bestimmt den flex-shrink Faktor, also wie stark das Item schrumpft, wenn negativer Raum verteilt wird. Der flex-shrink Faktor wird dabei mit der flex-basis multipliziert, so dass größere Items absolut gesehen schneller schrumpfen als kleinere. Dabei wird ein Item nie kleiner werden, als sein min-content.

Es gibt, wie immer, eine Kurzschreibweise für diese drei Eigenschaften:
- `flex: grow, shrink, basis`
- `flex: initial` oder `flex: 1`: Das Gleiche wie `flex: 0 1 auto` - Auf Anfangswert zurücksetzen.
- `flex: auto`: Das Gleiche wie `flex 1 1 auto` - Normal wachsen und schrumpfen.
- `flex: none`: Das Gleiche wie `flex 0 0 auto` - Items wachsen und schrumpfen nicht.

Das Standardverhalten von Flex-Items ist wie folgt:
- Alle Items werden in einer Reihe angezeigt (flex-direction: row).
- Es wird ganz am Anfang der Hauptachse begonnen.
- Items dehnen sich in Richtung der Hauptachse nicht aus, können aber schrumpfen.
- Items dehnen sich in Richtung der Querchase so weit aus wie das größte Item.
- flex-basis ist auto und flex-wrap ist nowrap.
- Befinden sich mehr Items in einem Container, als hereinpassen, so "fließen sie über" (overflow).


# Line Wrapping mit flex-wrap
Obwohl Flexbox eindimensional ist, können sich Items auf mehrere Zeilen verteilen. Jede dieser Zeilen ist wie eine separate Flexbox zu betrachten, die nichts mit den anderen zu tun hat:
- `flex-wrap`: Mögliche Werte sind `wrap` und `nowrap`.

```css
.box {
    flex-wrap: wrap;
}
```

Es gibt eine Kurzschreibweise für flex-direction und flex-wrap:
- `flex-flow`: Der erste Wert ist direction, der zweite wrap.


# Items entlang der Querachse ausrichten
Es gibt Properties, die den Items sagen, wie sich sich den verfügbaren Raum in beiden Richtungen aufteilen sollen.
- `align-items`: Richtet Items entlang der Querachse aus, und zwar innerhalb eines Tracks. Es setzt das align-self Property von allen Items auf entlang der Achse gleichzeitit. Mögliche Werte sind:
  - `stretch` (default): Dehnt alle Items auf die Größe des größten Items aus.
  - `flex-start` und `flex-end`: Reiht alle Items am Start oder Ende des Flex-Containers auf.
  - `center`: Zentriert alle Items im Container.
  - `baseline`: Richtet alle Items an der Baseline aus.
- `justify-content`: Richtet Items entlang der Hauptachse aus. Mögliche Werte sind:
    - `stretch`, `flex-start`, `flex-end` und `center`, die genauso funktionieren wie entlang der Querachse.
    - `space-between`: Items gleichmäßig (mit gleichem Abstand zueinander) entlang der Achse verteilen.
    - `space-around`: Gleicher Abstand auf beiden Seiten jedes Items. Also wie space-between, aber mit Abstand auch vor dem ersten und nach dem letzten Item.
- `align-self`: Bestimmt die Ausrichtung eines einzelnen Items auf der Querachse. Akzeptiert die gleichen Werte wie "align-items" und außerdem noch `auto`, was den Wert auf den Wert des Containers zurücksetzt.
- `align-content`: Bestimmt den Leerraum und die Verteilung des Platzes zwischen, vor und nach allen Tracks entlang der Querachse, richtet also die Gesamtheit aller Tracks aus. Mögliche Werte sind:
  - `stretch`, `flex-start`, `flex-end`, `center`, `space-between` und `space-around`, die genauso funktionieren, wie oben beschrieben.
  - `space-evenly`: Klingt gut, wird aber noch nicht weitläufig unterstützt. (TODO)


# Items entlang der Hauptachse ausrichten
Hier gibt es nur ein einziges Property, das bestimmt, was mit nicht verbrauchtem Platz passiert:
- `justify-content`: Nimmt die gleichen Werte wie "align-content".

Die Verteilung von Items im Container entlang der Hauptachse kann man am leichtesten mit einem Margin erreichen, denn ein "justify-items" oder "justify-self" für die Hauptachse gibt es nicht. Ein `margin-auto` macht den Margin, wie gewohnt, so groß wie möglich, drückt also alle anderen Elemente weg.
```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="push">Three</div>
  <div>Four</div>
</div>
```
```css
.push {
    margin-left: auto;
}
```

Beachte auch, dass dich bei `flex-direction: row-reverse / column-reverse` auch Start und Ende vertauschen.

<!-- “Authors must not use order or the -reverse values of flex-flow/flex-direction as a substitute for correct source ordering, as that can ruin the accessibility of the document.” -->

# Order - Reihenfolge
Die Reihenfolge der Items in einer Flexbox lässt sich mit dem `order`-Attribut verändern.

Jedes Item hat Anfangs eine Order von 0. Items mit höherer Order werden nach Items mit niedrigerer Order angezeigt, wobei auch negative Werte zugewiesen werden können.

Haben zwei Items die gleiche Order, werden sie in der Reihenfolge des Quellodes angezeigt.

Wie bei flex-direction ist auch order eine rein optische Darstellung und hat keinen Einfluss auf die Barrierefreiheit (accessibility).

Mit dem Order-Attribut ist es einfach, den Hauptinhalt der Seite weit oben im Quellcode zu platzieren, ihn im Browser aber weiter unten anzuzeigen. Auch wenn die visuelle Darstellung nicht der normalen Lesereihenfolge entspricht, kann Order Abhilfe schaffen.

    - ``: 
    - ``: 
    - ``: 
- ``: 
- ``: 
- ``: 

<!-- TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox -->