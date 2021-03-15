//https://www.codewars.com/kata/59619e4609868dd923000041/train/javascript

function totalBill(str) {
    let res = str.split(' ').filter(el => el !== ' ').reduce((a, b) => a + b);
    return res.length < 5 ? res.length * 2 : Math.ceil(res.length - (res.length / 5)) * 2;
}

console.log(totalBill('rr rrr rrr rr'));