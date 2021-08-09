//https://www.codewars.com/kata/5803c0c6ab6c20a06f000026/train/javascript

function swapVowelCase(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if ("aeoui".includes(str[i])) res += str[i].toUpperCase();
        else if ("AEOUI".includes(str[i])) res += str[i].toLowerCase();
        else res += str[i];
    }
    return res;
}

console.log(swapVowelCase("C Is AlIvE!"));