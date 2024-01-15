
function isFlush(cards) {
    let arr = cards.map(el => el.slice(-1));
    let res =  [...new Set(arr)];
    return res.length === 1;
  }
  