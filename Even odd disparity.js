//https://www.codewars.com/kata/59c62f1bdcc40560a2000060/train/javascript

function solve(a){
    let oddCount = 0;
    let evenCount = 0;
    for (let el of a){
        if(typeof el === 'number' && el % 2 === 0) evenCount++;
        if(typeof el === 'number' && el % 2 !== 0) oddCount++;
    }
    return evenCount - oddCount;
}

console.log(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]));