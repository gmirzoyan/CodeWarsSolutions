//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

function calculate(string) {
    let arr = string.split(' ');
    let res = [];
    for (let el of arr) {
        if (el.includes(Number(el))) res.push(el);
    }
    if (arr[arr.length - 2] === 'loses') return res.reduce((a, b) => +a - +b);
    if (arr[arr.length - 2] === 'gains') return res.reduce((a, b) => +a + +b);
}

console.log(calculate("Panda has 48 apples and loses 4"));