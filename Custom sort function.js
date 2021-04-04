//https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe/train/javascript

function sort(items){
    for (let i = 1; i < items.length; i++) {
        for (let j = 0; j < i; j++)
            if (items[i] < items[j]) {
                let temp = items[i];
                items[i] = items[j];
                items[j] = temp;
            }
    }
    return items;
}

console.log(sort([1,3,2,3,4,1]));