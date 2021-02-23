//https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript

function addArrays(array1, array2) {
    if (array1.length === 0 && array2.length === 0) return [];
    if (array2.length === 0) return array1.map(el => el.toString()).reduce((acc, cur) => acc + cur).split('').map(el => +el);;
    let res1 = array1.map(el => el.toString()).reduce((acc, cur) => acc + cur);
    let res2 = array2.map(el => el.toString()).reduce((acc, cur) => acc + cur);
    let sum = (+res1 + +res2);
    sum = sum.toString().split('').map(el => +el);
    if (isNaN(sum[0])) {
        sum.shift();
        sum[0] = sum[0] * (-1);
    }
    return sum;
}

console.log(addArrays([4,7,3], [1,2,3]));
