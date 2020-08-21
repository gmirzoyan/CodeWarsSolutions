//https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

function checkThreeAndTwo(array) {
    const mapChars = {}
    for(ch of array){
        if(mapChars[ch] === undefined) mapChars[ch] = 1;
        else mapChars[ch]++;
    }
    let nums = Object.values(mapChars)
    if(nums[0] === 3 && nums[1] === 2 || nums[0] === 2 && nums[1] === 3){
        return true;
    }
    return false;
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));