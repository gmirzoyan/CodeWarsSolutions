//https://www.codewars.com/kata/5ef0456fcd067000321baffa/train/javascript

function connotation(str) {
    let positive = 'abcdefghijklm';
    let negative = 'nopqrstuvwxyz';
    let posCount = 0;
    let negCount = 0;
    let arr = str.toLowerCase().split(' ');
    for (let el of arr) {
        if (positive.includes(el[0])) posCount++;
        if (negative.includes(el[0])) negCount++;
    }
    return posCount >= negCount ? true : false;
}

console.log(connotation("A big brown fox caught a bad bunny"));