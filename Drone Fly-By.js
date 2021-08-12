//https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    if (drone.length >= lamps.length) return 'o'.repeat(lamps.length);
    let count1 = 'o'.repeat(drone.length);
    let count2 = 'x'.repeat(lamps.length - drone.length);
    return count1 + count2;
}

console.log(flyBy('xxxxxx', '====T'));