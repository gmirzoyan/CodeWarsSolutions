//https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript

function covfefe(str){
    if (str.includes('coverage')) str = str.replace(/coverage/g, 'covfefe');
    else str = str + ' ' + 'covfefe';
    return str;
}

console.log(covfefe("double space "));