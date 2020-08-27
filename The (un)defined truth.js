//https://www.codewars.com/kata/5a3e44f8b6cfd785c300008c/train/javascript

//1.

function output() {
    return (typeof $).slice([output].length).slice([output].length);
}

//2.

function output() {
    return (typeof $).slice([output, output].length);
}

console.log(output());