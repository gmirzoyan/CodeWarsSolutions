//https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript

function reverseVowels(str) {
    const res = str.split('')
    let vowels = []
    res.map((el, i) => {
        if ('aioeuAIOEU'.includes(el)) {
            vowels.push(el);
        }
    })
    res.map((el, i) => {
        if ('aioeuAIOEU'.includes(el)) {
            res[i] = vowels.pop()
        }
    })

    return res.join('')
}

console.log(reverseVowels("Hello!"));