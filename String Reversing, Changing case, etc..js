//https://www.codewars.com/kata/58305403aeb69a460b00019a/train/javascript

function reverseAndMirror(s1,s2) {
    let res1 = s2.split('').reverse();
    for (let i = 0; i < res1.length; i++) {
        if (res1[i] === res1[i].toLowerCase()) res1[i] = res1[i].toUpperCase();
        else if (res1[i] === res1[i].toUpperCase()) res1[i] = res1[i].toLowerCase();
    }
    let res2 = s1.split('').reverse();
    for (let i = 0; i < res2.length; i++) {
        if (res2[i] === res2[i].toLowerCase()) res2[i] = res2[i].toUpperCase();
        else if (res2[i] === res2[i].toUpperCase()) res2[i] = res2[i].toLowerCase();
    }
    res1 = res1.join('');
    res2 = res2.join('');
    let res3 = res2.split('').reverse().join('');
    return res1 + '@@@' + res2 + res3;
}

console.log(reverseAndMirror("FizZ","buZZ"));