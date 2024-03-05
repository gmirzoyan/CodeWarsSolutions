
function findMagic(arr){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === i) return arr[i];
     }
    return -1;
  }
  