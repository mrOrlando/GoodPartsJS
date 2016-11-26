Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i++) {
        a[i] = initial;
    };
    return a;
};

// Make an array containing 10 zeros

var myArray = Array.dim(10, 0);
console.log(myArray);


var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(matrix[2][1]); // 7


// Again, JavaScript should have provided better support
// for matrixes. We can correct that, too

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i++) {
        a = [];
        for (j = 0; j < n; j++) {
            a[j] = initial;
        }
        mat[i] = a;
    };
    return mat;
};

var myMatrix = Array.matrix(4, 4, 0);
console.log(myMatrix[3][3]); // 0
console.log(JSON.stringify(myMatrix)); // [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]


// Method to make an identity matrix.

Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i++) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);
console.log(JSON.stringify(myMatrix));
// [
//     [1,0,0,0],
//     [0,1,0,0],
//     [0,0,1,0],
//     [0,0,0,1]
// ]