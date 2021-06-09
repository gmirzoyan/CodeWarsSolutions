//https://www.codewars.com/kata/6097a9f20d32c2000d0bdb98/train/javascript

function i(word) {
    let vowels = [];
    if (word.length === 0 || word[0] === 'I' || word[0] === word[0].toLowerCase()) return "Invalid word";
    for (let el of word) {
        if ('aoueiAOUEI'.includes(el)) vowels.push(el);
    }
    if (vowels.length >= word.length - vowels.length) return "Invalid word";
    return 'i' + word;
}

console.log(i('Programmer'));