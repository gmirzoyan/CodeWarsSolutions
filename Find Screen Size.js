//https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript

function findScreenHeight(width, ratio) {
    let res = ratio.split(':');
    let result = width * +res[1] / +res[0];
    return `${width}x${result}`;
}

console.log(findScreenHeight(1024,"4:3"));