<?php
declare(strict_types=1); 

/***************************
 * VARIABLES AND CONSTANTS *
 ***************************/
?>

<pre>
<h1>Variables and Constants</h1>
<h2>Basic Syntax</h2>
<?php
$myVar      = 'camelCase';
$my_var     = 'snake-case';
$_myVar     = 'underscore at the beginning';
$myVar4ever = 'number in the middle';
//$4everVar   = 'number at the beginning';    // syntax error!
$bäböbü     = 'some umlauts';                 // don't do this!
$你好        = 'putonghua';                    // or this!
$değişkenim = 'türkçe';                       // also not this!
?>
$myVar      = 'camelCase';
$my_var     = 'snake-case';
$_myVar     = 'underscore at the beginning';
$myVar4ever = 'number in the middle';
$4everVar   = 'number at the beginning';     // syntax error!
$bäböbü     = 'some umlauts';                // don't do this!
$你好        = 'putonghua';                   // or this!
$değişkenim = 'türkçe';                      // also not this!

echo $myVar;         <?= $myVar      ?> 
echo $my_var;        <?= $my_var     ?> 
echo $_myVar;        <?= $_myVar     ?> 
echo $myVar4ever;    <?= $myVar4ever ?> 
echo $bäböbü;        <?= $bäböbü     ?> 
echo $你好;           <?= $你好       ?> 
echo $değişkenim;    <?= $değişkenim ?> 

<h2>References</h2>
<?php
$myVarCopy =  $myVar;
$myVarRef  =& $myVar;
$myVarRef  =  'This is a Reference';
?>
$myVarCopy =  $myVar;
$myVarRef  =&amp; $myVar;
$myVarRef  =  'This is a Reference';

echo $myVar;        <?= $myVar      ?> 
echo $myVarCopy;    <?= $myVarCopy  ?> 
echo $myVarRef;     <?= $myVarRef   ?> 

<h2>Default Values</h2>
Important! Don't rely on default values! They are EVIL!
echo $unset ? "true" : "false";     <?= $unset ? "true" : "false"; ?> 
echo $unset + 0;                    <?= $unset + 0 ?> 
echo "empty" . $unset . "string";   <?= "empty" . $unset . "string" ?> 


<h2>Variable Scope</h2>
<?php
$global_var   = 'global - not accessible in functions without "global"';
$global_var_2 = 'global_var_2';

function myFunc() {
    echo 'In Function, stating: global $global_var_2' . "\n";
    global $global_var_2;
    $local_var = 'local - not accessible from outside';
    echo 'Acessesing $local_var    in myFunc : ' . $local_var    . "\n";
    echo 'Acessesing $global_var   in myFunc : ' . $global_var   . "\n";
    echo 'Acessesing $global_var_2 in myFunc : ' . $global_var_2 . "\n";
}
?>
$global_var   = 'global - not accessible in functions without "global"';
$global_var_2 = 'global_var_2';

function myFunc() {
    echo 'In Function we do: global $global_var_2' . "\n";
    global $global_var_2;
    $local_var = 'local - not accessible from outside';
    echo 'Acessesing $local_var    in myFunc : ' . $local_var    . "\n";
    echo 'Acessesing $global_var   in myFunc : ' . $global_var   . "\n";
    echo 'Acessesing $global_var_2 in myFunc : ' . $global_var_2 . "\n";
}

Accessing $global_var from top scope : <?= $global_var ?> 
Accessing $local_var  from top scope : <?= $local_var  ?> 

Executing myFunc():
<?php myFunc(); ?>


<h2>Static Variables</h2>
function nonStaticFunc() {
    $a = 0;
    echo $a++;
}

nonStaticFunc();
nonStaticFunc();
nonStaticFunc();
<?php
function nonStaticFunc()
{
    $a = 0;
    echo $a++;
}
nonStaticFunc(); nonStaticFunc(); nonStaticFunc();
?>


function staticFunc()
{
    static $a = 0;
    echo $a++;
}
staticFunc();
staticFunc();
staticFunc();
<?php
function staticFunc()
{
    static $a = 0;
    echo $a++;
}
staticFunc(); staticFunc(); staticFunc();
?>


<h2>Constants</h2>
<?php
const CONST_SCALAR = 42;
const CONST_SCALAR_EXPRESSION = CONST_SCALAR * 2;
const CONST_ARRAY = array(CONST_SCALAR, CONST_SCALAR_EXPRESSION, 49*2);
define ('CONST_WITH_DEFINE', 1.21);
?>
const CONST_SCALAR = 42;
const CONST_SCALAR_EXPRESSION = CONST_SCALAR * 2;
const CONST_ARRAY = array(CONST_SCALAR, CONST_SCALAR_EXPRESSION, 49*2);
define ('CONST_WITH_DEFINE', 1.21);

echo CONST_SCALAR;              <?= CONST_SCALAR ?>
echo CONST_SCALAR_EXPRESSION;   <?= CONST_SCALAR_EXPRESSION ?>
print_r(CONST_ARRAY);
<?php print_r(CONST_ARRAY); ?>

print_r(get_defined_constants())   (Commented out. Too much output. :))
<?php //print_r(get_defined_constants()); ?>


<h2>Magic Constants</h2>
<?php
function myTestFunction(){ return __FUNCTION__; }
class    myTestClass     { static function get(){ return __CLASS__; } }
?>
function myTestFunction(){ return __FUNCTION__; }
class    myTestClass     { static function get(){ return __CLASS__; } }

echo __LINE__       <?= __LINE__           ?> 
echo __FILE__       <?= __FILE__           ?> 
echo __DIR__        <?= __DIR__            ?> 
echo __FUNCTION__   <?= myTestFunction()   ?> 
echo __CLASS__      <?= myTestClass::get() ?> 

</pre>