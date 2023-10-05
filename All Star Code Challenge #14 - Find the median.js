
function median(array) {
    let l = array.sort((a, b) => a - b).length / 2;
    let median = 0;
   if (array.length % 2 !== 0) median = array[Math.trunc(l)];
    else {
      let first = array[l - 1];
      let second = array[l];
      median = (first + second) / 2; 
    }
    return median;
  }