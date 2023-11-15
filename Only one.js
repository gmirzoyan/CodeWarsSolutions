
function onlyOne(...args) {
    let count = args.filter(el => el === true);
    return count.length === 1;
  }
  