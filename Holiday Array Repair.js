
function holidayCount (a1, a2){
    let first = a1.filter(Number.isInteger)[0];
    let second = a2.filter(Number.isInteger)[0];
    if (first > second) return "Right";
    else if (second > first) return "Wrong";
    else if (first === second) return "Same";
    else return "Not possible";
  }
  