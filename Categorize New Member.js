//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
    let res = [];
    for (let el of data) {
        if (el[0] >= 55 && el[1] > 7) res.push("Senior");
        else res.push("Open");
    }
    return res;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));