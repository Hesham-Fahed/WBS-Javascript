---
layout: techdoc
title: Das Box Modell & Farbverläufe
order: 2400
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Jedes Element eines HTML-Dokuments wird als rechteckige Box dargestellt. Im Falle von Block-Elementen hat Box die folgenden Eigenschaften:

![Box Modell](../assets/img/css-box-model2.png 'Box Modell')

# Width & Height
`width` und `height` bestimmt die Größe des Bereichs, in dem der eigentliche Inhalt des Elements dargestellt wird. Dies kann Text sein, aber auch weitere HTML-Elemente.
* Wird keine explizite Breite angegeben, so beträgt diese 100% des verfügbaren Platzes.
* Die Höhe eines Block-Elements passt sich an die Höhe des Inhalts an.
* Für width und height können auch Minimal- und Maximalwerte angegeben werden, innerhalb derer die größe der Box veränderbar ist:  
```css
.wrapper {
    /* Setze die Breite auf 70% des Elternelements,
        aber nie kleiner als 480px oder größer als 1280px */
    width: 70%;
    min-width: 480px;
    max-width: 1280px;
    margin: 0 auto;
}
img {
    /* Verhindere, dass das Bild aus seinem Elternelement "fließt" */
    display: block;
    max-width: 100%;
    margin: 0 auto;
}
```

# Padding & Margin
`padding` ist der innere Rand einer CSS Box, also das, was zwischen dem eigentlichen Inhalt und dem Rahmen (border) liegt.
* `padding: 10px` setzt das Padding auf allen 4 Seiten auf 10px.
* `padding: 5px 10px` setzt es oben und unten auf 5px, rechts und links auf 10px.
* `padding: 5px 10px 15px 20px` setzt es oben angefangen und dann im Uhrzeigersinn auf diese 4 Werte.
* Es gibt auch die Langschreibweisen: `padding-top`, `padding-right`, `padding-bottom` und `padding-left`, mit denen jede Seite einzeln gesetzt werden kann.

`margin` legt den äußeren Rahmen der Box fest.
* Margin funkioniert genauso wie padding.
* Oberer und unterer Margin haben ein Verhalten namens "margin-collapsing": Treffen die Margins zweier Boxen vertikal aufeinander, so ist der Abstand zwischen den beiden Elementen nicht die Summe der beiden Margins, sondern die Breite des Größeren der beiden Margins.


# Border
`border` ist der Rahmen der Box. Dieser befindet sich zwischen dem Padding und dem Margin. Standardmäßig hat der Rahmen eine Breite von 0, was ihn unsichtbar macht.
* `border: 1px solid black` zeichnet auf allen 4 Seiten einen durchgehenden, schwarzen Rahmen mit 1px Breite.
* Auch für den Rahmen gibt es Langschreibweisen:
  * Mit `border-top`, `border-right`, `border-bottom` und `border-left` kann der Rahmen für einzelne Seiten gesetzt werden.
  * Mit `border-width`, `border-style` und `border-color` kann die Breite, die Linienart und die Farbe für alle 4 Seiten gesetzt werden.
  * Die Eigenschaften der beiden letzten Punkte können miteinander verbunden werden, so dass sich Eigenschaften wie `border-top-width`, `border-top-style` oder `border-top-color` ergeben.
* `border-radius: 20px 10px`
  * Die Angaben bei "border-radius" funktionieren genau so wie bei Margin und Padding.
  * Mit `border-radius 10px / 20px` können auch Ellipsen gezeichnet werden.
  * Wie oben, gibt es auch für "border-radius" Kurzschreibweisen wie `border-top-left-radius`.
<!-- TODO: * `border-image` -->

# Overflow
Gibt man die größe einer Box mit absoluten Werten an, so kann es sein, dass der Inhalt nicht hinein passt und aus der Box heraus fließt. Was mit dem herausfließenden Inhalt passieren soll, wird mit dem `overflow` Property gesteuert:
* `overflow: auto` - Was aus der Box herausfließt, wird nicht angezeigt, und es werden Scrollbalken eingeblendet.
* `overflow: hidden` - Was aus der Box herausfließt, wird nicht angezeigt.
* `overflow: visible` - Was aus der Box herausfließt, wird einfach außerhalb der Box angezeigt. Dies ist das standard Verhalten.

# Border Box
![Border Box](../assets/img/css-box-model-border-box.png)
Stellt man das Box Modell auf `border-box` um, so errechnis sich die Höhe und Breite der Box aus der Summe der Margins plus der angegebenen `height` und `width`. Border under Margin sind in dieser Angabe dann bereits enthalten.
```html
<div class="box" id="box1">Box 1</div>
<div class="box" id="box1">Box 2</div>
```

```css
/* Box 1 hat eine Breite von 150px */
.box {
    width: 100px;
    padding: 10px;
    border: 2px solid black;
    margin: 13px;
}

/* Box 2 hat eine Breite von 126px */
#box2 {
    box-sizing: border-box;
}
```


# Typen von CSS-Boxen
Wie ihr wisst, gibt es nicht nur Block-Elemente, sondern auch Inline-Elemente. Es gibt sogar noch andere Box-Typen. Welchen Box-Typ ein Element hat, wird durch das `display` Property bestimmt. Die drei Häufigsten sind:
<!-- TODO: table, table-cell, HIERHIN oder zu TABELLEN? ... -->

* `block`: Die Boxen werden übereinander gestapelt. Inhalte, die vor oder nach einer solchen Box stehen, werden also in einer separaten Zeile angezeigt. Bei Block-Boxen kann man die `width` und `height` angeben. (zB p, ul, div)
* `inline`: Diese Boxen sind das genaue Gegenteil einer Block-Box. Sie erscheinen im normalen Textfluss des Dokuments, sie erzwingen also keinen Zeilenumbruch und stehen nicht in einer eigenen Zeile. `width`- und `height`-Angaben werden ignoriert. Padding, Margin und Border beeinflussen zwar den Text umliegender Elemente, jedoch nicht die Position umliegender Block-Boxen.
* `inline-block`: Wie der Name vermuten lässt, sind diese Boxen eine Mischung aus Inline- und Block-Box. Wie eine Inline-Box reihen sie sich in den normalen Textfluss ein und erzwingen keine Zeilenumbrüche. Sie akzeptieren aber, wie eine Block-Box, `width`- und `height`-Angaben und "fühlen" sich auch an, wie Block-Boxen. Es kann kein Zeilenumbruch innerhalb der Box vorkommen (wie zB bei em oder strong).

Standardmäßig ist das `display`-Property bei Block-Elemente auf `block` gesetzt, bei Inline-Elementen auf `inline`.

Andere "display types" sind: `table`, `flex` und `grid`. Diese werden in ihrem eigenen Kapitel besprochen.


# Stylen von Boxen
## Outline
`outline: 1px solid red`: Gibt einer Box einen Rahmen. Im Gegensatz zum `border` property, zählt hier der Rahmen **nicht** zur Größe der Box. Genauer gesagt wir die Outline innerhalb des Borders dargestellt, also im Margin bzw Inhalt, falls kein Margin vorhanden ist.

## Hintergründe (background)
Der Hintergrund eines Elements sitzt unter dem Inhalt, dem Padding und dem Border des Elements. Der Hintergrund lässt sich mit folgenden Eigenschaften manipulieren:
* `background-color: blue`: Als Fallback für andere, von älteren Browsern nicht unterstütze Hintergrund-Eigenschaften, sollte man immer eine Hintergrundfarbe setzen.
* `background-image: url(images/image.jpg)`: Setzt ein Hintergrundbild
`: Eine statische Datei oder ein berechneter Gradient.
* `background-repeat`: Standardmäßig werden Hintergrundbilder vertikal und horizontal wiederholt. Mit `background-repeat: repeat-x / repeat-y / no-repeat` lässt sich dies beeinflussen.
* `background-position`: Gibt die Hintergrundposition in px, rem oder Prozent an. Außerdem gibt es die Schlüsselwörter `left`, `right`, `top`, `center` und `bottom`.
* `background-size 1em 1em`: Skaliert das Hintergrundbild auf die angegebene Größe.

```css
p {
    background-color: lightblue;
    background-image: url(images/star.svg);
    background-repeat: no-repeat;
    background-position: 99% center;
}
```

### Gradienten
Ein Gradient ist ein Farbverlauf und kann ebenfalls als Hintergrund verwendet werden. Gradienten werden mit Hilfe der `linear-gradient` Funktion erstellt.

```css
header {
    background-image: linear-gradient(to bottom, orange, yellow);
}
```

* Es gibt Schlüsselwörter, um die Richtung des Farbverlaufs anzugeben. So wäre `to bottom` ein Verlauf von oben nach unten, `to top left` wäre von unten rechts nach oben Links.
* Es können auch Gradzahlen angegeben werden. `90deg` wäre das gleiche wie `to right`.
* Mit "color stops" können beliebig viele Zwischenschritte in den Farbverlauf eingefügt werden.
* `repeating-linear-gradient` ermöglicht, mit einen Gradienten ein Muster aus "color stops" zu zeichnen. 
* Kurzschreibweise: `background: yellow linear-gradient(to bottom, orange, yellow) no-repeat left center scroll;`
* Man kann auch mehrere Hintergründe festlegen. Diese müssen durch ein Komma getrennt werden.

```css
aside {
    /* Von oben nach unten, beginnt mit gelb, ist nach 40% Distanz auf
       orange und endet wieder auf gelb. */
    background-image: linear-gradient(
        to bottom, yellow, orange 40%, yellow
    );

    background-image: repeating-linear-gradient(
        to right, yellow, orange 25px, yellow 50px
    );

    background:
        url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png)
            no-repeat 99% center,
        linear-gradient(to bottom, yellow, #dddd00 50%, orange);

}
```

* `background-attachment` legt fest, wie sich der Hintergrund verhält, wenn gescrollt wird. Mögliche Werte sind
  * `scroll`: Fixiert den Hintergrund auf der Seite, der Tapete, die am Viewport vorbeiläuft. Der Hintergrund scollt also mit der Seite mit.
  * `fixed`: Fixiert den Hintergrund am Viewport, am Screen, am Monitor. Er scrollt also nicht mit.
  * Beachte: In der MDN Doku Ist Viewport und Seite genau vertauscht, jedoch erscheint es mir wie hier geschrieben logischer.
  * `local`: Fixiert den Hintergrund an dem Element, das den Hintergrund beinhaltet. Der Hintergrund scrollt also, wenn das Element scrollt.


### Background Clip
Mit dem `background-clip`-Propery lässt sich der Bereich beeinflussen, den ein Hintergrund abdeckt. Mögliche Werte sind:
* `border-box`: Hintergrund liegt unter Inhalt, Padding und Border.
* `padding-box`: Hintergrund liegt hinter Inhalt und Padding.
* `content-box`: Hintergrund liegt nur hinter dem Inhalt.
* `text`: Hintergrund färbt den Text ein. Hierbei sollte `color: transparent` gesetzt werden (Experimentelles Feature).

<!-- ### TODO: Rahmen (border) https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Borders -->

<!-- ### TODO: Box Effekte https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Advanced_box_effects -->
