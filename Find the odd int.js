//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript


function findOdd(a) {
    let arr = a.sort();
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i + 1]){
            i++;
        } else {
            count = arr[i]
        }
    }
    return count;
}

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));