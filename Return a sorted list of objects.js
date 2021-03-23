//https://www.codewars.com/kata/52705ed65de62b733f000064/train/javascript

//1.

function sortList (sortBy, list) {
    if (list.length === 0) return [];
    if (sortBy === "a") return list.sort((a, b) => b["a"] - a["a"]);
    if (sortBy === "b") return list.sort((a, b) => b["b"] - a["b"]);
}

//2.

// function sortList (sortBy, list) {
//     return list.sort((a,b) => b[sortBy] - a[sortBy]);
// }

console.log(sortList ("a", [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
]));