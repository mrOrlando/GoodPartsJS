var numbers = ["zero", "one", "two", "shi", "go"];

delete numbers[2]; // ["zero", "one", undefined, "shi", "go"]
show();
// 0 "zero"
// 1 "one"
// 3 "shi"
// 4 "go"

numbers.splice(2, 1); // ["zero", "one", "shi", "go"]
show();
// 0 "zero"
// 1 "one"
// 2 "shi" - change index
// 3 "go" - change index

function show() {
    numbers.forEach(function(item, index) {
        console.log(index, item);
    });
}