//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
    let arr = [];
    for (let i = 0; i < str.length; i = i + 2) {
        arr.push(str[i] + str[i + 1]);
    }
    let last = arr[arr.length - 1];
    if (str.length % 2 !== 0) arr[arr.length - 1] = last.replace('undefined', '_')
    return arr;
}

console.log(solution("abcdefg"));