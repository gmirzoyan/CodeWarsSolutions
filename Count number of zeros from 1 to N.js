//https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript

function countZeros(n) {
    let count = 0;
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i)
    }
    let res = nums.join('');
    for (let i = 0; i < res.length; i++) {
        if (res[i].includes('0')) count++;
    }
    return count;
}

console.log(countZeros(200));