Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('curry', function () {
    var args = Array.from(arguments),
        that = this;
        return function () {
            return that.apply(null, args.concat(Array.from(arguments)));
        };
});

var add = function (a, b) {
    return a + b;
};

var add1 = add.curry(1);
document.writeln(add1(6)); // 7