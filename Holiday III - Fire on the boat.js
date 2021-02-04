//https://www.codewars.com/kata/57e8fba2f11c647abc000944/train/javascript

//1.
function fireFight(s){
    let res = s.split(' ');
    let result = [];
    for (let el of res) {
        if (el === 'Fire') result.push('~~');
        else result.push(el);
    }
    return result.join(' ');
}

console.log(fireFight("Mast Deck Engine Water Fire"));

//2.
function fireFight(s){
    return s.replace(/Fire/g, '~~');
}

console.log(fireFight("Mast Deck Engine Water Fire"));