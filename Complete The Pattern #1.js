
//1.
function pattern(n){
    if (n < 1) return '';
     let res = '';
    for (let i = 1; i <= n; i++) {
       for (let j = 1; j <= i; j++) {
         res += i;
       }
       if (i < n) res += '\n'; 
     }
   return res;
   }

   //2.
   const pattern = n => {
    let res = [];
    for (let i = 1; i <= n; i++){
      res.push(i.toString().repeat(i));
    }
    return res.join('\n');
   }
   