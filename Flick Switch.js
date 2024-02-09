
function flickSwitch(arr){
    let res = [];
    let flag = false;
    for (let el of arr) {
      if (el === 'flick') {
        flag = !flag;
      }
      res.push(!flag);
    }
    return res;
  }
  