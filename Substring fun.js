
function nthChar(words){
    let res = [];
    for (let i = 0; i < words.length; i++) {
      res.push(words[i][i]);
    }
    return res.join('');
  }
  