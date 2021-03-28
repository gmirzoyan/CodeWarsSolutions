//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (string) {
    if (string.length === 0) return {};
    let res = {};
    for (let el of string) {
        if (res[el] === undefined) res[el] = 1;
        else res[el]++;
    }
    return res;
}

console.log(count ("aba"));