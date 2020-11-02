//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums){
    if(nums !== null) return nums.sort((a, b) => a - b);
    if(nums === null || nums.length === 0) return [];
}

console.log(solution([1, 2, 10, 50, 5]));