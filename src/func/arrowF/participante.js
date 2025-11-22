const participantes = []
const modalidades = []
class Participante {
    constructor(name, age, matricula, modalidade) {
        this.name = name;
        this.age = age;
        this.matricula = matricula;
        this.modalidade = modalidade;
    }

    ShowId() {
        console.log(`Nome: ${this.name}`);
        console.log(`Idade: ${this.age}`);
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Modalidade: ${this.modalidade}`);

    }

}
class Modalidade {

    static new_ID =1;

    constructor(name, vagas) {
        this.id = Modalidade.new_ID;

        this.name = name;
        this.vagas = vagas;

        Modalidade.new_ID++;
    }

    showModalidade() {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.name}`);
        console.log(`Vagas: ${this.vagas}`);
    }
}
const participante1 = new Participante("Ranilton", 18, 379407, 1)
const Modalidade1 = new Modalidade("Futebol",10)

participantes.push(participante1);
modalidades.push(Modalidade1);

console.log(participantes);
console.log(modalidades);
