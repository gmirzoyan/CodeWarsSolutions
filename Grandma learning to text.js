//https://www.codewars.com/kata/5a043fbef3251a5a2b0002b0/train/javascript

function textin(s){
    return s.replace(/too/gi, "2").replace(/two/gi, "2").replace(/to/gi, "2");
}

console.log(textin('I love to text'));