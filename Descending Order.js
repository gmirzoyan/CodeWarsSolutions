//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){
    let res = +n.toString().split('').sort((a, b) => b - a).join('');
    return res;
}

console.log(descendingOrder(123456789));