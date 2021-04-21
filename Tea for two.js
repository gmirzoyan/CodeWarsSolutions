//https://www.codewars.com/kata/555a7dc335d4c407af00006e/train/javascript

//1.
function tea42(input) {
    if (typeof input !== 'string') input = input.toString();
    let res = '';
    for (let el of input) {
        if (el === '2') res += 't';
        else res += el;
    }
    return res;
}

//2.
// function tea42(input) {
//     return input.toString().replace(/2/gi, 't');
// }

console.log(tea42('pre2ty'));