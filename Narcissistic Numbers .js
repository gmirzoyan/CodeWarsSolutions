//https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

function isNarcissistic(n){
    let str = n + '';
    let l = str.length;
    let sum = [];
    for (let i = 0; i < str.length; i++) {
        sum.push(str[i] ** l);
    }
    let res = sum.reduce((acc, cur) => acc + cur);
    return n === res;
}

console.log(isNarcissistic(153));