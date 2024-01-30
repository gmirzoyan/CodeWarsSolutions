
//1.
function solution(){
  let res = Object.values(arguments);
  let r = res.filter((el, i) => res.indexOf(el) === i);
  return res.length > r.length;
}

//2.
function solution(){
  let res = Object.values(arguments);
  let r = [...new Set(res)]
  return res.length > r.length;
}
