
function reverseMiddle(array) {
    let m = array.length / 2;
    return array.slice(m - 1, -m + 1).reverse();
  }
  