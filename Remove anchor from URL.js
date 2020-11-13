//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url){
    let arr = [];
    for (let i = 0; i < url.length; i++) {
        if (url[i] !== "#") arr.push(url[i]);
        else break;
    }
    return arr.join('');
}

console.log(removeUrlAnchor('www.codewars.com#about'));