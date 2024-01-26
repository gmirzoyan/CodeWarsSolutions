
//1.
function countzero(s){
    let oneZero = "abdegopq069DOPQR";
    let twoZero = "%&B8";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" && s[i + 1] === ')') count++;
      if (oneZero.includes(s[i])) count++;
      if (twoZero.includes(s[i])) count += 2;
    }
    return count;
  }

  //2.
  function countzero(s){
    let countBraces = s.split('()').length - 1;
    let oneZero = "abdegopq069DOPQR";
    let twoZero = "%&B8";
    let count = 0;
    for (let el of s) {
      if (oneZero.includes(el)) count++;
      if (twoZero.includes(el)) count += 2;
    }
    return count + countBraces;
  }
  
  