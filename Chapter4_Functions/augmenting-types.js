Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};


Number.method('integer', function () {
    console.log(this); // Number {[[PrimitiveValue]]: -3.3333333333333335}
    document.writeln(this); // -3.3333333333333335
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln( (-10 / 3).integer() ); // -3


String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

document.writeln('"' + "   neat   ".trim() + '"'); // "neat"


// Add a method conditionally
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};