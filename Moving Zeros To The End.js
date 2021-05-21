//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
    let res = arr.filter(el => el !== 0);
    let res1 = arr.filter(el => el === 0);
    return res.concat(res1);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));