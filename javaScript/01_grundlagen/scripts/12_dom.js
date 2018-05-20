"use strict";



var element = document.getElementById("a1");
// console.log(element, String(element) ); // JS-Objekt vom Typ Element
// console.log(element.id);
// //class ist ein reservierter Bezeichner -> className liest Attribut class aus
// console.log(element.className); 
// console.log(element.title);     //DOT-Notation 
// console.log(element["title"]);  //Arrayartiger Zugriff
// console.log(element.lang); 
// console.log(element.style.color); 
// //innerHTML liest den Textknoten aus
// console.log(element.innerHTML);

/* Bis auf className und innerHTML werden alle Attribute zu Eigenschaften,
die am JS-Objekt Typ-Element ausgelesen oder geschrieben werden können.
Eventhandler können nur geschrieben aber nicht mehr ausgelesen werden.
*/

// https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle
element.style = "border:1px solid red; font-weight: bold; font-size: 20px";
element.style.fontSize = "30px";
element.style.backgroundColor = "lime";

element.style["font-size"] = "30px";
element.style["background-color"] = "lime";
/* 
background-color    -> backgroundColor 
font-size           -> fontSize
...
*/
var elemente = document.getElementsByTagName("p");
console.log(elemente, String(elemente)); // HTMLCollection (arrayartiges Objekt)


elemente[0].title = "Neuer Titel mit JavaScript";
console.log(elemente[0].innerHTML);

//////////////////////////////////////////////////////////////////////////////////////
//Formular validieren
//////////////////////////////////////////////////////////////////////////////////////
function validateForm(e) {
    e.preventDefault();
    var f = this;
    console.log("this.eingabe: " + this.eingabe); 
    console.log(document.getElementById("eingabe"));

    document.getElementById("formAusgabe").innerHTML = this.eingabe.value;
}

// var body = document.getElementsByTagName("body")[0];
var body = document.body;

// var form = document.getElementsByTagName("form")[0];
var form = document.forms[0];
console.log(form);

form.onsubmit = validateForm;