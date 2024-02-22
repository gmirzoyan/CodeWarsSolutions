
//1.
function amountOfPages(summary){
    let num = 1;
    while (String(num).length <= summary) {
          summary -= String(num).length;
          num++;
      }
    return num - 1;
  }

  //2.
  function amountOfPages(summary){
    let res = '';
    for(let i = 1; i <= summary ; i++){
      res += i;
     if(res.length === summary) return i;
    }
  }
  