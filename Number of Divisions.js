//https://www.codewars.com/kata/5913152be0b295cf99000001/train/javascript

const divisions = (n, divisor) => {
    let count = 0;
    while (Math.trunc( n / divisor)) {
        n = n / divisor;
        count++;
    }
    return count;
}

console.log(divisions(2450, 5));