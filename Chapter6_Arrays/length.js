var myArray = [];
myArray.length; // 0

myArray[1000000] = true;
myArray.length; // 1000001
// but myArray contains one property

var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

numbers.length = 3; // ["zero", "one", "two"]

numbers[numbers.length] = 'shi'; // ["zero", "one", "two", "shi"]

numbers.push('go'); // ["zero", "one", "two", "shi", "go"]