
function solution(){
    let res = Object.values(arguments);
    let r = res.filter((el, i) => res.indexOf(el) === i);
    return res.length > r.length;
  }
  