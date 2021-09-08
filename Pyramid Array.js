//https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let sub = [];
        for (let j = 1; j <= i; j++) {
            sub.push(1);
        }
        res.push(sub);
    }
    return res;
}

console.log(pyramid(5));