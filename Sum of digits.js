//https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript

function sum(digits) {
    if (digits === undefined) return '';
    let sum = digits.toString().split('').reduce((a, b) => +a + +b);
    let res = '';
    for (let el of digits.toString()) {
        res += +el + ' + ';
    }
    res = res.slice(0, res.length - 3);
    return res + ' = ' + sum;
}

console.log(sum(345));