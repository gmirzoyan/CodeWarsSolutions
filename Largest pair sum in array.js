//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    return arr[arr.length - 1] + arr[arr.length - 2];
}

console.log(largestPairSum([10,14,2,23,19]));