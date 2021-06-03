//https://www.codewars.com/kata/587854330594a6fb7e000057/train/javascript

function mathEngine(arr) {
    if (!arr) return 0;
    let first = arr.filter(el => el >= 0).reduce((acc, cur) => acc * cur, 1);
    let second = arr.filter(el => el <= 0).reduce((acc, cur) => acc + cur, 0);
    return first + second;
}

console.log(mathEngine([1, 2, 3, -4, -5]));