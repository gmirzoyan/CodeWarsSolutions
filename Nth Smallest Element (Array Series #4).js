//https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/java

function nthSmallest(arr, pos){
    let res = arr.sort((a, b) => a - b);
    let resultN = 0;
    for (let i = 0; i < res.length; i++) {
        if (i + 1 === pos) resultN = res[i];
    }
    return resultN;
}

console.log(nthSmallest([15,20,7,10,4,3],3));