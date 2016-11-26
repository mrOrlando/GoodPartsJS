var double_worlds =
    /([A-Za-z]+)\s+\1/gi;

console.log( double_worlds.test('abc abc') ); // true
console.log( double_worlds.test('Lorem input') ); // false

// doubled_words looks for occurrences of words
// (strings containing 1 or more letters)
// followed by whitespace followed by the same word.
// \2 is a reference to group 2, \3 is a reference to group 3, and so on.