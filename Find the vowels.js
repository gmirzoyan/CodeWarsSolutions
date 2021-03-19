//https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word){
    let w =  word.toLowerCase();
    let vowelInd = [];
    for (let i = 0; i < w.length; i++) {
        if ("aoueiy".includes(w[i])) vowelInd.push(i + 1);
    }
    return vowelInd;
}

console.log(vowelIndices("apple"));