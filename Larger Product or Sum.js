//https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02/train/javascript

function sumOrProduct(array, n) {
    let arr = array.sort((a, b) => a - b);
    console.log(arr, n)
    let sum = 0;
    let product = 1;
    for (let i = 0; i < n; i++){
        product *= arr[i];
        sum += arr[(arr.length -1) - i];
    }
    console.log(sum, product)
    if (sum > product) return "sum";
    if (sum === product) return "same";
    if (sum < product) return "product";

}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));