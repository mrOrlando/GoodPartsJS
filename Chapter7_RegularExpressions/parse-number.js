var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var blanks = " ".repeat(15);

var test = function (num) {
    document.writeln(num + ': '
         + blanks.substring(num.length)
         + parse_number.test(num)
    );
}

document.writeln('<pre>');
test('1');
test('number');
test('98.6');
test('132.21.86.100');
test('123.45E-67');
test('123.45D-67');
document.writeln('</pre>');

/*
1:               true
number:          false
98.6:            true
132.21.86.100:   false
123.45E-67:      true
123.45D-67:      false
*/