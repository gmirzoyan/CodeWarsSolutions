//https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

function tidyNumber(n){
    let s = n.toString();
    let res = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] > s[i + 1]) {
            res = false;
            break;
        }
    }
    return res;
}

console.log(tidyNumber(2789));