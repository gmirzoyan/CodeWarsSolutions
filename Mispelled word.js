//https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript

let mispelled = function(word1, word2){

    if(word1.length > word2.length){
        w1 = word1;
        w2 = word2;
    } else {
        w1 = word2;
        w2 = word1;
    }
    let count = 0;
    for(let i=0; i<w1.length; i++){
        if(w2.includes(w1[i])) count++;
    }
    if(count === w1.length || count === w1.length-1) return true;
    else return false;
}

console.log(mispelled('versed', 'xersed'));