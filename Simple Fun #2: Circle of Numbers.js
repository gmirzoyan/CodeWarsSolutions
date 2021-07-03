//https://www.codewars.com/kata/58841cb52a077503c4000015/train/javascript

function circleOfNumbers(n, firstNumber) {
    let differ = n / 2;
    let secondNumber = 0;
    if(firstNumber > differ){
        secondNumber = firstNumber - differ;
    }else{
        secondNumber = firstNumber + differ;
    }
    if(firstNumber === differ){
        secondNumber = 0;
    }
    return secondNumber;
}

console.log(circleOfNumbers(10, 7));