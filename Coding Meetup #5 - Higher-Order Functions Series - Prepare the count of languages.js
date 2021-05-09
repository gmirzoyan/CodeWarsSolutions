//https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function countLanguages(list) {
    let obj = {};
    for(let i = 0; i < list.length; i++){
        let lng = list[i].language;
        if(obj[lng]) obj[lng]++;
        else obj[lng] = 1
    }
    return obj;
}

