
function sortByHeight(a) {
    let r = a.filter(el => el !== -1).sort((a, b) => a - b);
    return a.map(el => (el === -1 ? el : r.shift()));
  }
  