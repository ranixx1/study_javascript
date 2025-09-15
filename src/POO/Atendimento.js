class Atendimento {
    constructor(identificacao, tipo, TCSAT, ticket) {
        this.identificacao = identificacao;
        this.tipo = tipo;
        this.TCSAT = TCSAT;
        this.ticket = ticket;
    }

    imprimirValores() {
        console.log("EXPERT: " + this.identificacao);
        console.log("TIPO: " + this.tipo);
        console.log("TCSAT: " + this.TCSAT);
        console.log("TICKET: " + this.ticket);
        console.log("--------------------------------------")
    }
}

const atendimento_1 = new Atendimento("lima.5362", "Suporte técnico", 10, "0000001");
const atendimento_2 = new Atendimento("lima.5362", "Suporte técnico", 10, "0000002");
const atendimento_3 = new Atendimento("lima.5362", "Suporte técnico", 10, "0000003");

atendimento_1.imprimirValores()
atendimento_2.imprimirValores()
atendimento_3.imprimirValores()