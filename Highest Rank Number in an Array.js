//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr){
    let res = 0;
    let obj = {};
    for (let el of arr) {
        if (obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    let max = Math.max(...Object.values(obj));
    let r = Object.entries(obj);
    for (let el of r) {
        if (el[1] === max) res = +el[0];
    }
    return res;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12] ));