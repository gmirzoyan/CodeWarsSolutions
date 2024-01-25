
function split(arr, prop) {
    let truthy = [];
    let falsey = [];
   for (let el of arr) {
      if (el[prop]) truthy.push(el);
       else falsey.push(el);
    }
    return [truthy, falsey];
  }
  