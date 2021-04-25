//https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript

function searchNames( logins ){
    return logins.filter(el => el[0].endsWith("_"));
}

console.log(searchNames( [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ] ));