---
layout: techdoc
title: CSS Einheiten
order: 2300
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

# Numerische Werte
Längenwerte mit Einheiten, die zB für die Breite eines Elements die Dicke eines Rahmens (border) oder die Fontgröße verwendet werden.
* Absolute Einheiten:
  * Diese haben unabhängig von anderen Werten immer die gleiche Größe.
  * `px` - Pixel
  * `mm, cm, in, pt, pc`: werden im Großen und Ganzen nicht verwendet.
* Relative Einheiten:
  * `em`: Die Zahl vor der Einheit gibt den Faktor an, mit dem die Fontgröße multipliziert wird. 1em bedeutet also keine Veränderung der Größe. Dies ist die am häufigsten verwendete relative Einheit.
  * `rem` - root em: funktioniert genauso wie em. 1rem entspricht jedoch der standard Schriftgröße des root-Elements, also des html-Elements. Der Standardwert ist hier 16px.
  * `vw, vh` - viewport width und height: Entspricht 1/100 der Breite bzw Höhe des aktuellen Viewports. Diese werden noch nicht überall unterstützt.
  * `ex, ch`: werden fast nie verwendet und oft auch nicht unterstützt.

Längenwerte ohne Einheit
* 0: wird oft im Zusammenhang mit margin/padding benutzt und kann als  Kurzschreibweise für 0px interpretiert werden. Null ist null.
* andere Werte: werden oft im Zusammenhang mit der "line-height" verwendet und sind hier lediglich ein Faktor, mit dem die normale Zeilenhöhe multipliziert ist. 1.5 hieße zB das 1.5-fache der normalen Zeilenhöhe.

# Prozentangaben
Diese werden ebenfalls verwendet, um Größe oder Länge von Elementen anzugeben - allerdings relativ zu den entsprechenden Maßen des Elternkontainers.

```html
<div>
    <div class="box">Feste Breite = Fixed width: 650px</div>
    <div class="box">Dynamische Breite = Liquid Layout: 75% des Elternelements</div>
</div>
```
```css
div .box {
    margin: 10px;
    height: 150px;
}

.box:nth-child(1) {
    background-color: red;
    width: 650px;
}

.box:nth-child(2) {
    background-color: blue;
    width: 75%;
}
```

# Farbwerte
Für Farbewerte werden heutzutage immer 24bit verwendet, jeweils 8 bit für rot, grün und blau. Daraus ergeben sich rund 16.7 Millionen mögliche Kombinationen.

Die verbleibenden 8 bit werden oft für einen Alpha-Kanal verwendet, der die Transparenz angibt.

* Keywords - Schlüsselwörter: `red`, `green`, `blue` und viele mehr. [Liste der Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords).
* Hexadezimal: `#000000` bis `#FFFFFF`. Kann kurz als `#000` bis `#FFF` geschrieben werden, wobei jede Ziffer automatisch "verdoppelt" wird.
* RGB: ähnlich wie Hexadezimal, jedoch als Dezimalzahl dargestellt: `rgb(0, 128, 255)`.
* RGBA: RGB mit Alpha Kanal, also Transparenz. 0 ist transparent, 1 ist opak: `rgba(0, 128, 255, 0.5)`.
* Soll nicht nur der Hintergrund, sondern das gesamte Element transparent werden, so kann man das opacity Property verwenden: `p { opacity: 0.5 }`.

# Koordinaten
Um die Position eines Elements relativ zur linken oberen Ecke des Bildschirms anzugeben.
 `.my-box { position: fixed; top: 10; left: 15; }`
