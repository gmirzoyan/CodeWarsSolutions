//https://www.codewars.com/kata/5a2809dbe1ce0e07f800004d/train/javascript

function divisibleByLast(n) {
    let str = n + '';
    let res = [false];
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i + 1] % str[i] === 0) res.push(true);
        else res.push(false);
    }
    return res;
}

console.log(divisibleByLast(1337));