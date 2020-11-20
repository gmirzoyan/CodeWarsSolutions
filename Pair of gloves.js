//https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

function numberOfPairs(gloves) {
    let mapGloves = {};
    let quantity = 0;
    for(let i = 0; i < gloves.length; i++){
        let color = gloves[i];
        if(mapGloves[color] === undefined) mapGloves[color] = 1;
        else mapGloves[color]++;
    }
    for(color in mapGloves){
        quantity += Math.floor(mapGloves[color]/2);
    }
    return quantity;
}

console.log(numberOfPairs(['gray','black','purple','purple','gray','black']));