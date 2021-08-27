//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x){
    let str = "!abcdefghijklmnopqrstuvwxyz";
    let arr = x.split(' ');
    let max = 0;
    let index;
    for (let i = 0; i < arr.length; i++) {
        let k = 0;
        for (let j = 0; j < arr[i].length; j++) {
            k += str.indexOf(arr[i][j]);
        }
        if(k > max) {
            max = k;
            index = i;
        }
    }
    return arr[index];
}

console.log(high('take me to semynak'));