//https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript

function initials(n){
    let res = n.split(' ').slice(0, -1).map(el => el[0].toUpperCase() + '.').join('');
    let last = n.split(' ').slice(-1).join('');
    let lName =last[0].toUpperCase() + last.slice(1);
    return res + lName;
}

console.log(initials('code wars'));