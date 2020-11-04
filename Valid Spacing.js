//https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/python

function validSpacing(s) {
    if (s[0] === " " || s[s.length - 1] === " " || s === " " || s.includes("  ")) return false;
    else return true;
}

console.log(validSpacing('Hello world'));