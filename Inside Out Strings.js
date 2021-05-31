//https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript

function insideOut(x){
    let arr = x.split(' ');
    let r = '';
    let res = '';
    for (let el of arr) {
        let l= el.length % 2 ? Math.trunc(el.length / 2) : el.length / 2;
        let m = el.length % 2 ? el.slice(Math.trunc(el.length / 2), Math.trunc(el.length / 2) + 1) : '';
        r = el.length % 2 ? el.slice(0, l).split('').reverse().join('') + m + el.slice(l + 1).split('').reverse().join('') : el.slice(0, l).split('').reverse().join('') + el.slice(l).split('').reverse().join('')
        res += ' ' + r;
    }
    return res.slice(1);
}

console.log(insideOut('man i need a taxi up to ubud'));