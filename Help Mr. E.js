
//1.
function evenator(str) {
    let res = str.replace(/[.,?!_]/gi, '').split(' ');
    for (let i = 0; i < res.length; i++) {
      res[i].length & 2 !== 0 ? res[i] = res[i] + res[i].slice(-1) : res[i];
    }
    return res.join(' ');
  }

  //2.
  function evenator(str) {
    let res = str.replace(/[\.,?!_]/gi, '').split(' ');
    for (let i = 0; i < res.length; i++) {
      if (res[i].length & 2 !== 0) res[i] = res[i] + res[i].slice(-1);
    }
    return res.join(' ');
  }
  