
//1.
function gimmeTheLetters(sp) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let first = letters.indexOf(sp[0]);
    let last = letters.indexOf(sp[2]);
    return letters.slice(first, last + 1);
}

//2.
function gimmeTheLetters(sp) {
    let res = [];
    for(let i = sp.charCodeAt(0); i <= sp.charCodeAt(2); i++) {
      res.push(String.fromCharCode(i));
    }
    return res.join('');
  }
  