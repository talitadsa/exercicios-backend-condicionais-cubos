const jogada1 = "pedra";
const jogada2 = "tesoura";

function pedraPapelTesoura(jogada1,jogada2){
    if((jogada1 == 'pedra' && jogada2 == 'tesoura') || (jogada2 == 'pedra' && jogada1 == 'tesoura')) {
        console.log('pedra');
    }
    else if((jogada1 == 'pedra' && jogada2 == 'papel') || (jogada2 == 'pedra' && jogada1 == 'papel')){
        console.log('papel');
    }
    else if((jogada1 == 'papel' && jogada2 == 'tesoura') || (jogada2 == 'papel' && jogada1 == 'tesoura')){
        console.log('tesoura');
    }
    else if(jogada1 == jogada2){
        console.log('empate');
    } 
}
pedraPapelTesoura(jogada1,jogada2);