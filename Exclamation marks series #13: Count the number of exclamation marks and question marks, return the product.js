//https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript

//1.

function product(s){
    let exlamM = s.split('').filter(el => el === '!').length;
    let questM =  s.split('').filter(el => el === '?').length;
    return exlamM * questM;
}

//2.

// function product(s){
//     let arr = s.split('');
//     let exlamMarks = 0;
//     let questMarks = 0;
//     for (let el of arr) {
//         if (el === '!') exlamMarks++;
//         if (el === '?') questMarks++;
//     }
//     return exlamMarks * questMarks;
// }

console.log(product("!???!!"));