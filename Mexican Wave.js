//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str){
    if (str.length === 0) return [];
    let arr = [];
    for (let i = 0; i < str.length; i++){
        if(str[i]!==' ') {
            arr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1));
        }
    }
    return arr;
}

console.log(wave("hello"));