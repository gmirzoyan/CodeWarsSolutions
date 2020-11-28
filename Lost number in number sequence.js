//https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
    let res = 0;
    let ordered = mixArr.sort((a, b) => a - b);
    let difference = arr.filter(x => !ordered.includes(x));
    if (difference[0] === undefined) return 0;
    return difference[0];
}

console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]));