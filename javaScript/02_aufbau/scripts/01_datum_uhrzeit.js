"use strict"; //Dokument angelegt am 24.04.2018 Sommerzeit!
var html = "";

var d = new Date();
console.log(d);
console.log(d.toLocaleString()); // 2 Stunden mehr: Sommerzeit und +1 GMT/UTC

html += "var d = new Date(); //=> <b>" + d + "</b><br>";
//Zeit in Millisekunden, die seit dem 01.01.1970 um 0:00:00.000 UTC vergangen ist
//https://de.wikipedia.org/wiki/Unixzeit
html += "Date.now(); //=> <b>" + Date.now() + "</b><br>";
//Tag der Woche, beginnt mit 0 am Sonntag (0-6)
html += "d.getDay(); //=> <b>" + d.getDay() + "</b><br>";
//Tag des Monats (1-31)
html += "d.getDate(); //=> <b>" + d.getDate() + "</b><br>";
//Monat beginnt mit 0 Januar bis 11 Dezember(0-11) 
html += "d.getMonth(); //=> <b>" + d.getMonth() + "</b><br>";

html += "d.getMonth()+1; //=> <b>" + (d.getMonth()+1) + "</b><br>";
//Aktuelles Jahr
html += "d.getFullYear(); //=> <b>" + d.getFullYear() + "</b><br>";
//Jahre seit dem Jahr 1900
html += "d.getYear(); //=> <b>" + d.getYear() + "</b><br>";

//Stunden 
html += "d.getHours(); //=> <b>" + d.getHours() + "</b><br>";

//Minutes 
html += "d.getMinutes(); //=> <b>" + d.getMinutes() + "</b><br>";

//Sekunden 
html += "d.getSeconds(); //=> <b>" + d.getSeconds() + "</b><br>";

//Millisekunden 
html += "d.getMilliseconds(); //=> <b>" + d.getMilliseconds() + "</b><br>";

//new Date(year, month, day, hours, minutes, seconds, milliseconds);
var birthday = new Date(1982,5,14,17,10);

html += "birthday = new Date(1982,5,14,17,10); //=>  <b>" + birthday + "</b><br>";
//new Date().getTime() gibt die Millisekunden seit dem 01.01.1970 
var timestamp = birthday.getTime();
html += "var timestamp = birthday.getTime(); //=>  <b>" + timestamp + "</b><br>";
// ageSec ist das Alter in Millisekunden
var ageMillSec = Date.now() - timestamp;
// 31.536.000.000 Jahr in Millisekunden
console.log( ageMillSec / 31536000000 );
/****************************************************************************************
 * Vorsicht: Zum berechnen eines korrekten Alters für eine Altersfreigabe müssen 
 * weitere Faktoren berücksichtigt werden. 
 * Ist der Geburtsmonat gleich oder kleiner dem aktuellen
 * Aktueller Tag größer/gleich Tag des Geburtsdatums
 ****************************************************************************************
 * Seite 177
 * Seite 183 Mit Datum und Uhrzeit rechnen
 * 
 */


document.getElementById("zeit").innerHTML = html;

