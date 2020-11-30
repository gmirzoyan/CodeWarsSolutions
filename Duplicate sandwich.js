//https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/train/javascript

function duplicateSandwich(a) {
    if (a.length === 2) return [];
    let arr = 0;
    if (typeof a === 'string') arr = a.split('').filter((el, i) => i === a.indexOf(el) && i !== a.lastIndexOf(el));
    else arr = a.filter((el, i) => i === a.indexOf(el) && i !== a.lastIndexOf(el));
    let first = a.indexOf(arr[0]);
    let last = a.lastIndexOf(arr[0]);
    return a.slice(first+1, last);
}

console.log(duplicateSandwich("example"));
console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]));
