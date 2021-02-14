//https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

function dup(s) {
    let result = [];
    for (let word of s) {
        let w = [];
        for (let i = 0; i < word.length; i++) {
            if (word[i] === word[i + 1]) continue;
            else w.push(word[i]) ;
        }
        result.push(w.join(''))
    }
    return result;
}

console.log(dup(["abracadabra","allottee","assessee"]));