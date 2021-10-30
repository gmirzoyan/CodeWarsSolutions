//codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

function solve(s){
    let str = s.split('').sort();
    let dict = "abcdefghijklmnopqrstuvwxyz";
    let filtered = str.filter(el => str.indexOf(el) !== str.lastIndexOf(el));
    if (filtered.length > 0) return false;
    if (dict.includes(str.join(''))) return true;
    else return false;
}

console.log(solve("dabc"));