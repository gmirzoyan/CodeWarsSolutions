//https://www.codewars.com/kata/5c563cb78dac1951c2d60f01/train/javascript

function passTheDoorMan (word){
    let doubleLetter = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i + 1]) doubleLetter = word[i];
    }
    let position = alphabet.indexOf(doubleLetter) + 1;
    return position * 3;
}

console.log(passTheDoorMan ("apple"));