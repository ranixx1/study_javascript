// Declarar variavel
var idade = 19;
var nome = "Ranilton";
var cadastrado = true;

// Saida
console.log(idade)
console.log(nome);
console.log(cadastrado)

// Tipos de Dados
    // Primitivos
        Number
        String
        Boolean
        undefined
        null

    // Mutação de Variavél

        var variavel = "Valor Inicial";
        console.log(variavel);
        variavel = "Novo Valor";
        console.log(variavel);

    // Alert e Prompt

        var deposito;
        varivael = prompt("Informe um valor para depositar : ");
        alert(deposito);

//Decisões logicas

    /*Tabela Verdade
    &&:
    true + true =  true
    o resto falso

    ||:
    false + false = falso
    o resto true
    */

    //Operadores Logicos
    // if,else if e else
    var idade = prompt("digite sua idade: ");
    if (idade<18){
        console.log("Acesso negado");
    } else if (idade ==18){
        console.log(" Bem-Vindo ");
    } else {
        console.log("Não reconheço o que você digitou");
    }

    // Swwitch
    var nome = prompt("Digite seu nome: ");
    var emprego = prompt("Digite seu emprego: ");

    switch(emprego){
        case "policial":
            console.log(nome + "é um policial.");
            break;
        case "cozinheiro":
            console.log(nome + "é um cozinheiro(a).");
            break;
            
        default:
            console.log(nome + "trabalha em outra coisa.");
    }

// Funcões
    // DRY : don´t repeat yourself
    function VerificarIdade(username, AnoDeNasciemnto){
        var username = prompt("username: ");
        var AnoDeNasciemnto = prompt("digite o ano em que você nasceu: ");
        var idade = 2025 - AnoDeNasciemnto;
        if (idade=>18){
            return username + "é maior de idade"
        } else {
            return username + "é menor de idade "

    VerificarIdade(username, AnoDeNasciemnto);
    }
}

    // Statment
    function minhaFuncao(param1){
        console.log("Execute uma ação");
    }

    if (1 !== 2){
        console.log("Um IF é uma declaração");
    }
    console.log(minhaFuncao);

    // Expression
    var minhaOutraFuncao = function(param1){
        console.log("Executa outra função");
    }
    console.log(minhaOutraFuncao);

        // Uma soma é uma expressão
        var soma = 5 + 7;
        console.log(" Valor armazenado na variável 'soma' : "+soma);

// Arrays

var arrJogadores = ['Ricardo', 'Monica', 'Leonardo'];
var arrAnoNascimento = new Array(1998, 1987, 1991);
var arrPontos = [45, 117, 78];
arrPontos[1]= 71;
console.log(arrJogadores);
console.log(arrJogadores[1]+ 'tem' +arrPontos[1]+' pontos.');

    // Metodos

        // PUSH ---> ADD VALUE
        var arrPrato = ['arroz','carne','salada'];
        console.log(arrPrato);
        arrPrato.push('feijão');
        console.log(arrPrato);

        // UNSHIFTH ---> ADD A FIRST POSITION
        var arrEmenta = new Array('Matemática', 'Biologia', 'Português');
        arrEmenta.unshift('Fisica');
        console.log(arrEmenta);

        // POP ---> REMOVE THE LAST POSITION
        arrEmenta.pop();
        console.log(arrEmenta)

        // SHIFTH ---> REMOVE FIRST POSITION
        var arrMedicos = new Array('Dr. Barcelos', 'Dra. Fernanda');
        arrMedicos.shift();
        console.log(arrMedicos);

        // INDEXOF ---> RETURN POSITION TO VALUE
        var arrPrato = new Array('Arroz','Feijao', 'Tomate', 'Carne');
        arrPrato.push('Ovo');
        if(arrPrato.indexOf('Arroz')!==-1){
            arrPrato.shift();
        }
        console.log(arrPrato);
    





