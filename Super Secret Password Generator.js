//https://www.codewars.com/kata/54402d52cf3625b882000141/train/javascript

let superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
    password = password.replace(/a/gi, '@');
    password = password.replace(/s/gi, '$');
    password = password.replace(/o/gi, '0');
    password = password.replace(/h/gi, '5');
    password = password.replace(/x/gi, '*');
    return password;
}

console.log(createSSP("haxorpassword"));