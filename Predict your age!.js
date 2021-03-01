//https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let list = [age1, age2, age3, age4, age5, age6, age7, age8];
    let res = list.map(el => el * el).reduce((acc, cur) => acc + cur);
    return Math.floor(Math.sqrt(res) / 2);
}

console.log(predictAge(65,60,75,55,60,63,64,45));