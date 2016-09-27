// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

walk_the_DOM(document.body, function (node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log('element node name: ' + node.nodeName);
    }
});

// for file DOM.html
// element node name: BODY
// element node name: HEADER
// element node name: UL
// element node name: LI
// element node name: A
// element node name: LI
// element node name: A
// element node name: LI
// element node name: A
// element node name: DIV
// element node name: H1
// element node name: P
// element node name: FOOTER
// element node name: P
// element node name: SCRIPT


// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === Node.ELEMENT_NODE && node.getAttribute(att);
        if (typeof actual === 'string' &&
                (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
};

var nodes = getElementsByAttribute('class');
console.log("nodes with attr class: ", nodes);
// [header.page-header, ul.menu, li.menu-item, li.menu-item, li.menu-item, div.content, footer.page-footer]

var nodes = getElementsByAttribute('class', 'menu-item');
console.log("nodes with attr class=menu-item: ", nodes);
// [li.menu-item, li.menu-item, li.menu-item]

// standart method
var nodes = window.getElementsByAttribute('class', 'menu-item');
console.log("nodes with attr class=menu-item: ", nodes);
// [li.menu-item, li.menu-item, li.menu-item]


// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.

// JavaScript does not currently optimize this form.

var factorial = function factorial(item, acc) {
    acc = acc || 1;
    if (item < 2) {
        return acc;
    }
    return factorial(item - 1, acc * item);
};

console.log(factorial(5)); // 120