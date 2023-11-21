
function mainDiagonalProduct(mat){
    let product = 1; 
    for (let i = 0; i < mat.length; i++){
       product *= mat[i][i];
    }
    return product;
   }
   