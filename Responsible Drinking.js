//https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

function hydrate(s) {
    let res = [];
    let arr = s.split(' ').filter(el => +el);
    for (let i = 0; i < arr.length; i++){
        res.push(+arr[i]);
    }
    res = res.reduce((acc, cur) => acc + cur);
    if (res === 1) return `${res} glass of water`;
    else return `${res} glasses of water`
}

console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"))