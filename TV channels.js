//https://www.codewars.com/kata/5836dce6966f8d1d43000007

function redarr(arr) {
    let obj = {};
    let res = arr.sort().filter((el, i) => i === arr.indexOf(el));
    for (let i = 0; i < res.length; i++){
        obj[i] = res[i];
    }
    return obj;
}
console.log(redarr(["BBC1","BBC1","BBC2","MTV"]))