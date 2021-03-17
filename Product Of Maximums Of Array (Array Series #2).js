//https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

function maxProduct(numbers, size){
    let sorted = numbers.sort((a, b) => b - a);
    let res = [];
    let i = 0;
    while (i < size) {
        res.push(sorted[i]);
        i++;
    }
    return res.reduce((a, b) => a * b);
}

console.log(maxProduct([10,2,3,8,1,10,4], 5));