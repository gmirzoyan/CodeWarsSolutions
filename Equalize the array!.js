//https://www.codewars.com/kata/580a1a4af195dbc9ed00006c/train/javascript

function equalize(array){
    let res = [];
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] - array[0] >= 0) num = `+${array[i] - array[0]}`;
        else num = `${array[i] - array[0]}`;
        res.push(num);
    }
    return res;
}

console.log(equalize([20,30,35,10]));