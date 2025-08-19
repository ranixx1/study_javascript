//Imagine que você está construindo um aplicativo meteorológico e precisa determinar se a temperatura está quente ou fria. Qual dos códigos em JavaScript abaixo que utiliza estruturas condicionais para avaliar se a temperatura é igual ou superior a 25 graus Celsius? A resposta correta deve imprimir no console: "Está quente."

let temperatura = 25;
let clima;
if(temperatura >=25){
    clima = "Está quente";
} else{
    clima = "Está frio";
}

console.log(clima);