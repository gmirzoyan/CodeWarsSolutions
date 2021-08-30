//https://www.codewars.com/kata/55a8a36703fe4c45ed00005b/train/javascript

function multiple(x) {
    if (x % 3 === 0 && x % 5 === 0) return "BangBoom";
    else if (x % 3 === 0) return "Bang";
    else if (x % 5 === 0) return "Boom";
    else return "Miss";
}

console.log(multiple(25));