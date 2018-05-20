var zufall = Math.random() * 100 + 1;
var zGanz = Math.floor(zufall);
var eingabe;
var abbruch = false;
var zahl;
var nr = 0;

do {
    eingabe = prompt("Zahl von 1 bis 100 eingeben");
    zahl = parseInt(eingabe);
    // Abgebrochen?
    if(eingabe == null) {
        abbruch = true;
        continue;
    }
    nr++;
// Auswerten
    if(zahl < zGanz)
        document.write(nr + ") " + zahl + " ist zu klein<br>");
    else if(zahl > zGanz)
        document.write(nr + ") " + zahl + " ist zu groß<br>");
} while(eingabe != zGanz);

// Ergebnis
if(abbruch)
    document.write("Sie haben abgebrochen");
else
    document.write(nr + ") " + zahl + " ist richtig<br>"
    + "Sie haben " + nr + " Versuche benötigt");