import { criarArrayAleatorio } from "./CriaLista.js";
function AdicionaNotaLimite(Arr) {
    let notas = [];
    for (let i = 0; i <= Arr.length; i++) {
        if (Arr[i] >= 0 && Arr[i]<=10){
            notas.push(Arr[i]);
        }
    }
    return notas;
}
let gerar_lista = criarArrayAleatorio(20);
console.log(gerar_lista);
console.log(AdicionaNotaLimite());