
function move_zeros(arrNum, isRight){
    let arr = arrNum.filter(el => el !== 0);
    let zeros = arrNum.filter(el => el === 0);
    if (isRight === false) return zeros.concat(arr);
    else return arr.concat(zeros);
  }