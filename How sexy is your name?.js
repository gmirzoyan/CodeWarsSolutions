
function sexyName(name) {
    name = name.split(' ').join('').toUpperCase();
    let res = []; 
    for (let el of name) {
    res.push(SCORES[el]);
    }
    if (res.length === 0) return "NOT TOO SEXY";
    res = res.reduce((acc, cur) => acc + cur);
    if (res <= 60) return 'NOT TOO SEXY';
    if (res <= 300 && res >= 61) return 'PRETTY SEXY';
    if (res <= 599 && res >= 301) return 'VERY SEXY';
    if (res >= 600) return 'THE ULTIMATE SEXIEST';
  }