//https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/javascript


function dative(word) {
    let res = '';
    for(let el of word){
        if('eéiíöőüű'.includes(el)) res = word + 'nek';
        if('aáoóuú'.includes(el)) res = word + 'nak';
    }
    return res;
}

console.log(dative("ablak"));

