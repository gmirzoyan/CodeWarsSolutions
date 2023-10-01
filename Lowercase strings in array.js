
//1.

function arrayLowerCase(arr) {
    let res = [];
    for (let el of arr) {
      if (typeof el === 'string') res.push(el.toLowerCase());
      else res.push(el);
    }
    return res;
  }

  //2.

  const arrayLowerCase = arr => arr.map(el => typeof el === 'string' ? el.toLowerCase() : el);