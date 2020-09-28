//https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(arr){
    let arr1 = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    let res = arr1.reduce((acc, curr) => acc + curr);
    return res;
};

console.log(repeats([4,5,7,5,4,8]));