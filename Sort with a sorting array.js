
//1.
function sort(initialArray, sortingArray) {
    return initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);
  }

//2.
  function sort(initialArray, sortingArray) {
    const res = [];
    for (let i = 0; i < sortingArray.length; i++) {
        res[sortingArray[i]] = initialArray[i];     
    }
    return res;
}

//3.
function sort(initialArray, sortingArray) {
    return [...initialArray].sort((a, b) => 
             sortingArray[initialArray.indexOf(a)] - sortingArray[initialArray.indexOf(b)]);
 }
 
