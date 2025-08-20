export function criarArrayAleatorio(quantidade) {
    let dados = [];

    for (let i = 0; i < quantidade; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        dados.push(numeroAleatorio);
    }
    return dados;
}
