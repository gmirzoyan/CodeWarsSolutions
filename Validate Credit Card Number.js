
function validate(n){
    let arr = n.toString().split('');
     for (let i = 0; i < arr.length; i++) {
      if (arr.length % 2 === 0) {
        if (i % 2 === 0) arr[i] = arr[i] * 2;
        else arr[i] = arr[i];
      }
      if (arr.length % 2 !== 0) {
        if (i % 2 !== 0) arr[i] = arr[i] * 2;
        else arr[i] = arr[i];
      }
      if (arr[i] > 9) arr[i] = arr[i] - 9;
    }
    let res = arr.map(el => Number(el)).reduce((a, b) => a + b);
    return res % 10 === 0 ? true : false;
  }