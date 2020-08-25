//https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/train/javascript

function findChildren(santasList, children) {
    let arr = [];
    for (let el of children){
        for (let name of santasList){
            if (el === name) arr.push(name);
        }
    }
    let arr1 = arr.filter((el, i) => i === arr.indexOf(el));
    return arr1.sort();
}

console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]))