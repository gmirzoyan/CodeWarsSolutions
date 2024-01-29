
function hexHash(code){
    let res = '';
    for (let i = 0; i < code.length; i++) {
      res += code.charCodeAt(i).toString(16);
    }
    res = res.split('').filter(el => +el);
    return (res.length === 0) ? 0 : +res.reduce((a, b) => +a + +b);
  }
  