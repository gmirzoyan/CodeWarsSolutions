//https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript

//preload variable: dict
let obj = dict;
var makeBackronym = function(string){
    let s = string.toUpperCase();
    let res = '';
    for (let i = 0; i < s.length; i++){
        if (i !== s.length - 1) res = res + obj[s[i]] + ' ';
        else res += obj[s[i]];
    }
    return res;
};
console.log(makeBackronym('codewars'));