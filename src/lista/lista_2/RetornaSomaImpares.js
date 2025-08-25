import { criarArrayAleatorio } from "./CriaLista.js";


export function RetornaImpares(Arr) {
    let impares = [];
    let soma = 0;

    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] % 2 != 0) {
            impares.push(Arr[i]);
            soma += Arr[i]
        }
    }
    return { impares, soma };
}



let gerar_lista_aleatoria = criarArrayAleatorio(10);

const resultado = RetornaImpares(gerar_lista_aleatoria);

console.log("Lista gerada:", gerar_lista_aleatoria);
console.log("Lista impares ", resultado.impares);
console.log("Soma impares: ", resultado.soma);

