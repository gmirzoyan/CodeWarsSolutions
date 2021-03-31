//https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(names){
    if (names.length === 0) return '';
    let res = [];
    for (let el of names) {
        res.push(el.name);
    }
    let first = res.slice(0, res.length - 1).join(', ');
    let last = res.slice(res.length - 1).join('');
    return res.length === 1 ? res[0] : first + ' & ' + last;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));