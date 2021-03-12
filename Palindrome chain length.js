//https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

let palindromeChainLength = function(n) {
    let steps = 0;
    while (n !== +n.toString().split('').reverse().join('')) {
        n = n + +n.toString().split('').reverse().join('');
        steps++;
    }
    return steps;
}

console.log(palindromeChainLength(87));