//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss){
    let sum = 0;
    let count = 0;
    let res = 0;
    for (let key in meet){
        sum = sum + meet[key];
        count++;
    }
    res = ((sum + meet[boss])/count);
    if (res <= 5) return 'Get Out Now!';
    else return 'Nice Work Champ!';
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));