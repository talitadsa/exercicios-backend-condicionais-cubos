const caractere = "E";

function verificarCaractere(caractere) {
    if (!isNaN(caractere)) {
      console.log("É um número.");
    } else if (/[aeiou]/i.test(caractere)) {
      console.log("É uma vogal.");
    } else if (/[a-z]/i.test(caractere)) {
      console.log("É uma consoante.");
    }
}

verificarCaractere(caractere);
  
