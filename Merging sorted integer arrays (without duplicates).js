
//1.
function mergeArrays(a, b) {
    let res = a.concat(b).sort((a, b) => a - b);
    return res.filter((el, i) => res.indexOf(el) === i);
  }

  //2.
  function mergeArrays(a, b) {
    return [...new Set (a.concat(b).sort((a, b) => a - b))];
  }