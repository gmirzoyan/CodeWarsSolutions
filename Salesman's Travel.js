//https://www.codewars.com/kata/56af1a20509ce5b9b000001e/train/javascript

function travel(r, zipcode) {
    let resLine = [];
    let data = [];
    let res = r.split(',');
    for (let el of res) {
        if (el.split(' ').slice(-2).join(' ') === zipcode) data.push(el.split(' '));
    }
    for (let i = 0; i <  data.length; i++) {
        resLine.push(data[i].slice(1, data[i].length - 2));
        resLine.push(data[i].slice(0, 1));
    }
    let str = resLine.filter((el, i) => i % 2 === 0).map(el => el.join(' '));
    let house = resLine.filter((el, i) => i % 2 !== 0).map(Number);
    return zipcode + ':' + str.join(',') + '/' + house.join(',');
}
