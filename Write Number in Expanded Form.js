//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
    let res = [];
    let str = num.toString();
    let tenth = 1;
    for (let i = 1; i <= str.length; i++) {
        let last = str[str.length - i];
        if (last > 0) res.unshift(last * tenth);
        tenth = tenth * 10;
    }
    return res.join(" + ");
}

console.log(expandedForm(42));