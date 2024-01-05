
function cantBeatSoJoin(numbers) {
    return numbers.sort((a, b) => b.reduce((acc, curr) => acc + curr, 0) - a.reduce((acc, curr) => acc + curr, 0)).flat();
  }
  