//https://www.codewars.com/kata/5b203de891c7469b520000b4/train/javascript

function playerManager(players) {
    let arr = [], res = [], player = [], contact = [];
    if (players) arr = players.split(', ');
    for (let el of arr) {
        if (isNaN(+el)) player.push(el);
        else contact.push(+el);
    }
    for (let i = 0; i < player.length; i++) {
        res.push({player: player[i], contact: contact[i]});
    }
    return res;
}

console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827"));