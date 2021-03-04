//https://www.codewars.com/kata/59b11f57f322e5da45000254/train/javascript

function onesComplement(n) {
    let res = [];
    for (let el of n) {
        if (el === '0') res.push('1');
        if (el === '1') res.push('0');
    }
    return res.join('');
}

console.log(onesComplement("1101"));