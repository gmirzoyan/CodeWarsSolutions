//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

//1.
function nbDig(n, d) {
    let numbers = [];
    let count = [];
    for (let i = 0; i <= n; i++) {
        numbers.push(i * i);
    }
    for (let i = 0; i < numbers.length; i++) {
        count.push(numbers[i].toString().split('').filter(el => +el === d));
    }
    return count.join('').split(',').join('').length;
}

//2.
// function nbDig(n, d) {
//     var res = '';
//     for(var i = 0; i <= n; i++){
//         res += i * i;
//     }
//     return res.split(d).length - 1;
// }

console.log(nbDig(n, d));