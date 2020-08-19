//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

let isAnagram = function(test, original) {
    let resTest = test.toLowerCase().split('').sort().join('');
    let resOriginal = original.toLowerCase().split('').sort().join('');
    if (resTest === resOriginal) return true;
    else return false;
};
console.log(isAnagram("Twoo", "WooT"));

