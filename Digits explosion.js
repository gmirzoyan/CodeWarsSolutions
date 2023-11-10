
function explode(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
      res += s[i].repeat(+s[i]);
    }
    return res;
  }
  