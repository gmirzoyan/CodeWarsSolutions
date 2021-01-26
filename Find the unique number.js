//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    return arr.filter((el,i) => i === arr.indexOf(el) && i === arr.lastIndexOf(el))[0];
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1]));