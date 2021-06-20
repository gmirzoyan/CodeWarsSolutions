//https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript

var typeOfTriangle = function (sideA, sideB, sideC) {
    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof sideC !== 'number') return "Not a valid triangle";
    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) return "Not a valid triangle";
    if (sideA !== sideB && sideB !== sideC && sideA !== sideC) return "Scalene";
    if (sideA === sideB && sideB === sideC) return "Equilateral";
    else return "Isosceles";
}

console.log(typeOfTriangle(3,2,4));