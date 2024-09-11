
function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

texto = convertirAMayusculas("hola, ¿como estas?");
console.log(texto);

function convertirAMinusculas(texto) {
    return texto.toLowerCase();
}

texto = convertirAMinusculas("HOLA, ¿COMO ESTAS?");
console.log(texto);

function resta(x, y){
    return x - y ;
}

resultado = resta(10, 8);
console.log(resultado);

function multiplicación(x, y){
    return x * y;
}

resultado = multiplicación(10, 8);
console.log(resultado);

function división(x, y){
    return x / y;
}

resultado = división(10, 8);
console.log(resultado);

function longitudPalabra(texto){
    return texto.length;
}

longitud = longitudPalabra("hola mundo")
console.log(longitud);