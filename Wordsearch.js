
//1.
  function wordSearch(word, text) {
    if(word.includes('.')) return false;
   return  text.replace(",", "").split(" ").includes(word);
  }

//2.
  function wordSearch(word, text){
    let arr = text.split(' ');
    if (word.split(' ').length > 1 || word.includes('.')) return false;
    if(text.includes(word)) return true;
    else return false;
  }
  