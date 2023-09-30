
function minMinMax(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let dif = [];
    for (let i = min; i < max; i++) {
      if (i > min && !array.includes(i)) dif.push(i);
    }
    return [min, dif[0], max];
  }