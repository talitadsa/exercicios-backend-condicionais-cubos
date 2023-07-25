const alturaEmCm = 185;

function verificaAltura(altura){
    if(altura >= 180){
        console.log("APROVADO!");
        if(altura >= 180 && altura <= 185){
            console.log("\nLÍBERO!");
        }
        if(altura >= 186 && altura <= 195){
            console.log("\nPONTEIRO!");
        }
        if(altura >= 196 && altura <= 205){
            console.log("\nOPOSTO!");
        }
        if(altura > 205){
            console.log("\nCENTRAL!");
        }
    }
    else{
        console.log("REPROVADO");
    }
}

verificaAltura(alturaEmCm);