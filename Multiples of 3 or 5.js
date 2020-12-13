//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
    let arr = [];
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) arr.push(i);
    }
    if (arr.length > 0) return arr.reduce((acc, cur) => acc + cur);
    else return 0;
}

 console.log(solution(10));