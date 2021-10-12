//https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript

//1.
var isSquare = function(arr){
    if (arr.length === 0) return undefined;
    let res = [];
    for (let el of arr) {
        if (Math.sqrt(el) % 1 !== 0) res.push(false);
    }
    return res.length === 0;
}

//2.
// var isSquare = function(arr){
//     if (arr.length === 0) return undefined;
//     let res = arr.filter(el => Number.isInteger(Math.sqrt(el)));
//     return res.length === arr.length;
// }

console.log(isSquare([1, 4, 9, 16, 25, 36]));