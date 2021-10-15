//https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript

function oddOnesOut(nums) {
    let filtered = [];
    let res = {};
    for (let el of nums) {
        if (res[el]) res[el]++;
        else res[el] = 1;
    }
    for (let el in res) {
        if (res[el] % 2 === 0) filtered.push(+el)
    }
    return nums.filter(el => filtered.includes(el));
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));