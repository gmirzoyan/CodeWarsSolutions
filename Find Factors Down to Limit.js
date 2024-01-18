
function factors(integer, limit){
    let res = [];
    for(let i = limit; i <= integer; i++) {
       if(integer % i === 0) res.push(i);
    }
    return res;
  }
   