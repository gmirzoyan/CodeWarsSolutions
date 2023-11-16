
function checkConcatenatedSum (num, n)  {
    let number = Math.abs(num);
      let sum = String(number).split('')
        .reduce((acc, cur) => acc + parseInt(cur.repeat(n)), 0);
     return num === sum || num === -sum;
    }
    