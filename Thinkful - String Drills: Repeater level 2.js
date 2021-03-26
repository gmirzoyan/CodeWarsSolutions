//https://www.codewars.com/kata/585a1f0945376c112a00019a/train/javascript

//1.

function repeater(string, n) {
    let res = "";
    for (let i = 0; i < n; i++) {
        res += string;
    }
    return `"${string}" repeated ${n} times is: "${res}"`;
}

//2.

// function repeater(string, n) {
//     let res = string.repeat(n);
//     return `"${string}" repeated ${n} times is: "${res}"`;
// }

console.log(repeater('yo', 3));