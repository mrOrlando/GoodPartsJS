var myObject = (function() {
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}());

document.writeln(typeof myObject); // object

myObject.increment();
document.writeln(myObject.getValue()); // 1

myObject.increment(2);
document.writeln(myObject.getValue()); // 3

document.writeln(myObject.value); // undefined


var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

var myQuo = quo("amazed");
document.writeln(myQuo.get_status()); // amazed

// This is possible because the function has access to the context in
// which it was created. This is called closure.



// Define a function that sets a DOM node's color
// to yellow and then fades it to white.

var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);


// BAD EXAMPLE
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};

add_the_handlers([
    document.getElementsByTagName("header")[0],
    document.getElementsByTagName("footer")[0]
]);

// The add_the_handlers function was intended to give each handler a unique number
// (i). It fails because the handler functions are bound to the variable i, not the value of
// the variable i at the time the function was made

// END BAD EXAMPLE

// BETTER EXAMPLE
var add_the_handlers = function (nodes) {

    var helper = function (i) {
        return function (e) {
            alert(i);
        };
    };

    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = helper(i);
    }
};

add_the_handlers([
    document.getElementsByTagName("header")[0],
    document.getElementsByTagName("footer")[0]
]);

// Now, instead of assigning a function to onclick, we define a function and immediately
// invoke it, passing in i. That function will return an event handler function that
// is bound to the value of i that was passed in, not to the i defined in add_the_
// handlers. That returned function is assigned to onclick.