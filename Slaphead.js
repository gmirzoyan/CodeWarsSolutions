//https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript

function bald(x){
    let r = x.split('').map(el => "-").join('');
    let hairs = 0;
    let res = '';
    for (let el of x) {
        if (el === "/") hairs++;
    }
    if (hairs === 0) res = "Clean!";
    if (hairs === 1) res = "Unicorn!";
    if (hairs === 2) res =  "Homer!";
    if (hairs >= 3 && hairs <= 5) res = "Careless!";
    if (hairs > 5) res = "Hobo!";
    return [r, res];
}

console.log(bald(x));