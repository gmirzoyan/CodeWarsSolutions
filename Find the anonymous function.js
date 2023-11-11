
//1.
var FindFunction = function(func, arr) {
    let a = func.find(el => typeof el === 'function');
    return arr.filter(a);
}

//2.
function FindFunction(func, arr){
    return arr.filter(func.filter(f => typeof f == 'function')[0]);
}