
function selReverse(array, length) {
    if (length <= 0) {
      return array;
    }
    let res = [];
    for (let i = 0; i < array.length; i = i + length) {
      res.push(...array.slice(i, i + length).reverse());
    }
    return res;
  } 