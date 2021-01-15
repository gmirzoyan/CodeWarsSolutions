//https://www.codewars.com/kata/579fa665bb9944f9340005d2/train/javascript


const rotateToMax = n => {
    let res = n.toString().split('');
    return +res.sort((a, b) => b - a).join('');
}

console.log(rotateToMax(123));