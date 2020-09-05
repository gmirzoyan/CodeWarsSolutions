//https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

function initializeNames(name){
    let arr = [];
    let res = name.split(' ');
    if (res.length === 1) return res.join('');
    for (let i = 0; i < res.length; i++){
        if (res[i] !== res[0] && res[i] !== res[res.length - 1]) arr.push(res[i][0] + '.');
    }
    arr.push(res[res.length - 1]);
    arr.unshift(res[0]);
    return arr.join(' ');
}

console.log(initializeNames('Lois Mary Lane'));