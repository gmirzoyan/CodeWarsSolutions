//https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

function numObj(s){
    let res = [];
    for (let el of s){
        let obj = {[el] : String.fromCharCode(el)};
        res.push(obj)
    }
    return res;
}

console.log(numObj([118,117,120]));