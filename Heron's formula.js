//https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript

function heron(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(heron(3, 4, 5));