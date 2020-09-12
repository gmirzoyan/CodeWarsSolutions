//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

function solve(eq){
    let res = [];
    let x = eq.match(/[0-9]+/g)
    for(let el of x){
        eq = eq.replace(el, 0);
    }
    let ind = x.length-1;
    for(let i=eq.length-1; i>=0; i--){
        (eq[i] == 0) ? res.push(x[ind--]) : res.push(eq[i]);
    }
    return res.join('');
}

console.log(solve("100*b/y"));