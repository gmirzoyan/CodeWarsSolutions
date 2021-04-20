//https://www.codewars.com/kata/590f5b4a7bbb3e246000007d/train/javascript

function comes_after(str,l) {
    let res = [];
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === l.toLowerCase() || str[i] === l.toUpperCase())
            '.,!?;:_'.includes(str[i + 1]) || '0123456789 '.includes(str[i + 1]) ? res.push('') : res.push(str[i + 1]);
    }
    return res.join('');
}

console.log(comes_after("d8u d._ rly 2d1s",'D'));