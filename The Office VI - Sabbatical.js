//https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript

function sabb(s, val, happiness){
    let letters = 0;
    for (let el of s) {
        if ('sabbatical'.includes(el)) letters++;
    }
    if (val + happiness + letters > 22) return 'Sabbatical! Boom!';
    else return 'Back to your desk, boy.';
}

console.log(sabb('Can I have a sabbatical?', 5, 5));