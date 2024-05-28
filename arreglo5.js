//Arreglo de Fibonacci
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(i=0; i<n-2; i++){
        let suma = fibArr[i]+fibArr[fibArr.length-1];
        fibArr.push(suma);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
