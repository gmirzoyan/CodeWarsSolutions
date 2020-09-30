//https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

function solve(arr){
    let arr1 = [];
    let res = arr.sort((a, b) => b - a);
    for (let i = 0; i <= res.length-1; i++){
        let min = i;
        let max = res.length-1-min;
        if(min === max) arr1.push(res[min]);
        if(min >= max) break;
        arr1.push(res[min]);
        arr1.push(res[max]);
    }
    return arr1;
}

console.log(solve([15,11,10,7,12]));