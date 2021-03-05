//https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript

function multiplyAndFilter(array, multiplier){
    let numbers = array.filter(el => typeof el === 'number');
    return numbers.map(el => el * multiplier);
}

console.log(multiplyAndFilter([1,2,3,4], 1.5));