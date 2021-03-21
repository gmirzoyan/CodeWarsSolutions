//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === ':)' || arr[i] === ';)' || arr[i] === ';~)' || arr[i] === ':~)' || arr[i] === ';-)' || arr[i] === ':-)' || arr[i] === ':D' || arr[i] === ';D' || arr[i] === ':-D' || arr[i] === ';-D' || arr[i] === ':~D' || arr[i] === ';~D') count++;
    }
    return count;
}

console.log(countSmileys([':D',':~)',';~D',':)']));