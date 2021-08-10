//https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript

var paintLetterboxes = function(start, end) {
    let res = [];
    let obj = {};
    let result = [];
    for (let i = start; i <= end; i++) {
        res.push(i.toString().split('').map(Number));
    }
    let r = res.toString().split(',').map(el => +el);
    for (let el of r) {
        if (obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    let arr = [obj[0], obj[1], obj[2], obj[3], obj[4], obj[5], obj[6], obj[7], obj[8], obj[9]];
    for (let el of arr) {
        if(el === undefined) result.push(0);
        else result.push(el);
    }
    return result;
}

