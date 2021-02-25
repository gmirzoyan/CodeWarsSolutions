//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

let reverse = function(array) {
    let res = [];
    for (let el of array) {
        res.unshift(el);
    }
    return res;
}

//or

// reverse = function(array) {
//     return array.reduce((a, b) => [b, ...a], []);
// }

console.log(reverse([1,2,3]));
