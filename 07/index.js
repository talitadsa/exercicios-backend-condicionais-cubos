const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

function verificaIR (aposentada, portadoraDeDoenca, totalDeRendimentos){
    if (aposentada == true || portadoraDeDoenca == true){
        console.log('ISENTA');
    }
    else if (totalDeRendimentos < 28559.70) {
        console.log('VAZA LEAO! JA TA DIFÍCIL SEM VOCE');
    }
    else{
        console.log(' PEGA LEAO');
    }

}

verificaIR(aposentada,portadoraDeDoenca,totalDeRendimentos);