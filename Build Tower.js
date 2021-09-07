//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        let line = " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1);
        res.push(line);
    }
    return res;
}


console.log(towerBuilder(5));