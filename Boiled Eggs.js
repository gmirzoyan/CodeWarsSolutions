//https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

function cookingTime(eggs) {
    if (eggs === 0) return 0;
    if (eggs % 8 !== 0) return Math.ceil(eggs / 8) * 5;
    return eggs / 8 * 5;
}

console.log(cookingTime(5));