

for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 10; i >= 0; i--){
    console.log(i);
}



function numerosPares(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0){
        console.log(i);
        }
    }
}

numerosPares(10)

function numerosMultiplo3(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0){
        console.log(i);
        }
    }
}

numerosMultiplo3(10)

function numerosMultiplo5(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 5 === 0){
        console.log(i);
        }
    }
}

numerosMultiplo5(10)

function numerosMultiplo3y5(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
        }
    }
}

numerosMultiplo3y5(10)

function numerosMultiplo3o5(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
        }
    }
}

numerosMultiplo3o5(10)