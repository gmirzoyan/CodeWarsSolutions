function exampleSort(arr,exampleArr){
    let res = [];
    for (let i = 0; i < exampleArr.length; i++) {
      for (let j = 0; j < arr.length; j++){
        if (arr[j] === exampleArr[i])
          res.push(arr[j]);
        }
      }
    return res;
  }

  //2.
  function exampleSort(arr,exampleArr){
    return arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
   }