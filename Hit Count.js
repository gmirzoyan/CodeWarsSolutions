
function counterEffect(hitCount) {
    let result = [];
    for (let i = 0; i < hitCount.length; i++) {
      let res = [];
      for (let j = 0; j <= hitCount[i]; j++) {
        res.push(j);
      }
      result.push(res);
    }
    return result;
  }