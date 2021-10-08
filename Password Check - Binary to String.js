//https://www.codewars.com/kata/5a731b36e19d14400f000c19/train/javascript

function decodePass( passArr, bin ){
    let arr = bin.split(' ');
    let res = arr.map (el => String.fromCharCode(parseInt(el, 2)));
    if (passArr.includes(res.join(''))) return res.join('');
    else return false;
}

console.log(decodePass(['password123', 'admin', 'admin1'],
    '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'));