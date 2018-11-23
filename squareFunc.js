//Task: fix makeSquareFns function to show correct answer

var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
var square = function (x) { return x * x; };


function makeSquareFns(arr, square) {
    var fns = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        fns.push(square(arr[i]));
    }
    return fns;
}

var funcs = makeSquareFns(arr, square);

isEqual = true;
for (var i = 0; i < arr.length; i++) {
    if (funcs[i] !== square(arr[i])) {
        isEqual = false;
        alert('wrong answer');
        break;
    }
}
if (isEqual) alert('correct answer');
