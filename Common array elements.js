
function common (arr1, arr2 ,arr3) {
    let res =[];
    for (let i = 0; i < arr1.length; i++) {
      let el = arr1[i];
      if (arr2.includes(el) && arr3.includes(el)) {
        arr2.splice(arr2.indexOf(el), 1);
        arr3.splice(arr3.indexOf(el), 1);
        res.push(el);
      }
     } 
      return res.reduce((acc, cur) => acc + cur, 0);
    }
    