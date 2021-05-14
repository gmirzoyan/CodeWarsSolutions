//https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript

function isLanguageDiverse(list) {
    let jsCount = 0;
    let pCount = 0;
    let rCount = 0;
    for (let el of list) {
        if (el.language === 'JavaScript') jsCount++;
        if (el.language === 'Python') pCount++;
        if (el.language === 'Ruby') rCount++;
    }
    if (jsCount / pCount > 2 || jsCount / rCount > 2) return false;
    if (pCount / jsCount > 2 || pCount / rCount > 2) return false;
    if (rCount / pCount > 2 || rCount / jsCount > 2) return false;
    else return true;
}

console.log(isLanguageDiverse([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]));