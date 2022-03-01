
function generarAleatorio(minimo,maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) +minimo);
}

for(let i = 1; i <= 100; ++i){
    document.write(generarAleatorio(0,100)+",");   
}
