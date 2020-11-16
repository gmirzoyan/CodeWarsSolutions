//https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

const removeConsecutiveDuplicates = s => {
    let arr = s.split(' ');
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            res.push(arr[i]);
        }
    }
    return res.join(' ');
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));