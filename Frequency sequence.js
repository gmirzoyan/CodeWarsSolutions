//https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript

function freqSeq(str, sep) {
    let r = [];
    let res = {};
    for (let el of str) {
        if (res[el]) res[el]++;
        else res[el] = 1;
    }
    for (let i = 0; i < str.length; i++) {
        r.push(res[str[i]]);
    }
    return r.join(sep);
}


console.log(freqSeq('hello world', '-'));