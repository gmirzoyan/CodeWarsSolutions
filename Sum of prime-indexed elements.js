//https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

  function total(arr){
  let res = [];
  if (arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++) {
     if (isPrime(i)) res.push(arr[i]);
    }
  return res.reduce((acc, cur) => acc + cur);
}
