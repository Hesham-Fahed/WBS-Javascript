Beispiel Rekursion JS
// Get Fibonacci Number x with arrow function
let fiba = (x) => (x === 0 || x === 1) ? x : fiba(x - 1) + fiba(x - 2);

// Get Fibonacci Number x with conventional function
let fib = function (x) {
    return (x === 0 || x === 1) ? x : fib(x - 1) + fib(x - 2);
}

fib(5)
fib(4)                                     + fib(3)
fib(3)                   + fib(2)          + fib(2)          + fib(1)
fib(2)          + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + 1
fib(1) + fib(0) + 1      + 1      + 0      + 1      + 0      + 1
1      + 0      + 1      + 1      + 0      + 1      + 0      + 1