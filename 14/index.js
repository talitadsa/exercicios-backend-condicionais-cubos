//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

function calculaRisco(quantidade){
    if(quantidade < 1.5){
        console.log('Risco Alto - Você está ingerindo pouquíssima água, beba mais água!');
    }
    if(quantidade == 1.5 && quantidade <= 3){
        console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!');
    }
    if(quantidade > 3){
        console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!');
    }
}


calculaRisco(quantidadeDeAguaIngerida);