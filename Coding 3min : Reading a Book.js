
function sc(words){
    let res = {};
    let arr = words.toLowerCase().replace(/[!.:'=()/<>#,]/g, '').split(' ');
    for (let el of arr) {
      if (res[el]) res[el]++;
      else res[el] = 1;
    }
    let l = Object.keys(res).map(el => el.length).reduce((acc, cur) => acc + cur);
    let w = Object.values(res).filter(el => el > 1).map(el => +el - 1);
    if (w.length > 0) w = w.reduce((acc, cur) => acc + cur); else w = 0;
    return w + l;
  }
  