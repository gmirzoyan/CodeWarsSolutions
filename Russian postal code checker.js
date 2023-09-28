
function zipvalidate(postcode){
    if (postcode.length === 0 || postcode.length !== 6 || '05789'.includes(postcode[0])) return false;
     let code = postcode.split('').filter(el => '0123456789'.includes(el)).join('');
    return code.length === postcode.length;
   }