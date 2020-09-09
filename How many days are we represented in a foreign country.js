//https://www.codewars.com/kata/58e93b4706db4d24ee000096/train/javascript

function daysRepresented(trips){
    let sum = 0;
    let map = [];
    for(let i=1; i<=356; i++) map.push([false]);
    for (let trip of trips){
        for(let i=trip[0]; i<=trip[1]; i++){
            map[i-1] = true;
        }
    }
    for(let el of map){ if(el===true) sum++; }
    return sum;
}

console.log(daysRepresented([[10,15],[25,35]]));