//https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript

//1.
function sortVowels(s){
    if (typeof s !== 'string') return '';
    let res = [];
    for (let el of s) {
        if ('aoueiAOUEI'.includes(el)) res.push('|' + el + '\n');
        else res.push(el + '|' + '\n');
    }
    return res.join('').slice(0, -1);
}

//2.
// function sortVowels(s){
//     if (typeof s !== 'string') return '';
//     let res = [];
//     for (let el of s) {
//         if ('aoueiAOUEI'.includes(el)) res.push('|' + el);
//         else res.push(el + '|');
//     }
//     return res.join('\n');
// }

console.log(sortVowels('Codewars'));