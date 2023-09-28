
//1.

function removeChars(s) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';
    for (let el of s) {
      if(letters.includes(el) || el === ' ') res += el;
    }
    return res;
  }

  //2.

  function removeChars(s) {
    return s.split('').filter(el => el >= 'a' && el <= 'z' || el >= 'A' && el <= 'Z' || el === ' ').join('');
  }