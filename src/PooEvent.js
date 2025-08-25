class Evento {
  constructor(nomeDoEvento) {
    this.name = nomeDoEvento; // Define a propriedade 'name' ao criar uma nova instância
  }

  imprimirVariavel() {
    console.log(this.name);
  }
}

// Para usar:
const meuOutroEvento = new Evento("Outro Exemplo de Evento");
meuOutroEvento.imprimirVariavel(); // Saída: Outro Exemplo de Evento

const eventoDeAniversario = new Evento("Festa de Aniversário");
eventoDeAniversario.imprimirVariavel(); // Saída: Festa de Aniversário