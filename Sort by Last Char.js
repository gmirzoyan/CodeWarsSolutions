
function last(x){
    let res = x.split(' ');
    return res.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }
  