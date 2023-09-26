

function sumFactorial(arr){
    let factSum = 0;
    for (let el of arr) {
      let fact = 1;
      for (let i = 1; i <= el; i++) {
          fact *= i;
      }
      factSum += fact;
    }
    return factSum;
  }