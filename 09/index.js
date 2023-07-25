const nota = 8.5;


function exibeNota(nota){
    if(nota >= 9){
        console.log('O estudando obteve conceito A');
    }
    else if(nota > 8 && nota < 8.9){
        console.log('O estudante obteve conceito B');
    }
    else if(nota > 6 && nota < 7.9){
        console.log('O estudante obteve conceito C');
    }
    else if(nota > 4 && nota < 5.9){
        console.log('O estudante obteve conceito D');
    }
    else if(nota < 4){
        console.log('O estudante obteve conceito E');
    }
}

exibeNota(nota);