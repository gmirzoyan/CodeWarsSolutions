
function compare(s1, s2) {
    if (s1 === null) s1 = '';
    if (s2 === null) s2 = '';
    let str1 = s1.split('').filter(el => el.match(/[a-zA-Z]/)).join('');
    if (str1.length === s1.length) s1 = s1.toUpperCase();
    else s1 = '';
    let str2 = s2.split('').filter(el => el.match(/[a-zA-Z]/)).join('');
    if (str2.length === s2.length) s2 = s2.toUpperCase();
    else s2 = '';
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < s1.length; i++) {
      sum1 += +s1.charCodeAt(i);
    }
    for (let j = 0; j < s2.length; j++) {
      sum2 += +s2.charCodeAt(j);
    }
    return sum1 === sum2;
  }