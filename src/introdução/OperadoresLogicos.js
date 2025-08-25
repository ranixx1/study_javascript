
var idade = prompt("digite sua idade: ");
if (idade < 18) {
    console.log("Acesso negado");
} else if (idade == 18) {
    console.log(" Bem-Vindo ");
} else {
    console.log("Não reconheço o que você digitou");
}

// Switch
var nome = prompt("Digite seu nome: ");
var emprego = prompt("Digite seu emprego: ");

switch (emprego) {
    case "policial":
        console.log(nome + "é um policial.");
        break;
    case "cozinheiro":
        console.log(nome + "é um cozinheiro(a).");
        break;

    default:
        console.log(nome + "trabalha em outra coisa.");
}