
function findArray(arr1, arr2){
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
     res.push(arr1[arr2[i]]);
    }
    return arr1.length == 0 ? [] : res;
  }