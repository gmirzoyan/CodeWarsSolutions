//https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript

function getStrings(city){
    let c = city.replace(/\s/g, '');
    let res = {};
    for (let el of c.toLowerCase()){
        if(res[el] === undefined) res[el] = '*';
        else res[el] += '*'
    }
    let ent = Object.entries(res);
    let t = ent.map(el => el.join(':'));
    return t.join(',');
}

console.log(getStrings("Chicago"));