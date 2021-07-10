//https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript

function matrix(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i][i] < 0) array[i][i] = 0;
        else array[i][i] = 1;
    }
    return array;
}

console.log(matrix([
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
]));