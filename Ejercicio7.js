const numeros = [1, 2, 3, 4, 5];

function sumarNumeros(array){
    suma = 0
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

resultado = sumarNumeros(numeros);
console.log(resultado);

function promedioNumeros(array){
    suma = 0
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma / array.length;
}

promedio = promedioNumeros(numeros);
console.log(promedio);

function convertirMayusculas(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}

const palabras = ["hola", "manzana", "completo", "choripan"];
mayusculas = convertirMayusculas(palabras);
console.log(palabras);

function filtarNumerosPares(array){
    return array.filter(function(num) {
        return num % 2 === 0;
    });
}

resultado = filtarNumerosPares(numeros);
console.log(resultado);
