//https://www.codewars.com/kata/59cd155d1a68b70f8e000117/train/javascript

function middleMe(N, X, Y){
    if (N % 2 === 0) return Y.repeat(N / 2) + X + Y.repeat(N / 2);
    else return X;
}

console.log(middleMe(19, 'z', '#'));