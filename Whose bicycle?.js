//https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript

function whoseBicycle(diary1, diary2, diary3) {
    let first = Object.values(diary1).reduce((acc, cur) => acc + cur);
    let second = Object.values(diary2).reduce((acc, cur) => acc + cur);
    let third = Object.values(diary3).reduce((acc, cur) => acc + cur);
    if (first > second && first > third) return 'I need to buy a bicycle for my first son.'
    if (second > first && second > third) return 'I need to buy a bicycle for my second son.'
    if (third > first && third > second) return 'I need to buy a bicycle for my third son.'
    if (first === third && second === third) return  'I need to buy a bicycle for my third son.'
    if (first === second) return  'I need to buy a bicycle for my second son.'
    if (second === third) return  'I need to buy a bicycle for my third son.'
    if (first === third) return  'I need to buy a bicycle for my third son.'
}

