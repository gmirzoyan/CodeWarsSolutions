//https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll (arr) {
    function mult (n) {
        return arr.map(el => el * n);
    }
    return mult;
}

