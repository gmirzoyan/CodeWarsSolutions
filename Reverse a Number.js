//https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

function reverseNumber(n) {
    let res = Math.abs(n);
    res = +res.toString().split('').reverse().join('');
    return n > 0 ? res : -res;
}

console.log(reverseNumber(4321234));