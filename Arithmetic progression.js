//https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript

function arithmeticSequenceElements(a,r,n) {
    let res = [a];
    for (let i = 1; i < n; i++) {
        res.push(a + r);
        a = a + r;
    }
    return res.join(', ');
}

console.log(arithmeticSequenceElements(1, 2, 5));