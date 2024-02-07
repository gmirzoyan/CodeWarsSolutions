
function smallWordHelper(sentence){
    let arr = sentence.split(' ');
    let res = [];
    for (let el of arr) {
      if (el.length <= 3) res.push(el.toUpperCase());
      else if (el.length >= 4) res.push(el.split('').filter(el => !'aoueiAOUEI'.includes(el)).join(''));
      else res.push(el);
    }
    return res.join(' ');
  }
  