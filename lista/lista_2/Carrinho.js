function ValidaEstoque(produtosNoCarrinho, estoqueAtual) {
    disponivel = false;
    for (i = 0; i <= carrinho.length; i++) {
        const produtosNoCarrinho = Object.keys(carrinho);
        const estoqueAtual = Object.keys(estoque);
        const nomeDoProduto = produtosNoCarrinho[i];
        const quantidadeDesejada = carrinho[nomeDoProduto];
        const nomeDoProdutoEstq = estoqueAtual[i];
        const quantidadenoEstoque = estoque[nomeDoProdutoEstq];

        if (quantidadeDesejada[i] < quantidadenoEstoque[i]) {
            disponivel = true;
        } else {
            return disponivel;
        }
        return disponivel;
    }
}
const carrinho = {
    "monitor": 4,
    "mouse": 1,
    "carregador": 1,
    "fone": 3
}

const estoque = {
    "monitor": 10,
    "mouse": 35,
    "carregador": 2,
    "fone": 0
}

ValidaEstoque(carrinho, estoque);

