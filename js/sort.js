console.time("Selection sort");
function selectionSort(datos) {
    let auxiliar = [...datos];

    for (let i = 0; i < datos.length; i++) {
        let minimo = auxiliar.slice(i + 1)
                            .reduce((a, e, j) => (e < auxiliar[a] ? j + i + 1 : a), i);
        
        if (minimo != i) {
            [auxiliar[i], auxiliar[minimo]] = [auxiliar[minimo], auxiliar[i]];
        }
    }

    return auxiliar;
}

let datos1 = [73,91,64,41,2,18,51,62,75,82,80,60,32,72,41,66,32,22,91,83,2,48,42,75,25,7,42,43,66,21,46,52,46,64,9,4,68,0,100,93,80,84,94,70,27,68,45,39,8,62,28,35,77,69,9,41,64,14,51,72,8,39,17,88,82,42,73,64,58,76,25,60,0,63,71,66,34,35,41,73,69,70,79,24,28,18,34,55,17,5,50,78,43,54,70,50,54,96,87,30];

let resultado = selectionSort(datos1);
document.write(resultado);

console.timeEnd("Selection sort");