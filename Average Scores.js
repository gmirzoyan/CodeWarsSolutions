//https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript

function average(scores) {
    return Math.round(scores.reduce((a, b) => a + b) / scores.length);
}

console.log(average([49,3,5,300,7]));