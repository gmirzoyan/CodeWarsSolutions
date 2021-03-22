//https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript

function solution(fullText, searchText){
    return fullText.split(searchText).length - 1;
}

console.log(solution('abc','b'));