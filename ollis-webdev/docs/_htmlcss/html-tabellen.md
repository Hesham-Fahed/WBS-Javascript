---
layout: techdoc
title: Tabellen
order: 1500
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Wie der Name schon sagt, dient eine Tabelle dazu, tabellarische Daten darzustellen. Eine Tabelle hat Spalten und Zeilen, die ein Raster aufspannen, das einzelne Zellen beinhaltet. Oft hat eine oder beide Tabellenachsen eine art "Titelzeile", die beschreibt, welche Information in den Zellen zu finden ist, die in dieser Spalte oder Zeile liegen.

Tabellen sollten nicht verwendet werden, ein Seitenlayout zu erstellen. Mit Tabellen gestaltete Layouts sind nicht nur schwer zu debuggen, sondern auch nicht für Screen Reader zugänglich. Außerdem hat die mit Layout-Tabellen produzierte Tag-Suppe keinerlei sinnvolle semantische Bedeutung.

Tabellen werden mit den folgenden HTML Tags erstellt:
- `<table>`: Das Elternelement der gesamten Tabelle.
- `<tr>`: _table row_ - Eine Tabellen-Zeile.
- `<td>`: _table data_ - Eine Tabellen-Zelle innerhalb einer Zeile.
  - `colspan` und `rowspan`: Spannt eine Zelle über mehrere Spalten (colspan) oder Zeilen (rowspan). `<td rowspan="2">Cheese</td>`
- `<th>`: _table header_ - Die "Titelzeile" einer Tabelle. Diese kann entlang einer oder beiden Tabellenachsen verlaufen. Ein td-Element verhält sich genauso wie ein th-Element. Es hat lediglich ein anderes Styling und eine andere Semantik. 
  - `scope`: Dieses Attribut erlaubt es, th-Elementen eine eine "Richtung" zu geben, so dass Screen Reader wissen, ob es sich um eine Spalte oder eine Zeile handelt. Mögliche Werte sind `row` und `col` für Zeilen und Spalten, sowie `rowgroup` und `colgroup` für th-Elemente, die eine Gruppe von anderen th-Elementen zusammenfassen.
- `<colgroup>`: Der Container für `col`-Elemente, welche dazu dienen, gaze Spalten einer Tabelle zu stylen. Ohne diese müssten wir zum Stylen mit CSS jede einzelne Tabellenspalte selektieren.
- `<col>`: Ein Container für CSS Styles. CSS Regeln, die auf diesem Container definiert werden, gelten für die gesamte Spalte, in der der Container liegt.
- Eine Tabelle kann auch eine `<caption>` haben. Diese muss direkt nach dem öffnenden Table-Tag stehen. Die Caption sollte den Inhalt der Tabelle beschreiben - nicht nur sinnvoll für Screen Reader.
- Es gibt drei Elemente, die dazu dienen, eine Tabelle besser zu strukturieren. Diese haben keine Auswirkungen auf Screen Reader.
  - `<thead>`: Der Kopf der Tabelle. Dies ist meistens die erste Zeile. Er sollte direkt unter der Colgroup stehen, wenn diese vorhanden ist.
  - `<tfoot>`: Der Fuß der Tabelle. zB eine Zeile, die die Summen der einzelnen Spalten angibt. tfoot kann direkt unter thead stehen. Er wird vom Browser trotzdem als letzte Zeile gerendert.
  - `<tbody>`: Die Daten der Tabelle. Also das, was nicht im thead oder tfoot steht. Gibt man keinen tbody an, so fügt der Browser automatisch einen hinzu.


```html
<table>
    <caption>Pinky and the Brain Info</caption>

    <colgroup>
        <col>
        <col style="background-color: yellow">
        <col>
    </colgroup>

    <thead>
        <tr>
            <td>&nbsp;</td>
            <th colspan="2" scope="colgroup">Names</th>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <th scope="col">Pinky</th>
            <th scope="col">Brain</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th scope="row">Goal</th>
            <td>None</td>
            <td>Wold Domination</td>
        </tr>
        <tr>
            <th scope="row">Genus</th>
            <td colspan="2">Rat</td>
        </tr>
    </tbody>
</table>
```

<!-- TODO: Miniübung: Erweitern von https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics#Active_learning_colgroup_and_col -->

