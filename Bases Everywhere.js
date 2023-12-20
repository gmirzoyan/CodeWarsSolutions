
function baseFinder(seq){
    let uniques = [...new Set(seq.join('').split(''))];
    return uniques.length; 
   } 
   