//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript

function getAges(sum,difference){
    let age1 = (sum - difference) / 2;
    let age2 = sum - age1;
    if(sum < 0 || difference < 0 || age1 < 0 || age2 < 0) return null;
    if(age1 > age2) return [age1, age2];
    else return [age2, age1];
}

console.log(getAges(24,4));

