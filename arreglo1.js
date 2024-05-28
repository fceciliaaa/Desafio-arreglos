//Siempre hambriento
function siempreHambriento(arr) {
    let noComida = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("Delicioso");
            noComida++;
        }
    }
    if (noComida === 0) {
        console.log("Tengo hambre")
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);

siempreHambriento([4, 1, 5, 7, 2]);


