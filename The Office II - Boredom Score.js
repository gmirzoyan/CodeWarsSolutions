//https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

function boredom(staff){
    let sum = 0;
    let scores = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25
    }
    let scoresKeys = Object.entries(scores);
    let staffRes = Object.values(staff);
    for(let i = 0; i < scoresKeys.length; i++){
        for(let score of staffRes){
            if(score === scoresKeys[i][0]) sum += scoresKeys[i][1];
        }
    }
    if(sum <= 80) return 'kill me now';
    if(sum < 100 && sum > 80) return 'i can handle this';
    if(sum >= 100) return 'party time!!';
}

console.log(boredom({ tim: 'accounts', jim: 'accounts',
    randy: 'pissing about', sandy: 'finance', andy: 'change',
    katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
    john: 'retail', mr: 'pissing about' }));