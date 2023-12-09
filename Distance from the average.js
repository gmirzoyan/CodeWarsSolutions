
function distancesFromAverage(arr){
    let a = (arr.reduce((acc, cur) => acc + cur)) / arr.length;
    let res = [];
    for (let el of arr) {
      res.push(Math.round((a - el) *100) / 100);
    }
    return res;
  }
  