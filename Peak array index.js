//https://www.codewars.com/kata/5a61a846cadebf9738000076/train/javascript

function peak(arr){
    let sum  = arr.reduce((acc, cur) => acc + cur);
    let leftSum = 0;
    let rightSum = 0;
    let index = -1;
    for (let i = 1; i < arr.length; i++){
        leftSum += arr[i-1];
        rightSum = sum - leftSum - arr[i];
        if(leftSum === rightSum){
            index = i;
            break;
        }
    }
    return index;
}

console.log(peak([1,12,3,3,6,3,1]))