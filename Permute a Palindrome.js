//https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript

function permuteAPalindrome (input) {
    let res = '';
    for (let i = 0; i < input.length; i++){
        if (res.includes(input[i])){
            res = res.replace(input[i],'');
        }
        else res = res + input[i];
    } return res.length <= 1 ? true : false;
}
console.log(permuteAPalindrome ("aab"));