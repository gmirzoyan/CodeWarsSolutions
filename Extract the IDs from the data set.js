
function extractIds(data){
    let result = [];
    let str = JSON.stringify(data);
   for (let el of str) {
     if ("1234567890".includes(el)) result.push(+el);
   }
   return result;
 }