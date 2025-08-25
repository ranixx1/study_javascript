export function geraNotasTest(quantidade) {
    let dados = [];

    for (let i = 0; i < quantidade; i++) {
        const notaAleatoria = Math.floor(Math.random() * 11);
        dados.push(notaAleatoria);
    }
    return dados;
}

