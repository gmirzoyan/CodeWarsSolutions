
function noonerize(numbers) {
    if (numbers[0] === numbers[1]) return 0;
    else if(typeof(numbers[0])  !== 'number' || typeof(numbers[1])  !== 'number') return 'invalid array';
    numbers = numbers.map(el => String(el));
    let first = numbers[1][0] + numbers[0].slice(1);
    let second = numbers[0][0] + numbers[1].slice(1);
    return +first < +second ? (+first - +second) * (-1) : +first - +second; 
  }