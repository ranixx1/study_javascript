let chamados = []
function CriarChamado(setor, motivo, observaçoes) {
    const chamado = { setor, motivo, observaçoes }
    items.push(chamado) //
    console.log("Item Criado com sucesso")
};
function listarChamados() {
    console.log("Lista de Chamados:");
    chamados.forEach((chamado, index) => {
      console.log(`#${index} | Setor: ${chamado.setor}, Motivo: ${chamado.motivo}, Obs: ${chamado.observacoes}`);
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