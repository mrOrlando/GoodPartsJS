
Boolean(null); // false
Boolean(false); // false
Boolean(undefined); // false
Boolean(0); // false
Boolean(''); // false
Boolean(""); // false
Boolean(NaN); // false

// Other values always true
Boolean(2); // true
Boolean('false'); // true
Boolean({}); // true
Boolean([]); // true
Boolean(Infinity); // true