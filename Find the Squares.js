//https://www.codewars.com/kata/60908bc1d5811f0025474291/train/javascript

//1.

const findSquares = num => {
    let first = Math.pow((num - 1) / 2, 2);
    let second = Math.pow(num - (num - 1) / 2, 2);
    return first > second ? `${first}-${second}` : `${second}-${first}`;
}

//2.

// const findSquares = num => {
//     let res = [];
//     let a = (num - 1) / 2;
//     let b = a + 1;
//     res.push(a * a, b * b);
//     return res.sort((a, b) => b - a).join('-');
// }

console.log(findSquares(5));


