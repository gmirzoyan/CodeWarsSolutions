
//1.

function convert(number){
    let res = [];
        for (let i = 0; i < number.length; i += 2) {
          res.push(+number.substring(i, i + 2));
      }
        return res.map(el => String.fromCharCode(el)).join('');
  }

  //2.

  function convert(number) {
    let res = '';
    for(let i = 1; i < number.length; i += 2) {
      res += String.fromCharCode(number[i - 1] + number[i]);
    }
    return res;
  }