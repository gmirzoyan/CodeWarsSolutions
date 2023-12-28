
function esrever(str){
    let res = str.slice(0, -1).split(' ').reverse().map(el => el.split('').reverse().join('')).join(' ');
    return res + str.slice(-1);
   }
   