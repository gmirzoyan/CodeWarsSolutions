//https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

function vaporcode(string) {
    return string.replace(/ /gi, '').toUpperCase().split('').join('  ');
}

console.log(vaporcode("Let's go to the movies"));