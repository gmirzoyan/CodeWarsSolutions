//https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript

function range(startNum, endNum) {
    let res = [];
    for (let i = startNum + 1; i < endNum; i++) {
        res.push(i);
    }
    return res;
};

console.log(range(2, 9));