//https://www.codewars.com/kata/57741d8f10a0a66915000001/train/javascript

//1.

const intDiff = (arr, n) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((i !== j) && (arr[j] - arr[i] === n)) {
                count++;
            }
        }
    }
    if(n === 0) return count/2;
    return count;
}

//2.

// const intDiff = (arr, n) => {
//     let c = 0;
//     for(let i = 1; i < arr.length; i++) {
//         for(let j = 0; j < i; j++) {
//             if (Math.abs(arr[i] - arr[j]) === n) c++;
//         }
//     }
//     return c;
// }

console.log(intDiff([1, 1, 3, 3], 2));