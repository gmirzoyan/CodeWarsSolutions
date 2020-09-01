//https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript

function replaceCommon(string, letter) {
    let str = string.replace(/\s/g, '');
    let obj = {};
    for (let i = 0; i < str.length; i++){
        if (obj[str[i]] === undefined) obj[str[i]] = 1;
        else obj[str[i]]++;
    }
    let chars = Object.values(obj);
    let max = Math.max(...chars);
    const freqChars = [];
    const keys = Object.keys(obj);
    for(let i=0; i<keys.length; i++){
        let key = keys[i];
        if(obj[key] === max){
            freqChars.push(key);
        }
    }
    let ch = freqChars[0]
    var regexp = new RegExp(ch, "g");
    let res = string.replace(regexp, letter);
    return res;
}
console.log(replaceCommon('my mom loves me as never did', 't'));