//https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript

function rounders(value) {
    let last = 0;
    let coeff = 10;
    for(let i = 0; i < value.toString().length - 1; i++){
        last = value % coeff;
        if (last >= 5 * coeff / 10) value = value - last + coeff;
        else value = value - last;
        coeff *= 10;
    }
    return value;
}

console.log(rounders(1445));