//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript


function generateShape(integer){
    let line = ('+'.repeat(integer) + '\n').repeat(integer);
    return line.slice(0, -1);
}

console.log(generateShape(5));