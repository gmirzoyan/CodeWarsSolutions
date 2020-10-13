//https://www.codewars.com/kata/5dd5128f16eced000e4c42ba/train/javascript

function solve(st) {
    if(st.length === 1) return st;
    let chars = {};
    for(let i=97; i<=122; i++){
        let ch = String.fromCharCode(i);
        let diff = st.lastIndexOf(ch) - st.indexOf(ch);
        if(diff !== 0) chars[i] = diff;
    }
    let max = Math.max(...Object.values(chars));
    let codesMax = [];
    for(let code in chars){
        if(chars[code] === max) codesMax.push(+code);
    }
    let minCode = Math.min(...codesMax);
    if(minCode === Infinity){
        return st[0];
    }
    return String.fromCharCode(minCode);
}

console.log(solve('aabccc'));