//https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

function triangular( n ) {
    if (n < 0) return 0;
    let tNum = (n * (n + 1)) / 2;
    return (tNum <= 0) ? 0 : tNum;
}

console.log(triangular(4));