
function sectSort(array, start, length) {
    let first = array.slice(0, start);
    let last = array.slice(start);
    if (!length) last = last.sort((a, b) => a - b);
    else last = last.slice(0, length).sort((a, b) => a - b).concat(last.slice(length));
    return first.concat(last);
  }
  