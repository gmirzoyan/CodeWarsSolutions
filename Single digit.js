//https://www.codewars.com/kata/5a7778790136a132a00000c1/train/javascript

function singleDigit(n) {
    while(n > 9) {
        n = n.toString(2).split('').reduce((a, b) => +a + +b);
    }
    return n;
}

console.log(singleDigit(25));