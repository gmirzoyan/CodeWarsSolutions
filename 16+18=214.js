//https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

function add(num1, num2) {
    let sum = '';
    let n = num1 + '';
    let n1 = num2 + '';
    let max = 0;
    if(n.length > n1.length){
        max = n.length;
        n1 = "0".repeat(max-n1.length) + n1;
    } else {
        max = n1.length;
        n = "0".repeat(max-n.length) + n;
    }
    for(let i = 0; i < max; i++){
        sum += (+n[i] + +n1[i]) + ''
    }
    return +sum;
}

console.log(add(1222, 30277));