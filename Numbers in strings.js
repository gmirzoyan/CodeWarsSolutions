//https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

function solve(s){
    let r = [];
    let res = '';
    for(let i = 0; i < s.length; i++){
        if(typeof +s[i] === 'number') res = res + +s[i];
    }
    let res1 = res.split('NaN');
    let filtered = res1.filter(el => +el);
    let result = filtered.map(el => +el);
    return Math.max(...result);
}

console.log(solve('gh12cdy695m1'))