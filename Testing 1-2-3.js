//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        arr.push(`${i + 1}: ${array[i]}`)
    }
    return arr;
}

console.log(number(["a", "b", "c"]));