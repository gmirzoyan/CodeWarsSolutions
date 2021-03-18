//https://www.codewars.com/kata/54d418bd099d650fa000032d/train/javascript

var vampire_test = function(a, b){
    if (a < 0 && b < 0) return false;
    let prod = Math.abs(a * b).toString().split('').sort((a, b) => a - b).join('');
    let sum = (Math.abs(a).toString() + Math.abs(b).toString()).split('').sort((a, b) => a - b).join('');
    return prod === sum;
}

// var vampire_test = function(a, b){
//     if (a < 0 && b < 0) return false;
//     let prod = Math.abs(a * b).toString().split('').sort((a, b) => a - b);
//     let sum = (Math.abs(a).toString() + Math.abs(b).toString()).split('').sort((a, b) => a - b);
//     return JSON.stringify(prod) === JSON.stringify(sum);
// }

console.log(vampire_test(204,615));