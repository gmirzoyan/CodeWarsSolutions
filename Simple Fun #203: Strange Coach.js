
function strangeCoach(players) {
    let res = [];
    let obj = {};
    for (let i = 0; i < players.length; i++) {
      if (obj[players[i][0]] === undefined) obj[players[i][0]] = 1;
      else obj[players[i][0]]++;
    }
   for (let el in obj) {
    if (obj[el] >= 5) res.push(el);
    }
    return res.length === 0 ? 'forfeit' : res.sort().join('');
  }