//https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript

function tailSwap(arr) {
    let first = arr[0].slice(0, arr[0].indexOf(':'));
    let first1 = arr[1].slice(0, arr[1].indexOf(':'));
    let last = arr[0].slice(arr[0].indexOf(':'));
    let last1 = arr[1].slice(arr[1].indexOf(':'));
    return [first +  last1, first1 + last];
}

console.log(tailSwap(['a:12345', '777:xyz']));