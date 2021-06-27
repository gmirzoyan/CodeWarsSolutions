//https://www.codewars.com/kata/589f8bb8423ac3576a00000b/train/javascript

function nonsense(str) {
    if (str[str.length - 1] === '.') str = str.slice(0, -1);
    let newStr = str.replace(/0/gi, 'a').replace(/1/gi, 'e').replace(/2/gi, 'i').replace(/3/gi, 'o').replace(/4/gi, 'u')
    newStr = newStr.toLowerCase().replace(/i /gi, 'I ').replace(/trex/gi, '').replace(/raptor/gi, '');
    return newStr[0].toUpperCase() + newStr.slice(1) + '.';
}

console.log(nonsense("h1Ll3 Wtrex3raptorRLD"));