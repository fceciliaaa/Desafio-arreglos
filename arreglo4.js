//Arreglo invertido

function reverse(arr) {
    for (let i=0; i<arr.length; i++ ){
        for (let j=arr.length-1; j>=0; j--){
            let last = arr[j];
            arr[j]=arr[i];
            arr[i]=last;
        }
    }
    
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

