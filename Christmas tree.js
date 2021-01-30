//https://www.codewars.com/kata/52755006cc238fcae70000ed/train/javascript

function christmasTree(height) {
    let res = '';
    let row = height + (height-1);
    let inrow = 1;
    for (let i = 0; i < height; i++) {
        let spaces = (row-inrow)/2;
        for (let j = 0; j < spaces; j++) {
            res += ' ';
        }
        for (let j = 0; j < inrow; j++) {
            res += '*';
        }
        for (let j = 0; j < spaces; j++) {
            res += ' ';
        }
        inrow +=2;
        if(i !== height-1) res += '\n';
    }
    return res;
}

console.log(christmasTree(5));