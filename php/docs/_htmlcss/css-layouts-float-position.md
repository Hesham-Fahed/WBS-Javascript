---
layout: techdoc
title: Layouts - Float/Position
order: 2500
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Wir kennen bereits den normalen Fluss von Elementen eines HTML-Dokuments. Alles wird in der Reihenfolge angezeigt, wie es im Quellcode steht, eine Box über der anderen.
<!-- Link zu HTML Grundlagen # Dokument Flow -->

Es gibt jedoch Layout-Techniken, mit denen wir dieses Verhalten beeinflussen können. Dies erreichen wir mit den CSS-Eigenschaften `position`, `float` und `display`.

# Floats
Durch floaten können wir erreichen, dass elemente sich nebeneinander anordnen, statt übereinander zu stehen. Floats werden hauptsächlich dazu verwendet, ein Spaltenlayout anzulegen oder Text um ein Bild herumfließen zu lassen.

Das `float`-Property kann vier Werte annehmen:
* `left`: Elemente nach links "floaten". Also links angefangen eines nach dem anderen anzeigen, sofern der Platz ausreicht.
* `right`: Elemente nach rechts "floaten".
* `none`: Elemente nicht "floaten". Dies ist der Standardwert.
* `inherit`: Das Float-Property vom Elternelement übernehmen.

Beachte dabei, dass die Summe der Breiten aller Elemente nie größer als 100% sein kann, da sonst ein Zeilenumbruch eingefügt wird und die Elemente untereinander angeordnet werden.

```html
<h1>2 Spalten Layout</h1>
<div><h2>Spalte 1</h2><div>
<div><h2>Spalte 2</h2></div>
```
```css
div:nth-of-type(1) {
    width: 48%;
    float: left;
}

div:nth-of-type(2) {
    width: 48%;
    float: right;
}
```

# Positionierung
Zur Erinnerung:
* Block-Elemente nehmen immer 100% der Breite des Elternelements ein, sind jedoch nur so hoch wie ihr Inhalt. Sie akzeptieren `height` und `width`.
* Inline-Elemente sind so breit und so hoch wie ihr Inhalt. Sie akzeptieren ignorieren `height` und `width`.
* Der "Normale Layout Flow" bestimmt, wie Block-Elemente im Viewport vertikal übereinander angezeigt werden. Im Normalfall wird eines über dem anderen angezeigt, jedes in seiner eigenen Zeile.
* Inline-Elemente hingegen erscheinen nicht auf einer eigenen Zeile, sondern werden in der selben Zeile zusammen mit dem Text angezeigt. Ist die Zeile voll, wird ein Zeilenumbruch eingefügt.
* Berühren sich die Margins zweier benachbarter Elemente, so wird nur der größere der beiden Margins angezeigt. Dies nennt man "margin collapsing".

Mit Hilfe der `position`-Eigenschaft können wir den "Normalen Layout Flow" verändern. Wir können Elemente exakt an die Stelle bewegen, wo wir sie haben wollen.

Es gibt grundsätzlich vier Möglichkeiten zur Positionierung:
* `static`: Der Standartwert aller Elemente. Zeigt das Element wie gewohnt im normalen Dokumentfluss an.
* `relative`: Positioniert das Element relativ zu seiner normalen Position im Dokumentfluss.
* `absolute`: Entfernt das Element aus dem normalen Dokumentfluss, als wäre es gar nicht vorhanden. Das Element bekommt sozusagen seinen eigenen Layer. Es kann jetzt relativ zur Position des html-Elements oder des nächsten positionierten Elternelements positioniert werden.
* `fixed`: Fixiert das Element relativ zum Viewport des Browsers. Dies wird zB benutzt, um ein Menü immer am oberen Bildschirmrand anzuzeigen.

Angenommen wir haben folgende Grundkonfiguration:

```html
<div class="wrapper">
    <h1>Positionierung</h1>
    <p>I am a basic block level element.</p>
    <p class="pos">I am a basic block level element.</p>
    <p>I am a basic block level element.</p>
</div>
```
```css
body {
    width: 500px;
    margin: 0 auto;
}

p {
    background: lightblue;
    border: 3px solid darkblue;
    padding: 10px;
    margin: 10px;
}

.pos {
    background: yellow;
}
```

## Relative Positionierung
Bei der relativen Positionierung nimmt ein Element immer noch Platz an der Stelle weg, wo es normalerweise im Layout Flow erscheinen würde. Es ist jedoch über einen Offset gegenüber seiner normalen Position verschoben. So kann es sein, dass es sich mit umgebenden Elementen überlappt.

Relative Positionierung ist immer relativ zu der Position, an der das Element normalerweise erscheinen würde.

Der Offset wird über die Eigenschaften `top`, `bottom`, `left` und `right` bestimmt.

Relative Positionierung wird oft verwendet, um kleine Anpassungen am Layout zu machen, wie zB einen Button ein paar Pixel zu verschieben, so dass er auf einer Höhe mit dem Text steht.

Die "top" und "left" Werte sind hier so zu interpretieren, dass das Element vom oberen und vom linken Rand aus 30px wegschoben wird.

```css
.pos {
    position: relative;
    top: 30px;
    left: 30px;
}
```

## Absolute Positionierung
Die absolute Positionierung dient dazu, Elemente über die Eigenschaften `top`, `bottom`, `left` und `right` exakt innerhalb des "umschließenden Elements" zu positionieren. Die Eigenschaften geben hier den Abstand zu den entsprechenden Rändern der Seite an.

Das "umschließende Element" ist immer das nächste Elternelement, das mit `position` Positioniert wurde. Gibt es keines, ist das "umschließende Element" das `html`-Element.

Da eine relative Positionierung immer relativ zum umschließenden Elternelement interpretiert wird, sieht man oft eine Kombination aus absoluter Positionierung (Elternelement) und relativer Positionierung.

Bei absoluter Positionierung wird das Element komplett aus dem normalen Textfluss entfernt. Die verbleibenden Elemente rutschen also zusammen, als wäre das absolut psoitionierte Element gar nicht da.

```css
.pos {
    position: absolute;
    top: 30px;
    left: 30px;
}

/* Die folgende Zeile bewirkt dass das Element
   mit der Klasse "pos" relativ zum wrapper-div
   positioniert wird, statt relativ zum <html> */
.wrapper { position: relative; }
```

## Stacking Order
Was passiert, wenn sich durch Positionierung mehrere Elemente überlappen? Wie wird entschieden, welches Element über oder unter welchem Erscheint?

Grundsätzlich werden Elemente, die später im Quellcode stehen über früher stehenden positioniert. Doch dies kann über den sogenannten `z-index` beeinflusst werden.

Standardmäßig haben alle Elemente einen Z-Index von 0. Ändert man diesen, so erscheinen Elemente mit höheren Z-Index über Elementen mit niedrigerem Z-Index.

```css
.pos { z-index: -100; }
```

## Fixed Positionierung
Fixed Positionierung bewirkt, dass die Position des Elements sich am Viewport, also dem Browserfenster, orientiert. Die `top`, `bottom`, `left` und `right` Werte geben dabei den Abstand zu den Rändern des Viewports an.

Das Element scheint dabei am Viewport "festgeklebt" zu sein; Es bewegt sich nicht mit, wenn der Inhalt der Seite gescrollt wird. So kann man zum Beispiel ein Menü erzeugen, dass immer sichtbar ist.

Bei der Fixed Positionierung wird das Element ebenfalls komplett aus dem normalen Layout Flow entfernt.

```css
.pos {
    position: fixed;
    top: 30px;
    left: 30px;
}
```
