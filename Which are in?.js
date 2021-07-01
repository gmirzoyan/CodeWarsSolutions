//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1, array2){
    let res = [];
    for (let el of array2) {
        for (let elem of array1) {
            if (el.includes(elem)) res.push(elem);
        }
    }
    return res.filter((el, i) => i === res.indexOf(el)).sort();
}

