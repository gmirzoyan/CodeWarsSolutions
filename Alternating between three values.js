//https://www.codewars.com/kata/596776fbb4f24d0d82000141/train/javascript

//Solution 1:

function f(x, cc) {
    let keys = Object.keys(cc)
    let values = Object.values(cc);
    let keyDict = {
        a: 'b',
        b: 'c',
        c: 'a'
    }
    for(let i=0; i<3; i++){
        if(x === values[i]) return cc[keyDict[keys[i]]]
    }
    return -1;
}

console.log( f( 4, { a:3, b:4, c:5 } ));



//Solution 2:

function f1(x, cc) {
    if(x === cc.a) return cc.b;
    if(x === cc.b) return cc.c;
    if(x === cc.c) return cc.a;
    return -1;
}

console.log( f1( 4, { a:3, b:4, c:5 } ));