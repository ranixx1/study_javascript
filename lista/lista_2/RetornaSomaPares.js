import { criarArrayAleatorio } from "./CriaLista.js";

export function RetornaPares(Arr) {
    let pares = []
    let somaPares = 0;
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] % 2 == 0) {
            pares.push(Arr[i]);
            somaPares += Arr[i];
        }
    }
    return { pares, somaPares }
}

let gerar_lista_aleatoria = criarArrayAleatorio(17);

const resultado = RetornaPares(gerar_lista_aleatoria);

console.log("Lista gerada:", gerar_lista_aleatoria);
console.log("Lista de pares:", resultado.pares);
console.log("Soma dos pares:", resultado.somaPares);