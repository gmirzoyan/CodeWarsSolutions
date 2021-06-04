//https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript

//1.
function maxRot(n){
    let res = (n + '').split('');
    for(let i = 0; i < res.length; i++){
        res.push(res.splice(i, 1));
        let number = +(res.join(''));
        if(number > n) n = number
    }
    return n;
}
//2.
// function maxRot(n) {
//     let first = n.toString().slice(1) + n.toString().slice(0, 1);
//     let second = first.slice(0, 1) + first.slice(2) + first.slice(1, 2);
//     let third = second.slice(0, 2) + second.slice(3) + second.slice(2, 3);
//     let forth = third.slice(0, 3) + third.slice(4) + third.slice(3, 4);
//     let res = [n, +first, +second, +third, +forth];
//     return Math.max(...res);
// }

console.log(maxRot(38458215));