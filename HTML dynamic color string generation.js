//https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/javascript

let generateColor = function() {
    let res = '#';
    for (let i = 0; i < 6; i++) {
        res += (Math.floor(Math.random() * 16)).toString(16);
    }
    return res;
}