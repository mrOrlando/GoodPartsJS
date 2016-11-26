Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

// If the new operator were a method instead of an operator,
// it could have been implemented like this:
Function.method('new', function() {

    var that = Object.create(this.prototype);

    var other = this.apply(that, arguments);

    return (typeof other === 'object' && other) || that;

});

// We can define a constructor and augment its prototype

var Mammal = function (name) {
    this.name = name;
};

Mammal.prototype.get_name = function () {
    return this.name;
};

Mammal.prototype.says = function () {
    return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();
document.writeln(name); // 'Herb the Mammal'


// We can make another pseudoclass that inherits from Mammal by defining its
// constructor function and replacing its prototype with an instance of Mammal

var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};

// Replace Cat.prototype with a new instance of Mammal

Cat.prototype = new Mammal();

// Augment the new prototype with
// purr and get_name methods.

Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i++) {
        if (s) {
            s += '-';
        }
        s += 'r';
    };
    return s;
};

Cat.prototype.get_name = function () {
    return this.says() + ' ' + this.name
        + ' ' + this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();

document.writeln(says); // meow
document.writeln(purr); // r-r-r-r-r
document.writeln(name); // meow Henrietta meow


// Defining an inherits method

Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});

// Our inherits and method methods return this,
// allowing us to program in a cascade style.

var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
}
    .inherits(Mammal)
    .method('purr', function (n) {
        var i, s = '';
        for (i = 0; i < n; i++) {
            if (s) {
                s += '-';
            }
            s += 'r';
        };
        return s;
    })
    .method('get_name', function () {
        return this.says() + ' ' + this.name
            + ' ' + this.says();
    });

var myCat = new Cat('Loki');
var says = myCat.says();
var purr = myCat.purr(3);
var name = myCat.get_name();

document.writeln(says); // meow
document.writeln(purr); // r-r-r
document.writeln(name); // meow Loki meow