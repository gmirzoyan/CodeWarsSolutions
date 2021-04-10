//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

//1.
function twoSum(numbers, target) {
    let nums = {};
    let n1;
    let n2;
    for(n of numbers){
        if(nums[n] !== undefined){
            n1 = n;
            n2 = nums[n];
            break;
        }
        n2 = target - n;
        nums[n2] = n;
    }
    return n1 !== n2 ? [numbers.indexOf(n2), numbers.indexOf(n1)] :  [numbers.indexOf(n2), numbers.lastIndexOf(n2)]
}

//2.
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (i !== j && nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

console.log(twoSum([1,2,3], 4));