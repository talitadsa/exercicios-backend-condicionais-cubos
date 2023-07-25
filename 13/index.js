//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

function calculaDesconto(tpPagamento, vlProduto){
    if(tpPagamento == 'credito'){
        const desconto = vlProduto - (vlProduto * 0.05);
        const vlPago = vlProduto - desconto;
        console.log(`Valor a ser pago: R$ ${vlPago}`)
    }
    if(tpPagamento == 'verificar'){
        const desconto = vlProduto - (vlProduto * 0.03);
        const vlPago = vlProduto - desconto;
        console.log(`Valor a ser pago: R$ ${vlPago}`)
    }
    if(tpPagamento == 'debito' || tpPagamento == 'dinheiro'){
        const desconto = vlProduto - (vlProduto * 0.10);
        const vlPago = vlProduto - desconto;
        console.log(`Valor a ser pago: R$ ${vlPago}`)
    }
}


calculaDesconto(tipoDePagamento,valorDoProduto);
