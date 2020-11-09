//https://www.codewars.com/kata/5f6d533e1475f30001e47514

function consecutive(arr, a, b) {
    if ((arr.indexOf(a) === arr.indexOf(b) + 1) || (arr.indexOf(a) === arr.indexOf(b) - 1)) return true;
    else return false;
}

console.log(consecutive([1, 3, 5, 7], 3, 7));