/*
- Einlesen von Elementen mit jQuery: 
    https://api.jquery.com/jQuery/
    
- Hinzufügen einer Klasse mit jQuery: 
	https://api.jquery.com/addClass/

- Allgemein: 
	http://overapi.com/jquery
	https://jquery.com/
	http://api.jquery.com/

In der Praxis werden die Klassen hardkodiert im HTML hinzugefügt. Diese Übung soll nur ein Einstieg in die Selektion von Elementen sein und als CSS Wiederholung dienen.


Darstellung siehe uebung_01.jpg


Nutzen Sie die CSS-Datei um über jQuery den Elementen die benötigen Klassen beim Laden 
der Seite hinzuzufügen.

Beispiel:
1. Listenelemente die direkt Nachfahren der id selected-plays sind erhalten die Klasse horizontal.
*/

	$(document).ready(function () {
		$("#selected-plays").children("li").addClass("horizontal");
		$("li:not(.horizontal)").addClass("sub-level");
		$("a[href^='mailto:']").addClass("mailto");
		$("a[href$='.pdf']").addClass("pdflink");
		$("a[href*='henryv']").addClass("henrylink external");
		// $("table:first-of-type > tbody > tr:nth-of-type(odd)").addClass("sub-level");
		$("tr:nth-of-type(odd)").addClass("sub-level");
		// $("table:last-of-type > tbody > tr:nth-of-type(odd)").addClass("sub-level");
		$("td.innerHTML" == "History").addClass("highlight");
	})

/*
2. Listenelemente die nicht die Klasse horizontal haben erhalten die Klasse sub-level
(li Nachfahren innerhalb der id selected-plays die nicht die Klasse horizontal haben)

3. Links formatieren über CSS Attribut Selektoren
http://www.mediaevent.de/css/css-selektor-attributselektor.html

mailto 		-> class mailto
pdflink 	-> class pdflink
henrylink 	-> class henrylink

4. Table Plays und Sonnets abwechselnd farbig markieren (Zebra-Tabelle)

5. Tabelle Plays
Henry IV, Part I	History	1596
Henry V				History	1599

Jeweils History und Jahreszahl mit der Klasse highlight hervorheben.

*/
