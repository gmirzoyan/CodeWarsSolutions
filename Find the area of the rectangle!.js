//https://www.codewars.com/kata/580a0347430590220e000091/train/javascript

function area(d,l){
    if (d <= l) return "Not a rectangle";
    let area = l * Math.sqrt((d * d) - (l * l));
    return +area.toFixed(2);
}

console.log(area(5, 4));