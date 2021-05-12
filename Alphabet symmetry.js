//https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

function solve(arr){
    let a = arr.map(el => el.toLowerCase());
    let dict = 'abcdefghijklmnopqrstuvwxyz';
    let res = a.map(el => el.split('').filter((el, i) => i === dict.indexOf(el)));
    return res.map(el => el.length);
}

// function solve(arr){
//     let dict = 'abcdefghijklmnopqrstuvwxyz';
//     return arr.map(el => el.toLowerCase()).map(el => el.split('').filter((el, i) => i === dict.indexOf(el))).map(el => el.length);
// }

console.log(solve(["abode","ABc","xyzD"]));

