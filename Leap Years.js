//https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

//1.

function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) return true;
    else if (year % 400 === 0) return true;
    else return false;
}


//2.

function isLeapYear(year) {
    if (year % 4 !== 0) return false;
    else if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else return true;
}

console.log(isLeapYear(1234));