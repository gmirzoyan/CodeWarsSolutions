//https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript

function reverse(n){
    let result = 0;
    while (n > 0) {
        result = (result * 10) + (n % 10);
        n = (n - (n % 10)) / 10;
    }
    return result;
}

console.log(reverse(1234));