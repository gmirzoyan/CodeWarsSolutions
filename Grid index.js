//https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript

function gridIndex(grid, indices) {
    let arr2 = [];
    let res = [];
    for(let i = 0; i < grid.length; i++){
        arr2 = [...arr2, ...grid[i]];
    }
    for(let j of indices){
        res.push(arr2[j-1])
    }
    return res.join('');
}

console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8]))