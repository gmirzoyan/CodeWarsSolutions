//https://www.codewars.com/kata/530017aac7c0f49926000084/train/javascript

function pluck(objs, name) {
    let obj = [];
    for (let el of objs) {
        if (Object.keys(el).includes(name)) obj.push(el[name]);
        else obj.push(undefined);
    }
    return obj
}

console.log(pluck([{a:1}, {a:2}], 'a'), [1,2]);