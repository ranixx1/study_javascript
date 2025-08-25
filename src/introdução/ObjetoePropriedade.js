
//Key-value pair(KVP)
// Notação
var carro = {
    extras: [
        "ar-condicionado",
        "freios abs",
        "som"
    ],
    velocidade: 0,
    faroisLigados: false,
    ligarFarois: function () {
        this.faroisLigados = true;
    },
    acelerar: function (velocidade) {
        this.velocidade += velocidade;
    },
    freiar: function () {
        this.velocidade = 0;
    }
}
carro.ligarFarois();
console.log("Farois ligados:" + carro.faroisLigados);
carro.acelerar(50);
console.log("Velocidade:" + carro.velocidade);
carro.freiar();
console.log("Velocidade:" + carro.velocidade)

// this
//refere-se ao objeto atual //retornar ou alterar o valor da mesma