Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

// Sample using
Function.method("test", function () {
    alert("test call");
});

Function.test();