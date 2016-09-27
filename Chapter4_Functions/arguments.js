var sum = function () {
    var i, sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
}

document.write(sum(4,8,15,16,23,42)); // 108