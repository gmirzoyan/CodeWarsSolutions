//https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

//1.
function validPhoneNumber(phoneNumber){
    for (let el of phoneNumber) {
        if ('absdefghijklmnopqrstuvwxyz'.includes(el)) return false;
    }
    if (phoneNumber[0] === '(' && phoneNumber[4] === ')' && phoneNumber[5] === ' ' && phoneNumber[9] === '-') return true;
    else return false;
}

//2.
// function validPhoneNumber(phoneNumber){
//     if (phoneNumber.length !== 14) return false;
//     if (phoneNumber[0] === '(' && phoneNumber[4] === ')' && phoneNumber[5] === ' ' && phoneNumber[9] === '-') return true;
//     else return false;
// }

console.log(validPhoneNumber("(123) 456-7890"));