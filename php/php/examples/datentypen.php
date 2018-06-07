<?php
declare(strict_types=1);

/*********
 * TYPES *
 *********/
?>
<pre>
<h1>Types</h1>
<h2>Boolean</h2>
$ok = true;          <?= $ok = true;       ?> 
$ok ==  TRUE         <?= $ok ==  TRUE      ?> 
$ok ==  true         <?= $ok ==  true      ?> 
$ok ==  TrUe         <?= $ok ==  TrUe      ?> 
$ok === TrUe         <?= $ok === TrUe      ?> 

$ok ==  "true"       <?= $ok ==  "true"    ?> 
$ok === "true"       <?= $ok === "true"    ?> 

$ok ==  12           <?= $ok ==  12        ?> 
$ok === 12           <?= $ok === 12        ?> 
$ok ==  -12          <?= $ok ==  -12       ?> 

$ok ==  false        <?= $ok ==  false     ?> 
$ok ==  []      <?= $ok ==  []   ?> 
$ok ==  array(3)     <?= $ok ==  array(3)  ?> 

$ok = false;         <?= $ok = false       ?> 
$ok ==  12           <?= $ok ==  12        ?> 
$ok ==  0            <?= $ok ==  0         ?> 
$ok ==  ""           <?= $ok ==  ""        ?> 

<h3>Casting</h3>
(bool)null              <?= (bool)null             ?> 
gettype([])        <?= gettype([])       ?> 
gettype((bool)[])  <?= gettype((bool)[]) ?> 
(bool)[]           <?= (bool)[]          ?> 
(bool)array(3, 4)       <?= (bool)array(3, 4)      ?> 


<h2>Integer</h2>
<?php
    $decpos = 1234;
    $decneg = -1234;
    $decexp = 1.21e9;
    $oct = 0345;
    $hex = 0x2C;
    $bin = 0b1010;
?>
$decpos = 1234   : <?= $decpos  ?> 
$decneg = -1234  : <?= $decneg  ?> 
$decexp = 1.21e9 : <?= $decexp  ?> 
$oct =    0345   : <?= $oct     ?> 
$hex =    0x2C   : <?= $hex     ?> 
$bin =    0b1010 : <?= $bin     ?> 

<h3>Conversion and casting</h3>
gettype(12)             <?= gettype(12)           ?> 
gettype(0b1010)         <?= gettype(0b1010)       ?> 
gettype("abc")          <?= gettype("abc")        ?> 
(int)3.14               <?= (int)3.14             ?> 
(int)3.99               <?= (int)3.99             ?> 
gettype((int)"abc")     <?= gettype((int)"abc")   ?> 
(int)"34abc12"          <?= (int)"34abc12"        ?> 
(int)"abc"              <?= (int)"abc"            ?> 
(int)""                 <?= (int)""               ?> 
(int)[]            <?= (int)[]          ?> 
(int)array(3)           <?= (int)array(3)         ?> 
gettype((int)[])   <?= gettype((int)[]) ?> 


<h2>Float</h2>
1.341               <?= 1.341            ?> 
1.000               <?= 1.000            ?> 
1/3 + 2/3           <?= (1/3 + 2/3)      ?> 
1/3 + 2/3 == 1      <?= (1/3 + 2/3 == 1) ?> 
1 - 1/3 == 2/3      <?= (1 - 1/3 == 2/3) ?> 

<h3>Conversion and casting</h3>
gettype(1.341)      <?= gettype(1.341)   ?> 
gettype(1.000)      <?= gettype(1.000)   ?> 
(float)3            <?= (float)3         ?> 
(float)"6.66"       <?= (float)"6.66"    ?> 
(float)"7.3xy"      <?= (float)"7.3xy"   ?> 
(float)"xy7.3"      <?= (float)"xy7.3"   ?> 


<h2>String</h2>
<?php
    $foo = 3;
    $arr = array(true, 12, 1.21, "XXX");
?>
$foo = 3;
$arr = array(true, 12, 1.21, "XXX");

<h3>Single Quotes</h3>
'$foo little pigs\n'    <?= '$foo little pigs\n'  ?> 
'$arr[1] hours\n'       <?= '$arr[1] hours\n'     ?> 
'Backslash: \\'         <?= 'Backslash: \\'       ?> 

<h3>Double Quotes</h3>
"$foo little pigs\n"    <?= "$foo little pigs"    ?> 
"$arr[1] hours\n"       <?= "$arr[1] hours"       ?> 
"Backslash: \\"         <?= "Backslash: \\"       ?> 
"Tab: Before\tAfter"    <?= "Tab: Before\tAfter"  ?> 

<h3>Nowdoc</h3>
<?php
$mynowdoc = <<<'MYNOWDOC'
What I write \n is $foo
not replaced!
MYNOWDOC;
?>
$mynowdoc = &lt;&lt;&lt;'MYNOWDOC'
What I write \n is $foo
not replaced!
MYNOWDOC;

echo $mynowdoc;
<?= $mynowdoc ?>


<h3>Heredoc</h3>
<?php
$myheredoc = <<<MYHEREDOC
What I write \n is $foo
replaced.
MYHEREDOC;
?>
$myheredoc = &lt;&lt;&lt;MYHEREDOC
What I write \n is $foo
replaced!
MYHEREDOC;

echo $myheredoc;
<?= $myheredoc ?>


<h3>Complex parsing syntax</h2>
"The {$foo} stooges"        <?= "The {$foo} stooges"      ?> 
"Number {$arr[$arr[2]]}!"   <?= "Number {$arr[$arr[2]]}!" ?> 

<h3>Accessing single Characters</h2>
<?php $mdz = "Maschendrahtzaun"; ?>
$mdz = "Maschendrahtzaun"
$mdz[3]                <?= $mdz[3]              ?> 
$mdz[strlen($mdz)-1]   <?= $mdz[strlen($mdz)-1] ?> 

<?php $mdz[0] = "T"; ?>
$mdz[0] = "T"' 
echo $mdz;             <?= $mdz ?>


<h3>Conversion and Casting</h3>
(string)true         <?= (string)true        ?> 
(string)false        <?= (string)false       ?> 
(string)3.14         <?= (string)3.14        ?> 
(string)3.00         <?= (string)3.00        ?> 
(string)array(3, 4)  <?= (string)array(3, 4) ?> 
(string)null         <?= (string)null        ?> 


<h2>Array</h2>
An array is a complex data type.

<?php
$s_arr = array("bir", "iki", "üç", "dört", "beş");
$n_arr = [1, 1, 2, 3, 5, 8, 13, 21];
$a_arr = [""=>"NIX!", "de"=>"Germany", "zh"=>"China", "ve"=>"Venezuela",];
?>
$s_arr = array("bir", "iki", "üç", "dört", "beş");
$n_arr = [1, 1, 2, 3, 5, 8, 13, 21];
$a_arr = [""=>"NIX!", "de" => "Germany", "zh" => "China", "ve" => "Venezuela",];

var_dump($s_arr);
<?php var_dump($s_arr); ?>

print_r($a_arr);
<?php print_r($a_arr); ?>

<h3>Array access</h3>
$s_arr[0]           <?= $s_arr[0]         ?> 
$s_arr["1"]         <?= $s_arr["1"]       ?> 
$s_arr[1+1]         <?= $s_arr[1+1]       ?> 
$s_arr[$foo]        <?= $s_arr[$foo]      ?> 
$s_arr[$n_arr[2]]   <?= $s_arr[$n_arr[2]] ?> 
$s_arr["blubb"]     <?= $s_arr["blubb"]   ?> 
$s_arr[1.21]        <?= $s_arr[1.21]      ?> 
$s_arr[true]        <?= $s_arr[true]      ?> 

$a_arr["de"]        <?= $a_arr["de"]      ?> 
$a_arr[de]          <?= $a_arr[de]        ?> 
$a_arr["zh"][2]     <?= $a_arr["zh"][2]   ?> 
$a_arr[null]        <?= $a_arr[null]      ?> 

<h3>Array assignment</h3>
<?php
$s_arr[0]   = "jeden";
$s_arr[0+1] = "dwa";
$s_arr[21] = "yirmi bir";
$s_arr[]   = "yirmi iki";
?>
$s_arr[0]   = "jeden";
$s_arr[0+1] = "dwa";
$s_arr[21] = "yirmi bir";
$s_arr[]   = "yirmi iki";

print_r($s_arr);
<?php print_r($s_arr); ?>

<h3>Casting</h3>
(int)$a_arr             <?= (int)$a_arr    ?> 
(int)[]                 <?= (int)[]   ?> 
(string)$a_arr          <?= (string)$a_arr ?> 
print_r((object)$a_arr);
<?php print_r((object)$a_arr); ?>


<h2>Object</h2>
For objects, see in that chapter.

<h2>null</h2>
null             <?= (null  )         ?> 
null + 3         <?= (null + 3)       ?> 
null and true    <?= (null and true)  ?> 
null . "perro"   <?= (null . "perro") ?> 
 
$x[] = null;  <?php $x[] = null; ?> 
print_r($x);  <?php print_r($x); ?>

<h3>Casting</h3>
(int)null        <?= ((int)null)      ?> 
(string)null     <?= ((string)null)   ?> 
(bool)null       <?= ((bool)null)     ?> 

</pre>