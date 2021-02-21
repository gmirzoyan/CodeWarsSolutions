//https://www.codewars.com/kata/564f458b4d75e24fc9000041/train/javascript

function remainder (D, d) {
    let r = Math.trunc(D / d);
    return D - (d * r);
}

console.log(remainder (27, 5));