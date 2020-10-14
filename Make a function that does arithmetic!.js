//https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript


function arithmetic(a, b, operator){
    let obj = {
        'add': a + b,
        'subtract': a - b,
        'divide': a / b,
        'multiply': a * b,
    }
    return obj[operator];
}

console.log(arithmetic(5, 2, "multiply"));