//Mejor promedio

function mejorPromedio(arr) {
    let suma = 0;
    for (let i=0; i<arr.length; i++){
        suma += arr[i];
    }
    let promedio = suma/arr.length;
    
    let count = 0;
    for (i=0; i<arr.length; i++){
        if ( arr[i] > promedio){
            count+=1;
        }
    }
    return count;
}
var result = mejorPromedio([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
