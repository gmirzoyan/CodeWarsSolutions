//https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

function myLanguages(results) {
    let arr = [];
    let r = Object.entries(results);
    let res = r.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < res.length; i++){
        if (res[i][1] >= 60) arr.push(res[i][0])
    }
    return arr;

}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));