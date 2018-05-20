"use strict";

var a = ["Welt"];
// Element 0 lesen.
var value = a[0];
// Element 1 schreiben.
a[1] = 3.14;
var i = 2;
// Element 2 schreiben.
a[i] = 3;
// Element 3 schreiben.
a[i + 1] = "hello";
// Die Elemente 0 und 2 lesen, Element 3 schreiben.
a[a[i]] = a[0];