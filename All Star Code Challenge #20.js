//https://www.codewars.com/kata/5865a75da5f19147370000c7/train/javascript

function addArrays(array1, array2) {
    let res = [];
    let sum = 0;
    if (array1.length !== array2.length)
        throw new Error('Error!');
    for (let i = 0; i < array1.length; i++) {
        sum = array1[i] + array2[i];
        res.push(sum);
    }
    return res;
}

console.log(addArrays([1,2],[4,5]));