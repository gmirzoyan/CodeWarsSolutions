//https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript

function divisibleByThree(str){
    let sum = 0;
    for (let el of str) {
        sum += +el;
    }
    if (sum % 3 == 0) return true;
    else return false;
}

console.log(divisibleByThree('19254'));