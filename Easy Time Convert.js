//https://www.codewars.com/kata/5a084a098ba9146690000969/train/javascript

function timeConvert(num) {
    if (num === 0 || num < 0) return "00:00";
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    if (hours < 10) hours = "0" + hours.toString();
    else hours = hours.toString();
    if (minutes < 10) minutes = "0" + minutes.toString();
    else minutes = minutes.toString();
    return `${hours}:${minutes}`;
}

console.log(timeConvert(75));