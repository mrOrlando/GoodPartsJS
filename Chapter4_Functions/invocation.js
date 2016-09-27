var add = function (a, b) {
    return a + b;
};

// Method Invocation Pattern

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
document.writeln(myObject.value); // 1

myObject.increment(2);
document.writeln(myObject.value); // 3

// Function Invocation Pattern

myObject.double = function () {
    var that = this;

    var helper = function () {
        document.writeln(this); // [object Window]
        document.writeln(that); // [object Object]

        that.value = add(that.value, that.value);
    };

    helper();
};

myObject.double();
document.writeln(myObject.value); // 6

// Constructor Invocation Pattern

var Quo = function (string) {
    this.status = string;
};

Quo.prototype.get_status = function () {
    return this.status;
};

var myQuo = new Quo("confused");

document.writeln(myQuo.get_status()); // confused

// Apply Invocation Pattern

var array = [3, 4];
var sum = add.apply(null, array);
document.writeln(sum); // 7

var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
document.writeln(status); // 'A-OK'