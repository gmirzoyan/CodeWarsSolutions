//https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript

function spoonerize(words) {
    let res = words.split(' ');
    let first = res[0];
    let second = res[1];
    let str = second[0] + res[0].slice(1) + ' ' + first[0] + res[1].slice(1);
    return str;
}

console.log(spoonerize("jelly beans"));