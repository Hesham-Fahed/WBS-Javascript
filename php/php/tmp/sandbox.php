<?php declare(strict_types=1);


class fahrradteile {
    public $var1 = "Reifen";
    public static $var2 = "Pedale";
    public $var3 = "Rahmen";
    public $var4 = "Sattel";
}

$fahrrad1 = new fahrradteile();
echo $fahrrad1->var1;
echo fahrradteile::$var2;