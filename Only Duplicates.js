// Only Duplicates
// https://www.codewars.com/kata/5a1dc4baffe75f270200006b

function onlyDuplicates(str) {
    let s = str.split('');
    return s.filter((el) => s.indexOf(el) !== s.lastIndexOf(el)).join('');
}

