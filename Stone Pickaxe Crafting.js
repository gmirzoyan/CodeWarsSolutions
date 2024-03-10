
function stonePick(arr) {
    let countCobblestones = 0;
    let countSticks = 0;
    let countWood = 0;
    let count = 0;
    for (let el of arr) {
      if (el === "Cobblestone") countCobblestones++;
      if (el === "Sticks") countSticks++;
      if (el === "Wood") countWood++;
    }
   countSticks += 4 * countWood;
    let countPickaxes = Math.min(
      Math.floor(countCobblestones / 3),
      Math.floor(countSticks / 2)
    )
    return countPickaxes;
  }
  