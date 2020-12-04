//https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript

function menFromBoys(arr){
    let res = [];
    let res1 = [];
    for (let el of arr) {
        if (el % 2 === 0) res.push(el);
        if (el % 2 !== 0) res1.push(el);
    }
    let result1 = res.sort((a, b) => a - b);
    let result2 = res1.sort((a, b) => b - a);
    let result = result1.concat(result2);
    return result.filter((el, i) => i === result.indexOf(el));
}

console.log(menFromBoys([7,3,14,17]));