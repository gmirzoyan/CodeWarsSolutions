//https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript

//1.
function caffeineBuzz(n){
    if (n % 3 === 0 && n % 4 === 0 && n % 2 === 0) return "CoffeeScript";
    if (n % 3 === 0 && n % 2 === 0) return "JavaScript";
    if (n % 3 === 0) return "Java";
    if (n % 3 === 0 && n % 4 === 0) return "Coffee";
    else return "mocha_missing!";
}

//2.
// function caffeineBuzz(n){
//     if (n % 12 === 0) return 'CoffeeScript';
//     if (n % 6 === 0) return 'JavaScript';
//     return n % 3 ? 'mocha_missing!':'Java';
// }

console.log(caffeineBuzz(12));