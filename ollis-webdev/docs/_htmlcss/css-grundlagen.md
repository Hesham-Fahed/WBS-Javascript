---
layout: techdoc
title: CSS Grundlagen
order: 2000
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

# Was ist CSS?
CSS (Cascading Stylesheet) ist, wie HTML auch, **keine** Programmiersprache.
<!-- TODO -->

# Grundlagen
Eine CSS-Regel setzt sich zusammen aus:
* Einem Selektor, um die HTML-Elemente auszuwählen, auf die die CSS-Regeln angewendet werden sollen.
* einem Deklarationsblock (declaration block), der aus einer oder mehr Deklarationen, bestehen kann, also den eigentlichen Regeln. Der Block wird zwischen geschweifte Klammern gesetzt.
* Eine Regel besteht aus Eigenschaften (properties) und deren zugeordneten Werten (values), die angeben, wie das selektierte HTML formatiert werden soll. Zwischen Eigenschaft und Wert steht ein Doppelpunkt, am Ende jeder Regel ein Semikolon.
* Kommentare werden in CSS zwischen /* und */ geschrieben.

```css
h1 {
    /* Ich bin ein CSS Kommentar */
    color: pink;
    background-color: brown;
    border: 3px solid green;
}
```

Um das HTML Dokument mit den zugehörigen CSS-Regeln darzustellen, durchläuft der Browser folgende Schritte:
1. Das HTML wird geladen und geparst.
2. Aus dem HTML wird der DOM generiert.
3. Das CSS wird geladen und geparst.
4. Die CSS Regeln werden an die entsprechenden Knoten im DOM geknüpft.
5. Das Dokument wird angezeigt.

Der DOM (Document Object Model) ist die Baumdarstellung des HTML Dokuments. Jedes Element, Attribut und jeder Text des Markups wird dabei zu einem Knoten im Baum.


<!-- TODO: @ RULES -->
<!-- TODO: SHORTHANDS - do I need this here? -->
