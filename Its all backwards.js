
function flipper(stringArr){
    let res = [];
    let arr = stringArr.join(' ').split(' ').reverse();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 1) res.push(arr[i].toLowerCase().slice(0, -1) + arr[i].slice(-1).toUpperCase());
      else res.push(arr[i]);
    }
    return res.join(' ');
  }
  