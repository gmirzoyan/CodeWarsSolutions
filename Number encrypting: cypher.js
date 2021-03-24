//https://www.codewars.com/kata/57aa3927e298a757820000a8/train/javascript

function cypher(string) {
    return string.replace(/[Il]/g, '1')
        .replace(/[Rz]/g, '2')
        .replace(/[Ee]/g, '3')
        .replace(/[Aa]/g, '4')
        .replace(/[Ss]/g, '5')
        .replace(/[Gb]/g, '6')
        .replace(/[Tt]/g, '7')
        .replace(/[B]/g, '8')
        .replace(/[g]/g, '9')
        .replace(/[Oo]/g, '0');
}

console.log(cypher("Hello World"));