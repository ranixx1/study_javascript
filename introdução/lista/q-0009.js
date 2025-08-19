// Calcular a média ponderada de um semtres, onde o primeiro bimestre tem peso 2, e o segundo tem peso 3.

function CalcularNotaFinal(bim1, bim2) {
    const p1 = 2;
    const p2 = 3;

    notaf = (bim1 * p1 + bim2 * p2) / (p1 + p2);
    situacao = "0"

    if (notaf >= 60) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }
    return situacao;
}
console.log(CalcularNotaFinal(60,60));