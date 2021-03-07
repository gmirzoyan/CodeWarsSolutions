//https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/java

function removeDuplicateWords (s) {
    let arr = s.split(' ');
    let res = {};
    for (let el of arr) {
        if (res[el] === undefined) res[el] = 1;
        else res[el]++;
    }
    return Object.keys(res).join(' ');
}

console.log(removeDuplicateWords("my cat is my cat fat"));