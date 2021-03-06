//https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win){
    let count = 0;
    for (let el of ticket) {
        for (let i = 0; i < el[0].length; i++) {
            if (el[0].charCodeAt(i) === el[1]) count++;
        }
    }
    if (count >= win) {
        return 'Winner!';
    }
    return "Loser!";
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));