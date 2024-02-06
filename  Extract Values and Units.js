
//1.
function valAndUnits(s) {
    let v = parseFloat(s);
    return {val: v, units: s.replace(v, '').trim()}
  }

  //2.
  function valAndUnits(s) {
    let res = [];
    let r = [];
    let c = "-0123456789.";
    for (let el of s) {
      if (c.includes(el)) res.push(el);
      else r.push(el);
    }
    res = +res.join('');
    r = r.join('').trim();
    return {val: res, units: r}
  }
  