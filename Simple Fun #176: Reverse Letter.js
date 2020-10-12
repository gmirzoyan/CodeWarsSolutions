//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript


function reverseLetter(str) {
    let letters = str.replace(/[^A-Za-z]+/g, '');
    return letters.split('').reverse().join('');
}

console.log(reverseLetter("krishan"));