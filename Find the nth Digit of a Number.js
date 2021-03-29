//https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

let findDigit = function(num, nth){
    if (nth <= 0) return -1;
    let strN = Math.abs(num).toString().split('').reverse().join('')
    if (nth > strN.length) return 0;
    return +strN[nth - 1];
}

console.log(findDigit(5673, 4));