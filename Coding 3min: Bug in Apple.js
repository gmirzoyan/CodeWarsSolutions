
function sc(apple){
    let res = [];
     for (let i = 0; i < apple.length; i++) {
       for (let j = 0; j < apple[i].length; j++) {
         if (apple[i][j] === "B") res.push(i, j);
       }
     }
     return res;
   }