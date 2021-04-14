//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
    let odd = [];
    let even = [];
    for (let el of integers) {
        if (el % 2 === 0) even.push(el);
        if (el % 2 !== 0) odd.push(el);
    }
    return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([1, 2, 3]));