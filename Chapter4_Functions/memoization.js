
// Functions can use objects to remember the results of previous operations, making it
// possible to avoid unnecessary work. This optimization is called memoization.

var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

see_result(fibonacci);

// This works, but it is doing a lot of unnecessary work.
// The fibonacci function is called 453 times.

// 0: 0
// 1: 1
// 2: 1
// 3: 2
// 4: 3
// 5: 5
// 6: 8
// 7: 13
// 8: 21
// 9: 34
// 10: 55


// We will keep our memoized results.
// This function returns the same results,
// but it is called only 29 times.

fibonacci = (function () {

    var memo = [0, 1];

    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };

    return fib;
}());

see_result(fibonacci);


// We can generalize this by making a function that helps us make memoized functions.

var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};


fibonacci = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) + shell(n - 2);
});

see_result(fibonacci);


var factorial = memoizer([1, 1], function (shell, n) {
    return n * shell(n - 1);
});

see_result(factorial);

// 0: 1
// 1: 1
// 2: 2
// 3: 6
// 4: 24
// 5: 120
// 6: 720
// 7: 5040
// 8: 40320
// 9: 362880
// 10: 3628800

function see_result(func) {
    document.writeln('<pre>');
    for (var i = 0; i <= 10; i++) {
        document.writeln('// ' + i + ': ' + func(i));
    }
    document.writeln('</pre>');
}