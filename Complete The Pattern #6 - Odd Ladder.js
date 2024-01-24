
function pattern(n){
    let res = '';
     for (let i = 0; i <= n; i++) {
       if (i % 2 !== 0) res += i.toString().repeat(i) + '\n';
     }
     return res.trim();
   }
   