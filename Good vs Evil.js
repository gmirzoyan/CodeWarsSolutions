
function goodVsEvil(good, evil){
    let goodWorth = [1, 2, 3, 3, 4, 10];
    let evilWorth = [1, 2, 2, 2, 3, 5, 10];
    let g = good.split(' ').map(el => +el).map((el, i) => el * goodWorth[i]);
    let e = evil.split(' ').map(el => +el).map((el, i) => el * evilWorth[i]);
    let resGood = g.reduce((a, b) => a + b);
    let resEvil = e.reduce((a, b) => a + b);
    if (resGood > resEvil) return "Battle Result: Good triumphs over Evil";
    if (resEvil > resGood) return "Battle Result: Evil eradicates all trace of Good";
    else return "Battle Result: No victor on this battle field";
  }
  