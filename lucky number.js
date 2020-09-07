//https://www.codewars.com/kata/55afed09237df73343000042/train/javascript

//Solution 1:

function isLucky(n) {
    let sum =0;
    let num = n + '';
    for(let i = 0; i < num.length; i++){
        sum += +num[i];
    }
    if(sum === 0 || sum % 9 === 0) return true;
    return false;
}
console.log(isLucky(1098));



//Solution 2:

function isLucky(n) {
    if(n % 9 === 0) return true;
    else return false;
}
console.log(isLucky(1098));