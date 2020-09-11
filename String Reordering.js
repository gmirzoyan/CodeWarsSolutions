//https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript



function sentence(List) {
    return List.sort((a,b) => Object.keys(a) - Object.keys(b)).map(a => Object.values(a)).join(" ");
}


console.log(sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]));