
function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays === undefined || arrayOfArrays.length === 0 || arrayOfArrays.some(el => el === null || el === undefined || el.length === 0)) return 0;
    let sorted = arrayOfArrays.map(el => el.length).sort();
    let minNum = Math.min(...sorted);
    let maxNum = Math.max(...sorted);
    let res = [];
    for (let i = minNum; i <= maxNum; i++) {
      res.push(i);
    }
    return res.filter(item => !sorted.includes(item))[0];
  }
  