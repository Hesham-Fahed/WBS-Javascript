/* 456 euro

2er = int 456/2 = 228
1er = 456 % 2 = 0       =>  

5er = int 228/2.5 = 91
2er = 228 % 2.5 = 0.5 = 1er =>
if 2er == 0.5 

10er = int 91 / 2 = 45
5er = 91 % 2 = 1        =>

50er = 45 / 5 = 9
10er = 45 % 5 = 0       =>

100er = 9 / 2 = 4       =>
50er = 9 % 2 = 1        =>
 */



var einer, 
    zweier,
    fuenfer,
    zehner,
    zwanziger,
    fuenfziger,
    hunderter;


var betrag = prompt("Welcher Betrag soll gewechselt werden?");

zweier = Math.floor(betrag / 2);
einer = betrag % 2;

fuenfer = Math.floor(zweier / 2.5);
zweier =  zweier % 2.5;
    if (zweier == 0.5) {
        einer++;
        zweier = 0;
    }
    if (zweier == 1.5) {
        einer++;
        zweier = Math.floor(zweier);
    }
    if (einer == 2) {
        zweier++;
        einer = 0;
    }

zehner = Math.floor(fuenfer / 2);
fuenfer = fuenfer % 2;

zwanziger = Math.floor(zehner / 2);
zehner = zehner % 2;

fuenfziger = Math.floor(zwanziger / 2.5);
zwanziger = zwanziger % 2.5;
    if (zwanziger == 0.5) {
        zehner++;
        zwanziger = 0;
    }
    if (zwanziger == 1.5) {
        zehner++;
        zwanziger = Math.floor(zwanziger);
    }
    if (zehner == 2) {
        zwanziger++;
        zehner = 0;
    }

hunderter = Math.floor(fuenfziger / 2);
fuenfziger = fuenfziger % 2;


for (x = 0; x < hunderter;) {
    document.write("<img src='img/100eu.jpg'>");
    ++x;
}
document.write("<hr>")
for (x = 0; x < fuenfziger;) {
    document.write("<img src='img/50eu.jpg'>");
    ++x;
}
document.write("<hr>")

for (x = 0; x < zwanziger;) {
    document.write("<img src='img/20eu.jpg'>");
    ++x;
}
document.write("<hr>")

for (x = 0; x < zehner;) {
    document.write("<img src='img/10eu.jpg'>");
    ++x;
}
document.write("<hr>")

for (x = 0; x < fuenfer;) {
    document.write("<img src='img/5eu.jpg'>");
    ++x;
}
document.write("<hr>")

for (x = 0; x < zweier;) {
    document.write("<img src='img/2eu.jpg'>");
    ++x;
}
document.write("<hr>")

for (x = 0; x < einer;) {
    document.write("<img src='img/1eu.jpg'>");
    ++x;
}


