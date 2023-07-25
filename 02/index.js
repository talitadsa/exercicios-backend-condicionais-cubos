const jogada1 = 5;
const jogada2 = 3;

function parImpar(jogada1,jogada2){
    total = jogada1 + jogada2;
    if(total%2 == 0){
        console.log('Par');
    }
    else{
        console.log('Ímpar');
    }
}

parImpar(jogada1,jogada2);