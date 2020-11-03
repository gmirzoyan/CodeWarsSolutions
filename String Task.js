//https://www.codewars.com/kata/598ab63c7367483c890000f4/train/javascript

function stringTask(s){
    if (s.length === 1 && "aoyeui".includes(s[0])) return "";
    let arr = [];
    for (let el of s.toLowerCase()) {
        if (!"aoyeui".includes(el)) arr.push(el);
    }
    return "." + arr.join(".");
}

console.log(stringTask('Codewars'));