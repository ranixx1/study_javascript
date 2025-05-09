let chamados = []
function CriarChamado(setor, motivo, observaçoes) {
    const chamado = { setor, motivo, observaçoes }
    items.push()
    console.log("Item Criado com sucesso")
};
function LerChamado() {
    console.log("Lista de chamados:");
    chamados.forEach((chamado, index) => {
        console.log(`#${index} | Setor: ${chamados.setor}, Motivo: ${chamados.motivo}, Observações: ${chamados.observaçoes}`);
    });
};
function AtualizarChamado(index, novoSetor, novoMotivo, novasObservacoes) {
    if (index > 0 && index < chamados.length) {
        chamados[index] = {
            setor: novoSetor,
            motivo: novoMotivo,
            observaçoes: novasObservacoes,
        };
        console.log(" Chamado atualizado com sucesso");
    } else {
        console.log("Indice invalido");
    }

}

function RemoverChamado() {
    if (index > 0 && index < chamados.length) {


        const removido = chamados.splice(index, 1);
        console.log("Chamado resolvido:", removido[0])
    } else {
        console.log("Indice Invalido")
    }
}