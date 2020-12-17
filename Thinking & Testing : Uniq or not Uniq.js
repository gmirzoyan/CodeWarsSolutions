//https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript

function testit(a,b){
    let arr1 = a.filter((el, i) => i === a.indexOf(el));
    let arr2 = b.filter((el, i) => i === b.indexOf(el));
    return [...arr1, ...arr2].sort((a, b) => a - b);

}

console.log(testit([1,2],[3,4]));