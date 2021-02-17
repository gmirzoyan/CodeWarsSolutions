//https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript

const sumAverage = (arr) => {
    let res = [];
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        avg = arr[i].reduce((a, b) => a + b) / arr[i].length;
        res.push(avg);
    }
    return Math.floor(res.reduce((a, b) => a + b));
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));