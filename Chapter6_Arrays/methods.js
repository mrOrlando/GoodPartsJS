Object.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Array.method('myReduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i++) {
        value = f(this[i], value);
    }
    return value;
});


var data = [1, 2, 3, 4];

var add = function (a, b) {
    return a + b;
};

var mult = function (a, b) {
    return a * b;
};


var sum = data.myReduce(add, 0);
console.log(sum); // 10

var product = data.myReduce(mult, 1);
console.log(product); // 24


data.total = function () {
    return this.reduce(add, 0);
};

var total = data.total();
console.log(total); // 10