<?php
declare(strict_types=1);

/***********************************
 * SOLUTIONS - REGULAR EXPRESSIONS *
 ***********************************/
?>
<pre>

1) Ist NUR der erste Buchstabe eines Strings ein Großbuchstabe?

    /^[A-Z][^A-Z]*$/

2) Ist ein String eine Kreditkartennummer?
    Format: XXXX-XXXX-XXXX-XXXX

    /^\d{4}-\d{4}-\d{4}-\d{4}$/

3) Ist ein String ein gültiger Hex-Farbcode?
    Format: #FFFFFF

    /^#[0-9a-fA-F]{6}$/

4) Befindet sich in einem String ein Datum?
    TODO: Februar darf auch 31 Tage
    Format: MM/DD/YYYY   also zB   11/21/2017 oder 01/01/0001

    #(0[1-9]|1[1-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}#

5) Ist ein String eine gültige IP-Adresse in Dotted decimal notation?
    Format: 221.1.91.144

    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/
