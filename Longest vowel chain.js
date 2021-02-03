//https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

function solve(s){
    let res = [];
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if ('aeiou'.includes(s[i])) res.push(i);
    }
    let max = 0;
    for (let i = 0; i < res.length - 1; i++) {
        if (Math.abs(res[i + 1] - res[i] === 1)) count++;
        else count = 1;
        if(count>max) max = count;
    }
    return max;
}

console.log(solve("codewarriors"));