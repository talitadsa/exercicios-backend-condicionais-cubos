//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if(idadeDoAluno < 18){
    if(possuiResponsavel){
        console.log('Matrícula realizada.');
    }
    else{
        console.log('Não é possível fazer a rematrícula');
    }
}
else if(idadeDoAluno >= 18){
    console.log('Matrícula realizada.');
}