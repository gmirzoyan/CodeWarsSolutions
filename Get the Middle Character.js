//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

//1.
function getMiddle(s){
    let res = '';
    if (s.length % 2 !== 0) res = s[Math.floor(s.length / 2)];
    else res = s[s.length / 2 - 1] + s[s.length / 2];
    return res;
}

//2.
// function getMiddle(s) {
//     return s.slice((s.length-1)/2, s.length/2+1);
// }

console.log(getMiddle("testing"));