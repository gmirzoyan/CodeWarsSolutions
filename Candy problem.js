
function candies(kids){
    if (kids.length < 2) return -1;
    let max = Math.max(...kids);
    let res = [];
    for (let el of kids) {
      if (el !== max) res.push(max - el);
    }
    return res.length ? res.reduce((acc, cur) => acc + cur) : 0;
  }
  