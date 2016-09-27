
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

var stooge = {};
stooge.nickname = 'Curly'; // {nickname: "Curly"}
var anotherStooge = Object.create(stooge); // {}

console.log(anotherStooge.nickname); // "Curly"

anotherStooge['first-name'] = 'Harry';
anotherStooge['middle-name'] = 'Moses';
anotherStooge.nickname = 'Moe';

console.log(stooge); // {nickname: "Curly"}
console.log(anotherStooge); // {first-name: "Harry", middle-name: "Moses", nickname: "Moe"}

stooge.profession = 'actor';
console.log(anotherStooge.profession); // "actor"

console.log(stooge.hasOwnProperty('profession')); // true
console.log(anotherStooge.hasOwnProperty('profession')); // false