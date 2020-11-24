//https://www.codewars.com/kata/5aa39ba75084d7cf45000008/train/java

function solve(n){
    let res = ['0', '01'];

    for (let i = 1; i < n; i++) {
        res.push(res[i] + res[i - 1]);
    }
    return res[n];
}

// or
// function solve(n){
//     let f0 = "0";
//     let f1 = "01";
//     let temp = "";
//     if (n === 0) return "0";
//     for (let i = 1; i <= n; i++) {
//         temp = f1;
//         f1 += f0;
//         f0 = temp;
//     }
//     return temp;
//}

console.log(solve(5));