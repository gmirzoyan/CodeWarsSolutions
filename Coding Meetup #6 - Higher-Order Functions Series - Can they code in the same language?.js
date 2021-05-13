//https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

function isSameLanguage(list) {
    let lang = list[0].language;
    let res = list.filter(el => el.language === lang);
    return res.length === list.length;
}

console.log(isSameLanguage([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
]));