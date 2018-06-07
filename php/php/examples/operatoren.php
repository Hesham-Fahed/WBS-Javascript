<?php
declare(strict_types=1); 

/*************
 * OPERATORS *
 *************/
?>
<pre>
<h1>Operators</h1>
<h2>Arithmetic Operators</h2>
Includes the Increment and Decrement Operators

+5            <?= (+5)          ?> 
-5            <?= (-5)          ?> 
3 + 4         <?= (3 + 4)       ?> 
3 + -4        <?= (3 + -4)      ?> 
4 - 3         <?= (4 - 3)       ?> 

4 * 3         <?= (4 * 3)       ?> 
4 / 3         <?= (4 / 3)       ?> 
6 /  3 + 2    <?= (6 / 3 + 2)   ?> 
6 / (3 + 2)   <?= (3 / (3 + 2)) ?> 
intdiv(6,3)   <?= intdiv(6,3)   ?> 
intdiv(8,3)   <?= intdiv(8,3)   ?> 
6 % 3         <?= (6 % 3)       ?> 
8 % 3         <?= (8 % 3)       ?> 

3 ** 3        <?= (3 ** 3)      ?> 
2 ** 10       <?= (2 ** 10)     ?> 
12 ** -17     <?= (2 ** -17)    ?> 
$int = 12;    <?php $int = 12;  ?> 

++$int   <?= ++$int ?>  pre-increment
$int     <?= $int   ?> 
$int++   <?= $int++ ?>  post-increment
$int     <?= $int   ?> 
--$int   <?= --$int ?>  pre-decrement
$int     <?= $int   ?> 
$int--   <?= $int-- ?>  post-decrement
$int     <?= $int   ?> 

echo '3 + 5 = ' . 3 + 5 . "\n";
This just prints 8 and a newline: <?= '3 + 5 = ' . 3 + 5 . "\n" ?>
Why?

Solution is in the source code
<?php
// . and + have the same precedence, and are both left associative
// ((('3 + 5 = ' .  3 ) + 5) . "\n")    vollständig geklammert
// ((('3 + 5 = ' . "3") + 5) . "\n")    String-Konkatenierung mit . konvertiert int 3 zu string "3"
// ((('3 + 5 = 3'     ) + 5) . "\n")    Konkatenierung durchführen
// (( '3 + 5 = 3'       + 5) . "\n")    innerste Klammer auflösen
// (( 3                 + 5) . "\n")    Addition
// (                      8  . "\n")    innerste Klammer auflösen
// (                     "8"  . "\n")   String-Konkatenierung mit . konvertiert int 8 zu string "8"
//                       "8\n"          Konkatenierung durchführen
?>


<h2>Assignment Operators</h2>
$var = 12;        <?= $var = 12    ?> 
$var += 1;        <?= ($var += 1)  ?> 
$var -= 5;        <?= ($var -= 5)  ?> 
$var *= 4;        <?= ($var *= 4)  ?> 
$var /= 8;        <?= ($var /= 8)  ?> 
$var += 1;        <?= ($var += 1)  ?> 
$var <<= 4;       <?= ($var <<= 4)      ?>   <- you don't need this
$var &amp;= 31;       <?= ($var &= 31)  ?>   <- also not this
$var .= ' beer';  <?= ($var .= ' beer') ?> 


<h2>Comparison Operators</h2>
true == true        <?= (true == true)        ?> 
true ==  1          <?= (true == 1)           ?> 
true === 1          <?= (true === 1)          ?> 
true == -12         <?= (true == -12)         ?> 
true == []     <?= (true == [])     ?> 
true == array(3, 4) <?= (true == array(3, 4)) ?> 
true == 'true'      <?= (true == 'true')      ?> 
true == ''          <?= (true == '')          ?> 
true <  12          <?= (1)                   ?> 

3 ==  3           <?= (3 == 3)            ?> 
3 ==  4           <?= (3 == 4)            ?> 
3 !=  4           <?= (3 != 4)            ?> 

3 <   4           <?= (3 <  4)            ?> 
4 <   4           <?= (4 <  4)            ?> 
4 <=  4           <?= (4 <= 4)            ?> 
5 >   4           <?= (5 >  4)            ?> 

6 ==  6.00        <?= (6 == 6.00)         ?> 
6 ==  6.01        <?= (6 == 6.01)         ?> 
6 === 6.00        <?= (6 === 6.00)        ?>   !!! Caution - this is not what you expect!
10/3 ==  1/3 * 10 <?= (10/3 ==  1/3 * 10) ?>   !!! Caution - this is not what you expect!

'0'     == 0      <?= ('0'      == 0)     ?> 
'1'     == 0      <?= ('1'      == 0)     ?> 
''      == 0      <?= (''       == 0)     ?> 
'3.1'   == 3.1    <?= ('3.1'    == 3.1)   ?> 
'3.1ab' == 3.1    <?= ('3.1ab ' == 3.1)   ?> 
'ab3.1' == 3.1    <?= ('ab3.1 ' == 3.1)   ?> 
'3ab.1' == 3.1    <?= ('3ab.1 ' == 3.1)   ?> 
'3ab.1' == 3      <?= ('3ab.1 ' == 3)     ?> 

3 <=> 3           <?= (3 <=> 3)           ?> 
2 <=> 3           <?= (2 <=> 3)           ?> 
4 <=> 3           <?= (4 <=> 3)           ?> 

null == 0         <?= (null == 0)         ?> 
null == '0'       <?= (null == '0')       ?> 
null == ''        <?= (null == '')        ?> 
null == false     <?= (null == false)     ?> 

(true)  ? 'ok' : 'no'   <?= (true)  ? 'ok' : 'no' ?> 
(false) ? 'ok' : 'no'   <?= (false) ? 'ok' : 'no' ?> 

null ?? 'it is null'    <?= null ?? 'its null'    ?> 
1234 ?? 'it is null'    <?= 1234 ?? 'its null'    ?> 
$unset_var ?? 'unset'   <?= $unset_var ?? 'unset' ?> 
$var       ?? 'unset'   <?= $var       ?? 'unset' ?> 

Accessing $i_am_not_set is an error:  <?= $i_am_not_set ?>
Using @ suppresses the error:         <?= @$i_am_not_set ?>   -> Don't do this!!!

array("a"=>"A", "b"=>"b") ==  array("a"=>"A", "b"=>"b")  <?= (array("a"=>"A", "b"=>"b") ==  array("a"=>"A", "b"=>"b")) ?> 
array("a"=>"A", "b"=>"b") === array("a"=>"A", "b"=>"b")  <?= (array("a"=>"A", "b"=>"b") === array("a"=>"A", "b"=>"b")) ?> 
array("a"=>"A", "b"=>"b") === array("a"=>"A"          )  <?= (array("a"=>"A", "b"=>"b") === array("a"=>"A")) ?> 
array(1, 2, 3) == array(1, 2, 3)                         <?= array(1, 2, 3) == array(1, 2, 3) ?> 


<h2>Logical Operators</h2>
<h3>and</h3>
true  and true    <?= (true  and true)  ?> 
true  and false   <?= (true  and false) ?> 
false and true    <?= (false and true)  ?> 
false and false   <?= (false and false) ?> 

<h3>or</h3>
true  or  true    <?= (true  or  true)  ?> 
true  or  false   <?= (true  or  false) ?> 
false or  true    <?= (false or  true)  ?> 
false or  false   <?= (false and false) ?> 

<h3>xor</h3>
true  xor true    <?= (true  xor true)  ?> 
true  xor false   <?= (true  xor false) ?> 
false xor true    <?= (false xor true)  ?> 
false xor false   <?= (false and false) ?> 

<h3>not</h3>
!true             <?= (!true)           ?> 
!false            <?= (!false)          ?> 

Logical Operators ALWAYS return a Boolean value!
You cannot use them to set a default value like in JavaScript:

$a = false || 'default';
<?php $a = false || 'default'; ?>
echo $a;      <?= $a ?> 

What's happening here?
$bool = true &amp;&amp; false;
echo $bool; => <?php $bool = true && false; echo $bool; ?> 
$bool = true and false;
echo $bool; => <?php $bool = true and false; echo $bool; ?> 


<h2>Other Operators</h2>
<h3>The String Concatenation Operator</h3>
echo 'This is ' . 'a String.'   <?= 'This is ' . 'a String.' ?> 

<h3>The instanceof Operator</h3>
<?php
class myParent { };
class myChild extends myParent { };
$p = new myParent;
$c = new myChild;
?>
class myParent { };
class myChild extends myParent { };

$p = new myParent;
$c = new myChild;

$p instanceof myParent;   <?= $p instanceof myParent ?> 
$p instanceof myChild;    <?= $p instanceof myChild  ?> 
$c instanceof myParent;   <?= $c instanceof myParent ?> 
$c instanceof myChild;    <?= $c instanceof myChild  ?> 

</pre>