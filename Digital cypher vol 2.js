
function decode  (code, n) {
    n = n.toString();
    let res = [];
    let dict = '7abcdefghijklmnopqrstuvwxyz';
    let j = 0;
    for(let i=0; i < code.length; i++){
      code[i] -= +n[j];
      if(j === n.length - 1) j = 0;
      else j++;
      res.push(dict[code[i]]);
    }
    return res.join('');
  }
  