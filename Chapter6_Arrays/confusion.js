var arr = [1, 2, 3];
console.log(typeof arr); // object
console.log(arr.constructor); // Array() { [native code] }
console.log(Array); // Array() { [native code] }

var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        value.constructor === Array;
};

console.log(is_array(arr)); // true

// Unfortunately, it fails to identify arrays that were
// constructed in a different window or frame.
// If we want to accurately detect those foreign arrays,
// we have to work a little harder

var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'));
};

console.log(is_array(arr)); // true