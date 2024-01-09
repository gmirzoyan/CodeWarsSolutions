
//1.
function seaSick(x){
    let count = 0;
    for(let i = 0; i < x.length - 1 ; i++) {
       if(x[i] !== x[i + 1]) count++;
    }
  return (count * 100) / x.length > 20 ? "Throw Up" : 'No Problem';
}

//2.
function seaSick(x){
    let changes = 0;
       for (let i = 1; i < x.length; i++) {
           if (x[i] !== x[i - 1]) changes++;
       }
    let perc = changes / x.length;
    return perc > 0.2 ? "Throw Up" : "No Problem";
   }
   