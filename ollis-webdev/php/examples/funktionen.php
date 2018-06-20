<?php
declare(strict_types=1); 

/*************
 * FUNCTIONS *
 *************/

?>
<pre>
<h1>Functions</h1>
<h2>User defined functions</h2>
Print a random percentage.

Result:
<?php

    function get_random_percentage()
    {
        return rand(0, 100);
    }

    echo get_random_percentage();

?>


<h2>Function Arguments</h2>
Using functino arguments.

Result:
<?php

    function greet(bool $male, string $name)
    {
        echo "Hello, " . ($male ? "Mr. " : "Ms. ") . $name . ".";
    }

    greet(false, 'Moneypenny');

?>


<h2>Strict Typing</h2>
Result:
<?php

    function goodbye(bool $male, string $name) : string
    {
        return "Good bye, " . ($male ? "Mr. " : "Ms. ") . $name . ".";
    }

    echo goodbye(true, 'Chips');

?> 

With strict types, the next line is a fatal error
because the first parameter is an int instead of a boolean:

echo goodbye(1, 'Chips');


<h2>Variable Argument Lists</h2>
Calculate average: an easy to read loop.

Result:
<?php

    function average_loop(float ...$numbers) : float
    {
        $sum = 0;

        foreach ($numbers as $n) {
            $sum += $n;
        }

        return $sum / count($numbers);
    }

    echo average_loop(3, 7, 4, 1, 2, 4);

?>


<h2>Returning from Functions</h2>
<h3>Example 1</h3>
Result:
<?php

    function is_odd(int $n) : bool
    {
        return ($n % 2 == 0) ? false : true;
    }

    echo is_odd(3) . ", ";
    echo is_odd(4) . ", ";
    // echo is_odd(3.5);  //=> Fatal error: ... Argument 1 passed to is_odd() must be of the type integer, float given

?> 

<h3>Example 2</h3>
Print a random prime number from a given range.

Result:
<?php

    function random_prime(int $min, int $max) : int
    {
        while(true) {

            $is_prime = true;
            $rand = rand($min, $max);

            foreach(range(2, $rand - 1) as $n) {
                if($rand % $n == 0) {
                    $is_prime = false;
                    break;
                }
            }

            if ($is_prime) {
                return $rand;
            }
        }
    }

    echo random_prime(2, 1000);

?>

<h2>Anonymous Functions and Closures</h2>
Calculate average: harder to read reduce function

Result:
<?php

    function average_reduce(int ...$numbers) : float
    {
        return array_reduce(
            $numbers,
            function($carry, $n) {
                $carry += $n;
                return $carry;
            }
        ) / count($numbers);
    }
    
    echo average_reduce(3, 7, 4, 1, 2, 4);

?> 

<h2>Functions as Arguments</h2>
A function that applies a function to its 2 arguments and returns the result

Results:
<?php

    function apply_2int(int $a, int $b, callable $callback)
    {
        return $callback($a, $b);
    }

    echo apply_2int(12, 30, function($a, $b) { return $a + $b; } ) . "\n";
    echo apply_2int(12, 30, function($a, $b) { return ($a + $b) / 2; } );

?>


<h2>Closures</h2>
In a PHP Closure, you have to bind your parameters manually with the "use" keyword.
In a JavaScript Closure, the whole environment is bound automatically.

<?php

    $myGlobal = 12;

    function add_global($a)
    {
        global $myGlobal;
        return $myGlobal + $a;
    }

    $add_global_closure = function ($a) use ($myGlobal)
    {
        return $myGlobal + $a;
    };
?>

add_global(7);            => <?= add_global(7); ?> 
$add_global_closure(7);   => <?= $add_global_closure(7); ?> 

$myGlobal = 2;                  <?php $myGlobal = 2; ?> 

add_global(7);            => <?= add_global(7); ?> 
$add_global_closure(7);   => <?= $add_global_closure(7); ?> 

</pre>