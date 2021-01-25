//https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript

function specialNumber(n){
    let str = n + '';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (+str[i] > 5) arr.push(str[i]);
    }
    if (arr.length > 0) return "NOT!!";
    else return "Special!!";
}

console.log(specialNumber(55));