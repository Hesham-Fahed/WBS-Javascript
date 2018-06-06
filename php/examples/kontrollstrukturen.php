<?php
declare(strict_types=1); 

/**********************
 * CONTROL STRUCTURES *
 **********************/
?>
<pre>
<h1>Control Structures</h1>
<h2>if / else / elseif</h2>
<h3>Example 1</h3>
Check if a number is divisible by three:

Result:
<?php

    $number = 23495865;

    if ($number % 2 == 0 && $number % 3 == 0) {
        echo "Divisible by two and three.\n";
    }
    elseif ($number % 2 == 0 && !($number % 3 == 0)) {
        echo "Divisible by two.\n";
    }
    elseif (!($number % 2 == 0) && $number % 3 == 0) {
        echo "Divisible by three.\n";
    }
    else {
        echo "Not divisible by two or three.\n";
    }

?>

<h3>Example 2</h3>
Open the script URL like this: 04_control_structures.php?val=12

<?php

    if (isset($_GET['val'])) {
        echo "val is set to $_GET[val]\n";
    }
    else {
        echo "val is not set.\n";
    }

?>

<h2>while / do-while</h2>
<h3>Example 1</h3>
Count from 9 to 1.

Result:
<?php

    $counter = 9;
    echo $counter;

    $counter--;

    while($counter > 0) {
        echo ", " . $counter;
        $counter--;
    }

?>

<h3>Example 2</h2>
The same, shorter but harder to read

Result:
<?php

    $counter = 9;
    echo $counter;

    while(--$counter) {
        echo ", " . $counter;
    }

?>

<h3>Example 3</h2>
A while loop that never runs.

Result:
<?php

    while (false) {
        echo "This is never executed";
    }

?>

<h3>Example 4</h2>
A do while loop that runs once.

Result:
<?php

    do {
        echo "This will be executed once";
    }
    while (false);        // <- note the semicolon here!

?>


<h2>for / foreach</h2>
$n_arr = [3, 1, 0, 1, 2];
$s_arr = ["a", "b", "c", "d", "e",];
$a_arr = [
    'dog' => 'Hund',
    'cat' => 'Katze',
    'rat' => 'Ratte',
    'bat' => 'Fledermaus',
];
<?php
$n_arr = [3, 1, 0, 1, 2];
$s_arr = ["a", "b", "c", "d", "e",];
$a_arr = [
    'dog' => 'Hund',
    'cat' => 'Katze',
    'rat' => 'Ratte',
    'bat' => 'Fledermaus',
];
?>

<h3>Example 1</h2>
Printing the values of an array:

Result:
<?php

    for ($i = 0; $i < count($n_arr); $i++) {
        echo $n_arr[$i] . ", ";
    }

?> 
<h3>Example 2</h2>
Example 2 is pretty inefficent. We call count() on every iteration. Better version:

Result:
<?php

    for ($i = 0, $n = count($n_arr); $i < $n; $i++) {
        echo $n_arr[$i] . ", ";
    }

?> 

<h3>Example 3</h2>
And there's an even better option. Don't count at all:

Result:
<?php

    foreach ($n_arr as $i) {
        echo $i . ", ";
    }

?>

<h3>Example 4</h3>
Access with variable indices

Result:
<?php

    foreach ($n_arr as $i) {
        echo $s_arr[$i] . ", ";
    }

?>

<h3>Example 5</h3>
Iterate over key/value-pairs: old and complicated

Result:
<?php

    $keys = array_keys($a_arr);
    for($i = 0, $n = count($keys); $i < $n; $i++) {
        echo $keys[$i] . " => " . $a_arr[$keys[$i]] . ", ";
    }

?>

<h3>Example 6</h3>
Iterate over key/value-pairs: new and easy

Result:
<?php

    foreach($a_arr as $myKey => $myValue) {
        echo $myKey . " => " . $myValue . ", ";
    }

?>

<h2>break / continue</h2>
<h3>Example 1</h3>
Output random numbers until we find one that is divisible by 7.

Result:
<?php

    while(true) {
        $n = rand(0, 100);
        if($n % 7 == 0) {
            break;
        }
        else {
            echo $n . ", ";
        }
    }

?>

<h3>Example 2</h3>
Print 10 odd random numbers.

Result:
<?php

    $count = 0;
    while($count < 10) {
        $n = rand(0, 100);
        if($n % 2 == 0) {
            continue;
        }
        else {
            echo $n . ", ";
            $count++;
        }
    }

?>


<h2>switch</h2>
<h3>Example 1</h3>
The first matching case starts code execution
Result:
<?php

    $user_input = 3;
    switch($user_input) {
        case 1:
            echo "Mailbox ";
        case 2:
        case 3:
            echo "Pferdekutsche ";
        case 4:
            echo "Schokoeis ";
        default:
            echo "De Faaaault! ";
    }

?>

<h3>Example 2</h3>
Use break to jump out of the switch statement.
Result:
<?php

    switch($user_input) {
        case 1:
            echo "Mailbox ";
            break;
        case 2:
        case 3:
            echo "Pferdekutsche ";
            break;
        case 4:
            echo "Schokoeis ";
            break;
        default:
            echo "De Faaaault! ";
    }

?>


<h2>return</h2>
<h3>Example 1</h3>
Result:
<?php

    function add($a, $b)
    {
        return $a + $b;
    }

    echo add(3, 4);

?>


<h2>require[-once] / include[-once]</h2>
Result:
<?php

    $return_value = include 'subfolder/dummy.php';
    echo "\n" . $return_value;
    
    include 'subfolder/dummy.php';

    include_once 'subfolder/dummy.php';

?>
</pre>