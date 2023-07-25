//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

function SucessoCompartilhado(renda, meses, total){

    if(meses > 60){
        console.log(`O aluno não deve mais nada.`);
    }
    if((total/100) == 18000){
        console.log(`O aluno já quitou a dívida.`)
    }
    else{
        const rendaEmReais = renda/100;
        const parcela = 0.18 * rendaEmReais;
        console.log(`O aluno deverá pagar uma parcela no valor de ${parcela} reais.`);
    }
}

SucessoCompartilhado(rendaMensalEmCentavos,mesesDecorridos,totalJaPagoPeloAluno);