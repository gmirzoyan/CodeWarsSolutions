//https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

function moveVowel(input) {
    let res = input.split('').filter(el => !"aoieu".includes(el)).join('');
    let res1 = input.split('').filter(el => "aoieu".includes(el)).join('');
    return res.concat(res1);
}

console.log(moveVowel("apple"));