//https://www.codewars.com/kata/588a7d45019c42be61000009/train/javascript

function interweave(s1, s2) {
    let l = Math.max(s1.length, s2.length);
    let res = ''
    for(let i = 0; i < l; i++){
        res += s1[i] + s2[i];
    }
    return res.replace(/[0-9]/g, '').replace(/undefined/g, '');
}

console.log(interweave("h3lo", "el4"));