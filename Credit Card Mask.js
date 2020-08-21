//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
    let str = cc.slice(-4);
    let str1 = '';
    for (let i = 0; i < cc.length - 4; i++){
        cc[i] = '#';
        str1 = str1 + '#';
    }
    return str1 + str;
}

console.log(maskify('4556364607935616'))