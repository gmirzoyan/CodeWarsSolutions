
function quicksum(packet){
    let res = 0;
    let alph = '5ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < packet.length; i++) {
      if (alph.includes(packet[i])) res += (i + 1) * alph.indexOf(packet[i]);
      else if (packet[i] === packet[i].toLowerCase() && packet[i] !== ' ') return 0;
      else res += 0;
    }
    return res;
  }
  