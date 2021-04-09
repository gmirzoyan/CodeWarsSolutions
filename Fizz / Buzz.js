//https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript

//1.
function solution(number){
    let a = [], b = [], c = [];
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 && i % 5 !== 0) a.push(i);
        else if (i % 5 === 0 && i % 3 !== 0) b.push(i);
        else if (i % 3 === 0 && i % 5 === 0) c.push(i);
    }
    return [a.length, b.length, c.length];
}

//2.
// function solution(number){
//     let a = 0, b = 0, c = 0;
//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 && i % 5 !== 0) a++;
//         else if (i % 5 === 0 && i % 3 !== 0) b++;
//         else if (i % 3 === 0 && i % 5 === 0) c++;
//     }
//     return [a, b, c];
// }

console.log(solution(14));