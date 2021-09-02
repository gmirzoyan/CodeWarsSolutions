//https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(strng, arr) {
    if (strng.length === 0 || Number(strng)) return true;
    strng = strng.split('').sort().join('');
    arr = arr.map(el => el.split('').sort().join(''));
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === strng) res.push(true);
    }
    if (res.length === strng.length) return true;
    else return false;
}

console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));