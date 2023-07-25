//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

function calculaRestante (valorDoProduto, quantidadeDoParcelamento, valorPago){

const vlReais = valorDoProduto/100;
const restante = vlReais - valorPago;
const qtdParcela = restante/quantidadeDoParcelamento;

console.log(`Restam ${qtdParcela} de ${restante}.`);
}

calculaRestante(valorDoProduto, quantidadeDoParcelamento, valorPago);

