//https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript

function duplicates(arr) {
    let res = arr.filter((el, i) => i !== arr.indexOf(el));
    return res.filter((el, i) => i === res.indexOf(el));
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));