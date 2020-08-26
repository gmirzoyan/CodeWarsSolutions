//https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript


function trim(arr, size) {
    let res = arr.slice(0, size - 3) + "...";
    if (arr.length <= 3) res = arr.slice(0, size) + "...";
    if (arr.length <= size) res = arr;
    return res;
}

console.log(trim("Creating kata is fun", 14));