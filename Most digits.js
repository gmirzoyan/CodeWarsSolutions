//https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array){
    let arr = array.map(el => String(el));
    let max = arr[0];
    for (let el of arr) {
        if (el.length > max.length) max = el;
    }
    return +max;
}

console.log(findLongest([8, 900, 500]));