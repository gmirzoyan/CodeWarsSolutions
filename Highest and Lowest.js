//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript


function highAndLow(numbers){
    let str = numbers.split(' ').sort((a, b) => b - a);
    return `${str[0]} ${str[str.length - 1]}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));