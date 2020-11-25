//https://www.codewars.com/kata/5b37a50642b27ebf2e000010/train/javascript

function sumOfABeach(beach) {
    let str = beach.toLowerCase();
    let count = 0;;
    for(let i=0; i<str.length; i++){
        let subStr = str.substring(i, str.length);
        if (subStr.indexOf('sand') === 0) count++;
        if (subStr.indexOf("water") === 0) count++;
        if (subStr.indexOf("fish") === 0) count++;
        if (subStr.indexOf("sun") === 0) count++;
    }

    return count;
}

console.log(sumOfABeach("gOfIshsunesunFiSh"));