
function password(str) {
    if (str.length < 8) return false;
     let upper = false;
     let lower = false;
     let num = false;
     for (let el of str) {
       if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(el)) upper = true;
       if ("abcdefghijklmnopqrstuvwxyz".includes(el)) lower = true;
       if ("1234567890".includes(el)) num = true;
     }
     return upper && lower && num;
   }