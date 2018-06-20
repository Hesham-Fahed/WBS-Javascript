---
layout: techdoc
title: Multimedia
order: 1400
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

# Bilder
Bilder auf Webseiten einzubinden ist denkbar einfach. Man verwendet dazu das leere `<img>`-Element. Leer bedeutet, dass das Element keinen Inhalt und keinen schließenden Tag besitzt.

Seit HTML5 muss jedes Bild ein `alt`-Attribut haben. Dieses beinhaltet eine Textbeschreibung des Bildes und wird von Suchmascheinen und Screen-Readern verwendet, oder wenn die Bilddatei nicht gefunden oder dargestellt werden kann.

Das `title`-Attribut ist optional. Sein Inhalt wird, wie bei Links, angezeigt, wenn man den Mauszeiger über das Bild stellt.

Seit HTML5 gibt es ein `<figure>`- und ein `<figcaption>`-Element, mit dem man dem Bild eine "Caption", also eine Art Beschreibung zuordnen kann. Dies ist dem "title"-Attribut vorzuziehen.

```html
<figure>
    <img src="world_of_cheese.jpg"
         alt="Es sind 250.000 Käseräder abgebildet, was die größte Käsesammlung Chinas ist."
    >
    <figcaption>250.000 Käseräder: Die größte Käsesammlung Chinas!</figcaption>
</figure>
```

Eine Figure muss nicht unbedingt ein Bild sein. Es könnten auch mehrere Bilder sein, oder ein Schnipsel Quellcode, Audio, Video oder eine Tabelle.

Beachte, dass Suchmaschinen für SEO auch den Dateinamen des Bildes einbeziehen. Man sollte sein Bild statt "img\_666.jpg"  also lieber "urinierendes_rentier.jpg" nennen.

Rein dekorative Bilder sollten gar nicht in einem `img`-Element eingebunden werden, sondern stattdessen als Hintergrundbild eines Semantiklosen Elements gesetzt werden.

Außerdem kann ein `img`-Element auch ein `width`- und `height`-Attribut besitzen. Diese sollte der exakten Größe des Bildes entsprechen und nicht zum vergrößern oder verkleinern verwendet werden, denn das wird mit CSS gemacht. Der Vorteil ist, dass der Browser nicht warten muss, bis das Bild geladen ist, bevor er die Seite darstellen kann, da er bereits beim Parsen des HTML weiß, wie groß die Box für das Bild sein muss.

<!-- ## Bilder: Responsive https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->

<!-- # TODO: Video und Audio https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content -->

<!-- # TODO: iframes https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies -->

<!-- # TODO: Vektorgrafik (SVG) https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web -->

