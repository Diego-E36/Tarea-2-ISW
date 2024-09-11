

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;




if(numero1 > numero2 && numero1 > numero3) {
    console.log(numero1);   
} else if(numero2 > numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

if(numero1 < numero2 && numero1 < numero3) {
    console.log(numero1);
} else if(numero2 < numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

function esPar(numero){
    if(numero % 2 === 0){
    console.log(numero, "es par"); 
    } else {
        console.log(numero, "no es par");
    }
}

esPar(numero1);
esPar(numero2);
esPar(numero3);

function multiplo5(numero){
    if(numero % 5 === 0){
        console.log(numero, "es multiplo de 5");
    } else {
        console.log(numero, "no es multiplo de 5");
    }
}

multiplo5(numero1)
multiplo5(numero2)
multiplo5(numero3)

