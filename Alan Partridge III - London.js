//https://www.codewars.com/kata/580a41b6d6df740d6100030c/train/javascript

function alan(x){
    let stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
    return stations.every(el => x.includes(el)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
}

console.log(alan(['London', 'Norwich']));