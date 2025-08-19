function validaEstoque(carrinho, estoque) {
    const itensParaVerificar = Object.keys(carrinho);

    for (const item of itensParaVerificar) {
        const quantidadeDesejada = carrinho[item];
        const quantidadeDisponivel = estoque[item];

        if (quantidadeDesejada > quantidadeDisponivel) {
            return false;
        }
    }
    return true;
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

console.log(validaEstoque(carrinho, estoque));

