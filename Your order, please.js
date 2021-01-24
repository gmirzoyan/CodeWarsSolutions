//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
    if(words.length === 0) return '';
    let arrWords = words.split(' ');
    let mapWords = {};
    for(let word of arrWords){
        for(let ch of word){
            if('123456789'.includes(ch)){
                mapWords[ch] = word
            }
        }
    }
    let output = Object.values(mapWords).reduce((w, acc) => w+' '+acc);
    return output;
}

console.log(order("is2 Thi1s T4est 3a"));