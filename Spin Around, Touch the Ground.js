
function spinAround(turns) {
    let count = 0;
     for (let el of turns) {
       if (el === 'right') count++;
       else count--;
     }
     return Math.trunc(Math.abs(count) / 4);
   }