//https://www.codewars.com/kata/57ed56657b45ef922300002b/train/java


function broken(x){
    let str = '';
    for (let el of x){
        if (el === '1') str += '0'
        if (el === '0') str += '1'
    }
    return str;
}

console.log(broken("011101"));