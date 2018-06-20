---
layout: techdoc
title: Die Kaskade
order: 2200
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Die Kaskade kommt zum Tragen, wenn mehrere Selektoren das selbe Element auswählen. Die Kaskade bestimmt dann, welche Regel "gewinnt".

Hier ist zu beachten, dass nicht komplette Regel-Blöcke gegen andere gewinnen, sondern legliche einzelnen Regeln eines Blocks. Es kann also sein, dass zwei Selektoren das selbe Element matchen, ihre Regeln sich aber nicht "in die Quere kommen" und deshalb einfach alle angewendet werden können.

Welcher Selektor bei einem Konflikt gewinnt, hängt von drei Faktoren ab. Diese sind (in absteigender Priorität):

# 1. Importance (Wichtigkeit)
* `!important` kann direkt vor das Semikolon jeder Regel geschrieben werden. Important ist der Joker und gewinnt gegen alles, außer gegen andere `!important` Regelen, die später im Quellcode vorkommen oder die eine höhere Gewichtung haben.
* Important sollte nur verwendet werden, wenn man keine andere Lösung finden kann.

Stehen die Regeln aus verschiednenen Stylesheets im Konflikt zueinander, so werden diese in der Folgenden Reihenfolge angewendet:

1. Deklarationen im Stylesheet des User Agents (meist der Browser).
1. Normale Deklarationen in Benutzer-Stylesheets (kann man im Browser einstellen).
1. Normale Deklarationen in Authoren-Stylesheets (diese kommen vom Web Developer).
1. Important Deklarationen in Authoren-Stylsheets.
1. Important Deklarationen in Benutzer-Stylesheets (diese kommen als letztes, damit zB ein Sehgeschädigter entgegen aller vorangegangegen Regeln die Schriftgröße verändern kann.)

# 2. Specificity (Gewichtung)
Jeder Selektor hat eine bestimmte Gewichtung. Alle Selektoren lassen sich so in vier Gruppen von absteigender Gewichtung einteilen.

* Man fängt in der am stärksten gewichteten Gruppe an und vergleicht die Anzahl der Selektoren einer Selektor-Kombination, die in diese Gruppe fallen.
* Die Selektor-Kombination mit der höheren Anzahl in der Gruppe gewinnt.
* Haben die Selektor-Kombinationen die gleiche Anzahl in dieser Gruppe, vergleicht man die Anzahl in der nächst weniger gewichteten Gruppe.
* Der Universalselektor `*` und die Kombinatoren (``` ```, `>`, `+`, `~`) haben keine Auswirkungen auf die Gewichtung.

Die Gewichtung in absteigender Reihenfolge ist:
1. `style`-Attribut (gewinnt gegen alles außer `!important`)
1. Anzahl der Id-Selektoren
1. Anzahl der Klassen-, Attribut- und Pseudoklassen-Selektoren
1. Anzahl der Element- und Pseudoelement-Selektoren.

# 3. Source Order (Reihenfolge im Quellcode)
Haben verschiedene Selektoren die gleiche Importance und die gleiche Gewichtung, so bestimmt die Reihenfolge im Quellcode, wer Gewinnt. Selektoren, die später/weiter unten im Quellcode stehen gewinnen über Regeln, die früher/weiter oben stehen. Spätere Regeln überschreiben sozusagen frühere Regeln.

# Vererbung
Die Vererbungsregeln bestimmen, welche CSS-Eigenschaften von einem Elternelement an seine Kinder weitergegeben werden und welche nicht.

Hier genügt normalerweise gesunder Menschenverstand aus. Im Zweifelsfall hilft der Blick in die [CSS Referenz](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

Gibt man einer Eigenschaft den Wert `inherit`, so wird diese ihren Wert automatisch vom Elternelement beziehen.

```css
.inherit a { color: inherit; }
```
